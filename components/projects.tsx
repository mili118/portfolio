"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Real-Time DEX Monitoring System",
    brief: "Streaming analysis application for Solana DEXes with low-latency signal extraction",
    description:
      "Developed a streaming analysis application for Solana DEXes, decoding raw account state transitions into structured swap and liquidity events via gRPC and Protobuf. Built a performant, async Rust backend with custom parsers for protocols like Meteora and Raydium.",
    technologies: ["Rust", "Golang", "PostgreSQL", "gRPC"],
    github: undefined,
    demo: null,
    image: "/images/projects/dex-monitoring.jpg",
  },
  {
    title: "Bonk.capital - Solana Lending Platform",
    brief: "Decentralized lending protocol with mobile-first experience",
    description:
      "Designed and deployed a decentralized lending protocol on Solana Devnet, enabling users to supply assets like BONK and SOL and borrow stablecoins. Engineered a mobile-first frontend using React Native, integrating with Phantom wallet for seamless DeFi experience.",
    technologies: ["Golang", "Rust", "React Native", "DeFi"],
    github: "https://github.com/mili118/bonkdotcapital",
    demo: null,
    image: "/images/projects/bonk-capital.jpg",
  },
  {
    title: "EMG Prosthetic Arm",
    brief: "Deep learning models for EMG signal interpretation and prosthetic control",
    description:
      "Developing deep learning models using CNNs to interpret EMG signals for prosthetic arm control as part of UCSD Triton Neurotech. Implemented signal processing techniques like Fourier transforms and wavelet analysis for EMG data preprocessing.",
    technologies: ["Python", "PyTorch", "NumPy", "CNN", "Signal Processing"],
    github: "https://github.com/mili118/emg_cnn",
    demo: null,
    image: "/images/projects/emg-prosthetic.jpg",
  },
  {
    title: "Eco Friendly",
    brief: "Mobile app promoting sustainable practices and environmental awareness",
    description:
      "A Flutter-based mobile application designed to help users adopt eco-friendly habits and track their environmental impact through gamification and educational features.",
    technologies: ["Flutter", "HTML"],
    github: undefined,
    demo: null,
    image: "/images/projects/eco-friendly.jpg",
  },
  {
    title: "Smart TV Voice Assistant",
    brief: "AI-powered voice assistant for natural language content discovery across streaming services",
    description:
      "Built an intelligent voice assistant platform that enables users to find content across multiple streaming platforms using natural language queries. Implemented RAG (Retrieval-Augmented Generation) architecture with vector embeddings to understand user intent and retrieve relevant content recommendations.",
    technologies: ["Python", "LangChain", "OpenAI Vector Embeddings"],
    github: undefined,
    demo: null,
    image: "/images/projects/voice-assistant.jpg",
  },
]

export function Projects() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())
  const [showAllProjects, setShowAllProjects] = useState(false)
  
  const toggleProject = (index: number) => {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedProjects(newExpanded)
  }

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Projects page floating blobs - similar to hero page movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* First blob - blue/cyan */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-blue-600/40 dark:to-cyan-600/40 rounded-full blur-3xl animate-blob opacity-60"></div>
        {/* Second blob - sky/teal */}
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-sky-300 to-teal-300 dark:from-sky-600/40 dark:to-teal-600/40 rounded-full blur-3xl animate-blob-reverse opacity-50 animation-delay-2000"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4 font-[family-name:var(--font-space-grotesk)]">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-dm-sans)] text-pretty">
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 scroll-animate cursor-pointer md:cursor-default ${
                index % 2 === 0
                  ? "scroll-animate-left"
                  : "scroll-animate-right"
              }`}
              onClick={() => toggleProject(index)}
            >

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground">
                  {project.title}
                </h3>
                
                {/* Brief description (always visible) */}
                <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)] leading-relaxed">
                  {project.brief}
                </p>

                {/* Expanded content - mobile: click to toggle, desktop: hover */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedProjects.has(index) 
                    ? "opacity-100 max-h-96 pt-4 md:opacity-0 md:max-h-0 md:pt-0" 
                    : "opacity-0 max-h-0"
                } md:group-hover:opacity-100 md:group-hover:max-h-96 md:group-hover:pt-4`}>
                  <div className="border-t pt-4 space-y-4">
                    <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More/Less Button */}
        {projects.length > 4 && (
          <div className="flex justify-center mt-12">
            <Button 
              variant="outline" 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-2 text-lg font-medium hover:scale-105 transition-transform font-[family-name:var(--font-dm-sans)]"
            >
              {showAllProjects ? 'View Less' : `View More (${projects.length - 4} more)`}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}