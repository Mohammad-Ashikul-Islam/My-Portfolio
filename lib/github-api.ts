import { GitHubEvent, GitHubActivity, activityTypeMap } from "./github-types";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

// Cache configuration
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

// In-memory cache
let cache: {
  data: GitHubActivity[] | null;
  timestamp: number | null;
} = {
  data: null,
  timestamp: null,
};

/**
 * Checks if the cache is still valid
 * @returns true if cache exists and is not expired
 */
function isCacheValid(): boolean {
  if (!cache.data || !cache.timestamp) {
    return false;
  }
  const now = Date.now();
  return now - cache.timestamp < CACHE_DURATION;
}

/**
 * Fetches recent GitHub activities for the configured user
 * Uses in-memory cache with 1-hour expiration to minimize API token usage
 * @param limit - Number of activities to fetch (default: 5)
 * @returns Array of formatted GitHub activities
 */
export async function fetchGitHubActivities(limit: number = 5): Promise<GitHubActivity[]> {
  // Return cached data if valid
  if (isCacheValid() && cache.data) {
    console.log("Using cached GitHub activities");
    return cache.data;
  }

  try {
    console.log("Fetching fresh GitHub activities from API");
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
        // Disable Next.js caching to rely on our own cache logic
        next: { revalidate: 0 },
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

    return activities;
  } catch (error) {
    console.error("Failed to fetch GitHub activities:", error);
    // Return cached data if available, even if expired
    if (cache.data) {
      console.log("Returning stale cache due to error");
      return cache.data;
    }
    return [];
  }
}

/**
 * Formats a timestamp to a relative time string
 * @param timestamp - ISO timestamp string
 * @returns Relative time string (e.g., "2 hours ago")
 */
export function formatRelativeTime(timestamp: string): string {
  const now = new Date();
  const then = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
}
