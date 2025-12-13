import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [experiences] = useState([
    {
      id: 1,
      title: "Full Stack Engineer",
      company: "Devsarch",
      timePeriod: "Nov 2023 - Present",
      responsibilities: [
        "Architected full-stack AI-powered real estate platform using FastAPI (Python) and Next.js 16 (TypeScript) with comprehensive financial metrics and AI insights.",
        "Designed multi-agent AI system using LangChain, LangGraph, and OpenAI to automate property research across Zillow, Redfin, and Realtor.com platforms.",
        "Built property analysis engine calculating ROI metrics including cap rates, rental yields, cash flow projections, and deal grading for long-term and short-term rentals.",
        "Developed microservices platform with 16+ independent services using NestJS, Next.js, PostgreSQL, and RabbitMQ for enterprise management.",
        "Implemented real-time tracking and assignment systems using message queues and WebSocket integration for improved collaboration.",
        "Engineered advanced pagination and search filtering, reducing API response time by 35%+ across all modules.",
        "Designed semantic search functionality using OpenSearch, improving document retrieval accuracy significantly.",
        "Automated workflows reducing manual processing time by 40%+ through intelligent task scheduling and optimization.",
        "Built document clustering pipelines using HDBSCAN to efficiently categorize legal documents.",
        "Implemented entity extraction with spaCy to identify key legal terms and clauses automatically.",
        "Developed user management system with role-based access control, 2FA authentication, and soft-delete functionality.",
        "Created scalable subscription management system with usage tracking, tiered pricing plans, and admin dashboard analytics.",
        "Built 25+ reusable React hooks and presentational components for API integration and state management.",
        "Designed and implemented 30+ database migrations using Prisma ORM with soft-delete patterns and unique constraints.",
        "Developed RESTful APIs with FastAPI and NestJS, including JWT authentication, error handling, and Swagger documentation.",
        "Implemented request validation with Pydantic and Zod schemas ensuring data integrity across all endpoints.",
        "Built real-time property analysis workflows using Celery for asynchronous processing and Socket.IO for live updates.",
        "Developed report regeneration feature with date-based filtering and automated PDF/Excel generation for historical analysis.",
        "Integrated third-party APIs for location-based services and geo-tracking functionality.",
        "Created comprehensive admin dashboard with user management, subscription analytics, and property monitoring capabilities.",
        "Boosted test coverage from 7% to 50% using Jest, improving code quality and reliability.",
        "Fixed critical production bugs maintaining 99%+ system uptime in workflow resolution and assignment modules.",
        "Containerized application stack using Docker and Docker Compose, reducing setup time from hours to minutes.",
        "Contributed to Docker-based CI/CD pipeline on Google Cloud Platform, reducing deployment time by 50%.",
        "Implemented internationalization supporting multiple languages with RTL/LTR layout switching.",
        "Ensured full website responsiveness across all devices and contributed to Laravel projects with HTML, CSS, and Tailwind CSS.",
      ],
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Fiverr",
      timePeriod: "May 2018 - Oct 2023",
      responsibilities: [
        "Completed 30+ client projects across e-commerce, WordPress customization, and web application development.",
        "Maintained 5-star rating with 100% client satisfaction across 25+ WordPress projects.",
        "Delivered 5+ complete e-commerce solutions from design to deployment.",
        "Increased client organic traffic by 20% through SEO optimization strategies.",
        "Built long-term relationships with 10+ repeat clients.",
        "Specialized in custom WordPress solutions, secure e-commerce platforms, and conversion-optimized user experiences.",
      ],
    },
    {
      id: 3,
      title: "MERN Stack Developer",
      company: "CarbonTeq",
      timePeriod: "Nov 2021 - Jun 2023",
      responsibilities: [
        "Developed 6+ responsive web applications using React, Redux, and Ant Design.",
        "Optimized web app performance by 30% through code splitting, lazy loading, and optimization techniques.",
        "Developed and maintained applications using modern tools including Webpack, Vite, and Babel.",
        "Collaborated with team of 10 members using agile methodologies.",
        "Planned and executed projects from inception to delivery.",
        "Integrated 100+ REST APIs into frontend applications.",
        "Utilized custom hooks and implemented global state management using Redux to improve code organization.",
        "Followed Airbnb React guide for best practices and clean code standards.",
        "Managed deployment of multiple project releases.",
      ],
    },
    {
      id: 4,
      title: "Game Developer",
      company: "Casual Gaming Studio",
      timePeriod: "Dec 2019 - May 2020",
      responsibilities: [
        "Built optimized terrain systems for game environments.",
        "Developed menu controls and user interface components.",
        "Created simulation game with core gameplay mechanics.",
      ],
    },
    {
      id: 5,
      title: "Web Developer",
      company: "Pineal",
      timePeriod: "Jul 2019 - Nov 2019",
      responsibilities: [
        "Converted 3 mockups into HTML, CSS, and JavaScript projects.",
        "Developed 13-15 WordPress websites from design to deployment.",
        "Performed WordPress custom development and theme customization.",
      ],
    },
  ]);

  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const onClickExperience = (id: number) => {
    const matchedExperience = experiences.find(
      (experience) => experience.id === id
    );
    if (matchedExperience) {
      setSelectedExperience(matchedExperience);
    }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MY • EXPERIENCE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company List */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 order-2 lg:order-1"
          >
            <div className="space-y-2 lg:block flex flex-col gap-2 lg:pb-0">
              {experiences.map((experience, index) => (
                <motion.button
                  key={experience.id}
                  onClick={() => onClickExperience(experience.id)}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedExperience.id === experience.id
                      ? "bg-yellow text-black border-l-4 border-mint-400"
                      : "bg-darkGray text-white hover:bg-lightGray border-l-4 border-transparent hover:border-mint-400/50"
                  }`}
                  whileHover={{
                    scale: 1.01,
                    x: 2,
                  }}
                  whileTap={{ scale: 0.99 }}
                  animate={{
                    backgroundColor:
                      selectedExperience.id === experience.id
                        ? "#4FD1C7"
                        : "#282828",
                    color:
                      selectedExperience.id === experience.id
                        ? "#000000"
                        : "#FFFFFF",
                    borderLeftColor:
                      selectedExperience.id === experience.id
                        ? "#4FD1C7"
                        : "transparent",
                  }}
                >
                  <motion.div
                    className="font-semibold"
                    animate={{
                      color:
                        selectedExperience.id === experience.id
                          ? "#000000"
                          : "#FFFFFF",
                    }}
                  >
                    {experience.company}
                  </motion.div>
                  <motion.div
                    className="text-sm opacity-75"
                    animate={{
                      color:
                        selectedExperience.id === experience.id
                          ? "#000000"
                          : "#9CA3AF",
                    }}
                  >
                    {experience.timePeriod}
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 order-1 lg:order-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="card"
              >
                <motion.div
                  className="mb-6"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    {selectedExperience.title}
                  </motion.h3>
                  <motion.div
                    className="flex items-center gap-4 mb-4"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <motion.span
                      className="text-mint-400 font-semibold"
                      whileHover={{ scale: 1.02 }}
                    >
                      {selectedExperience.company}
                    </motion.span>
                    <motion.span
                      className="text-gray-400 text-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      {selectedExperience.timePeriod}
                    </motion.span>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="space-y-3"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <motion.h4
                    className="text-white font-semibold mb-3"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                  >
                    Key Responsibilities:
                  </motion.h4>
                  <ul className="space-y-2">
                    {selectedExperience.responsibilities.map(
                      (responsibility, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: 10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.6 + index * 0.05,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="flex items-start gap-3 text-gray-300"
                          whileHover={{
                            x: 2,
                            color: "#4FD1C7",
                            transition: { duration: 0.15 },
                          }}
                        >
                          <motion.span
                            className="text-mint-400 mt-1"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 0.7 + index * 0.05,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            whileHover={{
                              scale: 1.1,
                              transition: { duration: 0.15 },
                            }}
                          >
                            •
                          </motion.span>
                          <span>{responsibility}</span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
