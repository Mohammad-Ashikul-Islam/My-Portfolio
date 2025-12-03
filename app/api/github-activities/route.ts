import { NextResponse } from "next/server";
import { GitHubEvent, GitHubActivity, activityTypeMap } from "@/lib/github-types";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

// Cache configuration
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

// In-memory cache (persists within serverless function)
let cache: {
  data: GitHubActivity[] | null;
  timestamp: number | null;
} = {
  data: null,
  timestamp: null,
};

/**
 * Checks if the cache is still valid
 */
function isCacheValid(): boolean {
  if (!cache.data || !cache.timestamp) {
    return false;
  }
  const now = Date.now();
  return now - cache.timestamp < CACHE_DURATION;
}

/**
 * API Route: Get GitHub Activities
 * Implements hourly caching to minimize API token usage
 * Maximum 24 API calls per day
 */
export async function GET(request: Request) {
  // Return cached data if valid
  if (isCacheValid() && cache.data) {
    console.log("✅ Returning cached GitHub activities");
    return NextResponse.json({
      activities: cache.data,
      cached: true,
      cachedAt: new Date(cache.timestamp!).toISOString(),
    });
  }

  try {
    console.log("🔄 Fetching fresh GitHub activities from API");
    
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit") || "5";

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const events: GitHubEvent[] = await response.json();

    // Transform events to simplified activities
    const activities: GitHubActivity[] = events.map((event) => {
      const typeInfo = activityTypeMap[event.type] || {
        action: event.type.replace("Event", ""),
        icon: "activity",
      };

      return {
        id: event.id,
        type: event.type,
        repo: event.repo.name,
        repoUrl: `https://github.com/${event.repo.name}`,
        action: typeInfo.action,
        timestamp: event.created_at,
        icon: typeInfo.icon,
      };
    });

    // Update cache
    cache = {
      data: activities,
      timestamp: Date.now(),
    };

    console.log("✅ GitHub activities fetched and cached successfully");

    return NextResponse.json({
      activities,
      cached: false,
      cachedAt: new Date(cache.timestamp).toISOString(),
    });
  } catch (error) {
    console.error("❌ Failed to fetch GitHub activities:", error);

    // Return cached data if available, even if expired
    if (cache.data) {
      console.log("⚠️ Returning stale cache due to error");
      return NextResponse.json({
        activities: cache.data,
        cached: true,
        stale: true,
        cachedAt: cache.timestamp ? new Date(cache.timestamp).toISOString() : null,
      });
    }

    // Return empty array if no cache available
    return NextResponse.json(
      {
        activities: [],
        error: "Failed to fetch GitHub activities",
      },
      { status: 500 }
    );
  }
}
