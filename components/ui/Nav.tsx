'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = ['Home', 'About', 'Work', 'Case Study', 'Contact']

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--color-bg-primary)]/80 border-b border-[var(--color-border)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
          
          <Link 
            href="#home" 
            className="flex items-center justify-center w-[20px] h-[20px] relative cursor-hover" 
            aria-label="Home"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-mono text-[14px] text-[var(--color-accent)] tracking-[0.2em] relative z-10 pointer-events-none">FB</span>
            <div className="absolute inset-x-[-10px] inset-y-[-10px]" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const href = item === 'Home' ? '#home' : `#${item.toLowerCase().replace(' ', '-')}`
              return (
                <Link key={item} href={href} className="font-sans text-[13px] uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors cursor-hover">
                  {item}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex">
            <Link href="#contact" className="font-sans text-[13px] uppercase px-6 py-2.5 rounded-full border border-[var(--color-accent-border)] text-[var(--color-accent)] bg-[var(--color-accent-dim)] hover:bg-[var(--color-accent)] hover:text-[#0A0A0A] transition-colors cursor-hover">
              Book a Call
            </Link>
          </div>

          <button 
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-hover relative z-50 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-[2px] bg-[var(--color-text-primary)] transition-transform ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-[var(--color-text-primary)] transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-[var(--color-text-primary)] transition-transform ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[var(--color-bg-primary)] px-6 pt-24 pb-12 flex flex-col md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
          <div className="flex flex-col gap-6 flex-grow mt-8">
            {navLinks.map((item) => {
              const href = item === 'Home' ? '#home' : `#${item.toLowerCase().replace(' ', '-')}`
              return (
                <Link 
                  key={item} 
                  href={href} 
                  className="font-display text-4xl text-[var(--color-text-primary)] cursor-hover"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            })}
          </div>
          
          <Link 
            href="#contact" 
            className="w-full font-sans text-center text-[13px] uppercase px-6 py-4 border border-[var(--color-accent-border)] text-[var(--color-accent)] bg-[var(--color-accent-dim)] rounded-full hover:bg-[var(--color-accent)] hover:text-[#0A0A0A] transition-colors cursor-hover mb-6"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </Link>
      </div>
    </>
  )
}
