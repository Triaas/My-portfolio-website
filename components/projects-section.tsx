import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Food Ordering POS System",
    description:
      "A comprehensive web-based Point of Sale system designed for food ordering with an intuitive interface. Features real-time order management, inventory tracking, and seamless payment processing.",
    tech: ["Bootstrap", "JavaScript", "HTML/CSS"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    githubLink: "https://github.com/dadunch/foodie.git",
  },
  {
    title: "Internship Performance Tracker",
    description:
      "A robust management system for tracking and evaluating student performance during internships. Includes progress monitoring, skill assessment, and detailed reporting features.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-purple-500/10 to-pink-500/10",
    githubLink: "https://github.com/stevendotexe/SI-KAP-UI.git",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">Featured Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            A selection of projects that showcase my skills in building modern, user-friendly web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient} transition-all duration-300 group-hover:h-3`} />
              <CardHeader>
                <CardTitle className="text-2xl text-balance">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="group/btn bg-transparent" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                      Code
                    </a>
                  </Button>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
