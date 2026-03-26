export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] py-8 px-6 md:px-12 lg:px-24 bg-[var(--color-bg-primary)] mt-auto">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        
        {/* Left */}
        <div className="font-sans text-[13px] text-[var(--color-text-muted)] order-2 md:order-1 text-center md:text-left">
          © 2026 Faisal Bukhari
        </div>

        {/* Center */}
        <div className="order-1 md:order-2">
          <span className="font-mono text-[14px] text-[var(--color-accent)] tracking-[0.2em] relative z-10 select-none">FB</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 order-3">
          <a href="https://github.com/bukhari-ct" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-hover">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="GitHub">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.98 5.4 5.4 0 0 0 19 1s-1.33-.4-4.4 1.7a14.7 14.7 0 0 0-8 0C3.33.6 2 1 2 1s.4 3.98 1 4.98A5.44 5.44 0 0 0 1 10.98c0 5.46 3.3 6.65 6.44 7A4.8 4.8 0 0 0 6 22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/shah-faisal-bukhari/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-hover">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="LinkedIn">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://www.upwork.com/freelancers/~01f10acecdf88be82c" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-hover">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="Upwork">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.062-1.226l-1.688 3.518-.01.026c-.322.957-1.353 2.05-2.73 2.05-1.745 0-3.158-1.428-3.158-3.183 0-1.761 1.41-3.185 3.158-3.185.342 0 .684.062 1.01.18l.894-1.89-1.904-.002c-2.784 0-5.062 2.274-5.062 5.068 0 2.784 2.278 5.053 5.062 5.053 2.14 0 4.026-1.393 4.77-3.376l1.378-2.671c1.077 1.055 2.502 1.571 3.96 1.571 3.298 0 5.439-2.296 5.439-5.385V4.6h-2.12v5.084c0 1.96-1.366 3.474-3.525 3.474z"></path>
              <path d="M11.96 10.352c.264-.694.516-1.503.744-2.316.326-1.157.558-2.348.618-2.858l.006-.051H11.21l-.03.208c-.147 1.066-.462 2.376-.84 3.655-1.028-1.55-1.76-3.183-1.859-3.415L8.441 5.341H6.32c.328 1.096 1.34 3.714 2.802 6.136l-.01.018c.844.759 1.942 1.259 3.116 1.259l.068-.002-.336-2.399z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
