import { motion } from "framer-motion";
import { FaPlay, FaArrowDown } from "react-icons/fa";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border border-mint-400/20 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 border border-mint-400/30 rounded-full"
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 border border-mint-400/25 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Moving Skills Text */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Row - Moving Right */}
          <motion.div
            className="absolute top-20 left-0 text-gray-500/10 text-6xl font-bold whitespace-nowrap"
            animate={{ x: ["-100vw", "100vw"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            REACT • NEXT.JS • TYPESCRIPT • JAVASCRIPT • TAILWIND CSS • HTML5 •
            CSS3 • FRAMER MOTION
          </motion.div>

          {/* Second Row - Moving Left */}
          <motion.div
            className="absolute top-40 right-0 text-gray-500/10 text-5xl font-bold whitespace-nowrap"
            animate={{ x: ["100vw", "-100vw"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            PYTHON • FASTAPI • NODE.JS • NESTJS • POSTGRESQL • MONGODB • REDIS •
            PRISMA
          </motion.div>

          {/* Third Row - Moving Right */}
          <motion.div
            className="absolute top-60 left-0 text-gray-500/10 text-4xl font-bold whitespace-nowrap"
            animate={{ x: ["-100vw", "100vw"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            DOCKER • GIT • SUPABASE • GOOGLE CLOUD • AWS • DATABASE DESIGN • API
            DEVELOPMENT • CLOUD STORAGE
          </motion.div>

          {/* Bottom Row - Moving Left */}
          <motion.div
            className="absolute bottom-40 right-0 text-gray-500/10 text-5xl font-bold whitespace-nowrap"
            animate={{ x: ["100vw", "-100vw"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            FULL-STACK • FRONTEND • BACKEND • MICROSERVICES • CLOUD INTEGRATION
            • PERFORMANCE OPTIMIZATION
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span
            className="text-mint-400 text-sm font-medium tracking-widest uppercase inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Available for freelance
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            HEY, I&apos;M{" "}
          </motion.span>
          <motion.span
            className="text-mint-400 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.02,
            }}
          >
            FAISAL
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            FULL-STACK DEVELOPER
          </motion.span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <motion.span
            className="text-gray-300 text-lg md:text-xl font-medium inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            FRONTEND • BACKEND • FULL-STACK
          </motion.span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.a
            href="#project"
            className="inline-flex items-center gap-3 btn-primary text-lg px-8 py-4"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaPlay className="text-sm" />
            See My Portfolio
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;

