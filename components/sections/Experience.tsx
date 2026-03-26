import ScrollReveal from '../ui/ScrollReveal'

export default function Experience() {
  const experiences = [
    {
      period: "NOV 2023 — PRESENT",
      company: "DEVSARCH",
      role: "Full-Stack Developer",
      bullets: [
        "LLM embedding pipeline → 40% search relevance gain",
        "Test coverage 7% → 60% via Jest + Playwright",
        "RabbitMQ event-driven microservices architecture",
        "25+ reusable React hooks · 30+ Prisma DB migrations"
      ]
    },
    {
      period: "JUN 2023 — OCT 2023",
      company: "NODLAYS",
      role: "Frontend Engineer",
      bullets: [
        "Custom React WYSIWYG editor (content team productivity ↑)",
        "Webpack bundle size −35% · Lighthouse scores improved",
        "Secure e-signature integration for compliance workflows"
      ]
    },
    {
      period: "NOV 2021 — MAY 2023",
      company: "CARBONTEQ",
      role: "Frontend Engineer",
      bullets: [
        "8 production React apps · 50,000+ active users",
        "Core Web Vitals +30% via code-splitting + lazy loading",
        "100+ REST APIs integrated and maintained",
        "CI/CD pipeline management across staging + production"
      ]
    }
  ]

  return (
    <section id="experience" className="bg-[var(--color-bg-secondary)] py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <ScrollReveal>
        <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-widest block mb-16">
          {`// 05 — EXPERIENCE`}
        </span>
      </ScrollReveal>

      <div className="flex flex-col border-l border-[var(--color-border)] mt-8">
        {experiences.map((exp, idx) => (
          <ScrollReveal key={idx} delay={idx * 100}>
            <div className={`grid grid-cols-1 lg:grid-cols-12 border-t border-[var(--color-border)] ${idx === experiences.length - 1 ? 'border-b' : ''} group hover:bg-[var(--color-bg-primary)] transition-colors duration-500`}>
              
              <div className="lg:col-span-3 pt-6 lg:py-10 pl-6 pr-4 lg:pl-10 relative">
                <span className="font-mono text-[11px] text-[var(--color-text-muted)] opacity-80 uppercase tracking-widest whitespace-nowrap">
                  {exp.period}
                </span>
                <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[var(--color-accent)] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              </div>

              <div className="lg:col-span-9 pb-8 pt-2 lg:py-10 pl-6 lg:pl-0 pr-6">
                <div className="flex items-baseline gap-4 mb-4 lg:mb-6">
                  <h3 className="font-mono text-[13px] text-[var(--color-accent)] uppercase tracking-wide">
                    {exp.company}
                  </h3>
                  <span className="font-sans font-bold text-[14px] md:text-[16px] text-[var(--color-text-primary)]">
                    {exp.role}
                  </span>
                </div>
                
                <ul className="space-y-3 lg:space-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex font-sans text-[14px] md:text-[15px] text-[var(--color-text-secondary)] leading-relaxed max-w-[700px]">
                      <span className="text-[var(--color-accent)] mr-4 font-mono opacity-70">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
