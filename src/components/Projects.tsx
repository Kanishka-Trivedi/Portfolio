// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Github, 
//   ExternalLink, 
//   ArrowRight, 
//   Rocket, 
//   Layout, 
//   Smartphone, 
//   Database, 
//   Server, 
//   Monitor 
// } from 'lucide-react';

// // --- Types ---
// interface Project {
//   id: number;
//   title: string;
//   tagline: string;
//   year: string;
//   category: 'Frontend' | 'Backend' | 'Full Stack';
//   description: string;
//   features: string[];
//   image: string;
// }

// // --- Data ---
// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Verbio",
//     tagline: "Socializing Platform",
//     year: "2025",
//     category: "Full Stack",
//     description: "Verbio is a real-time social platform that helps people connect, make friends, chat instantly, and video call seamlessly.",
//     features: ["Making Friends", "Real Time Chatting", "Video Calling"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1768814015/Screenshot_2026-01-19_144311_lxeq9l.png",
//   },
//   {
//     id: 2,
//     title: "Willow & Vine",
//     tagline: "E-commerce Platform",
//     year: "2026",
//     category: "Full Stack",
//     description: "Willow & Vine is an e-commerce platform for buying and selling plants and gardening essentials in one seamless marketplace.",
//     features: ["Plant Marketplace", "Garden Tools", "Plant Care", "Secure Checkout", "Wishlist", "Search & Filter"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1768813977/Screenshot_2026-01-19_144231_f47eey.png",
//   },
//   {
//     id: 3,
//     title: "Finoptix",
//     tagline: "Financial Tracking App",
//     year: "2024",
//     category: "Full Stack",
//     description: "Finoptix is a financial tracking application built with React, Vite, and MongoDB that helps users monitor expenses, optimize savings, and identify discrepancies through smart alerts and real-time insights.",
//     features: ["Expense Tracking", "Savings Insights", "Smart Alerts", "Real-time Data", "Financial Dashboard", "Spending Analysis"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1768813859/Screenshot_2026-01-19_144036_wvlous.png",
//   },
//   {
//     id: 4,
//     title: "Gear Guard",
//     tagline: "Maintenance Management System",
//     year: "2026",
//     category: "Full Stack",
//     description: "A full-stack MERN maintenance management system for tracking enterprise assets and managing corrective and preventive maintenance across the complete request lifecycle.",
//     features: ["Asset Inventory", "Maintenance Requests", "Preventive Maintenance Scheduling", "Work Order Management", "Technician Assignment", "Maintenance History Tracking"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770282174/Screenshot_2026-02-05_143234_lvirmd.png",
//   },
//   {
//     id: 5,
//     title: "NASA Clone",
//     tagline: "Frontend Web Clone",
//     year: "2025",
//     category: "Frontend",
//     description: "NASA Clone is a responsive website built using HTML and CSS that recreates the visual design of NASA’s official site, featuring space imagery and mission-related content.",
//     features: ["Responsive Design", "Space Imagery", "Landing Page UI", "Static Content Layout", "Modern CSS Styling", "Web Design Practice"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281789/Project3_zt6wgr.png",
//   },
//   {
//     id: 6,
//     title: "Canva Clone",
//     tagline: "UI/UX Frontend Clone",
//     year: "2024",
//     category: "Frontend",
//     description: "Canva Clone is a responsive website built using HTML and CSS that replicates Canva’s modern user interface with a clean, sleek layout and design-focused styling.",
//     features: ["Responsive Layout", "Modern UI Design", "CSS Flexbox & Grid", "Landing Page Clone", "Visual Design Practice", "Pixel-Perfect Styling"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project4_lwdpxv.png",
//   },
//   {
//     id: 7,
//     title: "Citadel Clone",
//     tagline: "Corporate Website Clone",
//     year: "2025",
//     category: "Frontend",
//     description: "A responsive HTML and CSS replica of Citadel’s website, featuring a sleek, professional layout and modern design structure.",
//     features: ["Responsive Layout", "Corporate UI", "Modern Styling", "Landing Page Clone", "Clean Typography", "Design Replication"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project5_lqhc4x.png",
//   },
//   {
//     id: 8,
//     title: "API Route Project",
//     tagline: "API Explorer App",
//     year: "2025",
//     category: "Backend",
//     description: "A React Router project integrating public APIs like MealsDB and CocktailDB to explore meals, drinks, and recipes through dynamic routing.",
//     features: ["API Integration", "Dynamic Routing", "Search Functionality", "Data Fetching", "Reusable Components", "Responsive UI"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project6_encitb.png",
//   },
//   {
//     id: 9,
//     title: "Swiggy Clone",
//     tagline: "Food Delivery UI Clone",
//     year: "2024",
//     category: "Frontend",
//     description: "A responsive HTML and CSS clone of Swiggy’s interface showcasing a clean food delivery layout and modern design elements.",
//     features: ["Responsive Design", "Food UI Layout", "Modern Styling", "Landing Page Clone", "Visual Design Practice", "E-commerce Style UI"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project7_a0wswy.png",
//   },
//   {
//     id: 10,
//     title: "Plant Orbit",
//     tagline: "Plant Store Website",
//     year: "2025",
//     category: "Frontend",
//     description: "A responsive HTML and CSS website designed for buying plants online, featuring a clean layout with a fresh green visual theme.",
//     features: ["Product Grid", "Responsive Layout", "Nature-Themed UI", "Landing Page Design", "Visual Branding", "E-commerce Style Layout"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project8_svmjhn.png",
//   },
//   {
//     id: 11,
//     title: "Amazon Clone",
//     tagline: "E-commerce UI Clone",
//     year: "2024",
//     category: "Frontend",
//     description: "A responsive HTML and CSS replica of Amazon’s interface featuring a structured product grid and modern e-commerce layout.",
//     features: ["Product Grid", "Responsive Design", "E-commerce Layout", "Navigation Bar", "UI Replication", "Landing Page Design"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281791/Project9_wfqpod.png",
//   },
//   {
//     id: 12,
//     title: "2048 Game",
//     tagline: "Interactive Puzzle Game",
//     year: "2025",
//     category: "Full Stack",
//     description: "A modern and responsive 2048 game clone built with React, Tailwind CSS, and Framer Motion, featuring smooth animations and local score storage.",
//     features: ["Game Logic", "Smooth Animations", "Score Tracking", "Responsive UI", "Keyboard Controls", "Local Storage"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project10_tulave.png",
//   },
//   {
//     id: 13,
//     title: "Spotify Clone",
//     tagline: "Music Streaming UI",
//     year: "2025",
//     category: "Frontend",
//     description: "A React-based project replicating Spotify’s interface with dynamic browsing, playlists, and a sleek music player layout.",
//     features: ["Dynamic UI", "Music Browser", "Playlist Layout", "Audio Player UI", "Component Reusability", "Modern Styling"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281791/Project11_rps9au.png",
//   },
//   {
//     id: 14,
//     title: "Currency Calculator",
//     tagline: "Real-Time Converter",
//     year: "2025",
//     category: "Backend",
//     description: "A React application that uses live exchange rate APIs to perform real-time currency conversions through a simple and intuitive interface.",
//     features: ["API Integration", "Real-Time Conversion", "User-Friendly UI", "Currency Selector", "Responsive Design", "Live Data Fetching"],
//     image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281792/Project12_mwrg6c.png",
//   }
// ];

// const ProjectsPage = () => {
//   const [filter, setFilter] = useState('All Projects');

//   // Dynamic counts for category tabs
//   const categories = [
//     { name: 'All Projects', icon: <Rocket size={16} />, count: projects.length },
//     { name: 'Full Stack', icon: <Database size={16} />, count: projects.filter(p => p.category === 'Full Stack').length },
//     { name: 'Backend', icon: <Server size={16} />, count: projects.filter(p => p.category === 'Backend').length },
//     { name: 'Frontend', icon: <Monitor size={16} />, count: projects.filter(p => p.category === 'Frontend').length },
//   ];

//   const filteredProjects = filter === 'All Projects' 
//     ? projects 
//     : projects.filter(p => p.category === filter);

//   return (
//     <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative">

//       {/* 1. Background System: High-Visibility Grid + Spheres */}
//       <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
//         <div className="absolute inset-0 opacity-[0.15]" 
//              style={{ 
//                backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, 
//                backgroundSize: '40px 40px' 
//              }} 
//         />
//         <motion.div 
//           animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#1a103d] rounded-full blur-[120px]" 
//         />
//         <motion.div 
//           animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
//           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#0d1b3e] rounded-full blur-[100px]" 
//         />
//       </div>

//       <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">

//         {/* 2. Header Section: Fixed 'e' Clipping */}
//         <div className="text-center mb-16">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//             className="text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-8"
//           >
//             Crafted with<br />
//             <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#9478ff] to-[#f244ff] pr-4">
//               Passion & Code
//             </span>
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
//             className="text-[#949494] mt-8 max-w-xl mx-auto text-lg font-normal leading-relaxed"
//           >
//             Explore my journey through code — from mobile apps to full-stack platforms. 
//           </motion.p>
//         </div>

//         {/* 3. Dynamic Filter Navigation */}
//         <div className="flex flex-wrap justify-center gap-4 mb-20">
//           {categories.map((cat) => (
//             <button
//               key={cat.name}
//               onClick={() => setFilter(cat.name)}
//               className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
//                 filter === cat.name 
//                 ? 'bg-[#1c1435] border-[#4a3a8a] text-white shadow-[0_0_20px_rgba(74,58,138,0.3)]' 
//                 : 'bg-[#0d0d0d] border-[#1a1a1a] text-[#707070] hover:border-[#333]'
//               }`}
//             >
//               <span className={filter === cat.name ? "text-[#9478ff]" : ""}>{cat.icon}</span>
//               <span className="text-sm font-semibold tracking-tight">{cat.name}</span>
//               <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] ${filter === cat.name ? 'bg-[#332561] text-white' : 'bg-[#1a1a1a] text-[#555]'}`}>
//                 {cat.count}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* 4. Project Grid: Dynamic Theming & Gradients */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence mode="popLayout">
//             {filteredProjects.map((project) => {
//               const isFrontend = project.category === 'Frontend';
//               const isBackend = project.category === 'Backend';

//               // Define theme colors based on category
//               const themeColor = isFrontend ? '#6366f1' : isBackend ? '#ec4899' : '#10b981';
//               const themeBg = isFrontend ? 'bg-[#6366f125]' : isBackend ? 'bg-[#ec489925]' : 'bg-[#10b98125]';

//               return (
//                 <motion.div
//                   layout
//                   key={project.id}
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 0.4 }}
//                   className="group relative bg-[#09090b] border border-[#1a1a1a] rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]"
//                 >
//                   {/* Hover Gradient Border Effect */}
//                   <div 
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem] z-20"
//                     style={{ 
//                       border: `2px solid ${themeColor}`,
//                       maskImage: 'linear-gradient(to bottom, black, transparent)',
//                       WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
//                     }}
//                   />

//                   {/* Image Section (Normal color by default) */}
//                   <div className="relative aspect-[1.4/1] m-2 overflow-hidden rounded-[1.6rem] z-10">
//                     <img 
//                       src={project.image} 
//                       alt={project.title} 
//                       className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
//                     />
//                     <div className="absolute top-4 right-4 bg-[#00000080] backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-[#d1d1d1] border border-white/10">
//                       {project.year}
//                     </div>
//                   </div>

//                   {/* Card Body */}
//                   <div className="p-8 pt-4 relative z-10">
//                     <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-4 inline-block ${themeBg}`} style={{ color: themeColor }}>
//                       {project.category}
//                     </span>

//                     <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
//                       {project.title}
//                     </h3>

//                     {/* Tagline matching category color */}
//                     <p className="text-[13px] font-semibold mb-4" style={{ color: themeColor }}>
//                       {project.tagline}
//                     </p>

//                     <p className="text-[#808080] text-sm leading-relaxed mb-6 line-clamp-2">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
//                       {project.features.map(f => (
//                         <span key={f} className="text-[11px] text-[#555] font-medium flex items-center gap-2">
//                           <span className="w-1 h-1 rounded-full" style={{ backgroundColor: themeColor }} /> {f}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex gap-3">
//                       <button className="flex-1 py-3.5 rounded-full bg-[#121212] border border-[#1a1a1a] group-hover:bg-white group-hover:text-black transition-all duration-500 flex items-center justify-center gap-2 font-bold text-sm">
//                         View Project <ArrowRight size={18} />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Bottom Highlight Bar on Hover */}
//                   <div 
//                     className="absolute bottom-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"
//                     style={{ backgroundColor: themeColor }}
//                   />
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>

//         {/* 5. Collaboration Section: Ditto Same Match */}
//         <motion.section 
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 30 }}
//           className="mt-40 p-16 md:py-24 rounded-[3.5rem] bg-gradient-to-b from-[#0e0c1a] to-[#050505] border border-[#ffffff08] text-center relative overflow-hidden group"
//         >
//           <div className="absolute -top-1/2 left-0 w-full h-full bg-[#4a3a8a08] rounded-full blur-[120px] pointer-events-none" />
//           <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight relative z-10">
//             Interested in collaborating?
//           </h2>
//           <p className="text-[#707070] mb-10 max-w-lg mx-auto font-medium text-lg relative z-10 leading-relaxed">
//             I'm always open to discussing new projects and opportunities.
//           </p>
//           <button className="relative z-10 inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#7a62ff] to-[#a855f7] rounded-full font-bold text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(122,98,255,0.4)]" onClick={() => window.location.href = '/contact'}>
//             Let's Talk <ArrowRight size={20} className="stroke-[3px]" />
//           </button>
//         </motion.section>

//       </main>
//     </div>
//   );
// };

// export default ProjectsPage;







import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Github,
  ExternalLink,
  ArrowRight,
  Rocket,
  Database,
  Server,
  Monitor,
  LayoutGrid,
  LayoutList
} from 'lucide-react';

// --- Types ---
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

// --- Data ---
const projects: Project[] = [
  {
    id: 1,
    title: "Verbio",
    tagline: "Socializing Platform",
    year: "2025",
    category: "Full Stack",
    description: "Verbio is a real-time social platform that helps people connect, make friends, chat instantly, and video call seamlessly.",
    features: ["Making Friends", "Real Time Chatting", "Video Calling"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1768814015/Screenshot_2026-01-19_144311_lxeq9l.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/Verbio",
    liveUrl: "https://verbio.netlify.app/",
  },
  {
    id: 2,
    title: "Willow & Vine",
    tagline: "E-commerce Platform",
    year: "2026",
    category: "Full Stack",
    description: "Willow & Vine is an e-commerce platform for buying and selling plants and gardening essentials in one seamless marketplace.",
    features: ["Plant Marketplace", "Garden Tools", "Plant Care", "Secure Checkout", "Wishlist", "Search & Filter"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1768813977/Screenshot_2026-01-19_144231_f47eey.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/Willow-Vine",
    liveUrl: "https://willowandvine.netlify.app",
  },
  {
    id: 3,
    title: "Finoptix",
    tagline: "Financial Tracking App",
    year: "2024",
    category: "Full Stack",
    description: "Finoptix is a financial tracking application built with React, Vite, and MongoDB that helps users monitor expenses, optimize savings, and identify discrepancies through smart alerts and real-time insights.",
    features: ["Expense Tracking", "Savings Insights", "Smart Alerts", "Real-time Data", "Financial Dashboard", "Spending Analysis"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1768813859/Screenshot_2026-01-19_144036_wvlous.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/finoptix",
    liveUrl: "https://finoptix.netlify.app",
  },
  {
    id: 4,
    title: "Gear Guard",
    tagline: "Maintenance Management System",
    year: "2026",
    category: "Full Stack",
    description: "A full-stack MERN maintenance management system for tracking enterprise assets and managing corrective and preventive maintenance across the complete request lifecycle.",
    features: ["Asset Inventory", "Maintenance Requests", "Preventive Maintenance Scheduling", "Work Order Management", "Technician Assignment", "Maintenance History Tracking"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770282174/Screenshot_2026-02-05_143234_lvirmd.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/gearguard_odoo_adani",
    liveUrl: "https://gearguard-delta.netlify.app/",
  },
  {
    id: 5,
    title: "NASA Clone",
    tagline: "Frontend Web Clone",
    year: "2025",
    category: "Frontend",
    description: "NASA Clone is a responsive website built using HTML and CSS that recreates the visual design of NASA’s official site, featuring space imagery and mission-related content.",
    features: ["Responsive Design", "Space Imagery", "Landing Page UI", "Static Content Layout", "Modern CSS Styling", "Web Design Practice"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281789/Project3_zt6wgr.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/NASA-Clone",
    liveUrl: "https://nasaclone12.netlify.app",
  },
  {
    id: 6,
    title: "Canva Clone",
    tagline: "UI/UX Frontend Clone",
    year: "2024",
    category: "Frontend",
    description: "Canva Clone is a responsive website built using HTML and CSS that replicates Canva’s modern user interface with a clean, sleek layout and design-focused styling.",
    features: ["Responsive Layout", "Modern UI Design", "CSS Flexbox & Grid", "Landing Page Clone", "Visual Design Practice", "Pixel-Perfect Styling"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project4_lwdpxv.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/Canva-Clone",
    liveUrl: "https://canva-clone12.netlify.app",
  },
  {
    id: 7,
    title: "Citadel Clone",
    tagline: "Corporate Website Clone",
    year: "2025",
    category: "Frontend",
    description: "A responsive HTML and CSS replica of Citadel’s website, featuring a sleek, professional layout and modern design structure.",
    features: ["Responsive Layout", "Corporate UI", "Modern Styling", "Landing Page Clone", "Clean Typography", "Design Replication"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project5_lqhc4x.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/Citadel-Clone",
    liveUrl: "https://citadelclone12.netlify.app",
  },
  {
    id: 8,
    title: "API Route Project",
    tagline: "API Explorer App",
    year: "2025",
    category: "Backend",
    description: "A React Router project integrating public APIs like MealsDB and CocktailDB to explore meals, drinks, and recipes through dynamic routing.",
    features: ["API Integration", "Dynamic Routing", "Search Functionality", "Data Fetching", "Reusable Components", "Responsive UI"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project6_encitb.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/Route-Project",
    liveUrl: "https://db-explorer.netlify.app",
  },
  {
    id: 9,
    title: "Swiggy Clone",
    tagline: "Food Delivery UI Clone",
    year: "2024",
    category: "Frontend",
    description: "A responsive HTML and CSS clone of Swiggy’s interface showcasing a clean food delivery layout and modern design elements.",
    features: ["Responsive Design", "Food UI Layout", "Modern Styling", "Landing Page Clone", "Visual Design Practice", "E-commerce Style UI"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project7_a0wswy.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/Html-Projects/blob/main/swiggy%20clone.html",
    liveUrl: "#",
  },
  {
    id: 10,
    title: "Plant Orbit",
    tagline: "Plant Store Website",
    year: "2025",
    category: "Frontend",
    description: "A responsive HTML and CSS website designed for buying plants online, featuring a clean layout with a fresh green visual theme.",
    features: ["Product Grid", "Responsive Layout", "Nature-Themed UI", "Landing Page Design", "Visual Branding", "E-commerce Style Layout"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project8_svmjhn.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/Html-Projects/blob/main/plant%20website.html",
    liveUrl: "#",
  },
  {
    id: 11,
    title: "Amazon Clone",
    tagline: "E-commerce UI Clone",
    year: "2024",
    category: "Frontend",
    description: "A responsive HTML and CSS replica of Amazon’s interface featuring a structured product grid and modern e-commerce layout.",
    features: ["Product Grid", "Responsive Design", "E-commerce Layout", "Navigation Bar", "UI Replication", "Landing Page Design"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281791/Project9_wfqpod.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/Html-Projects/blob/main/amazon%20clone.html",
    liveUrl: "#",
  },
  {
    id: 12,
    title: "2048 Game",
    tagline: "Interactive Puzzle Game",
    year: "2025",
    category: "Full Stack",
    description: "A modern and responsive 2048 game clone built with React, Tailwind CSS, and Framer Motion, featuring smooth animations and local score storage.",
    features: ["Game Logic", "Smooth Animations", "Score Tracking", "Responsive UI", "Keyboard Controls", "Local Storage"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281790/Project10_tulave.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/2048-Game",
    liveUrl: "https://kgame2048.netlify.app",
  },
  {
    id: 13,
    title: "Spotify Clone",
    tagline: "Music Streaming UI",
    year: "2025",
    category: "Frontend",
    description: "A React-based project replicating Spotify’s interface with dynamic browsing, playlists, and a sleek music player layout.",
    features: ["Dynamic UI", "Music Browser", "Playlist Layout", "Audio Player UI", "Component Reusability", "Modern Styling"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281791/Project11_rps9au.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/Html-Projects/tree/main/Spotify%20Clone/vite_app",
    liveUrl: "#",
  },
  {
    id: 14,
    title: "Currency Calculator",
    tagline: "Real-Time Converter",
    year: "2025",
    category: "Backend",
    description: "A React application that uses live exchange rate APIs to perform real-time currency conversions through a simple and intuitive interface.",
    features: ["API Integration", "Real-Time Conversion", "User-Friendly UI", "Currency Selector", "Responsive Design", "Live Data Fetching"],
    image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770281792/Project12_mwrg6c.png",
    githubUrl: "https://github.com/Kanishka-Trivedi/React-Projects/tree/main/currencyCalculator",
    liveUrl: "#",
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All Projects');
  const [layoutView, setLayoutView] = useState<'grid' | 'scroll'>('grid');
  const navigate = useNavigate();

  const categories = [
    { name: 'All Projects', icon: <Rocket size={16} />, count: projects.length },
    { name: 'Full Stack', icon: <Database size={16} />, count: projects.filter(p => p.category === 'Full Stack').length },
    { name: 'Backend', icon: <Server size={16} />, count: projects.filter(p => p.category === 'Backend').length },
    { name: 'Frontend', icon: <Monitor size={16} />, count: projects.filter(p => p.category === 'Frontend').length },
  ];

  const filteredProjects = filter === 'All Projects'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative">

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

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">

        {/* 2. Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-8"
          >
            Crafted with<br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#9478ff] to-[#f244ff] pr-4">
              Passion & Code
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-[#949494] mt-8 max-w-xl mx-auto text-lg font-normal leading-relaxed"
          >
            Explore my journey through code — from mobile apps to full-stack platforms.
            Each project represents a unique challenge conquered and lessons learned.
          </motion.p>
        </div>

        {/* 3. Tools Navigation & Filter Layout */}
        <div className="relative flex flex-col items-center justify-center gap-6 mb-20">

          {/* Filters (Always Centered) */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${filter === cat.name
                  ? 'bg-[#1c1435] border-[#4a3a8a] text-white'
                  : 'bg-[#0d0d0d] border-[#1a1a1a] text-[#707070] hover:border-[#333]'
                  }`}
              >
                <span className={filter === cat.name ? "text-[#9478ff]" : ""}>{cat.icon}</span>
                <span className="text-sm font-semibold tracking-tight">{cat.name}</span>
                <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] ${filter === cat.name ? 'bg-[#332561] text-white' : 'bg-[#1a1a1a] text-[#555]'}`}>{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Layout Toggle (Right Aligned on Desktop) */}
          <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 flex items-center p-1.5 rounded-full bg-[#0a0a0a] border border-[#1a1a1a] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => setLayoutView('grid')}
              className={`relative flex items-center justify-center p-3 rounded-full transition-colors duration-300 ${layoutView === 'grid' ? 'text-white' : 'text-[#707070] hover:text-white'}`}
              title="Grid Layout"
            >
              {layoutView === 'grid' && (
                <motion.div
                  layoutId="activeLayout"
                  className="absolute inset-0 bg-[#1c1435] border border-[#4a3a8a] rounded-full shadow-[0_0_15px_rgba(74,58,138,0.4)]"
                />
              )}
              <LayoutGrid size={18} className="relative z-10" />
            </button>
            <button
              onClick={() => setLayoutView('scroll')}
              className={`relative flex items-center justify-center p-3 rounded-full transition-colors duration-300 ${layoutView === 'scroll' ? 'text-white' : 'text-[#707070] hover:text-white'}`}
              title="Scroll Layout"
            >
              {layoutView === 'scroll' && (
                <motion.div
                  layoutId="activeLayout"
                  className="absolute inset-0 bg-[#1c1435] border border-[#4a3a8a] rounded-full shadow-[0_0_15px_rgba(74,58,138,0.4)]"
                />
              )}
              <LayoutList size={18} className="relative z-10" />
            </button>
          </div>
        </div>

        {/* 4. Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isFrontend = project.category === 'Frontend';
              const isBackend = project.category === 'Backend';

              const themeColor = isFrontend ? '#6366f1' : isBackend ? '#ec4899' : '#10b981';
              const themeBg = isFrontend ? 'bg-[#6366f125]' : isBackend ? 'bg-[#ec489925]' : 'bg-[#10b98125]';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-[#09090b] border border-[#1a1a1a] rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]"
                >
                  {/* Hover Gradient Border Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem] z-20"
                    style={{
                      border: `2px solid ${themeColor}`,
                      maskImage: 'linear-gradient(to bottom, black, transparent)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
                    }}
                  />

                  {/* Image Section (Normal color by default) */}
                  <div className="relative aspect-[1.4/1] m-2 overflow-hidden rounded-[1.6rem] z-10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />

                    {/* Darkened Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Emerging Links Container */}
                    <div className="absolute inset-0 flex items-center justify-center gap-6">
                      {/* GitHub Link */}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 p-4 bg-[#212121] text-white rounded-full shadow-2xl"
                      >
                        <Github size={28} />
                      </motion.a>

                      {/* Live Link (Purple Gradient) */}
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 p-4 bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] text-white rounded-full shadow-2xl"
                      >
                        <ExternalLink size={28} />
                      </motion.a>
                    </div>

                    <div className="absolute top-4 right-4 bg-[#00000080] backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-[#d1d1d1] border border-white/10">
                      {project.year}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 pt-4 relative z-10">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-4 inline-block ${themeBg}`} style={{ color: themeColor }}>
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight group-hover:text-[#9478ff] transition-colors">{project.title}</h3>

                    {/* Tagline matching category color */}
                    <p className="text-[13px] font-semibold mb-4" style={{ color: themeColor }}>{project.tagline}</p>

                    <p className="text-[#808080] text-sm leading-relaxed mb-6 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
                      {project.features.map(f => (
                        <span key={f} className="text-[11px] text-[#555] font-medium flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: themeColor }} /> {f}
                        </span>
                      ))}
                    </div>
                    <button className="w-full py-3.5 rounded-full bg-[#121212] border border-[#1a1a1a] group-hover:bg-white group-hover:text-black transition-all duration-500 flex items-center justify-center gap-2 font-bold text-sm">
                      View Project <ArrowRight size={18} />
                    </button>
                  </div>

                  {/* Bottom Highlight Bar (Hover Effect) */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"
                    style={{ backgroundColor: themeColor }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 5. Collaboration Section */}
        <motion.section
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="mt-40 p-16 md:py-24 rounded-[3.5rem] bg-gradient-to-b from-[#0e0c1a] to-[#050505] border border-[#ffffff08] text-center relative overflow-hidden group"
        >
          <div className="absolute -top-1/2 left-0 w-full h-full bg-[#4a3a8a08] rounded-full blur-[120px] pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight relative z-10">
            Interested in collaborating?
          </h2>
          <p className="text-[#707070] mb-10 max-w-lg mx-auto font-medium text-lg relative z-10 leading-relaxed">
            I'm always open to discussing new projects and opportunities.
          </p>
          <button onClick={() => navigate('/contact')} className="relative z-10 inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#7a62ff] to-[#a855f7] rounded-full font-bold text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(122,98,255,0.4)]">
            Let's Talk <ArrowRight size={20} className="stroke-[3px]" />
          </button>
        </motion.section>

      </main>
    </div>
  );
};

export default ProjectsPage;