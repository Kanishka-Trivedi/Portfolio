import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { projects, Project } from '../data/projectsData';

const ProjectSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const getIndices = () => {
    const prev = (currentIndex - 1 + projects.length) % projects.length;
    const next = (currentIndex + 1) % projects.length;
    return [prev, currentIndex, next];
  };

  const [prev, current, next] = getIndices();

  const displayedProjects = [
    { ...projects[prev], position: 'left' },
    { ...projects[current], position: 'center' },
    { ...projects[next], position: 'right' }
  ];

  const getCardStyles = (position: string) => {
    switch (position) {
      case 'center':
        return {
          zIndex: 30,
          scale: 1,
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
        };
      case 'left':
        return {
          zIndex: 20,
          scale: 0.85,
          opacity: 0.5,
          x: '-35%',
          filter: 'blur(4px)',
        };
      case 'right':
        return {
          zIndex: 20,
          scale: 0.85,
          opacity: 0.5,
          x: '35%',
          filter: 'blur(4px)',
        };
      default:
        return {};
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
            My <span className="text-[#c77dff]">Works</span>
          </h2>
        </div>

        <div className="relative h-[550px] flex items-center justify-center">
          {/* Navigation Arrows */}
          <button 
            onClick={prevProject}
            className="absolute left-0 md:left-4 z-40 p-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          <button 
            onClick={nextProject}
            className="absolute right-0 md:right-4 z-40 p-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Projects Carousel - Sliding logic fixed for better horizontal feel */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center py-6">
            <AnimatePresence initial={false}>
              {displayedProjects.map((project) => {
                const isFrontend = project.category === 'Frontend';
                const isBackend = project.category === 'Backend';
                const themeColor = isFrontend ? '#6366f1' : isBackend ? '#ec4899' : '#10b981';
                const themeBg = isFrontend ? 'bg-[#6366f125]' : isBackend ? 'bg-[#ec489925]' : 'bg-[#10b98125]';

                const styles = getCardStyles(project.position);

                return (
                  <motion.div
                    key={project.id}
                    initial={{ 
                      x: project.position === 'left' ? '-100%' : project.position === 'right' ? '100%' : 0,
                      opacity: 0,
                      scale: 0.5 
                    }}
                    animate={styles}
                    exit={{ 
                      x: project.position === 'left' ? '-100%' : project.position === 'right' ? '100%' : 0, 
                      opacity: 0,
                      scale: 0.5 
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 260, 
                      damping: 20,
                      opacity: { duration: 0.2 } 
                    }}
                    className="absolute w-[280px] md:w-[380px] pointer-events-none"
                    style={{ zIndex: styles.zIndex }}
                  >
                    <div className="relative bg-[#09090b] border border-[#1a1a1a] rounded-[2rem] overflow-hidden shadow-2xl group pointer-events-auto">
                      {/* Project Image */}
                      <div className="relative aspect-[1.3/1] m-2 overflow-hidden rounded-[1.8rem]">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        
                        {/* Year Badge */}
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-white border border-white/10">
                          {project.year}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6 pt-2">
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md mb-3 inline-block ${themeBg}`} style={{ color: themeColor }}>
                          {project.category}
                        </span>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight">
                          {project.title}
                        </h3>
                        
                        <p className="text-[11px] font-semibold mb-3" style={{ color: themeColor }}>
                          {project.tagline}
                        </p>

                        <p className="text-[#808080] text-[12px] leading-relaxed mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#7a62ff] to-[#a855f7] text-white flex items-center justify-center gap-2 font-bold text-[12px] shadow-lg hover:shadow-purple-500/20 transition-all hover:scale-[1.02]"
                          >
                            Live Demo <ExternalLink size={14} />
                          </a>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                          >
                            <Github size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
