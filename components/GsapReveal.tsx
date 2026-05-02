"use client"

import { ReactNode, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type RevealDirection = "up" | "down" | "left" | "right"

type GsapRevealProps = {
  children: ReactNode
  direction?: RevealDirection
  duration?: number
  delay?: number
  distance?: number
  start?: string
}

const axisOffsetByDirection: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 64 },
  down: { x: 0, y: -64 },
  left: { x: 64, y: 0 },
  right: { x: -64, y: 0 },
}

export function GsapReveal({
  children,
  direction = "up",
  duration = 0.9,
  delay = 0,
  distance = 64,
  start = "top 85%",
}: GsapRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const element = containerRef.current
    if (!element) return

    const baseOffset = axisOffsetByDirection[direction]
    const x = baseOffset.x === 0 ? 0 : (baseOffset.x > 0 ? distance : -distance)
    const y = baseOffset.y === 0 ? 0 : (baseOffset.y > 0 ? distance : -distance)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, x, y },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          delay,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start,
            toggleActions: "play none none none",
            once: true,
          },
          clearProps: "opacity,visibility,transform",
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [delay, direction, distance, duration, start])

  return <div ref={containerRef}>{children}</div>
}
