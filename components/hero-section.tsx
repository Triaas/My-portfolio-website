"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Welcome to my portfolio</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Front-end Developer <span className="text-primary">Enthusiast</span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            Hi, I'm a Software Engineering student specializing in Front-end technologies. Currently dedicated
            to building elegant web solutions and creating seamless, high-quality user experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToProjects} className="group relative overflow-hidden">
              <span className="relative z-10">View Projects</span>
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
