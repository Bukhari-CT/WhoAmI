import ScrollReveal from '../ui/ScrollReveal'

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-bg-secondary)] py-32 md:py-48 px-6 md:px-12 lg:px-24 border-t border-[var(--color-border)] flex flex-col items-center">
      <ScrollReveal>
        <div className="w-full max-w-[800px] text-center flex flex-col items-center mx-auto">
          <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-widest block mb-12">
            {`// 06 — CONTACT`}
          </span>

          <h2 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.9] text-[var(--color-text-primary)] mb-8 uppercase text-center w-full">
            READY TO BUILD<br />
            SOMETHING REAL?
          </h2>

          <p className="font-sans text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-relaxed max-w-[520px] mb-16 mx-auto">
            Book a 30-minute Strategic Architecture Consultation.
            No fluff — we audit your stack, identify where it will break,
            and map the engineering path forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full mb-24">
            <a 
              href="mailto:faisalbukhari111@gmail.com" 
              className="font-sans font-bold text-[14px] uppercase tracking-wide bg-[var(--color-accent)] text-[#0A0A0A] px-10 py-4 cursor-hover hover:opacity-90 transition-opacity w-full sm:w-auto text-center rounded-full"
            >
              Book a Strategy Call
            </a>
            
            <a 
              href="mailto:faisalbukhari111@gmail.com" 
              className="font-mono text-[14px] text-[var(--color-accent)] bg-transparent border-none cursor-hover hover:underline underline-offset-8 decoration-[var(--color-accent-dim)] transition-all px-4 py-4 w-full sm:w-auto text-center tracking-tight"
            >
              faisalbukhari111@gmail.com
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-4 w-full max-w-[900px] text-center mx-auto mx-auto pt-8 border-t border-[var(--color-border)]">
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-widest">
                Email
              </span>
              <span className="font-mono text-[12px] text-[var(--color-text-primary)] break-all max-w-[200px]">
                faisalbukhari111@<br/>gmail.com
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-widest">
                Upwork
              </span>
              <a href="https://www.upwork.com/freelancers/~01f10acecdf88be82c" target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] text-[var(--color-accent)] break-all max-w-[200px] hover:underline underline-offset-4 cursor-hover">
                /freelancers/~01f10ac...
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-widest">
                Location
              </span>
              <span className="font-mono text-[12px] text-[var(--color-text-primary)] whitespace-nowrap">
                Lahore, Pakistan
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
