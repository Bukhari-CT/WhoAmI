import ScrollReveal from '../ui/ScrollReveal'

export default function CaseStudy() {
  const metrics = [
    { value: "+40%", label: "AI Search Relevance" },
    { value: "45%", label: "Fewer Production Bugs" },
    { value: "7% → 60%", label: "Test Coverage Scaled" },
    { value: "50K+", label: "Users on Platform" }
  ]

  return (
    <section id="case-study" className="bg-[var(--color-bg-primary)] py-32 md:py-48 px-6 md:px-12 lg:px-24">
      
      {/* Top Header */}
      <ScrollReveal>
        <div className="mb-24">
          <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-widest block mb-4">
            DEVSARCH · 2023–PRESENT
          </span>
          <h2 className="font-display text-[clamp(36px,5vw,80px)] text-[var(--color-text-primary)] leading-[0.95] max-w-[800px] mb-16">
            How We Increased AI Search<br/>
            Relevance by 40% — Without<br/>
            Rebuilding the Product.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-[var(--color-border)]">
            {metrics.map((metric, index) => (
              <div key={index} className={`pt-6 pb-4 sm:pb-0 pr-4 
                ${index !== metrics.length - 1 ? 'lg:border-r border-[var(--color-border)]' : ''} 
                ${index % 2 === 0 ? 'border-r border-[var(--color-border)] lg:border-r' : ''}
              `}>
                <div className="font-mono text-[28px] md:text-[36px] text-[var(--color-accent)] leading-none mb-3">
                  {metric.value}
                </div>
                <div className="font-sans text-[12px] uppercase text-[var(--color-text-secondary)]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Main Body */}
      <div className="space-y-32">
        {/* Part 01 */}
        <ScrollReveal>
          <div className="relative isolate pt-8">
            <span className="absolute -top-6 -left-6 md:-top-12 md:-left-8 font-display text-[120px] md:text-[180px] text-[var(--color-text-muted)] opacity-20 -z-10 leading-none select-none">
              01
            </span>
            <div className="font-mono text-[11px] text-[var(--color-accent)] uppercase mb-6">
              01 — THE BUSINESS CHALLENGE
            </div>
            <div className="font-sans text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-[1.8] max-w-[680px]">
              <p className="mb-6">
                Devsarch was scaling its user base but shipping on a fragile foundation.
                Search was brittle — a keyword-matching layer that couldn't understand
                user intent. The backend was a monolith under growing transactional load.
              </p>
              <p>
                Test coverage sat at 7%, meaning every deployment was a calculated risk.
                The engineering team needed a system that could grow without being
                rebuilt every six months.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Part 02 */}
        <ScrollReveal>
          <div className="relative isolate pt-8">
            <span className="absolute -top-6 -left-6 md:-top-12 md:-left-8 font-display text-[120px] md:text-[180px] text-[var(--color-text-muted)] opacity-20 -z-10 leading-none select-none">
              02
            </span>
            <div className="font-mono text-[11px] text-[var(--color-accent)] uppercase mb-8">
              02 — THE ARCHITECTURAL SOLUTION
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="border-l-2 border-[var(--color-accent)] pl-5">
                <h3 className="font-sans font-bold text-[15px] text-[var(--color-text-primary)] mb-3 uppercase tracking-wide">AI Search Rebuild</h3>
                <p className="font-sans text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
                  Replaced keyword matching with a full semantic search pipeline using LLM
                  embeddings. Documents and queries encoded to dense vectors. Retrieved by
                  semantic proximity — not exact words. Pipeline built on NestJS workers,
                  decoupled via RabbitMQ for fault-tolerant async indexing.
                </p>
              </div>

              <div className="border-l-2 border-[var(--color-accent)] pl-5">
                <h3 className="font-sans font-bold text-[15px] text-[var(--color-text-primary)] mb-3 uppercase tracking-wide">Microservices Decomposition</h3>
                <p className="font-sans text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
                  Designed modular, event-driven microservices in NestJS. RabbitMQ served
                  as the message broker — decoupling producers from consumers, enabling
                  independent scaling, eliminating single points of failure. 30+ Prisma
                  migrations executed without downtime.
                </p>
              </div>

              <div className="border-l-2 border-[var(--color-accent)] pl-5">
                <h3 className="font-sans font-bold text-[15px] text-[var(--color-text-primary)] mb-3 uppercase tracking-wide">Testing Infrastructure</h3>
                <p className="font-sans text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
                  Built a test suite from scratch: Jest for unit/integration, Playwright for
                  E2E. Coverage scaled from 7% to 60%. Regression surface shrunk. 25+
                  reusable React hooks shipped across the platform.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Part 03 */}
        <ScrollReveal>
          <div className="relative isolate pt-8">
            <span className="absolute -top-6 -left-6 md:-top-12 md:-left-8 font-display text-[120px] md:text-[180px] text-[var(--color-text-muted)] opacity-20 -z-10 leading-none select-none">
              03
            </span>
            <div className="font-mono text-[11px] text-[var(--color-accent)] uppercase mb-8">
              03 — THE MEASURABLE IMPACT
            </div>
            
            <div className="overflow-x-auto w-full max-w-[900px]">
              <table className="w-full text-left font-mono text-[13px] border-collapse min-w-[600px]">
                <thead>
                  <tr className="text-[var(--color-text-muted)] border-b border-[var(--color-border)]">
                    <th className="font-normal py-4 pr-4">Metric</th>
                    <th className="font-normal py-4 px-4">Before</th>
                    <th className="font-normal py-4 px-4">After</th>
                    <th className="font-normal py-4 pl-4">Δ</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--color-text-primary)]">
                  <tr className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-elevated)] transition-colors">
                    <td className="py-4 pr-4">AI Search Query Relevance</td>
                    <td className="py-4 px-4 text-[var(--color-text-secondary)]">Baseline</td>
                    <td className="py-4 px-4">Baseline + 40%</td>
                    <td className="py-4 pl-4 text-[var(--color-accent)]">↑ 40%</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-elevated)] transition-colors">
                    <td className="py-4 pr-4">Production Bug Rate</td>
                    <td className="py-4 px-4 text-[var(--color-text-secondary)]">Baseline</td>
                    <td className="py-4 px-4">−45%</td>
                    <td className="py-4 pl-4 text-[var(--color-accent)]">↓ 45%</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-elevated)] transition-colors">
                    <td className="py-4 pr-4">Test Coverage</td>
                    <td className="py-4 px-4 text-[var(--color-text-secondary)]">7%</td>
                    <td className="py-4 px-4">60%</td>
                    <td className="py-4 pl-4 text-[var(--color-accent)]">↑ 53pts</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-elevated)] transition-colors">
                    <td className="py-4 pr-4">Reusable Hooks Shipped</td>
                    <td className="py-4 px-4 text-[var(--color-text-secondary)]">0</td>
                    <td className="py-4 px-4">25+</td>
                    <td className="py-4 pl-4">—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12">
              <p className="font-sans text-[16px] italic text-[var(--color-text-secondary)] mb-6">
                This is the kind of infrastructure that earns its cost back every quarter.
              </p>
              <a href="#contact" className="font-sans text-[15px] font-bold text-[var(--color-accent)] cursor-hover group inline-flex items-center hover:underline underline-offset-4">
                → Discuss a similar engagement
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

    </section>
  )
}
