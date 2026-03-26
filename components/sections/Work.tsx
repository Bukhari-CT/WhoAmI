import ScrollReveal from '../ui/ScrollReveal'
import Image from 'next/image'

export default function Work() {
  const projects = [
    {
      index: "01",
      category: "AI · FULL-STACK",
      title: "Real Estate Investment Analysis Platform",
      description: "AI-powered property research platform with LLM-driven financial metrics and investment scoring. Built for scale.",
      stack: ["Next.js", "FastAPI", "PostgreSQL", "LLM APIs"],
      image: "/real_estate_ai.png"
    },
    {
      index: "02",
      category: "FRONTEND · DESIGN",
      title: "Catering Web Application",
      description: "Modern catering platform with dynamic menu showcase, event booking system, and seamless UX flows.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      image: "/catering_app.png"
    },
    {
      index: "03",
      category: "HEALTHCARE · FULL-STACK",
      title: "DriveThru Healthcare App",
      description: "Patient management and appointment scheduling web application for healthcare providers.",
      stack: ["React", "NestJS", "PostgreSQL", "Prisma"],
      image: "/healthcare_dashboard.png"
    }
  ]

  return (
    <section id="work" className="bg-[var(--color-bg-primary)] py-32 px-6 md:px-12 lg:px-24">
      <ScrollReveal>
        <span className="font-mono text-[11px] text-[var(--color-accent)] uppercase tracking-widest block mb-12">
          {`// 03 — SELECTED WORK`}
        </span>
        <h2 className="font-display text-[clamp(32px,3.8vw,60px)] text-[var(--color-text-primary)] mb-16">
          Systems I've Shipped.
        </h2>
      </ScrollReveal>

      <div className="flex flex-col gap-12">
        {projects.map((project, idx) => (
          <ScrollReveal key={idx} delay={idx * 150}>
            <div className="group w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-accent-border)] transition-colors duration-500 overflow-hidden flex flex-col xl:flex-row hover:shadow-[0_0_40px_rgba(232,255,0,0.04)] cursor-hover">
              <div className="xl:w-[55%] relative aspect-video overflow-hidden border-b xl:border-b-0 xl:border-r border-[var(--color-border)]">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 1280px) 100vw, 55vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
                />
              </div>

              <div className="xl:w-[45%] p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[11px] text-[var(--color-text-muted)]">[{project.index}]</span>
                    <span className="font-mono text-[10px] text-[var(--color-text-secondary)] px-3 py-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-sm whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-[32px] md:text-[40px] text-[var(--color-text-primary)] leading-[1.05] mb-6">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-[15px] text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-[480px]">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map(tech => (
                      <span key={tech} className="font-mono text-[11px] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)] px-3 py-1.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a href="#" target="_blank" rel="noopener noreferrer" className="font-sans text-[14px] font-bold text-[var(--color-accent)] cursor-hover group/link inline-flex items-center uppercase">
                    View Project <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
