"use client"

import { useState, useEffect } from "react"

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-sm transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="https://calendly.com/helloplatinummarketing/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-lg bg-primary py-3 text-center text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
      >
        Book Your Free Demo
      </a>
    </div>
  )
}
