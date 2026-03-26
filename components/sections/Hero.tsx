import Link from 'next/link'
import CountUpNumber from '../ui/CountUpNumber'
import ScrollReveal from '../ui/ScrollReveal'

export default function Hero() {
  const metrics = [
    { value: 40, label: "AI Search Relevance Gain", suffix: "%" },
    { value: 50, label: "Production Users Served", suffix: "K+" },
    { value: 45, label: "Bug Reduction via Testing", suffix: "%" },
    { value: 4, label: "Years Architecting Systems", suffix: "+" },
  ]

  return (
    <section id="home" className="relative min-h-screen bg-[var(--color-bg-primary)] pt-32 pb-16 px-6 md:px-12 lg:px-24 flex flex-col justify-between overflow-hidden">
      
      <ScrollReveal delay={0}>
        <div className="flex items-center gap-3">
          <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span className="font-mono text-[11px] text-[var(--color-accent)] tracking-widest">{`{ AVAILABLE FOR CONTRACT }`}</span>
        </div>
      </ScrollReveal>

      <div className="flex-grow flex flex-col justify-center mt-12 md:mt-0 relative z-10 w-full max-w-full">
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-[100px] transform origin-right rotate-90 opacity-40">
           <span className="font-mono text-[11px] tracking-[0.3em] text-[var(--color-text-muted)] whitespace-nowrap">
             FULL-STACK • AI ENGINEER • SAAS ARCHITECT
           </span>
        </div>

        <h1 className="font-display text-[clamp(64px,10vw,140px)] leading-[0.92] text-[var(--color-text-primary)] max-w-[1000px] mb-8">
          <ScrollReveal delay={0}><span className="block">I BUILD AI-POWERED</span></ScrollReveal>
          <ScrollReveal delay={60}><span className="block">SAAS SYSTEMS</span></ScrollReveal>
          <ScrollReveal delay={120}><span className="block">THAT SCALE.</span></ScrollReveal>
        </h1>

        <ScrollReveal delay={200}>
          <p className="font-sans text-[18px] text-[var(--color-text-secondary)] max-w-[560px] leading-relaxed mb-10">
            Full-Stack Engineer specializing in LLM search pipelines,
            NestJS microservices, and production-grade React applications.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#case-study" className="font-sans font-bold text-[14px] bg-[var(--color-accent)] text-[#0A0A0A] px-6 py-3 cursor-hover text-center hover:opacity-90 transition-opacity whitespace-nowrap" style={{ width: 'fit-content' }}>
              View Case Study →
            </Link>
            <Link href="#work" className="font-sans text-[14px] text-[var(--color-text-secondary)] border border-[var(--color-border)] px-6 py-3 cursor-hover text-center hover:border-[var(--color-accent-border)] hover:text-[var(--color-accent)] transition-colors whitespace-nowrap" style={{ width: 'fit-content' }}>
              Explore Work ↓
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={500}>
        <div className="mt-16 md:mt-24 w-full border-t border-[var(--color-border)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
            {metrics.map((metric, index) => (
              <div key={index} className={`relative px-4 pt-6 pb-4 sm:pb-0 
                ${index !== metrics.length - 1 ? 'lg:border-r border-[var(--color-border)]' : ''} 
                ${index % 2 === 0 ? 'border-r border-[var(--color-border)] lg:border-r' : ''}
              `}>
                <span className="absolute top-2 left-4 font-mono text-[10px] text-[var(--color-text-muted)]">
                  0{index + 1}
                </span>
                <div className="font-mono text-[48px] text-[var(--color-accent)] leading-none mb-2 mt-4 flex items-center">
                  <CountUpNumber value={metric.value} duration={2000} />
                  <span>{metric.suffix}</span>
                </div>
                <div className="font-sans text-[12px] uppercase text-[var(--color-text-secondary)] max-w-[140px] leading-snug">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      
    </section>
  )
}
