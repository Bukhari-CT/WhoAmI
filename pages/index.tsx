import Banner from "@/components/Banner";
import LeftSide from "@/components/LeftSide";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy load components that aren't immediately visible
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Certifications = dynamic(() => import("@/components/Certifications"), {
  ssr: true,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: true,
});
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Archive = dynamic(() => import("@/components/Archive"), { ssr: true });
const Meeting = dynamic(() => import("@/components/Meeting"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>Faisal Bukhari</title>
        <meta
          name="description"
          content="Full-Stack Developer specializing in modern web applications and AI-powered solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Loading Screen */}
      <LoadingScreen />

      <main className="w-full min-h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden">
        <Navbar />
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0 z-10"
          >
            <LeftSide />
          </motion.div>
          <div className="w-full">
            <Banner />
            <About />
            <Skills />
            <Certifications />
            <Experience />
            <Services />
            <Projects />
            <Archive />
            <Meeting />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0 z-10"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
