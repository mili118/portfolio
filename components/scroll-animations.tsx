"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      // Observe all elements with scroll animation classes
      const animateElements = document.querySelectorAll(
        ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale",
      )

      // Make elements immediately visible if they're already in viewport
      animateElements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isInViewport) {
          el.classList.add("animate-in")
        }
        
        observer.observe(el)
      })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])

  return null
}