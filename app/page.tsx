import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Greeting */}
              <div className="space-y-2">
                <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
                  Hi, I am
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Mohammad Ashikul Islam
                </h1>
              </div>
              
              {/* Roles */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm md:text-base font-medium">
                    Software Engineer
                  </span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm md:text-base font-medium">
                    Aspiring Learner
                  </span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm md:text-base font-medium">
                    Tech Enthusiast
                  </span>
                </div>
              </div>
              
              {/* Call to Action Buttons */}
              <div className="flex gap-4 justify-center flex-wrap pt-6">
                <a 
                  href="https://drive.google.com/uc?id=18izbpgl2WR8-sEU0kZQ1kwgUlLtoiS7T&export=download" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95"
                >
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-y-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-background px-8 py-4 text-base font-semibold text-foreground shadow-md transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95"
                >
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:rotate-12" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </a>
              </div>
              
              {/* Scroll Indicator */}
              <div className="pt-12 animate-bounce">
                <svg 
                  className="w-6 h-6 mx-auto text-muted-foreground" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
              </div>
              
              {/* About Content */}
              <div className="space-y-8">
                {/* Bio */}
                <div className="p-8 border rounded-xl bg-card text-card-foreground shadow-sm">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I&apos;m <span className="font-semibold text-foreground">Mohammad Ashikul Islam</span>, a Software Engineer with a strong track record of developing efficient, high-quality software solutions. With experience across a range of projects, I focus on delivering meaningful results and continuously enhancing my expertise through hands-on work and practical application.
                  </p>
                </div>
                
                {/* Skills */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-center">Skills & Technologies</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Ruby on Rails */}
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-red-500/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 group-hover:bg-red-500/20 transition-colors">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.45 3.59L12 11.36 5.55 7.77 12 4.18zM5 9.13l6 3.35v6.7l-6-3.35v-6.7zm8 10.05v-6.7l6-3.35v6.7l-6 3.35z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Ruby on Rails</h4>
                          <p className="text-sm text-muted-foreground">Backend Framework</p>
                        </div>
                      </div>
                    </div>

                    {/* React */}
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">React</h4>
                          <p className="text-sm text-muted-foreground">Frontend Library</p>
                        </div>
                      </div>
                    </div>

                    {/* SQL */}
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-orange-500/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">SQL</h4>
                          <p className="text-sm text-muted-foreground">Database</p>
                        </div>
                      </div>
                    </div>

                    {/* Git */}
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-orange-600/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-orange-600/10 text-orange-700 dark:text-orange-400 group-hover:bg-orange-600/20 transition-colors">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.62 11.108l-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">Git</h4>
                          <p className="text-sm text-muted-foreground">Version Control</p>
                        </div>
                      </div>
                    </div>

                    {/* OOP */}
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-green-500/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 group-hover:bg-green-500/20 transition-colors">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5m0 2.18l5.45 2.73L12 9.64 6.55 6.91 12 4.18M6 8.5l5 2.5v5l-5-2.5v-5m7 7.5v-5l5-2.5v5l-5 2.5z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">OOP</h4>
                          <p className="text-sm text-muted-foreground">Design Paradigm</p>
                        </div>
                      </div>
                    </div>

                    {/* DSA */}
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-indigo-500/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">DSA</h4>
                          <p className="text-sm text-muted-foreground">Data Structures & Algorithms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center justify-center bg-muted/20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Experience</h2>
                <p className="text-xl text-muted-foreground">
                  My professional journey
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card/50">
                <p className="text-center text-muted-foreground">
                  Experience section coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
                <p className="text-xl text-muted-foreground">
                  Check out my recent work
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card/50">
                <p className="text-center text-muted-foreground">
                  Projects section coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="min-h-screen flex items-center justify-center bg-muted/20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Activities</h2>
                <p className="text-xl text-muted-foreground">
                  Competitive programming and other activities
                </p>
              </div>
              
              {/* Competitive Programming */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Competitive Programming</h3>
                <div className="p-6 border rounded-lg bg-card/50">
                  <p className="text-center text-muted-foreground">
                    Competitive programming achievements coming soon...
                  </p>
                </div>
              </div>
              
              {/* Other Activities */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Other Activities</h3>
                <div className="p-6 border rounded-lg bg-card/50">
                  <p className="text-center text-muted-foreground">
                    Other activities coming soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Education</h2>
                <p className="text-xl text-muted-foreground">
                  My academic background
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card/50">
                <p className="text-center text-muted-foreground">
                  Education section coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-muted/20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Contact</h2>
                <p className="text-xl text-muted-foreground">
                  Let&apos;s get in touch
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card/50">
                <p className="text-center text-muted-foreground">
                  Contact form coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js, TypeScript, and shadcn/ui
          </p>
        </div>
      </footer>
    </>
  );
}
