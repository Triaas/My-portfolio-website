"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://github.com/Triaas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-background">
                    <Github className="h-6 w-6 transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">@Triaas</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/muhamad-trias-firmansyah-3275722b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-background">
                    <Linkedin className="h-6 w-6 transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">@muhamad-trias-firmansyah</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/triaasfrm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-background">
                    <Instagram className="h-6 w-6 transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-sm text-muted-foreground">@triaasfrm</p>
                  </div>
                </a>

                <a
                  href="mailto:triasfirmansyah91@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-background">
                    <Mail className="h-6 w-6 transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">triasfirmansyah91@gmail.com</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  Currently looking for internship opportunities where I can apply my skills and continue learning.
                  Available for full-time positions starting early 2026.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Muhamad Trias Firmansyah. All rights reserved.</p>
      </footer>
    </section>
  )
}
