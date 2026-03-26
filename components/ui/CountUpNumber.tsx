'use client'
import { useEffect, useState, useRef } from 'react'

export function useCountUp(target: number, duration = 1500, isVisible: boolean) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const step = target / (duration / 16)
    
    if (target === 0) {
      setCount(0)
      return
    }

    const timer = setInterval(() => {
      start += step
      if (start >= target) { 
        setCount(target)
        clearInterval(timer) 
      }
      else setCount(Math.floor(start))
    }, 16)
    
    return () => clearInterval(timer)
  }, [target, duration, isVisible])

  return count
}

export default function CountUpNumber({ value, duration = 1500 }: { value: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const count = useCountUp(value, duration, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return <span ref={ref}>{count}</span>
}
