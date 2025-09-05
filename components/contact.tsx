import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone, FileText } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Contact page floating blobs - similar to hero page movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* First blob - green/emerald */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-300 to-emerald-300 dark:from-green-600/40 dark:to-emerald-600/40 rounded-full blur-3xl animate-blob opacity-65"></div>
        {/* Second blob - lime/teal */}
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-lime-300 to-teal-300 dark:from-lime-600/40 dark:to-teal-600/40 rounded-full blur-3xl animate-blob-reverse opacity-55 animation-delay-2000"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4 font-[family-name:var(--font-space-grotesk)]">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)] text-pretty">
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 scroll-animate">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-[family-name:var(--font-space-grotesk)]">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 font-[family-name:var(--font-dm-sans)] leading-relaxed">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love
                to hear from you.
              </p>
            </div>

            <div className="space-y-4 max-w-md">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium font-[family-name:var(--font-dm-sans)]">Email</p>
                  <a
                    href="mailto:michaelliang875@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    michaelliang875@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium font-[family-name:var(--font-dm-sans)]">Phone</p>
                  <a href="tel:+13605908535" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (360) 590 8535
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium font-[family-name:var(--font-dm-sans)]">Location</p>
                  <p className="text-muted-foreground">San Diego, CA</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <a href="https://github.com/mili118" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <a href="https://www.linkedin.com/in/michael-liang8/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <a href="mailto:michaelliang875@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
