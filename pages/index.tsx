import Banner from "@/components/Banner";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Above-fold: SSR for fast first paint
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });

// Below-fold: skip SSR to reduce initial HTML payload
const Archive = dynamic(() => import("@/components/Archive"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Meeting = dynamic(() => import("@/components/Meeting"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

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

      <main className="w-full min-h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden">
        <Navbar />
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0 z-10"
          >
            <LeftSide />
          </motion.div>
          <div className="w-full">
            <Banner />
            <About />
            <Projects />
            <Archive />
            <Services />
            <Experience />
            <Skills />
            <Meeting />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0 z-10"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}

