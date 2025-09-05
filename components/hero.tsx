import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TypingAnimation } from "./typing-animation"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated blob background similar to your image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* First blob - purple/blue */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-300 to-blue-300 dark:from-purple-600/40 dark:to-blue-600/40 rounded-full blur-3xl animate-blob opacity-70"></div>
        {/* Second blob - teal/green */}
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-300 to-green-300 dark:from-teal-600/40 dark:to-green-600/40 rounded-full blur-3xl animate-blob-reverse opacity-70 animation-delay-2000"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-2 scroll-animate">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal gradient-text font-[family-name:var(--font-Space_Grotesk)] text-balance py-2 mt-6">
              Michael Liang
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-[family-name:var(--font-dm-sans)] text-balance -mt-2">
              Computer Engineering @ UC San Diego
            </p>
            <div className="text-lg sm:text-xl text-foreground max-w-2xl mx-auto font-[family-name:var(--font-dm-sans)] text-pretty leading-relaxed">
              <p className="mb-2">
                Passionate about{" "}
                <TypingAnimation
                  texts={[
                    "building innovative solutions",
                    "blockchain development",
                    "solving complex problems",
                    "DeFi protocol architecture",
                    "full-stack engineering",
                    "decentralized applications",
                  ]}
                  className="text-primary font-semibold"
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2500}
                />
              </p>
            </div>
          </div>


        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-48 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}