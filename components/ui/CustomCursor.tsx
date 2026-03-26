'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const updatePosition = (e: MouseEvent) => {
      // Use clientX/Y to align with the viewport fixed position
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
      cursor.style.opacity = '1'
    }
    
    const hideCursor = () => {
      cursor.style.opacity = '0'
    }

    const updateHoverState = (isHovering: boolean) => {
      if (isHovering) {
        cursor.style.width = '24px'
        cursor.style.height = '24px'
        cursor.style.background = 'var(--color-accent-dim)'
      } else {
        cursor.style.width = '8px'
        cursor.style.height = '8px'
        cursor.style.background = 'transparent'
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      if (target.closest('a') || target.closest('button') || target.closest('.cursor-hover')) {
        updateHoverState(true)
      } else {
        updateHoverState(false)
      }
    }

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseleave', hideCursor)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed pointer-events-none z-[9999] rounded-full transition-[width,height,background-color] duration-300 ease-out opacity-0"
      style={{
        transform: 'translate(-50%, -50%)',
        width: '8px',
        height: '8px',
        border: '1.5px solid var(--color-accent)',
        background: 'transparent',
        // By disabling pointer events we ensure the element under is hovered properly
        pointerEvents: 'none'
      }}
    />
  )
}
