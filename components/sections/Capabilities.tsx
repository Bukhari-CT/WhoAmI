import ScrollReveal from '../ui/ScrollReveal'

export default function Capabilities() {
  const capabilities = [
    {
      category: "AI & SEARCH SYSTEMS",
      items: ["LLM Embeddings", "Vector Search", "Semantic Pipelines", "FastAPI", "Google APIs"]
    },
    {
      category: "BACKEND ARCHITECTURE",
      items: ["NestJS · Node.js", "RabbitMQ", "Microservices", "Prisma ORM", "PostgreSQL · Supabase"]
    },
    {
      category: "FRONTEND SYSTEMS",
      items: ["Next.js 15", "React · TypeScript", "Tailwind CSS v4", "Shadcn/UI", "Framer Motion"]
    },
    {
      category: "INFRASTRUCTURE",
      items: ["CI/CD Pipelines", "Docker", "Google Cloud (GCS)", "Wasabi S3", "Jest · Playwright"]
    }
  ]
  
  const marqueeTech = [
    "TypeScript", "Python", "React", "Next.js", "NestJS", "FastAPI", "RabbitMQ", 
    "PostgreSQL", "Prisma", "LLM Embeddings", "Vector Search", "Jest", "Playwright", 
    "Docker", "CI/CD", "Supabase", "Google Cloud"
  ]

  return (
    <section className="bg-[var(--color-bg-secondary)] pt-32 pb-24 overflow-hidden w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 mb-24">
        <ScrollReveal>
          <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-widest block mb-12">
            {`// 02 — CAPABILITIES`}
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,60px)] text-[var(--color-text-primary)] mb-16">
            Architecture. At Every Layer.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          {capabilities.map((col, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
               <div className="w-full">
                 <h3 className="font-mono text-[11px] text-[var(--color-accent)] uppercase mb-4">
                   {col.category}
                 </h3>
                 <div className="h-[1px] w-full bg-[var(--color-border)] mb-6" />
                 <ul className="space-y-3">
                   {col.items.map((item, i) => (
                     <li key={i} className="font-sans text-[14px] text-[var(--color-text-secondary)]">
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal delay={400}>
         <div className="marquee-container w-[110%] -ml-[5%] relative">
           <div className="marquee-track flex gap-4 px-4 w-max">
             {[...marqueeTech, ...marqueeTech, ...marqueeTech].map((tech, i) => (
               <div 
                 key={i} 
                 className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-full px-5 py-2 font-mono text-[11px] text-[var(--color-text-secondary)] whitespace-nowrap min-w-max"
               >
                 {tech}
               </div>
             ))}
           </div>
         </div>
      </ScrollReveal>
    </section>
  )
}
