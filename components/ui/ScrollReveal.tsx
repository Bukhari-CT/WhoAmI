'use client'
import { useEffect, useRef, ReactNode } from 'react'

export default function ScrollReveal({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target instanceof HTMLElement) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
      }}
    >
      {children}
    </div>
  )
}
