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
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium tracking-wide">
                  Hi, I am
                </p>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground pb-2">
                  Mohammad Ashikul Islam
                </h1>
              </div>
              
              {/* Roles */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-muted-foreground md:text-lg">
                <span className="font-medium text-foreground">Software Engineer</span>
                <span className="text-primary">•</span>
                <span className="font-medium text-foreground">Aspiring Learner</span>
                <span className="text-primary">•</span>
                <span className="font-medium text-foreground">Tech Enthusiast</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-6 pt-4">
                <a 
                  href="mailto:mdashikul2222@gmail.com"
                  className="text-foreground/60 hover:text-red-500 transition-colors hover:scale-110"
                  title="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/Mohammad-Ashikul-Islam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors hover:scale-110"
                  title="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/mdashikul2222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-[#0077b5] transition-colors hover:scale-110"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
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
                  <h3 className="text-2xl font-semibold text-muted-foreground text-center">Skills & Technologies</h3>
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
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-cyan-500/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">React</h4>
                          <p className="text-sm text-muted-foreground">Frontend Library</p>
                        </div>
                      </div>
                    </div>

                    {/* SQL */}
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-amber-500/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">SQL</h4>
                          <p className="text-sm text-muted-foreground">Database</p>
                        </div>
                      </div>
                    </div>

                    {/* Git */}
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-slate-500/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-slate-500/10 text-slate-700 dark:text-slate-400 group-hover:bg-slate-500/20 transition-colors">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.62 11.108l-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-slate-700 dark:group-hover:text-slate-400 transition-colors">Git</h4>
                          <p className="text-sm text-muted-foreground">Version Control</p>
                        </div>
                      </div>
                    </div>

                    {/* OOP */}
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-emerald-500/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5m0 2.18l5.45 2.73L12 9.64 6.55 6.91 12 4.18M6 8.5l5 2.5v5l-5-2.5v-5m7 7.5v-5l5-2.5v5l-5 2.5z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">OOP</h4>
                          <p className="text-sm text-muted-foreground">Design Paradigm</p>
                        </div>
                      </div>
                    </div>

                    {/* DSA */}
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-violet-500/50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">DSA</h4>
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
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight">Experience</h2>
              </div>
              
              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
                
                <div className="space-y-8">
                  {/* Software Engineer */}
                  <div className="relative pl-0 md:pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                    
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Software Engineer</h3>
                          <p className="text-sm font-medium text-muted-foreground mt-0.5">WellDev Bangladesh Ltd.</p>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground mt-2 md:mt-0">July 2025 – Current</span>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Developed wallet systems for seamless financial transactions</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Implemented booking operations and background job processing</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Built comprehensive admin portal for system management</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Junior Software Engineer */}
                  <div className="relative pl-0 md:pl-20">
                    <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                    
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-green-500/50">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-primary group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Junior Software Engineer</h3>
                          <p className="text-sm font-medium text-muted-foreground mt-0.5">WellDev Bangladesh Ltd.</p>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground mt-2 md:mt-0">Aug 2024 – June 2025</span>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Implemented Content Security Policy (CSP) and rate limiting for enhanced security</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Developed post-booking operations and internationalization (I18N)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Created traveler matching algorithms for optimized user experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Trainee Software Engineer */}
                  <div className="relative pl-0 md:pl-20">
                    <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                    
                    <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-primary group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Trainee Software Engineer</h3>
                          <p className="text-sm font-medium text-muted-foreground mt-0.5">WellDev Bangladesh Ltd.</p>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground mt-2 md:mt-0">Feb 2024 – July 2024</span>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Assisted in bug fixes and comprehensive testing procedures</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Contributed to order management system development</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Performed system maintenance and code optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
              </div>
              
              <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {/* WellTravel Project */}
                <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-teal-500/50">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h3 className="text-2xl font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">WellTravel</h3>
                      <div className="flex gap-2">
                        <a 
                          href="https://welltravel.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                          title="Live Demo"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground font-medium">Enterprise-level travel management platform</p>
                    
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary mt-0.5">▸</span>
                        <span>Led development of booking imports, traveler management, and wallet systems</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-0.5">▸</span>
                        <span>Implemented rate limiting, CSP, I18N, and enhanced frontend workflows</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-0.5">▸</span>
                        <span>Developed post-booking modules for comprehensive trip management</span>
                      </li>
                    </ul>
                    
                    <div className="pt-4 border-t">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">Rails</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">React</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 border border-blue-600/20">PostgreSQL</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-600/10 text-red-700 dark:text-red-300 border border-red-600/20">Redis</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">Sidekiq</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">Cancancan</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BLT Project */}
                <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-orange-500/50">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h3 className="text-2xl font-bold group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">BLT</h3>
                      <div className="flex gap-2">
                        <a 
                          href="https://blt-ride.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                          title="Live Demo"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground font-medium">Ride-sharing platform</p>
                    
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary mt-0.5">▸</span>
                        <span>Built comprehensive admin portal for platform management</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-0.5">▸</span>
                        <span>Developed integration tests and refactored legacy backend code</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary mt-0.5">▸</span>
                        <span>Implemented traveler management, I18N, and reservation system</span>
                      </li>
                    </ul>
                    
                    <div className="pt-4 border-t">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">Rails</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-600/10 text-purple-700 dark:text-purple-300 border border-purple-600/20">Hotwire</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border border-yellow-500/20">Stimulus</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 border border-blue-600/20">PostgreSQL</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-600/10 text-red-700 dark:text-red-300 border border-red-600/20">Redis</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">Sidekiq</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="min-h-screen flex items-center justify-center bg-muted/20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight">Activities</h2>
              </div>
              
              {/* Competitive Programming */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center text-muted-foreground">Competitive Programming</h3>
                
                {/* Summary Stats */}
                <div className="grid gap-4 md:grid-cols-2 mb-8">
                  <div className="group p-8 border-2 rounded-xl bg-gradient-to-br from-background via-muted/30 to-background border-border shadow-md hover:shadow-2xl hover:border-primary/50 hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <p className="text-4xl md:text-5xl font-extrabold text-foreground group-hover:text-primary transition-colors">1000+</p>
                      <p className="text-sm font-semibold text-muted-foreground mt-2">Problems Solved</p>
                    </div>
                  </div>
                  <div className="group p-8 border-2 rounded-xl bg-gradient-to-br from-background via-muted/30 to-background border-border shadow-md hover:shadow-2xl hover:border-primary/50 hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <p className="text-4xl md:text-5xl font-extrabold text-foreground group-hover:text-primary transition-colors">150+</p>
                      <p className="text-sm font-semibold text-muted-foreground mt-2">Contests Participated</p>
                    </div>
                  </div>
                </div>
                
                {/* Platform Cards */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Codeforces */}
                  <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Codeforces</h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Problems Solved</span>
                          <span className="font-semibold text-lg">480+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Contests</span>
                          <span className="font-semibold text-lg">55+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Highest Rating</span>
                          <span className="font-semibold text-lg text-blue-600 dark:text-blue-400">1186</span>
                        </div>
                        <div className="pt-2 border-t">
                          <p className="text-sm font-semibold text-center text-muted-foreground mb-2">Profiles</p>
                          <div className="flex gap-2">
                            <a 
                              href="https://codeforces.com/profile/Ashikul_Islam" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-colors text-center"
                            >
                              Ashikul_Islam
                            </a>
                            <a 
                              href="https://codeforces.com/profile/Black_ShadowX" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-colors text-center"
                            >
                              Black_ShadowX
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LeetCode */}
                  <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-amber-500/50">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">LeetCode</h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Problems Solved</span>
                          <span className="font-semibold text-lg">180+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Contests</span>
                          <span className="font-semibold text-lg">22+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Highest Rating</span>
                          <span className="font-semibold text-lg text-amber-600 dark:text-amber-400">1535</span>
                        </div>
                        <div className="pt-2 border-t">
                          <p className="text-sm font-semibold text-center text-muted-foreground mb-2">Profiles</p>
                          <div className="flex gap-2">
                            <a 
                              href="https://leetcode.com/Ashikul_Islam" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white transition-colors text-center"
                            >
                              Ashikul_Islam
                            </a>
                            <a 
                              href="https://leetcode.com/Black_ShadowX" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white transition-colors text-center"
                            >
                              Black_ShadowX
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CodeChef */}
                  <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-rose-500/50">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">CodeChef</h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Problems Solved</span>
                          <span className="font-semibold text-lg">130+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Contests</span>
                          <span className="font-semibold text-lg">13+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Highest Rating</span>
                          <span className="font-semibold text-lg text-rose-600 dark:text-rose-400">1518</span>
                        </div>
                        <div className="pt-2 border-t">
                          <p className="text-sm font-semibold text-center text-muted-foreground mb-2">Profiles</p>
                          <div className="flex gap-2">
                            <a 
                              href="https://www.codechef.com/users/Ashikul_Islam" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500 hover:text-white transition-colors text-center"
                            >
                              Ashikul_Islam
                            </a>
                            <a 
                              href="https://www.codechef.com/users/Black_ShadowX" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500 hover:text-white transition-colors text-center"
                            >
                              Black_ShadowX
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AtCoder */}
                  <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/50">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">AtCoder</h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Problems Solved</span>
                          <span className="font-semibold text-lg">70+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Contests</span>
                          <span className="font-semibold text-lg">22+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Highest Rating</span>
                          <span className="font-semibold text-lg text-indigo-600 dark:text-indigo-400">380</span>
                        </div>
                        <div className="pt-2 border-t">
                          <p className="text-sm font-semibold text-center text-muted-foreground mb-2">Profiles</p>
                          <div className="flex gap-2">
                            <a 
                              href="https://atcoder.jp/users/Ashikul_Islam" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors text-center"
                            >
                              Ashikul_Islam
                            </a>
                            <a 
                              href="https://atcoder.jp/users/Black_ShadowX" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors text-center"
                            >
                              Black_ShadowX
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Other Activities - TO BE ADDED LATER */}
              {/* <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Other Activities</h3>
                <div className="p-6 border rounded-lg bg-card/50">
                  <p className="text-center text-muted-foreground">
                    Other activities coming soon...
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight">Education</h2>
              </div>
              
              <div className="space-y-6">
                {/* Bachelor's Degree */}
                <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-fuchsia-500/50">
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <div className="p-3 rounded-lg bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 group-hover:bg-fuchsia-500/20 transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">B.Sc. in Computer Science & Engineering</h4>
                      <p className="text-sm text-muted-foreground">International Islamic University Chittagong</p>
                      <p className="text-xs text-muted-foreground mt-1">Graduation: 2022</p>
                    </div>
                  </div>
                </div>

                {/* Higher Secondary */}
                <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-cyan-500/50">
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Higher Secondary Education</h4>
                      <p className="text-sm text-muted-foreground">Hajera Taju Degree College</p>
                      <p className="text-xs text-muted-foreground mt-1">Graduation: 2016</p>
                    </div>
                  </div>
                </div>

                {/* Secondary School */}
                <div className="group p-6 border-2 rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-indigo-500/50">
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Secondary School Education</h4>
                      <p className="text-sm text-muted-foreground">Chatary Union High School</p>
                      <p className="text-xs text-muted-foreground mt-1">Graduation: 2014</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-muted/20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
              </div>
              
              <div className="flex gap-4 flex-wrap justify-center">
                  {/* Phone */}
                  <a 
                    href="tel:+8801859140956"
                    className="group p-4 rounded-full bg-card border-2 hover:border-green-500 hover:bg-green-500/10 transition-all hover:scale-110"
                    title="Phone"
                  >
                    <svg className="w-6 h-6 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:mdashikul2222@gmail.com"
                    className="group p-4 rounded-full bg-card border-2 hover:border-fuchsia-500 hover:bg-fuchsia-500/10 transition-all hover:scale-110"
                    title="Email"
                  >
                    <svg className="w-6 h-6 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a 
                    href="https://github.com/Mohammad-Ashikul-Islam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-full bg-card border-2 hover:border-zinc-700 dark:hover:border-zinc-400 hover:bg-zinc-700/10 dark:hover:bg-zinc-400/10 transition-all hover:scale-110"
                    title="GitHub"
                  >
                    <svg className="w-6 h-6 group-hover:text-zinc-700 dark:group-hover:text-zinc-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com/in/mdashikul2222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-full bg-card border-2 hover:border-indigo-600 hover:bg-indigo-600/10 transition-all hover:scale-110"
                    title="LinkedIn"
                  >
                    <svg className="w-6 h-6 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://facebook.com/mdashikul2222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-full bg-card border-2 hover:border-blue-500 hover:bg-blue-500/10 transition-all hover:scale-110"
                    title="Facebook"
                  >
                    <svg className="w-6 h-6 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a 
                    href="https://twitter.com/mdashikul2222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-full bg-card border-2 hover:border-yellow-600 hover:bg-yellow-600/10 transition-all hover:scale-110"
                    title="Twitter"
                  >
                    <svg className="w-6 h-6 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohammad Ashikul Islam. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
