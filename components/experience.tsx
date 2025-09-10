"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company: "UC San Diego CSE, Advised by Prof. Deian Stefan",
    location: "San Diego, CA",
    period: "June 2025 - Present",
    description:
      "Researching blockchain privacy vulnerabilities by developing statistical models to analyze transaction patterns and identify weaknesses in DeFi protocols like Houdini, Railgun, and Secret Swap.",
    technologies: ["Blockchain Analysis", "DeFi"],
    image: "/ucsd-research.png",
  },
  {
    title: "Blockchain Developer",
    company: "PlutoFi",
    location: "San Diego, CA",
    period: "Dec 2024 - Present",
    description:
      "Built high-performance Rust systems to stream and decode real-time Solana blockchain data, enabling sub-second trading insights for DeFi protocols like Pump.fun and Raydium.",
    technologies: ["Rust", "Golang"],
    image: "/plutofi.jpg",
  },
  {
    title: "Instructor",
    company: "University of British Columbia Engineering Outreach",
    location: "Vancouver, BC",
    period: "May 2022 - Aug 2022",
    description:
      "Led week-long STEM summer camps that helped elementary students develop foundational engineering and technology concepts through interactive learning experiences.",
    technologies: ["CAD", "STEM Education"],
    image: "/ubc-outreach.png",
  },
]

export function Experience() {

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Experience page floating blobs - similar to hero page movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top blob - orange/red */}
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-gradient-to-r from-orange-200 to-red-200 dark:from-orange-600/30 dark:to-red-600/30 rounded-full blur-3xl animate-blob-enhanced opacity-50"></div>
        {/* Middle blob - coral/amber */}
        <div className="absolute top-1/2 right-1/3 transform -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-orange-300 to-amber-300 dark:from-orange-500/35 dark:to-amber-500/35 rounded-full blur-3xl animate-blob opacity-45" style={{animationDelay: '2s'}}></div>
        {/* Bottom blob - yellow/pink */}
        <div className="absolute bottom-10 left-1/4 w-84 h-84 bg-gradient-to-r from-yellow-300 to-pink-300 dark:from-yellow-600/40 dark:to-pink-600/40 rounded-full blur-3xl animate-blob-reverse opacity-60" style={{animationDelay: '4s'}}></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text 
mb-4 font-[family-name:var(--font-space-grotesk)]">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl 
mx-auto font-[family-name:var(--font-dm-sans)] text-pretty">
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2
  h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary 
to-primary/20 hidden md:block" />

          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform 
-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 
border-background shadow-lg z-10 hidden md:block" />

              <div className={`flex items-center ${index % 2 === 0 ? 
"md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 
"md:pr-8" : "md:pl-8"}`}>
                  <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur border-primary/20">

                    <CardContent className="p-6 relative">
                        {/* Company Photo - positioned in corners */}
                        <div className={`absolute -top-2 w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-sm bg-muted/20 hover:border-primary/60 transition-all duration-300 hover:scale-110 right-2 ${
                          index % 2 === 0 ? "md:right-2" : "md:left-2"
                        }`}>
                          <Image
                            src={experience.image}
                            alt={`${experience.company} logo`}
                            fill
                            className={`object-cover ${experience.image.includes('ucsd-research') ? 'scale-[1.3]' : ''} ${experience.image.includes('plutofi') ? 'scale-[0.8] -translate-x-0.5' : ''}`}
                            onError={(e) => {
                              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23f3f4f6'/%3E%3Ctext x='24' y='24' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='8'%3ELogo%3C/text%3E%3C/svg%3E"
                            }}
                          />
                        </div>

                        {/* Period Badge */}
                        <div className={`flex ${index % 2 === 0 ? 
"justify-start" : "md:justify-end"} mb-4`}>
                          <Badge variant="outline" 
className="bg-primary/10 text-primary border-primary/30 font-medium">
                            {experience.period}
                          </Badge>
                        </div>

                      {/* Title and Company */}
                      <div className={`${index % 2 === 0 ? "text-left"
  : "md:text-right"} mb-4`}>
                        <h3 className="text-xl font-semibold 
font-[family-name:var(--font-space-grotesk)] mb-1 text-foreground">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-primary font-medium font-[family-name:var(--font-dm-sans)] mb-2">
                          {experience.company}
                        </p>
                        <div className={`flex items-center text-sm 
text-muted-foreground ${index % 2 === 0 ? "justify-start" : 
"md:justify-end"}`}>
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`text-muted-foreground mb-4 
font-[family-name:var(--font-dm-sans)] leading-relaxed ${index % 2 ===
  0 ? "text-left" : "md:text-right"}`}>
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${index % 
2 === 0 ? "justify-start" : "md:justify-end"}`}>
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" 
className="text-xs bg-background/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}