import ScrollReveal from '../ui/ScrollReveal'

export default function About() {
  const bioData = [
    { label: 'LOCATION', value: 'Lahore, Pakistan' },
    { label: 'EXPERIENCE', value: '4+ Years Full-Stack' },
    { label: 'FOCUS', value: 'LLM Systems · Microservices · React' },
    { label: 'AVAILABILITY', value: 'Open to Contract Engagements' },
  ]
  const techPills = ['NestJS', 'Next.js', 'FastAPI', 'RabbitMQ', 'LLM Pipelines']

  return (
    <section id="about" className="bg-[var(--color-bg-primary)] py-32 px-6 md:px-12 lg:px-24">
      <ScrollReveal>
        <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-widest block mb-12">
          {`// 01 — ABOUT`}
        </span>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        <div className="md:col-span-7">
          <ScrollReveal delay={100}>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] text-[var(--color-text-primary)] leading-[0.95] mb-8">
              I don't ship features.<br/>I ship systems.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="font-sans text-[16px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[600px] space-y-6">
              <p>
                Most SaaS products don't fail because of missing features. They fail because
                the architecture underneath can't carry the weight.
              </p>
              <p>
                With 4+ years building production systems — from LLM-powered search pipelines
                to distributed microservices handling enterprise-scale throughput — I design
                backends that grow with you, not against you.
              </p>
              <p>
                I partner with SaaS founders and CTOs who need an engineer who thinks in
                systems, writes for maintainability, and delivers with zero architectural rewrites.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="md:col-span-5 flex flex-col justify-start">
          <ScrollReveal delay={300}>
            <div className="border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 mb-6 hover:border-[var(--color-accent-border)] transition-colors duration-300">
              <div className="space-y-4">
                {bioData.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full border-b border-[var(--color-border)] pb-4 last:border-0 last:pb-0">
                    <span className="font-mono text-[11px] text-[var(--color-text-muted)] w-full sm:w-1/3 mb-1 sm:mb-0">
                      {item.label} <span className="hidden sm:inline-block ml-4">→</span>
                    </span>
                    <span className="font-sans text-[14px] text-[var(--color-text-primary)] w-full sm:w-2/3 sm:text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {techPills.map(pill => (
                <span 
                  key={pill} 
                  className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-full px-4 py-1.5 font-mono text-[11px] text-[var(--color-text-secondary)]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
