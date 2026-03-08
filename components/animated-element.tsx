"use client"

import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "scale" | "blur"

interface AnimatedElementProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
  threshold?: number
}

const animationClasses: Record<AnimationType, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  fade: {
    initial: "opacity-0",
    animate: "opacity-100",
  },
  scale: {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  blur: {
    initial: "opacity-0 blur-sm",
    animate: "opacity-100 blur-0",
  },
}

export function AnimatedElement({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className,
  as: Component = "div",
  threshold = 0.1,
}: AnimatedElementProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold })

  const { initial, animate } = animationClasses[animation]

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all ease-out",
        isVisible ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  )
}

interface AnimatedGroupProps {
  children: React.ReactNode
  animation?: AnimationType
  staggerDelay?: number
  duration?: number
  className?: string
  threshold?: number
}

export function AnimatedGroup({
  children,
  animation = "fade-up",
  staggerDelay = 100,
  duration = 700,
  className,
  threshold = 0.1,
}: AnimatedGroupProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold })

  const { initial, animate } = animationClasses[animation]

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                "transition-all ease-out",
                isVisible ? animate : initial
              )}
              style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${index * staggerDelay}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
