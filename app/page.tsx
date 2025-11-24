import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Welcome to My Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Built with Next.js, TypeScript, and shadcn/ui
              </p>
              <div className="flex gap-4 justify-center flex-wrap pt-4">
                <a 
                  href="#projects" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center border-t">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
                <p className="text-xl text-muted-foreground">
                  Get to know more about my background and skills
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">TypeScript</h3>
                  <p className="text-sm text-muted-foreground">
                    Type-safe development with full TypeScript support
                  </p>
                </div>
                <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Dark Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamless light and dark theme switching
                  </p>
                </div>
                <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Responsive</h3>
                  <p className="text-sm text-muted-foreground">
                    Mobile-first design that works on all devices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center border-t bg-muted/20">
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

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center border-t">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Skills</h2>
                <p className="text-xl text-muted-foreground">
                  Technologies I work with
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card/50">
                <p className="text-center text-muted-foreground">
                  Skills section coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center border-t bg-muted/20">
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
