import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaCloud,
  FaCode,
  FaBrain,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFastapi,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiGooglecloud,
  SiFramer,
} from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ];

  const backendSkills = [
    { name: "Python", icon: FaPython },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Node.js", icon: FaNodeJs },
    { name: "PostgreSQL", icon: SiPostgresql },
  ];

  const cloudAiSkills = [
    { name: "LLM Embeddings", icon: FaBrain },
    { name: "Docker", icon: FaDocker },
    { name: "AWS", icon: FaAws },
    { name: "Google Cloud", icon: SiGooglecloud },
  ];

  const SkillCategory = ({
    title,
    skills,
    delay = 0,
  }: {
    title: string;
    skills: any[];
    delay?: number;
  }) => (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: delay + index * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/60 border border-gray-700 rounded-full text-white cursor-pointer transition-colors backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <skill.icon className="text-xl text-mint-400" />
            <span className="font-medium text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MY • SKILLS
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across frontend,
            backend, and cloud & AI technologies.
          </p>
        </motion.div>

        <SkillCategory
          title="Frontend Technologies"
          skills={frontendSkills}
          delay={0.2}
        />

        <SkillCategory
          title="Backend Technologies"
          skills={backendSkills}
          delay={0.4}
        />

        <SkillCategory
          title="Cloud & AI"
          skills={cloudAiSkills}
          delay={0.6}
        />
      </div>
    </section>
  );
};

export default Skills;
