import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [experiences] = useState([
    {
      id: 1,
      title: "Full Stack AI Engineer",
      company: "Devsarch",
      timePeriod: "Nov 2023 - Present",
      responsibilities: [
        "Architected AI-powered real estate platforms (FastAPI/Next.js) with robust transaction analytics.",
        "Built multi-agent AI systems (LangChain/OpenAI), automating complex workflows and reducing manual processing by 40%.",
        "Engineered scalable microservice platforms and optimized APIs, decreasing response times by 35%+.",
        "Integrated secure real-time collaboration tools with WebSockets, driving immediate synchronized updates.",
        "Orchestrated robust deployment pipelines with Docker and CI/CD, guaranteeing zero-downtime releases."
      ],
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "Nodlays",
      timePeriod: "June 2023 - Oct 2023",
      responsibilities: [
        "Engineered a high-performance React WYSIWYG editor to streamline author publishing workflows.",
        "Optimized Webpack bundling configurations, improving Lighthouse scores and cutting bundle sizes by 35%.",
        "Delivered secure e-signature integrations, driving complete workflow automation and compliance.",
        "Developed seamless cross-device layouts using advanced CSS grid and localized theming capabilities.",
        "Mentored junior UI developers on modern React state management patterns, accelerating feature delivery."
      ],
    },
    {
      id: 3,
      title: "MERN Stack Developer",
      company: "CarbonTeq",
      timePeriod: "Nov 2021 - Jun 2023",
      responsibilities: [
        "Shipped 8 production-grade React applications for continuous feature deliveries to a 50K+ active user base.",
        "Boosted application load speeds by 30% through advanced code-splitting and native lazy-loading.",
        "Integrated robust cloud storage (GCS, AWS S3) enabling scalable, cost-efficient feature expansions.",
        "Architected state-driven forms and dashboards with Redux, dramatically enhancing rapid data entry.",
        "Led regular code review cycles, enforcing strict test coverage margins to proactively limit regressions."
      ],
    },
    {
      id: 4,
      title: "Web Developer",
      company: "Fiverr",
      timePeriod: "May 2018 - Oct 2023",
      responsibilities: [
        "Delivered 30+ successful client projects with a 5-star rating, specializing in full-stack web solutions.",
        "Built and deployed 5+ scalable e-commerce platforms from initial design through to production.",
        "Boosted client organic traffic by 20% through targeted performance and SEO optimizations.",
        "Integrated diverse third-party APIs spanning payment gateways and dynamic inventory analytics.",
        "Produced comprehensive hand-off documentation and client tutorials, ensuring high long-term satisfaction."
      ],
    }
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
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${selectedExperience.id === experience.id
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
