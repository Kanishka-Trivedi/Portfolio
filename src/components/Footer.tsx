// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Heart, ArrowUp, Atom, FileCode, Palette, Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';

// interface Particle {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   size: number;
//   alpha: number;
// }

// interface MagneticButtonProps {
//   children: React.ReactNode;
//   className?: string;
//   onClick?: () => void;
// }

// const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
//   const ref = useRef<HTMLButtonElement>(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     const x = (e.clientX - centerX) * 0.3;
//     const y = (e.clientY - centerY) * 0.3;
//     setPosition({ x, y });
//   }, []);

//   const handleMouseLeave = useCallback(() => {
//     setPosition({ x: 0, y: 0 });
//   }, []);

//   return (
//     <button
//       ref={ref}
//       onClick={onClick}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className={className}
//       style={{
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//       }}
//     >
//       {children}
//     </button>
//   );
// };

// const Footer: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const particlesRef = useRef<Particle[]>([]);
//   const animationRef = useRef<number>();
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const [hoveredTech, setHoveredTech] = useState<string | null>(null);

//   const currentYear = new Date().getFullYear();

//   const techStack = [
//     { icon: Atom, label: "React", color: "#61DAFB", glow: "hover:shadow-[0_0_30px_rgba(97,218,251,0.6)]" },
//     { icon: FileCode, label: "TypeScript", color: "#3178C6", glow: "hover:shadow-[0_0_30px_rgba(49,120,198,0.6)]" },
//     { icon: Palette, label: "Tailwind", color: "#38BDF8", glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]" },
//     { icon: Zap, label: "Vite", color: "#646CFF", glow: "hover:shadow-[0_0_30px_rgba(100,108,255,0.6)]" },
//   ];

//   // Particle network animation
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth * window.devicePixelRatio;
//       canvas.height = canvas.offsetHeight * window.devicePixelRatio;
//       ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
//       initParticles();
//     };

//     const initParticles = () => {
//       const particles: Particle[] = [];
//       const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000);
      
//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.offsetWidth,
//           y: Math.random() * canvas.offsetHeight,
//           vx: (Math.random() - 0.5) * 0.5,
//           vy: (Math.random() - 0.5) * 0.5,
//           size: Math.random() * 2 + 1,
//           alpha: Math.random() * 0.5 + 0.2,
//         });
//       }
//       particlesRef.current = particles;
//     };

//     const drawGradientOverlay = () => {
//       const gradient = ctx.createLinearGradient(0, 0, 0, canvas.offsetHeight);
//       gradient.addColorStop(0, 'rgba(17, 24, 39, 0)');
//       gradient.addColorStop(0.5, 'rgba(17, 24, 39, 0.3)');
//       gradient.addColorStop(1, 'rgba(17, 24, 39, 0.9)');
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
//       const particles = particlesRef.current;
//       const connections: [number, number][] = [];
      
//       // Update and draw particles
//       particles.forEach((particle, i) => {
//         particle.x += particle.vx;
//         particle.y += particle.vy;
        
//         // Bounce off edges
//         if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1;
//         if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1;
        
//         // Mouse attraction
//         const dx = mouseRef.current.x - particle.x;
//         const dy = mouseRef.current.y - particle.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
//         if (dist < 150) {
//           particle.x += dx * 0.02;
//           particle.y += dy * 0.02;
//         }
        
//         // Draw particle
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(139, 92, 246, ${particle.alpha})`;
//         ctx.fill();
        
//         // Find connections
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[j].x - particle.x;
//           const dy = particles[j].y - particle.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < 120) {
//             connections.push([i, j]);
//           }
//         }
//       });
      
//       // Draw connections with gradient
//       connections.forEach(([i, j]) => {
//         const p1 = particles[i];
//         const p2 = particles[j];
//         const dx = p2.x - p1.x;
//         const dy = p2.y - p1.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
//         const alpha = (1 - dist / 120) * 0.3;
        
//         const lineGradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//         lineGradient.addColorStop(0, `rgba(139, 92, 246, ${alpha})`);
//         lineGradient.addColorStop(0.5, `rgba(236, 72, 153, ${alpha})`);
//         lineGradient.addColorStop(1, `rgba(139, 92, 246, ${alpha})`);
        
//         ctx.beginPath();
//         ctx.moveTo(p1.x, p1.y);
//         ctx.lineTo(p2.x, p2.y);
//         ctx.strokeStyle = lineGradient;
//         ctx.lineWidth = 0.8;
//         ctx.stroke();
//       });
      
//       drawGradientOverlay();
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = canvas.getBoundingClientRect();
//       mouseRef.current = {
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top
//       };
//     };

//     resize();
//     window.addEventListener('resize', resize);
//     canvas.addEventListener('mousemove', handleMouseMove);
//     animate();

//     return () => {
//       window.removeEventListener('resize', resize);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//     };
//   }, []);

//   // Scroll detection
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowBackToTop(window.scrollY > 400);
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="relative w-full overflow-hidden bg-gray-950">
//       {/* Animated Wave Separator */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180">
//         <svg 
//           className="relative block w-full h-24 animate-pulse"
//           xmlns="http://www.w3.org/2000/svg" 
//           viewBox="0 0 1200 120" 
//           preserveAspectRatio="none"
//         >
//           <path 
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
//             className="fill-gray-900/50 opacity-50"
//           ></path>
//           <path 
//             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
//             className="fill-gray-950"
//           ></path>
//         </svg>
//       </div>

//       {/* Particle Canvas Background */}
//       <div className="absolute inset-0 h-96 top-0 opacity-40">
//         <canvas 
//           ref={canvasRef} 
//           className="w-full h-full"
//           style={{ filter: 'blur(0.5px)' }}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 pt-32 pb-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           {/* Top Section - Asymmetric Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
//             {/* Brand Column - Spans 5 */}
//             <div className="lg:col-span-5 space-y-6">
//               <div className="group relative">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
//                 <div className="relative flex items-center space-x-4 bg-gray-900/80 backdrop-blur-xl rounded-lg p-6 border border-gray-800/50">
//                   <div className="relative">
//                     <img 
//                       src="/Logo1.png" 
//                       alt="Kanishka" 
//                       className="h-14 w-15 rounded-xl animate-[spin_10s_linear_infinite] hover:pause"
//                       style={{ animationPlayState: 'running' }}
//                       onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
//                       onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
//                     />
//                     <div className="absolute inset-0 bg-violet-500/20 rounded-xl blur-xl"></div>
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
//                       Kanishka Trivedi
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-1">Crafting Digital Experiences</p>
//                   </div>
//                 </div>
//               </div>
              
//               <p className="text-gray-400 leading-relaxed text-sm max-w-sm pl-2 border-l-2 border-violet-500/30">
//                 Building immersive web experiences with modern technologies. 
//                 Passionate about performance, animation, and accessible design.
//               </p>
//             </div>

//             {/* Tech Stack Orbit - Spans 4 */}
//             <div className="lg:col-span-4 flex flex-col items-center justify-center">
//               <h4 className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-6 font-semibold">Tech Stack</h4>
//               <div className="flex flex-wrap justify-center gap-4">
//                 {techStack.map((tech, index) => (
//                   <div
//                     key={tech.label}
//                     className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-110 ${hoveredTech && hoveredTech !== tech.label ? 'opacity-40 scale-90' : 'opacity-100'}`}
//                     onMouseEnter={() => setHoveredTech(tech.label)}
//                     onMouseLeave={() => setHoveredTech(null)}
//                     style={{ 
//                       animationDelay: `${index * 150}ms`,
//                       transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
//                     }}
//                   >
//                     <div className={`absolute inset-0 rounded-2xl blur-lg transition-opacity duration-300 opacity-0 group-hover:opacity-60`} 
//                       style={{ backgroundColor: tech.color }} 
//                     />
//                     <div className={`relative p-4 rounded-2xl bg-gray-900/80 border border-gray-800 ${tech.glow} transition-all duration-300`}>
//                       <tech.icon 
//                         className="w-6 h-6 transition-colors duration-300" 
//                         style={{ color: hoveredTech === tech.label ? tech.color : '#9CA3AF' }}
//                       />
//                     </div>
//                     <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap translate-y-2 group-hover:translate-y-0">
//                       {tech.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links - Spans 3 */}
//             <div className="lg:col-span-3 flex flex-col items-end justify-center space-y-4">
//               <h4 className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-2 font-semibold w-full text-right">Connect</h4>
//               {[ 
//                 { icon: Github, label: 'GitHub', href: '#' },
//                 { icon: Twitter, label: 'Twitter', href: '#' },
//                 { icon: Linkedin, label: 'LinkedIn', href: '#' },
//                 { icon: Mail, label: 'Email', href: '#' }
//               ].map((social) => (
//                 <MagneticButton
//                   key={social.label}
//                   className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 p-2 -mr-2 rounded-lg hover:bg-white/5"
//                   onClick={() => window.open(social.href, '_blank')}
//                 >
//                   <span className="text-sm font-medium tracking-wide group-hover:translate-x-[-4px] transition-transform duration-300">
//                     {social.label}
//                   </span>
//                   <social.icon className="w-5 h-5" />
//                 </MagneticButton>
//               ))}
//             </div>
//           </div>

//           {/* Giant Watermark Text */}
//           <div className="relative h-32 overflow-hidden mb-8 select-none pointer-events-none">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="text-[12rem] md:text-[16rem] font-black text-gray-900/50 tracking-tighter transform scale-110">
//                 KANISHKA
//               </span>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
//           </div>

//           {/* Bottom Bar */}
//           <div className="relative pt-8 border-t border-gray-800/50 backdrop-blur-sm">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//               <p className="text-gray-500 text-sm flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//                 Available for projects • {currentYear}
//               </p>
              
//               <div className="flex items-center gap-6">
//                 <span className="text-gray-600 text-sm flex items-center gap-2">
//                   Built with 
//                   <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-[heartbeat_1.5s_ease-in-out_infinite]" /> 
//                   & 
//                   <span className="text-violet-400 font-mono text-xs bg-violet-950/30 px-2 py-1 rounded border border-violet-500/20">
//                     &lt;Code/&gt;
//                   </span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Back to Top - Orbiting Button */}
//       <MagneticButton
//         className={`fixed bottom-8 right-8 group ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} transition-all duration-700 ease-out z-50`}
//         onClick={scrollToTop}
//       >
//         <div className="relative">
//           <div className="absolute inset-0 bg-violet-500 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
//           <div className="relative p-4 bg-gray-900 border border-gray-700 rounded-full shadow-2xl group-hover:border-violet-500/50 transition-all duration-300 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <ArrowUp className="w-6 h-6 text-gray-400 group-hover:text-white transform group-hover:-translate-y-1 transition-all duration-300" />
//           </div>
//           {/* Orbiting particles */}
//           <div className="absolute inset-0 animate-[spin_3s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div className="absolute top-0 left-1/2 w-1 h-1 bg-violet-400 rounded-full -translate-x-1/2 -translate-y-2"></div>
//           </div>
//         </div>
//       </MagneticButton>

//       <style>{`
//         @keyframes heartbeat {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.1); }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;





import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Heart, ArrowUp, Youtube, Github, Twitter, Linkedin, Mail } from 'lucide-react';

import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";
import Logo from "../assets/Logo1.png";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) * 0.3;
    const y = (e.clientY - centerY) * 0.3;
    setPosition({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {children}
    </button>
  );
};

const Footer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();

  const techStack = [
  { icon: FaReact, label: "React", color: "#61DAFB", glow: "hover:shadow-[0_0_30px_rgba(97,218,251,0.6)]" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6", glow: "hover:shadow-[0_0_30px_rgba(49,120,198,0.6)]" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8", glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]" },
  { icon: SiVite, label: "Vite", color: "#646CFF", glow: "hover:shadow-[0_0_30px_rgba(100,108,255,0.6)]" },
];


  // Particle network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles();
    };

    const initParticles = () => {
      const particles: Particle[] = [];
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000);
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
      particlesRef.current = particles;
    };

    const drawGradientOverlay = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.offsetHeight);
      gradient.addColorStop(0, 'rgba(17, 24, 39, 0)');
      gradient.addColorStop(0.5, 'rgba(17, 24, 39, 0.3)');
      gradient.addColorStop(1, 'rgba(17, 24, 39, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      const particles = particlesRef.current;
      const connections: [number, number][] = [];
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1;
        
        // Mouse attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          particle.x += dx * 0.02;
          particle.y += dy * 0.02;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${particle.alpha})`;
        ctx.fill();
        
        // Find connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            connections.push([i, j]);
          }
        }
      });
      
      // Draw connections with gradient
      connections.forEach(([i, j]) => {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = (1 - dist / 120) * 0.3;
        
        const lineGradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        lineGradient.addColorStop(0, `rgba(139, 92, 246, ${alpha})`);
        lineGradient.addColorStop(0.5, `rgba(236, 72, 153, ${alpha})`);
        lineGradient.addColorStop(1, `rgba(139, 92, 246, ${alpha})`);
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });
      
      drawGradientOverlay();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gray-950">
      {/* Animated Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180">
        <svg 
          className="relative block w-full h-24 animate-pulse"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-gray-900/50 opacity-50"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className="fill-gray-950"
          ></path>
        </svg>
      </div>

      {/* Particle Canvas Background */}
      <div className="absolute inset-0 h-96 top-0 opacity-40">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
          style={{ filter: 'blur(0.5px)' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Section - Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Brand Column - Spans 5 */}
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center space-x-4 bg-gray-900/80 backdrop-blur-xl rounded-lg p-6 border border-gray-800/50">
                  <div className="relative">
                    <img 
                      src={Logo} 
                      alt="Kanishka" 
                      className="h-14 w-15 rounded-xl animate-[spin_10s_linear_infinite] hover:pause"
                      style={{ animationPlayState: 'running' }}
                      onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
                      onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
                    />
                    <div className="absolute inset-0 bg-violet-500/20 rounded-xl blur-xl"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                      Kanishka Trivedi
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Crafting Digital Experiences</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed text-sm max-w-sm pl-2 border-l-2 border-violet-500/30">
                Building immersive web experiences with modern technologies. 
                Passionate about performance, animation, and accessible design.
              </p>
            </div>

            {/* Tech Stack Orbit - Spans 4 */}
            <div className="lg:col-span-4 flex flex-col items-center ml-20 justify-center">
              <h4 className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-6 font-semibold">Tech Stack</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.label}
                    className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-110 ${hoveredTech && hoveredTech !== tech.label ? 'opacity-40 scale-90' : 'opacity-100'}`}
                    onMouseEnter={() => setHoveredTech(tech.label)}
                    onMouseLeave={() => setHoveredTech(null)}
                    style={{ 
                      animationDelay: `${index * 150}ms`,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div className={`absolute inset-0 rounded-2xl blur-lg transition-opacity duration-300 opacity-0 group-hover:opacity-60`} 
                      style={{ backgroundColor: tech.color }} 
                    />
                    <div className={`relative p-4 rounded-2xl bg-gray-900/80 border border-gray-800 ${tech.glow} transition-all duration-300`}>
                      <tech.icon 
                        className="w-6 h-6 transition-colors duration-300" 
                        style={{ color: hoveredTech === tech.label ? tech.color : '#9CA3AF' }}
                      />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap translate-y-2 group-hover:translate-y-0">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links - Spans 3 */}
            <div className="lg:col-span-3 flex flex-col items-end justify-center space-y-3">
              <h4 className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-2 font-semibold w-full text-right">Connect</h4>
              {[ 
                { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@logic_lane6' },
                { icon: Github, label: 'GitHub', href: 'https://github.com/Kanishka-Trivedi' },
                { icon: Twitter, label: 'Twitter', href: 'https://x.com/kanishkatr76445' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kanishka-trivedi/' },
                { icon: Mail, label: 'Email', href: 'kanishka.trivedi.cg@gmail.com' }
              ].map((social) => (
                <MagneticButton
                  key={social.label}
                  className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 p-2 -mr-2 rounded-lg hover:bg-white/5"
                  onClick={() => window.open(social.href, '_blank')}
                >
                  <span className="text-sm font-medium tracking-wide group-hover:translate-x-[-4px] transition-transform duration-300">
                    {social.label}
                  </span>
                  <social.icon className="w-5 h-5" />
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Giant Watermark Text - VISIBLE VERSION */}
          <div className="relative h-48 overflow-hidden mb-2 select-none pointer-events-none">
            <div className="absolute inset-0 flex items-end justify-center pb-0">
              <span className="text-[10rem] md:text-[14rem] font-black tracking-tighter text-gray-600/40 transform translate-y-8">
                KANISHKA
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
          </div>

          {/* Bottom Bar */}
          <div className="relative pt-8 border-t border-gray-800/50 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for projects • {currentYear}
              </p>

              <p className="text-gray-500 text-sm flex items-center gap-2">
                @Kanishka Trivedi all rights reserved.
              </p>
              
              <div className="flex items-center gap-6">
                <span className="text-gray-600 text-sm flex items-center gap-2">
                  Built with 
                  <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-[heartbeat_1.5s_ease-in-out_infinite]" /> 
                  & 
                  <span className="text-violet-400 font-mono text-xs bg-violet-950/30 px-2 py-1 rounded border border-violet-500/20">
                    &lt;/&gt;
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top - Orbiting Button */}
      <MagneticButton
        className={`fixed bottom-8 right-8 group ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} transition-all duration-700 ease-out z-50`}
        onClick={scrollToTop}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-violet-500 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
          <div className="relative p-4 bg-gray-900 border border-gray-700 rounded-full shadow-2xl group-hover:border-violet-500/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ArrowUp className="w-6 h-6 text-gray-400 group-hover:text-white transform group-hover:-translate-y-1 transition-all duration-300" />
          </div>
          {/* Orbiting particles */}
          <div className="absolute inset-0 animate-[spin_3s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-violet-400 rounded-full -translate-x-1/2 -translate-y-2"></div>
          </div>
        </div>
      </MagneticButton>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;