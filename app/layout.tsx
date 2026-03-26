import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Faisal Bukhari — Full-Stack AI Engineer & SaaS Architect',
  description: 'Full-Stack AI Engineer specializing in LLM search pipelines, NestJS microservices, and Next.js applications. 40% AI search relevance gains. 50,000+ users served. Available for enterprise contracts.',
  keywords: ['Full Stack AI Engineer', 'NestJS architect', 'LLM search pipeline', 'SaaS backend developer', 'Next.js developer Pakistan', 'FastAPI developer'],
  openGraph: {
    title: 'Faisal Bukhari — Full-Stack AI Engineer',
    description: 'I build AI-powered SaaS systems that scale.',
    url: 'https://faisalbukhari.vercel.app',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-[var(--color-accent)] selection:text-[#0A0A0A]">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
