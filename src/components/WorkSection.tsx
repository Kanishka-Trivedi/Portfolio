import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: '01',
    number: '01',
    title: 'Verbio — Socializing Platform',
    description:
      'Verbio is a real-time social platform that helps people connect, make friends, chat instantly, and video call seamlessly.',
    image:
      'https://res.cloudinary.com/ddc8en3sk/image/upload/v1768814015/Screenshot_2026-01-19_144311_lxeq9l.png',
    tags: ['Making Friends', 'Real Time Chatting', 'Video Calling']
  },
  {
    id: '02',
    number: '02',
    title: 'Willow & Vine — E-commerce Platform',
    description:
      'Willow & Vine is an e-commerce platform for buying and selling plants and gardening essentials in one seamless marketplace.',
    image:
      'https://res.cloudinary.com/ddc8en3sk/image/upload/v1768813977/Screenshot_2026-01-19_144231_f47eey.png',
    tags: ['Plant Marketplace', 'Garden Tools', 'Plant Care', 'Secure Checkout', 'Wishlist', 'Search & Filter']
  },
  {
    id: '03',
    number: '03',
    title: 'Finoptix — Financial Tracking App',
    description:
      'Finoptix is a financial tracking application built with React, Vite, and MongoDB that helps users monitor expenses, optimize savings, and identify discrepancies through smart alerts and real-time insights.',
    image:
      'https://res.cloudinary.com/ddc8en3sk/image/upload/v1768813859/Screenshot_2026-01-19_144036_wvlous.png',
    tags: ['Expense Tracking', 'Savings Insights', 'Smart Alerts', 'Real-time Data', 'Financial Dashboard', 'Spending Analysis']
  },
  {
    id: '04',
    number: '04',
    title: 'Gear Guard — Maintenance Management System',
    description:
      'A full-stack MERN maintenance management system for tracking enterprise assets and managing corrective and preventive maintenance across the complete request lifecycle.',
    image:
      'https://res.cloudinary.com/ddc8en3sk/image/upload/v1770282174/Screenshot_2026-02-05_143234_lvirmd.png',
    tags: ['Asset Inventory', 'Maintenance Requests', 'Preventive Maintenance Scheduling', 'Work Order Management', 'Technician Assignment', 'Maintenance History Tracking']
  },
  {
    id: '05',
    number: '05',
    title: 'NASA Clone — Frontend Web Clone',
    description:
      'NASA Clone is a responsive website built using HTML and CSS that recreates the visual design of NASA’s official site, featuring space imagery and mission-related content.',
    image:
      'https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281789/Project3_zt6wgr.png',
    tags: ['Responsive Design', 'Space Imagery', 'Landing Page UI', 'Static Content Layout', 'Modern CSS Styling', 'Web Design Practice']
  },
  {
    id: '06',
    number: '06',
    title: 'Canva Clone — UI/UX Frontend Clone',
    description:
      'Canva Clone is a responsive website built using HTML and CSS that replicates Canva’s modern user interface with a clean, sleek layout and design-focused styling.',
    image:
      'https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project4_lwdpxv.png',
    tags: ['Responsive Layout', 'Modern UI Design', 'CSS Flexbox & Grid', 'Landing Page Clone', 'Visual Design Practice', 'Pixel-Perfect Styling']
  },
  {
    id: '07',
    number: '07',
    title: 'Citadel Clone — Corporate Website Clone',
    description:
      'A responsive HTML and CSS replica of Citadel’s website, featuring a sleek, professional layout and modern design structure.',
    image:
      'https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project5_lqhc4x.png',
    tags: ['Responsive Layout', 'Corporate UI', 'Modern Styling', 'Landing Page Clone', 'Clean Typography', 'Design Replication']
  }
];

const WorkSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const pinTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    // Cleanup
    triggersRef.current.forEach(trigger => trigger.kill());
    triggersRef.current = [];
    if (pinTriggerRef.current) {
      pinTriggerRef.current.kill();
      pinTriggerRef.current = null;
    }

    const ctx = gsap.context(() => {
      const lastProject = projectRefs.current[projects.length - 1];

      if (imageCardRef.current && lastProject && sectionRef.current) {
        // Calculate proper end position
        // We want the last project's center to align with image center
        const imageRect = imageCardRef.current.getBoundingClientRect();
        const imageCenter = imageRect.height / 2;

        // Get the last project's position relative to container
        const lastProjectTop = lastProject.offsetTop;
        const lastProjectHeight = lastProject.offsetHeight;
        const lastProjectCenter = lastProjectTop + (lastProjectHeight / 2);

        // Calculate scroll distance needed
        // The pin should end when last project is centered in viewport
        const viewportCenter = window.innerHeight / 2;
        const scrollOffset = lastProjectCenter - viewportCenter;

        // Add padding to ensure proper alignment
        const endValue = `+=${Math.max(scrollOffset, 0)}`;

        pinTriggerRef.current = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: endValue,
          pin: imageCardRef.current,
          pinSpacing: true
        });
      }

      projectRefs.current.forEach((projectEl, index) => {
        if (!projectEl) return;

        const textContent = projectEl.querySelector('.project-text-wrapper');

        // Set initial state
        gsap.set(textContent, {
          x: 200,
          y: 300,
          rotation: 20,
          opacity: 0,
          scale: 0.9,
          transformOrigin: 'left center'
        });

        // Arc entrance - from bottom right curving to center
        const entranceTrigger = ScrollTrigger.create({
          trigger: projectEl,
          start: 'top 85%',
          end: 'top 45%',
          scrub: 0.8,
          onUpdate: (self) => {
            const progress = self.progress;
            const x = gsap.utils.interpolate(200, 0, progress);
            const y = gsap.utils.interpolate(300, 0, Math.pow(progress, 0.7));
            const rot = gsap.utils.interpolate(20, 0, progress);
            const opacity = Math.min(progress * 2, 1);
            const scale = gsap.utils.interpolate(0.9, 1, progress);

            gsap.set(textContent, {
              x: x,
              y: y,
              rotation: rot,
              opacity: opacity,
              scale: scale
            });
          },
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
          onLeaveBack: () => {
            if (index > 0) setActiveIndex(index - 1);
          },
        });

        // For the last project, don't exit - stay visible and centered
        if (index === projects.length - 1) {
          triggersRef.current.push(entranceTrigger);
          return;
        }

        // Straight exit upward for non-last projects
        const exitTrigger = ScrollTrigger.create({
          trigger: projectEl,
          start: 'top 25%',
          end: 'top -25%',
          scrub: 0.8,
          onUpdate: (self) => {
            const progress = self.progress;
            const y = gsap.utils.interpolate(0, -200, progress);
            const opacity = 1 - progress;

            gsap.set(textContent, {
              y: y,
              opacity: opacity,
              x: 0,
              rotation: 0,
              scale: 1
            });
          }
        });

        triggersRef.current.push(entranceTrigger, exitTrigger);
      });
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      if (pinTriggerRef.current) {
        pinTriggerRef.current.kill();
      }
      ctx.revert();
    };
  }, []);

  // Image crossfade
  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 1.02,
        duration: 0.2,
        onComplete: () => {
          if (imageRef.current) {
            imageRef.current.src = projects[activeIndex].image;
            gsap.to(imageRef.current, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: 'power2.out'
            });
          }
        }
      });
    }
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050505] text-white font-sans"
    >
      {/* Background System: High-Visibility Grid + Floating Spheres */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#1a103d] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#0d1b3e] rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto pt-32 pb-40">

        {/* Main Grid: Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-start">

          {/* LEFT: Sticky Image Card */}
          <div className="relative lg:h-[calc(100vh-8rem)]">
            <div
              ref={imageCardRef}
              className="lg:sticky lg:top-32 w-full max-w-[520px]"
            >
              {/* Rectangle Card with rounded corners */}
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#151515] shadow-2xl border border-white/10">
                {/* Browser chrome */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-[#1e1e2e] flex items-center px-4 gap-3 z-20 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]/80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28c840]/80"></div>
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="h-7 bg-[#0a0a0a]/40 rounded-lg flex items-center px-3 gap-2">
                      <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <div className="h-2 w-20 bg-gray-600/30 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <img
                  ref={imageRef}
                  src={projects[0].image}
                  alt="Project"
                  className="w-full h-full object-cover pt-12"
                />

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* RIGHT: Scrolling Projects with Arc Animation */}
          <div ref={projectsContainerRef} className="relative flex flex-col">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={el => projectRefs.current[index] = el}
                className={`flex justify-start pl-0 lg:pl-8 ${index === 0 ? 'min-h-[100vh] pt-52' : index === projects.length - 1 ? 'min-h-[50vh] items-center' : 'min-h-[100vh] items-center'
                  }`}
              >
                <div className="project-text-wrapper max-w-md will-change-transform">
                  {/* Mobile image */}
                  <div className="lg:hidden mb-6 rounded-2xl overflow-hidden border border-white/10">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  </div>

                  {/* Number */}
                  <span className="inline-block text-purple-500 font-bold text-xl mb-3">
                    {project.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* View All Projects link (last item only) */}
                  {/* {index === projects.length - 1 && (
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 border border-purple-500/30 rounded-lg text-sm text-purple-400 hover:bg-purple-500/10 transition-colors"
                    >
                      View All Projects
                      <span>→</span>
                    </a>
                  )} */}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkSection;  