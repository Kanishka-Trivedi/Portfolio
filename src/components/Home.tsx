import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { CloudDownload } from './CloudDownload';
import { FileChartColumn } from './FileChartColumn';
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import ScrollIndicator from './ScrollIndicator';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-2';
import { VortexBackground } from '@/components/ui/vortex-background';
import Me from "../assets/Me.png";
import MyImage from "../assets/MyImage.png";
import ProjectSlider from './ProjectSlider';

const Home = () => {

  const handleResumeView = () => {
    window.open(`https://drive.google.com/file/d/1d6nYBXQnjxwcIQdcuHp8om2Rm8nuhM4p/view?usp=sharing`, '_blank');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/KanishkaTrivedi.pdf';
    link.download = 'KanishkaTrivedi.pdf';
    link.click();
  };

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <VortexBackground />
      </div>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-0 md:pt-0">
        <div className="container mx-auto px-6 z-10 relative flex flex-col justify-start h-full">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 w-full">

            {/* Profile Image */}
            <motion.div
              className="flex-1 flex justify-center order-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 blur"></div>

                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-blue-500/30 p-1.5 bg-black/50 backdrop-blur-sm shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={MyImage}
                      alt="Kanishka Trivedi"
                      className="w-full h-full object-cover transition-all duration-700 scale-105 hover:scale-100"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left order-2">
              <motion.h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <span className="block text-gray-400 text-base sm:text-lg md:text-xl font-medium mb-1">Hello, I'm</span>
                <span className="block text-white mb-2">Kanishka Trivedi</span>
                <span className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">
                  Full Stack Developer
                </span>
              </motion.h1>

              <motion.h2 className="text-base sm:text-lg md:text-xl text-gray-400 mb-4"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <span className="block mb-1">I craft</span>
                <AnimatedText
                  text={[
                    "Complete full-stack web solutions",
                    "Intelligent & data-driven features",
                    "End-to-end web application development",
                    "Functional and reliable full-stack systems"
                  ]}
                  className="text-blue-400 font-medium"
                />
              </motion.h2>

              <motion.p className="text-sm md:text-md mb-3 text-gray-500 max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                Building reliable, intuitive, and future-ready software with a passion for innovation.
              </motion.p>

              {/* Social Icons */}
              <motion.div className="flex justify-center md:justify-start gap-6 mb-10"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                {[Github, Linkedin, Twitter, Youtube].map((Icon, i) => {
                  const links = [
                    "https://github.com/Kanishka-Trivedi",
                    "https://www.linkedin.com/in/kanishka-trivedi/",
                    "https://x.com/kanishkatr76445",
                    "https://www.youtube.com/@logic_lane6"
                  ];
                  return (
                    <a key={i} href={links[i]} target="_blank" rel="noopener noreferrer" className="group">
                      <div className="relative p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow group-hover:shadow-lg transition-all duration-300">
                        <Icon className="w-5 h-5 text-white group-hover:text-blue-400" />
                      </div>
                    </a>
                  );
                })}
              </motion.div>

              {/* Resume Buttons */}
              <motion.div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <div className="flex items-center gap-2">
                  <button className="gradient-border-button" onClick={handleResumeView}>
                    <FileChartColumn width={20} height={20} stroke="#ffffff" /> Resume
                  </button>
                  <button className="gradient-border-button download-btn" onClick={handleResumeDownload}>
                    <CloudDownload width={20} height={20} stroke="#ffffff" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </section>
      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden">

        {/* Content Container */}
        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

            {/* LEFT TEXT */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <h2 className="text-4xl md:text-6xl font-bold text-[#c77dff] mb-4">
                  Me, Myself and I
                </h2>
                <div className="w-36 h-1.5 bg-orange-500 rounded-full"></div>
              </div>
              <p className="text-white-300 leading-relaxed text-lg">
                I'm <span className="text-[#c77dff] font-semibold">Kanishka Trivedi</span>, a full-stack developer driven by curiosity and a passion for building meaningful digital experiences. I enjoy transforming ideas into real, scalable products that are not only functional but intuitive and impactful.
                <br /><br />
                My work sits at the intersection of clean frontend design and solid backend engineering. I love solving challenging problems, optimizing performance, and continuously learning modern technologies that push my skills forward.
                <br /><br />
                Beyond writing code, I’m deeply interested in innovation, emerging technologies like AI, and creating solutions that genuinely make people’s lives easier. I’m always exploring, improving, and building with purpose.
              </p>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Decorative border */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-orange-500 rounded-tr-[40px] rounded-bl-[40px]"></div>

                <img
                  src={Me}
                  alt="About Kanishka"
                  className="relative w-[400px] md:w-[400px] h-[500px] lg:w-[360px] object-cover rounded-tr-[40px] rounded-bl-[40px] shadow-2xl"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ---------------- PROJECT SLIDER SECTION ---------------- */}
      <ProjectSlider />


      <section id="features" className="section-container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-center text-4xl md:text-6xl font-bold text-white mb-12">
            Core <span className="text-[#c77dff]">Capabilities</span>
          </h2>
          <FeaturesSectionDemo />
        </motion.div>
      </section>

      {/* GitHub Contribution Chart Section */}
      <section className="section-container relative z-10 pb-20 pt-10">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Coding <span className="text-[#c77dff]">Activity</span>
            </h2>
          </div>

          <div className="p-6 md:p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Github className="w-6 h-6 text-[#c77dff]" />
              <span className="text-lg font-medium text-gray-300">@Kanishka-Trivedi on GitHub</span>
            </div>
            <div className="overflow-x-auto overflow-y-hidden pb-4 custom-scrollbar">
              <img
                src="https://ghchart.rshah.org/7c3aed/Kanishka-Trivedi"
                alt="Kanishka's GitHub Contributions"
                className="min-w-[800px] w-full filter contrast-125 saturate-150"
              />
            </div>
          </div>
        </motion.div>
      </section>

    </>
  );
};

export default Home;