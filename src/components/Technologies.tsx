// import React, { useEffect, useState, useRef, useMemo } from 'react';

// interface Skill {
//   name: string;
//   baseX: number;
//   baseY: number;
//   baseZ: number;
//   size: string;
//   color?: string;
// }

// const SkillsSphere: React.FC = () => {
//   const [rotation, setRotation] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [lastX, setLastX] = useState(0);
//   const requestRef = useRef<number>();
//   const speedRef = useRef(0.15);

//   // SMALLER radius for compact sphere
//   const radius = 180;

//   const skills = useMemo(() => {
//     const skillsData = [
//       { name: 'JavaScript', size: 'text-xl md:text-2xl', color: '#f7df1e' },
//       { name: 'React.js', size: 'text-2xl md:text-3xl', color: '#61dafb' },
//       { name: 'Node.js', size: 'text-2xl md:text-3xl', color: '#339933' },
//       { name: 'Next.js', size: 'text-lg md:text-xl', color: '#3776ab' },
//       { name: 'CSS3', size: 'text-base md:text-lg', color: '#264de4' },
//       { name: 'HTML5', size: 'text-sm md:text-base', color: '#e34c26' },
//       { name: 'Express.js', size: 'text-base md:text-lg', color: '#ffffff' },
//       { name: 'MongoDB', size: 'text-xl md:text-2xl', color: '#47a248' },
//       { name: 'Redis', size: 'text-2xl md:text-3xl', color: '#336791' },
//       { name: 'MySQL', size: 'text-lg md:text-xl', color: '#4479a1' },
//       { name: 'Git', size: 'text-2xl md:text-3xl', color: '#f05032' },
//       { name: 'Java', size: 'text-xl md:text-2xl', color: '#007396' },
//       { name: 'Postman', size: 'text-2xl md:text-3xl', color: '#e10098' },
//       { name: 'REST API', size: 'text-base md:text-lg', color: '#ffffff' },
//       { name: 'GSAP', size: 'text-sm md:text-base', color: '#88ce02' },
//       { name: 'Three.js', size: 'text-base md:text-lg', color: '#ffffff' },
//       { name: 'Tailwind', size: 'text-base md:text-lg', color: '#7952b3' },
//       { name: 'Firebase', size: 'text-lg md:text-xl', color: '#ffca28' },
//       { name: 'ShadCN', size: 'text-sm md:text-base', color: '#ffffff' },
//       { name: 'Figma', size: 'text-sm md:text-base', color: '#092e20' },
//       { name: 'ScrollTrigger', size: 'text-sm md:text-base', color: '#88ce02' },
//       { name: 'Render', size: 'text-base md:text-lg', color: '#ffffff' },
//       { name: 'DSA', size: 'text-sm md:text-base', color: '#ffffff' },
//     ];

//     const points: Skill[] = [];
//     const count = skillsData.length;
//     const goldenAngle = Math.PI * (3 - Math.sqrt(5));

//     for (let i = 0; i < count; i++) {
//       const y = 1 - (i / (count - 1)) * 2;
//       const radiusAtY = Math.sqrt(1 - y * y);
//       const theta = goldenAngle * i;

//       const x = Math.cos(theta) * radiusAtY;
//       const z = Math.sin(theta) * radiusAtY;

//       points.push({
//         ...skillsData[i],
//         baseX: x * radius,
//         baseY: y * radius,
//         baseZ: z * radius,
//       });
//     }
//     return points;
//   }, []);

//   const getPosition = (skill: Skill, rot: number) => {
//     const rotRad = (rot * Math.PI) / 180;
//     const x = skill.baseX * Math.cos(rotRad) - skill.baseZ * Math.sin(rotRad);
//     const z = skill.baseZ * Math.cos(rotRad) + skill.baseX * Math.sin(rotRad);
//     const y = skill.baseY;
//     const scale = 1000 / (1000 + z);
//     return { x, y, z, scale };
//   };

//   useEffect(() => {
//     const animate = () => {
//       if (!isDragging) {
//         setRotation((prev) => (prev + speedRef.current) % 360);
//       }
//       requestRef.current = requestAnimationFrame(animate);
//     };
//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, [isDragging]);

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true);
//     setLastX(e.clientX);
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return;
//     const delta = e.clientX - lastX;
//     setRotation((prev) => (prev + delta * 0.3) % 360);
//     setLastX(e.clientX);
//   };

//   const handleMouseUp = () => setIsDragging(false);

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-[#1a1625] via-[#2a2440] to-[#1a1625] relative overflow-hidden select-none">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

//       {/* SPACER for navbar - adjust height as needed */}
//       <div className="h-20 md:h-24 w-full" />

//       {/* Title with spacing */}
//       <div className="pt-8 pb-0 text-center relative z-50 pointer-events-none">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7dd3fc] mb-3 drop-shadow-lg">
//           Skills & Technologies
//         </h1>
//         <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
//       </div>

//       {/* 3D Sphere Container - SMALLER height */}
//       <div
//         className="relative w-full h-[520px] md:h-[570px] flex items-center justify-center cursor-grab active:cursor-grabbing -ml-20 md:-ml-10"
//         style={{ perspective: '1000px' }}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseUp}
//       >
//         <div className="relative w-0 h-0" style={{ transformStyle: 'preserve-3d' }}>
//           {skills.map((skill) => {
//             const pos = getPosition(skill, rotation);

//             return (
//               <div
//                 key={skill.name}
//                 className={`absolute whitespace-nowrap font-medium ${skill.size}`}
//                 style={{
//                   transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) scale(${Math.max(0.4, pos.scale)})`,
//                   color: skill.color || '#ffffff',
//                   textShadow: '0 1px 3px rgba(0,0,0,0.5)',
//                   opacity: pos.z < -100 ? 0.3 : pos.z < 0 ? 0.6 : 1,
//                   zIndex: Math.floor(pos.z),
//                   willChange: 'transform',
//                 }}
//               >
//                 {skill.name}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Bottom spacing before footer */}
//       <div className="h-20 md:h-32 w-full" />
//     </div>
//   );
// };

// export default SkillsSphere;







import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

/* ================= SKILLS SPHERE TYPES ================= */
interface Skill {
  name: string;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: string;
  color?: string;
}

/* ================= SKILLS SPHERE COMPONENT ================= */
const SkillsSphere: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef<number>();
  const speedRef = useRef(0.15);
  const radius = 180;

  const skills = useMemo(() => {
    const skillsData = [
      { name: 'JavaScript', size: 'text-xl md:text-2xl', color: '#f7df1e' },
      { name: 'React.js', size: 'text-2xl md:text-3xl', color: '#61dafb' },
      { name: 'Node.js', size: 'text-2xl md:text-3xl', color: '#339933' },
      { name: 'Next.js', size: 'text-lg md:text-xl', color: '#3776ab' },
      { name: 'CSS3', size: 'text-base md:text-lg', color: '#264de4' },
      { name: 'HTML5', size: 'text-sm md:text-base', color: '#e34c26' },
      { name: 'Express.js', size: 'text-base md:text-lg', color: '#ffffff' },
      { name: 'MongoDB', size: 'text-xl md:text-2xl', color: '#47a248' },
      { name: 'Redis', size: 'text-2xl md:text-3xl', color: '#dc382d' },
      { name: 'MySQL', size: 'text-lg md:text-xl', color: '#4479a1' },
      { name: 'Git', size: 'text-2xl md:text-3xl', color: '#f05032' },
      { name: 'Java', size: 'text-xl md:text-2xl', color: '#007396' },
      { name: 'Postman', size: 'text-2xl md:text-3xl', color: '#ff6c37' },
      { name: 'REST API', size: 'text-base md:text-lg', color: '#ffffff' },
      { name: 'GSAP', size: 'text-sm md:text-base', color: '#88ce02' },
      { name: 'Three.js', size: 'text-base md:text-lg', color: '#ffffff' },
      { name: 'Tailwind', size: 'text-base md:text-lg', color: '#38bdf8' },
      { name: 'Firebase', size: 'text-lg md:text-xl', color: '#ffca28' },
      { name: 'ShadCN', size: 'text-sm md:text-base', color: '#ffffff' },
      { name: 'Figma', size: 'text-sm md:text-base', color: '#a259ff' },
      { name: 'ScrollTrigger', size: 'text-sm md:text-base', color: '#88ce02' },
      { name: 'Render', size: 'text-base md:text-lg', color: '#46e3b7' },
      { name: 'DSA', size: 'text-sm md:text-base', color: '#ffffff' },
    ];

    const points: Skill[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    skillsData.forEach((skill, i) => {
      const y = 1 - (i / (skillsData.length - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        ...skill,
        baseX: x * radius,
        baseY: y * radius,
        baseZ: z * radius,
      });
    });

    return points;
  }, []);

  const getPosition = (skill: Skill, rot: number) => {
    const rotRad = (rot * Math.PI) / 180;
    const x = skill.baseX * Math.cos(rotRad) - skill.baseZ * Math.sin(rotRad);
    const z = skill.baseZ * Math.cos(rotRad) + skill.baseX * Math.sin(rotRad);
    const scale = 1000 / (1000 + z);
    return { x, y: skill.baseY, z, scale };
  };

  useEffect(() => {
    const animate = () => {
      setRotation(prev => (prev + speedRef.current) % 360);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">

            {/* 1. Background System: High-Visibility Grid + Floating Spheres */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
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

      {/* TITLE — perfectly centered above sphere */}
      <div className="pt-8 pb-0 mb-0 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-[#7dd3fc] mb-3 drop-shadow-lg">
          Tech Universe
        </h1>
        <div className="w-40 h-1 bg-purple-500 mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
      </div>

      {/* SPHERE */}
      <div
        className="relative w-full h-[520px] md:h-[570px] flex items-center justify-center cursor-grab active:cursor-grabbing -ml-20 md:-ml-25"
        style={{ perspective: '1000px' }}
      >
        <div className="relative w-0 h-0" style={{ transformStyle: 'preserve-3d' }}>
          {skills.map(skill => {
            const pos = getPosition(skill, rotation);
            return (
              <div
                key={skill.name}
                className={`absolute whitespace-nowrap font-medium ${skill.size}`}
                style={{
                  transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) scale(${Math.max(0.4, pos.scale)})`,
                  color: skill.color,
                  opacity: pos.z < -100 ? 0.3 : pos.z < 0 ? 0.6 : 1,
                }}
              >
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );

};

/* ================= TECHNOLOGIES GRID ================= */
const techGroups = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', docs: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', docs: 'https://www.typescriptlang.org/docs/' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', docs: 'https://docs.oracle.com/en/java/' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', docs: 'https://isocpp.org/std/the-standard' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', docs: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', docs: 'https://developer.mozilla.org/docs/Web/CSS' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', docs: 'https://react.dev/' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', docs: 'https://nextjs.org/docs' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', docs: 'https://angular.io/docs' },
      { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', docs: 'https://tailwindcss.com/docs' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', docs: 'https://redux.js.org/' },
      { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', docs: 'https://mui.com/' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', docs: 'https://nodejs.org/en/docs' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', docs: 'https://expressjs.com/' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', docs: 'https://fastapi.tiangolo.com/' },
      { name: 'REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original-wordmark.svg', docs: 'https://restfulapi.net/' },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', docs: 'https://www.mongodb.com/docs/' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', docs: 'https://dev.mysql.com/doc/' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', docs: 'https://redis.io/docs/' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', docs: 'https://firebase.google.com/docs' },
    ],
  },
  {
    label: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', docs: 'https://docs.docker.com/' },
      { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', docs: 'https://docs.aws.amazon.com/' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', docs: 'https://git-scm.com/doc' },
      { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png', docs: 'https://vercel.com/docs' },
      { name: 'Netlify', icon: 'https://www.netlify.com/v3/img/components/logomark.png', docs: 'https://docs.netlify.com/' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', docs: 'https://www.kernel.org/doc/html/latest/' },
    ],
  },
];

/* ================= MAIN EXPORT ================= */
const Technologies = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const handleImageError = (name: string) => setImageErrors(prev => ({ ...prev, [name]: true }));

  return (
    <section id="technologies" className="section-container">

      <SkillsSphere />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 mt-24"
      >
        <h2 className="section-title">Technologies I Work With</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Cutting-edge tools and frameworks for building the future
        </p>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-12">
        {techGroups.map(group => (
          <div key={group.label} className="flex flex-col items-center h-full">
            <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              {group.label}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {group.items.map(tech => (
                <a key={tech.name} href={tech.docs} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group no-underline">
                  {!imageErrors[tech.name] ? (
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" onError={() => handleImageError(tech.name)} />
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center border rounded text-blue-400 font-bold">{tech.name[0]}</div>
                  )}
                  <span className="mt-1 text-xs text-gray-400 group-hover:text-blue-400">{tech.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Technologies;
