import { GitHubActivity } from "./github-types";

/**
 * Fetches recent GitHub activities via API route (server-side cached)
 * The API route implements hourly caching to minimize GitHub API token usage
 * @param limit - Number of activities to fetch (default: 5)
 * @returns Array of formatted GitHub activities
 */
export async function fetchGitHubActivities(limit: number = 5): Promise<GitHubActivity[]> {
  try {
    // Determine the base URL for API calls
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    
    const response = await fetch(
      `${baseUrl}/api/github-activities?limit=${limit}`,
      {
        // Disable Next.js caching - let our API route handle caching
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.activities || [];
  } catch (error) {
    console.error("Failed to fetch GitHub activities:", error);
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
