import {
  cafezupas,
  amazonImg,
  viralSolutions,
  urgentcare,
  noorShop,
} from "@/public/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: any; // or StaticImageData if you want to be more specific
  link: string;
  github?: string;
  technologies?: string[];
  features?: string[];
  longDescription?: string;
  challenges?: string[];
  results?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 1,
      title: "Real Estate Investment Analysis Platform",
      category: "DEVELOPMENT",
      description:
        "Real estate investment analysis platform with AI-powered property research and comprehensive financial metrics.",
      image: urgentcare,
      link: "#",
      github: "https://github.com/Bukhari-CT",
      technologies: [
        "Python",
        "FastAPI",
        "Next.js 16",
        "TypeScript",
        "LangChain",
        "LangGraph",
        "OpenAI",
        "PostgreSQL",
        "Celery",
        "Socket.IO",
        "Docker",
        "Alembic",
      ],
      features: [
        "Multi-agent AI system for automated property research",
        "Cross-reference data from Zillow, Redfin, and Realtor.com",
        "ROI metrics calculation (cap rates, rental yields, cash flow projections)",
        "Real-time property analysis with live progress updates",
        "Subscription management with usage tracking and tiered pricing",
        "Comprehensive admin dashboard with analytics",
        "RESTful APIs with JWT authentication and Swagger documentation",
        "Docker containerization for seamless deployment",
      ],
      longDescription:
        "Architected and developed a full-stack real estate investment analysis platform using FastAPI (Python) and Next.js 16 (TypeScript). The platform enables investors to evaluate properties with comprehensive financial metrics and AI-powered insights. Features a multi-agent AI system using LangChain, LangGraph, and OpenAI to automate property research, cross-reference data from multiple real estate platforms, and generate verified property analysis reports. The system calculates ROI metrics including cap rates, rental yields, cash flow projections, and deal grading, supporting both long-term and short-term rental scenarios with location-specific market data.",
      challenges: [
        "Implementing multi-agent AI system for property research automation",
        "Integrating multiple real estate APIs with rate limiting and error handling",
        "Building real-time analysis workflows with Celery and Socket.IO",
        "Designing scalable subscription management system",
        "Creating comprehensive financial calculation engine",
      ],
      results: [
        "Enabled investors to make data-driven property investment decisions",
        "Automated property research reducing manual analysis time by 80%+",
        "Scalable SaaS architecture supporting multiple subscription tiers",
        "Real-time analysis updates improving user experience",
        "Comprehensive admin dashboard for business intelligence",
      ],
    },
    {
      id: 2,
      title: "Catering Web App",
      category: "DESIGN • DEVELOPMENT",
      description:
        "A modern catering website with menu showcase, and event booking system.",
      image: cafezupas,
      link: "https://cafezupas.com/",
      github: "https://github.com/Bukhari-CT",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      features: [
        "Responsive menu showcase with high-quality food imagery",
        "Online ordering system with Stripe payment integration",
        "Event booking and catering request forms",
        "Admin dashboard for menu and order management",
        "SEO optimized for better visibility",
      ],
      longDescription:
        "A comprehensive catering landing page built to showcase menus, accept online orders, and manage catering requests. The platform features a modern, appetizing design with secure payment processing and real-time order updates. Note: The image shown is a placeholder representation of the project design.",
      challenges: [
        "Implementing secure payment processing with PCI compliance",
        "Creating an intuitive menu browsing and ordering experience",
        "Optimizing for mobile devices and fast loading times",
      ],
      results: [
        "Increased online order conversion by 40%",
        "Streamlined catering request process",
        "Improved user engagement and customer retention",
      ],
    },
    {
      id: 3,
      title: "DriveThru Healthcare App",
      category: "DEVELOPMENT",
      description:
        "Web application for healthcare providers to manage their patients and appointments.",
      image: urgentcare,
      link: "#",
      github: "https://github.com/Bukhari-CT",
      technologies: ["React", "Next.js", "Tailwind CSS", "PostgreSQL", "Node"],
      features: [
        "Patient management system",
        "Appointment scheduling",
        "Medical history tracking",
        "Prescription management",
        "Medical record management",
        "Patient portal",
        "Doctor portal",
        "Admin portal",
      ],
      longDescription:
        "A comprehensive web application for healthcare providers to manage their patients and appointments.",
      challenges: [
        "Implementing patient management system",
        "Implementing appointment scheduling",
        "Implementing medical history tracking",
        "Implementing prescription management",
        "Implementing medical record management",
        "Implementing patient portal",
        "Implementing doctor portal",
        "Implementing admin portal",
      ],
    },
  ];

  return (
    <section id="project" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MY • PORTFOLIO
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true }}
              className="card group cursor-pointer"
              whileHover={{
                scale: 1.02,
                y: -5,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="mb-3">
                <span className="text-mint-400 text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-mint-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
