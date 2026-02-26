import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: number;
    title: string;
    tagline: string;
    year: string;
    category: 'Frontend' | 'Backend' | 'Full Stack';
    description: string;
    features: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
}

interface ScrollLayoutProps {
    projects: Project[];
}

const ScrollLayout: React.FC<ScrollLayoutProps> = ({ projects }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const imageRef = useRef<HTMLImageElement>(null);
    const imageCardRef = useRef<HTMLDivElement>(null);
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

        if (projects.length === 0) return;

        // reset index
        setActiveIndex(0);

        const ctx = gsap.context(() => {
            const lastProject = projectRefs.current[projects.length - 1];

            if (imageCardRef.current && lastProject && sectionRef.current) {
                const imageRect = imageCardRef.current.getBoundingClientRect();

                const lastProjectTop = lastProject.offsetTop;
                const lastProjectHeight = lastProject.offsetHeight;
                const lastProjectCenter = lastProjectTop + (lastProjectHeight / 2);

                const viewportCenter = window.innerHeight / 2;
                const scrollOffset = lastProjectCenter - viewportCenter;

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

                gsap.set(textContent, {
                    x: 200, y: 300, rotation: 20, opacity: 0, scale: 0.9, transformOrigin: 'left center'
                });

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

                        gsap.set(textContent, { x, y, rotation: rot, opacity, scale });
                    },
                    onEnter: () => setActiveIndex(index),
                    onEnterBack: () => setActiveIndex(index),
                    onLeaveBack: () => { if (index > 0) setActiveIndex(index - 1); },
                });

                if (index === projects.length - 1) {
                    triggersRef.current.push(entranceTrigger);
                    return;
                }

                const exitTrigger = ScrollTrigger.create({
                    trigger: projectEl,
                    start: 'top 25%',
                    end: 'top -25%',
                    scrub: 0.8,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const y = gsap.utils.interpolate(0, -200, progress);
                        const opacity = 1 - progress;
                        gsap.set(textContent, { y, opacity, x: 0, rotation: 0, scale: 1 });
                    }
                });

                triggersRef.current.push(entranceTrigger, exitTrigger);
            });
        }, sectionRef);

        return () => {
            triggersRef.current.forEach(trigger => trigger.kill());
            if (pinTriggerRef.current) pinTriggerRef.current.kill();
            ctx.revert();
        };
    }, [projects]);

    useEffect(() => {
        if (imageRef.current && projects[activeIndex]) {
            gsap.to(imageRef.current, {
                opacity: 0,
                scale: 1.02,
                duration: 0.2,
                onComplete: () => {
                    if (imageRef.current && projects[activeIndex]) {
                        imageRef.current.src = projects[activeIndex].image;
                        gsap.to(imageRef.current, {
                            opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out'
                        });
                    }
                }
            });
        }
    }, [activeIndex, projects]);

    if (projects.length === 0) return null;

    return (
        <section ref={sectionRef} className="relative w-full text-white font-sans mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-start pb-40">

                {/* LEFT: Sticky Image Card */}
                <div className="relative lg:h-[calc(100vh-8rem)]">
                    <div ref={imageCardRef} className="lg:sticky lg:top-32 w-full max-w-[520px]">
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#151515] shadow-2xl border border-white/10">
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
                            <img
                                ref={imageRef}
                                src={projects[0]?.image}
                                alt="Project Preview"
                                className="w-full h-full object-cover pt-12"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Scrolling Projects */}
                <div className="relative flex flex-col pt-0 pb-20">
                    {projects.map((project, index) => {
                        const isFrontend = project.category === 'Frontend';
                        const isBackend = project.category === 'Backend';
                        const themeColor = isFrontend ? '#6366f1' : isBackend ? '#ec4899' : '#10b981';
                        const number = String(index + 1).padStart(2, '0');

                        return (
                            <div
                                key={project.id}
                                ref={el => projectRefs.current[index] = el}
                                className={`flex justify-start pl-0 lg:pl-8 ${index === 0 ? 'min-h-[100vh] pt-52' : index === projects.length - 1 ? 'min-h-[50vh] items-center' : 'min-h-[100vh] items-center'
                                    }`}
                            >
                                <div className="project-text-wrapper max-w-md will-change-transform">
                                    <div className="lg:hidden mb-6 rounded-2xl overflow-hidden border border-white/10">
                                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                    </div>

                                    <span className="inline-block font-bold text-xl mb-3" style={{ color: themeColor }}>
                                        {number}
                                    </span>

                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-[13px] font-semibold mb-4" style={{ color: themeColor }}>
                                        {project.tagline}
                                    </p>

                                    <p className="text-gray-400 text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.features.map((feature, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] rounded-full font-bold text-sm text-white transition-transform hover:scale-105 active:scale-95 shadow-lg">
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#212121] border border-white/10 rounded-full font-bold text-sm text-white transition-transform hover:scale-105 active:scale-95 shadow-lg">
                                            <Github size={16} /> Source
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ScrollLayout;
