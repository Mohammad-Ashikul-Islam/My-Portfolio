import { GitHubActivity } from "@/lib/github-types";
import { formatRelativeTime } from "@/lib/github-api";
import { Github } from "lucide-react";

interface GitHubActivitiesCardProps {
  activities: GitHubActivity[];
}

export function GitHubActivitiesCard({ activities }: GitHubActivitiesCardProps) {
  if (activities.length === 0) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-8 border-2 rounded-2xl bg-gradient-to-br from-background via-muted/40 to-background border-border/60 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-500">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className={`flex items-center gap-4 py-2 ${
                index !== activities.length - 1 ? 'border-b border-border/30' : ''
              }`}
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Github className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm text-muted-foreground font-medium">{activity.action}</span>{" "}
                <a
                  href={activity.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-foreground hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary underline-offset-2"
                >
                  {activity.repo}
                </a>
                <span className="text-xs text-muted-foreground/70 ml-2">
                  • {formatRelativeTime(activity.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
