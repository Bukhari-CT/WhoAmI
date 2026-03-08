import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const [projects] = useState([
    {
      id: 1,
      title: "Covid Test Report",
      description:
        "This is a website where user can get results of their covid test by loging in with there provided phone number or email",
      live: "https://app.viralsolutionsga.com/results/login",
      technology: ["React", "Node", "Antd", "Twilio"],
      technologies: ["React", "Node", "Antd", "Twilio"],

      features: [
        "Secure login system",
        "Test result retrieval",
        "SMS notifications",
        "Data privacy compliance",
        "Mobile responsive",
      ],
      longDescription:
        "A secure web application for COVID-19 test result retrieval, built with React and Node.js. Users can access their test results using phone numbers or email addresses with SMS notifications via Twilio.",
      challenges: [
        "Implementing secure authentication",
        "SMS integration with Twilio",
        "Data privacy and HIPAA compliance",
      ],
      results: [
        "Streamlined test result delivery",
        "Reduced manual processing time",
        "Improved user experience",
      ],
    },
    {
      id: 2,
      title: "Prisoners Covid Vacination Track",
      description:
        "This is a private website were Jails Officical and Covid Vacination team do tracking of covid vacination of their prisoners",
      live: "#",
      technology: ["React", "Node", "Antd", "Twilio"],
      technologies: ["React", "Node.js", "Ant Design", "Twilio", "MongoDB"],
      features: [
        "Secure prisoner vaccination tracking system",
        "Real-time vaccination status updates",
        "SMS notifications for vaccination schedules",
        "Admin dashboard for jail officials",
        "Vaccination team management interface",
        "Data privacy and security compliance",
      ],
      longDescription:
        "A comprehensive web application designed for jail officials and COVID vaccination teams to efficiently track and manage prisoner vaccination schedules. The system ensures proper documentation, timely notifications, and secure data management for all vaccination activities within correctional facilities.",
      challenges: [
        "Implementing secure authentication for sensitive data",
        "Creating intuitive interfaces for non-technical users",
        "Ensuring HIPAA compliance for medical data",
        "Real-time synchronization across multiple facilities",
      ],
      results: [
        "Streamlined vaccination tracking process",
        "Reduced manual paperwork by 80%",
        "Improved vaccination compliance rates",
        "Enhanced data accuracy and reporting",
      ],
    },
    {
      id: 3,
      title: "Cohere",
      description:
        "Cohere is a coaching side where coachs have their students and clients how communicate with onsite calls with them",
      live: "#",
      technology: ["React", ".Net", "Material", "Stripe", "Less"],
      technologies: [
        "React",
        ".NET Core",
        "Material-UI",
        "Stripe",
        "Less CSS",
        "SignalR",
      ],
      features: [
        "Video call integration for coaching sessions",
        "Student and client management system",
        "Payment processing with Stripe integration",
        "Session scheduling and calendar management",
        "Progress tracking and reporting",
        "Real-time messaging and notifications",
      ],
      longDescription:
        "A comprehensive coaching platform that connects coaches with their students and clients through integrated video calling, session management, and payment processing. The platform facilitates seamless communication and professional coaching relationships with built-in tools for scheduling, progress tracking, and secure payments.",
      challenges: [
        "Integrating real-time video calling functionality",
        "Implementing secure payment processing",
        "Creating responsive design for multiple devices",
        "Managing complex user roles and permissions",
      ],
      results: [
        "Improved coach-client communication efficiency",
        "Streamlined payment processing and billing",
        "Enhanced user engagement and retention",
        "Reduced administrative overhead for coaches",
      ],
    },
    {
      id: 4,
      title: "Sollabs",
      description:
        "Sollabs is a Lab Record Management System of US Based Lab that maintain the records of their testing tubes and track locations of them in trays as well",
      live: "https://sollabs.viralsolutionsga.com/login",
      technology: ["React", "Node", "Antd", "Twilio"],
      technologies: [
        "React",
        "Node.js",
        "Ant Design",
        "Twilio",
        "MongoDB",
        "Express.js",
      ],
      features: [
        "Laboratory test tube tracking system",
        "Tray location management and inventory",
        "Real-time status updates and notifications",
        "Barcode scanning for test tube identification",
        "Comprehensive reporting and analytics",
        "Multi-user access with role-based permissions",
      ],
      longDescription:
        "A sophisticated laboratory record management system designed for US-based laboratories to efficiently track and manage testing tubes and their locations within storage trays. The system provides real-time inventory management, automated notifications, and comprehensive reporting capabilities to ensure accurate sample tracking and laboratory operations.",
      challenges: [
        "Implementing barcode scanning functionality",
        "Creating real-time inventory tracking",
        "Ensuring data accuracy and integrity",
        "Managing complex laboratory workflows",
      ],
      results: [
        "Improved laboratory efficiency by 60%",
        "Reduced sample tracking errors to near zero",
        "Streamlined inventory management processes",
        "Enhanced compliance with laboratory standards",
      ],
    },
  ]);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            OTHER • NOTEWORTHY PROJECTS
          </h2>
          <motion.p
            className="text-mint-400 text-sm font-medium tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            view the archive
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ArchiveCard
                title={project.title}
                des={project.description}
                listItem={project.technology}
                link={project.live}
                onClick={() => handleProjectClick(project)}
              />
            </motion.div>
          ))}
        </motion.div>


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

export default Archive;
