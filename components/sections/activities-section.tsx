import { competitiveProgramming } from "../data/portfolio-data";
import { SectionTitle } from "../ui/section-title";
import { PlatformCard } from "../ui/platform-card";

export function ActivitiesSection() {
  return (
    <section id="activities" className="min-h-screen flex items-center justify-center bg-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          <SectionTitle>Activities</SectionTitle>
          
          {/* Competitive Programming */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center text-muted-foreground">Competitive Programming</h3>
            
            {/* Summary Stats */}
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <div className="group p-8 border-2 rounded-xl bg-gradient-to-br from-background via-muted/30 to-background border-border shadow-md hover:shadow-2xl hover:border-primary/50 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {competitiveProgramming.totalProblems}
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground mt-2">Problems Solved</p>
                </div>
              </div>
              <div className="group p-8 border-2 rounded-xl bg-gradient-to-br from-background via-muted/30 to-background border-border shadow-md hover:shadow-2xl hover:border-primary/50 hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {competitiveProgramming.totalContests}
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground mt-2">Contests Participated</p>
                </div>
              </div>
            </div>
            
            {/* Platform Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              {competitiveProgramming.platforms.map((platform) => (
                <PlatformCard
                  key={platform.name}
                  name={platform.name}
                  problemsSolved={platform.problemsSolved}
                  contests={platform.contests}
                  highestRating={platform.highestRating}
                  profiles={platform.profiles}
                  color={platform.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
