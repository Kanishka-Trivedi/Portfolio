// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Eye, Award, Calendar, Building2, X, Download, Share2, CheckCircle2, Copy, Check } from 'lucide-react';

// // Certificate interface
// interface Certificate {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
//     category: string;
//     issuer: string;
//     date: string;
//     credentialUrl?: string;
//     previewUrl?: string;
//     credentialId?: string;
//     skills?: string[];
//     fullDescription?: string;
// }

// // Sample certificate data
// const certificatesData: Certificate[] = [
//     {
//         id: 1,
//         title: "AWS Certified Solutions Architect",
//         description: "Professional cloud architecture certification",
//         fullDescription: "Earned the AWS Solutions Architect certification from Amazon Web Services, demonstrating mastery in cloud infrastructure design, deployment strategies, and best practices for building scalable applications.",
//         image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
//         category: "Cloud",
//         issuer: "Amazon Web Services",
//         date: "2024",
//         credentialUrl: "#",
//         previewUrl: "#",
//         credentialId: "AWS-SAA-2024-XY789Z",
//         skills: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda"]
//     },
//     {
//         id: 2,
//         title: "React Advanced Patterns",
//         description: "Advanced React development and optimization",
//         fullDescription: "Completed advanced React certification covering modern patterns, performance optimization, state management, and building scalable enterprise applications.",
//         image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
//         category: "Frontend",
//         issuer: "Meta",
//         date: "2024",
//         credentialUrl: "#",
//         previewUrl: "#",
//         credentialId: "META-REACT-2024-AB123C",
//         skills: ["React", "TypeScript", "Redux", "Performance"]
//     },
//     {
//         id: 3,
//         title: "Node.js Microservices",
//         description: "Building scalable microservice architectures",
//         fullDescription: "Mastered microservices architecture using Node.js, including service design patterns, inter-service communication, and deployment strategies.",
//         image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
//         category: "Backend",
//         issuer: "Linux Foundation",
//         date: "2023",
//         credentialUrl: "#",
//         previewUrl: "#",
//         credentialId: "LF-NODE-2023-CD456E",
//         skills: ["Node.js", "Express", "Microservices", "Docker"]
//     },
//     {
//         id: 4,
//         title: "Machine Learning Specialization",
//         description: "Deep learning and neural network fundamentals",
//         fullDescription: "Comprehensive machine learning certification covering supervised and unsupervised learning, neural networks, and real-world ML applications.",
//         image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
//         category: "AI/ML",
//         issuer: "Stanford University",
//         date: "2023",
//         credentialUrl: "#",
//         previewUrl: "#",
//         credentialId: "STAN-ML-2023-EF789G",
//         skills: ["Python", "TensorFlow", "Neural Networks", "AI"]
//     },
//     {
//         id: 5,
//         title: "Docker & Kubernetes Mastery",
//         description: "Container orchestration and deployment",
//         fullDescription: "Advanced certification in container technologies, orchestration with Kubernetes, and cloud-native application deployment.",
//         image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80",
//         category: "DevOps",
//         issuer: "Cloud Native Computing Foundation",
//         date: "2023",
//         credentialUrl: "#",
//         previewUrl: "#",
//         credentialId: "CNCF-K8S-2023-GH012I",
//         skills: ["Docker", "Kubernetes", "DevOps", "CI/CD"]
//     },
//     {
//         id: 6,
//         title: "Cybersecurity Fundamentals",
//         description: "Network security and ethical hacking basics",
//         fullDescription: "Foundational cybersecurity certification covering network security, ethical hacking, threat detection, and security best practices.",
//         image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
//         category: "Security",
//         issuer: "CompTIA",
//         date: "2024",
//         credentialUrl: "#",
//         previewUrl: "#",
//         credentialId: "COMPTIA-SEC-2024-IJ345K",
//         skills: ["Security", "Network", "Ethical Hacking", "Compliance"]
//     },
//     {
//         id: 7,
//         title: "GraphQL API Development",
//         description: "Modern API design and implementation",
//         fullDescription: "Specialized certification in GraphQL API design, schema development, and building high-performance APIs.",
//         image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
//         category: "Backend",
//         issuer: "Apollo GraphQL",
//         date: "2023",
//         credentialUrl: "#",
//         previewUrl: "#",
//         credentialId: "APOLLO-GQL-2023-KL678M",
//         skills: ["GraphQL", "API Design", "Apollo", "Schema"]
//     },
//     {
//         id: 8,
//         title: "UI/UX Design Principles",
//         description: "User-centered design and interface optimization",
//         fullDescription: "Comprehensive UX certification covering user research, design thinking, prototyping, and interface optimization.",
//         image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
//         category: "Design",
//         issuer: "Nielsen Norman Group",
//         date: "2024",
//         credentialUrl: "#",
//         previewUrl: "#",
//         credentialId: "NNG-UX-2024-MN901O",
//         skills: ["UX Design", "Figma", "User Research", "Prototyping"]
//     }
// ];

// const categories = ["All", "Frontend", "Backend", "Cloud", "AI/ML", "DevOps", "Security", "Design"];

// // Certificate Preview Modal Component (Based on reference design)
// const CertificateModal = ({ certificate, onClose }: { certificate: Certificate | null; onClose: () => void }) => {
//     if (!certificate) return null;

//     const getCategoryColor = (category: string) => {
//         const colors = {
//             Frontend: "bg-cyan-500/20 text-cyan-400",
//             Backend: "bg-violet-500/20 text-violet-400",
//             Cloud: "bg-sky-500/20 text-sky-400",
//             "AI/ML": "bg-emerald-500/20 text-emerald-400",
//             Security: "bg-rose-500/20 text-rose-400",
//             Design: "bg-pink-500/20 text-pink-400",
//             "Python/SQL": "bg-blue-500/20 text-blue-400",
//             FullStack: "bg-purple-500/20 text-purple-400",
//         };
//         return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400";
//     };

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//             <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
//             <div className="relative bg-slate-900/95 backdrop-blur-sm border border-white/10 rounded-lg max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl max-h-[90vh] overflow-y-auto">
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
//                 >
//                     <X className="w-6 h-6" />
//                 </button>

//                 <div className="p-6 sm:p-8 md:p-10 lg:p-12">
//                     <div className="mb-6 sm:mb-8">
//                         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
//                             Certificate Details
//                         </h2>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
//                         {/* Certificate Image */}
//                         <div className="space-y-4 sm:space-y-6 md:space-y-8">
//                             <div className="relative group">
//                                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg sm:rounded-xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
//                                 <img
//                                     src={certificate.image}
//                                     alt={certificate.title}
//                                     className="relative w-full rounded-lg sm:rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-500"
//                                 />
//                             </div>

//                             {/* Modal Action Buttons */}
//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
//                                 <button
//                                     className="h-12 sm:h-14 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
//                                     onClick={() => window.open(certificate.credentialUrl, "_blank")}
//                                 >
//                                     <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
//                                     View
//                                 </button>
//                                 <button
//                                     className="h-12 sm:h-14 border border-white/20 text-white hover:bg-white/5 bg-white/5 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
//                                 >
//                                     <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
//                                     Download
//                                 </button>
//                                 <button
//                                     className="h-12 sm:h-14 border border-white/20 text-white hover:bg-white/5 bg-white/5 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
//                                 >
//                                     <Share2 className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
//                                     Share
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Certificate Info */}
//                         <div className="space-y-4 sm:space-y-6 md:space-y-8">
//                             <div>
//                                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
//                                     {certificate.title}
//                                 </h3>
//                                 <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
//                                     {certificate.fullDescription || certificate.description}
//                                 </p>
//                             </div>

//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                                 <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
//                                     <label className="text-xs sm:text-sm text-purple-400 uppercase tracking-wide font-semibold">
//                                         Issuer
//                                     </label>
//                                     <p className="text-white font-bold text-sm sm:text-base md:text-lg">{certificate.issuer}</p>
//                                 </div>
//                                 <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
//                                     <label className="text-xs sm:text-sm text-violet-400 uppercase tracking-wide font-semibold">
//                                         Date
//                                     </label>
//                                     <p className="text-white font-bold text-sm sm:text-base md:text-lg">{certificate.date}</p>
//                                 </div>
//                             </div>

//                             <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
//                                 <label className="text-xs sm:text-sm text-violet-400 uppercase tracking-wide font-semibold mb-2 block">
//                                     Category
//                                 </label>
//                                 <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(certificate.category)}`}>
//                                     {certificate.category}
//                                 </span>
//                             </div>

//                             {certificate.credentialId && (
//                                 <div className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10">
//                                     <label className="text-xs sm:text-sm text-purple-400 uppercase tracking-wide mb-3 block font-semibold">
//                                         Credential ID
//                                     </label>
//                                     <code className="bg-black/30 border border-purple-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-purple-300 font-mono text-xs sm:text-sm block break-all">
//                                         {certificate.credentialId}
//                                     </code>
//                                 </div>
//                             )}

//                             <div>
//                                 <label className="text-xs sm:text-sm text-violet-400 uppercase tracking-wide mb-3 sm:mb-4 block font-semibold">
//                                     Skills & Technologies
//                                 </label>
//                                 <div className="flex flex-wrap gap-2 sm:gap-3">
//                                     {certificate.skills && certificate.skills.map((skill, index) => (
//                                         <span
//                                             key={index}
//                                             className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-300 border border-purple-500/30 px-2 sm:px-3 py-1 sm:py-2 hover:scale-105 transition-transform duration-300 text-xs sm:text-sm rounded-full inline-flex items-center"
//                                         >
//                                             ✦ {skill}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg sm:rounded-xl">
//                                 <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 flex-shrink-0" />
//                                 <span className="text-green-300 font-medium sm:font-semibold text-sm sm:text-base md:text-lg">
//                                     Verified Certificate
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Certificates = () => {
//     const [activeFilter, setActiveFilter] = useState("All");
//     const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

//     // Filter certificates based on active category
//     const filteredCertificates = activeFilter === "All"
//         ? certificatesData
//         : certificatesData.filter(cert => cert.category === activeFilter);

//     return (
//         <section className="section-container relative min-h-screen pt-32 pb-0">
//             {/* Decorative Background Elements */}
//             <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
//             <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

//             {/* Section Header */}
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="text-center mb-4 relative z-10"
//             >
//                 <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 relative">
//                     Professional
//                     <span className="block mt-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
//                         Certifications
//                     </span>
//                 </h2>

//                 <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//                     Industry-recognized credentials demonstrating expertise across
//                     <span className="text-purple-400 font-semibold"> cutting-edge technologies</span>
//                 </p>
//             </motion.div>

//             {/* Category Filters */}
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="relative mb-20"
//             >
//                 <div className="max-w-4xl mx-auto relative">
//                     <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-2xl blur-xl" />

//                     <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10 shadow-2xl">
//                         <div className="flex flex-wrap justify-center gap-2">
//                             {categories.map((category, index) => (
//                                 <motion.button
//                                     key={category}
//                                     initial={{ opacity: 0, scale: 0.8 }}
//                                     whileInView={{ opacity: 1, scale: 1 }}
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     transition={{ duration: 0.2, delay: index * 0.03 }}
//                                     viewport={{ once: true }}
//                                     onClick={() => setActiveFilter(category)}
//                                     className={`
//                     relative px-6 py-3 rounded-xl font-semibold text-sm
//                     transition-all duration-300 overflow-hidden
//                     ${activeFilter === category
//                                             ? 'text-white shadow-lg'
//                                             : 'text-gray-400 hover:text-white'
//                                         }
//                   `}
//                                 >
//                                     {activeFilter === category && (
//                                         <motion.div
//                                             layoutId="activeFilterBg"
//                                             className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"
//                                             transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                                         />
//                                     )}

//                                     {activeFilter !== category && (
//                                         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 hover:from-purple-500/10 hover:via-pink-500/10 hover:to-blue-500/10 transition-all duration-300" />
//                                     )}

//                                     <span className="relative z-10 flex items-center gap-2">
//                                         {category}
//                                     </span>
//                                 </motion.button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </motion.div>

//             {/* Certificates Grid */}
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={activeFilter}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.4 }}
//                     className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
//                 >
//                     {filteredCertificates.map((certificate, index) => (
//                         <motion.div
//                             key={certificate.id}
//                             initial={{ opacity: 0, x: -50, rotateY: -15 }}
//                             whileInView={{
//                                 opacity: 1,
//                                 x: 0,
//                                 rotateY: 0,
//                                 transition: {
//                                     type: "spring",
//                                     bounce: 0.3,
//                                     duration: 0.8,
//                                     delay: index * 0.1
//                                 }
//                             }}
//                             viewport={{ once: true, amount: 0.2 }}
//                             className="group relative"
//                             style={{ perspective: "1000px" }}
//                         >
//                             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 group-hover:duration-200" />

//                             <Card className="premium-certificate-card relative h-full overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 border-white/10 rounded-3xl transition-all duration-500 hover:border-purple-500/30 backdrop-blur-xl">
//                                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                                     <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5" />
//                                 </div>

//                                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                                 </div>

//                                 <div className="relative h-64 overflow-hidden">
//                                     <img
//                                         src={certificate.image}
//                                         alt={certificate.title}
//                                         className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//                                     />

//                                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
//                                     <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                                     <div className="absolute top-4 right-4">
//                                         <div className="relative">
//                                             <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-75" />
//                                             <div className="relative px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
//                                                 <span className="text-xs font-bold bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
//                                                     {certificate.category}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="absolute top-0 left-0 w-20 h-20">
//                                         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-br-full" />
//                                     </div>
//                                 </div>

//                                 <CardHeader className="relative pb-4 pt-6">
//                                     <CardTitle className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
//                                         {certificate.title}
//                                     </CardTitle>

//                                     <div className="flex flex-col gap-2 mt-4">
//                                         <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
//                                             <Building2 className="w-4 h-4 text-purple-400" />
//                                             <span className="font-medium">{certificate.issuer}</span>
//                                         </div>
//                                         <div className="flex items-center gap-2 text-sm text-gray-500">
//                                             <Calendar className="w-4 h-4 text-blue-400" />
//                                             <span>{certificate.date}</span>
//                                         </div>
//                                     </div>
//                                 </CardHeader>

//                                 <CardContent className="pb-6">
//                                     <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
//                                         {certificate.description}
//                                     </p>
//                                 </CardContent>

//                                 <CardFooter className="flex gap-3 pt-2 pb-6">
//                                     {certificate.credentialUrl && (
//                                         <Button
//                                             asChild
//                                             className="flex-1 relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 group/btn border-0"
//                                         >
//                                             <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
//                                                 <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
//                                                 <span className="font-semibold">View Credential</span>
//                                             </a>
//                                         </Button>
//                                     )}

//                                     <Button
//                                         onClick={() => setSelectedCertificate(certificate)}
//                                         variant="outline"
//                                         className="flex-1 relative overflow-hidden border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 text-purple-300 hover:text-purple-200 hover:border-purple-400/50 rounded-xl transition-all duration-300 backdrop-blur-sm group/btn"
//                                     >
//                                         <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
//                                         <span className="font-semibold">Preview</span>
//                                     </Button>
//                                 </CardFooter>

//                                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             </Card>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </AnimatePresence>

//             {/* Empty state */}
//             {filteredCertificates.length === 0 && (
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-center py-32"
//                 >
//                     <div className="relative inline-block">
//                         <Award className="w-24 h-24 text-gray-700 mx-auto mb-6" />
//                         <div className="absolute inset-0 bg-purple-500/10 blur-2xl rounded-full" />
//                     </div>
//                     <p className="text-gray-500 text-xl font-medium">No certificates found in this category</p>
//                     <p className="text-gray-600 text-sm mt-2">Try selecting a different category</p>
//                 </motion.div>
//             )}

//             {/* Certificate Preview Modal */}
//             <AnimatePresence>
//                 {selectedCertificate && (
//                     <CertificateModal
//                         certificate={selectedCertificate}
//                         onClose={() => setSelectedCertificate(null)}
//                     />
//                 )}
//             </AnimatePresence>
//         </section>
//     );
// };

// export default Certificates;







"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import {
    ExternalLink,
    Search,
    Filter,
    Calendar,
    Building,
    Download,
    Share2,
    Eye,
    CheckCircle,
    Zap,
    X,
} from "lucide-react"
import { VortexBackground } from "@/components/ui/vortex-background"
import azureCertImg from "../assets/CertificateOfCompletion_AzureAI.png"
import sheKunjCert from "../assets/Shekunj AI Course Certificate-1.png"
import documentDBCert from "../assets/Amazon DocumentDB Certificate-1.png"
import azureFundamentCert from "../assets/Azure Fundamentals Certificate-1.png"
import azureWorkscert from "../assets/Azure Fundamentals Workshop Certificate-1.png"
import basicAzurecert from "../assets/Basics Of Azure Services-1.png"
import containerSecCert from "../assets/Dive Deep on Container Security-1.png"
import gatewayLoadCert from "../assets/GateWay Load Balancer Certificate-1.png"
import githubCoCert from "../assets/GitHub Copilot By SimpliLearn-1.png"
import cssCert from "../assets/HackerRank CSS Certificate-1.png"
import frontendDevCert from "../assets/HackerRank Frontend Devloper React Certificate-1.png"
import javascriptBasicCert from "../assets/HackerRank Javascript Certificate-1.png"
import javascriptInterCert from "../assets/HackerRank JavaScript(Intermediate) Certificate-1.png"
import problemSolveCert from "../assets/HackerRank Problem Solving Certificate-1.png"
import reactBasiccert from "../assets/HackerRank React (Basic) Certificate-1.png"
import restAPIInterCert from "../assets/RestAPI Intermediate Certificate-1.png"
import cs50Cert from "../assets/CS50x Certificate-1.png"

// Sample certificate data
const certificates = [
    {
        id: 1,
        title: "Harvard University CS50x Certificate",
        issuer: "Harvard University",
        date: "2025",
        category: "Python/SQL",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104874/CS50x_Certificate-1_c5ktak.png",
        certificateUrl: "https://drive.google.com/file/d/1ivpafCwNC_ZKqJBXmQMs1G52pXLTYlAk/view?usp=drive_link",
        skills: ["Flask", "Python", "SQL"],
        verified: true,
        description:
            "Earned the CS50x certificate from Harvard University, demonstrating mastery in computer science fundamentals, algorithms, and real-world software development.",
        credentialId: "ba4c763e-e97f-4aa0-bfe0-e0f0bab8cdc9",
        color: "#8B5CF6",
    },
    {
        id: 2,
        title: "Microsoft Azure AI Certificate",
        issuer: "Microsoft",
        date: "2025",
        category: "AI/ML",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104873/CertificateOfCompletion_AzureAI_hbmgfg.png",
        certificateUrl: "https://drive.google.com/file/d/1oabLxwGn8qr3NRyKHZqa9JBJtk_OUe2p/view?usp=drive_link",
        skills: ["Azure", "AI", "ML"],
        verified: true,
        description:
            "Comprehensive certification exploring core AI concepts, machine learning fundamentals, and practical applications using Microsoft Azure services.",
        credentialId: "b085332aa7e353e7d208ecf1a0001f597b697c8aaed2b507149b0a830809da31",
        color: "#8B5CF6",
    },
    {
        id: 3,
        title: "SheKunj AI Course Certificate",
        issuer: "SheKunj",
        date: "2025",
        category: "AI/ML",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104926/Shekunj_AI_Course_Certificate-1_ztx5fa.png",
        certificateUrl: "https://drive.google.com/file/d/1J4gIVxJ0yXVegp7Rf9Ram2CsTeg0cW10/view?usp=drive_link",
        skills: ["AI", "ML"],
        verified: true,
        description: "Comprehensive certification exploring core AI concepts, machine learning fundamentals, and practical applications for GenAI by SheKunj.",
        credentialId: "SH108-25EW14887",
        color: "#A855F7",
    },
    {
        id: 4,
        title: "Amazon DocumentDB Certificate",
        issuer: "Simplilearn & Skillup",
        date: "2025",
        category: "Cloud",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104875/Amazon_DocumentDB_Certificate-1_ixidhi.png",
        certificateUrl: "https://simpli-web.app.link/e/5PWdSlQl3Tb",
        skills: ["AWS", "Data Modeling", "Querying "],
        verified: true,
        description: "Advanced cloud architecture certification focusing on scalable and secure cloud solutions.",
        color: "#7C3AED",
    },
    {
        id: 5,
        title: "Azure Fundamentals Certificate",
        issuer: "Simplilearn & Skillup",
        date: "2025",
        category: "Cloud",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104876/Azure_Fundamentals_Certificate-1_fieash.png",
        certificateUrl: "https://simpli-web.app.link/e/bucKOabm3Tb",
        skills: ["Cloud", "Azure", "SLAs"],
        verified: true,
        description: "Foundational certification covering core cloud concepts, Azure services, pricing, security, and identity management.",
        color: "#9333EA",
    },
    {
        id: 6,
        title: "Azure WorkShop Certificate",
        issuer: "Microsoft",
        date: "2025",
        category: "Cloud",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104875/Azure_Fundamentals_Workshop_Certificate-1_oypx6c.png",
        certificateUrl: "https://drive.google.com/file/d/1c6kUQ_EgQz2X6UO6pdW8nFmLSGPjoTV7/view?usp=sharing",
        skills: ["Azure", "TechTools"],
        verified: true,
        description: "Hands-on workshop certificate demonstrating practical skills in deploying, managing, and monitoring applications using Microsoft Azure tools and services.",
        color: "#7C3AED",
    },
    {
        id: 7,
        title: "Basics of Azure Services Certificate",
        issuer: "Simplilearn & Skillup",
        date: "2025",
        category: "Cloud",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104882/Basics_Of_Azure_Services-1_qdpgah.png",
        certificateUrl: "https://simpli-web.app.link/e/9yhH9Qdm3Tb",
        skills: ["VMs", "Azure Storage", "Cloud Computing"],
        verified: true,
        description: "Foundational course introducing core Azure services, cloud computing basics, and essential tools for managing and deploying resources on Microsoft Azure.",
        color: "#8B5CF6",
    },
    {
        id: 8,
        title: "Deep Dive into Container Security Certificate",
        issuer: "Simplilearn & Skillup",
        date: "2025",
        category: "Security",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104875/Dive_Deep_on_Container_Security-1_q6eeb9.png",
        certificateUrl: "https://simpli-web.app.link/e/P7GT5E2l3Tb",
        skills: ["Container", "Docker", "Kubernates", "Access Control"],
        verified: true,
        description: "A focused certification exploring security best practices, tools, and techniques for protecting Docker and Kubernetes containerized environments.",
        color: "#8B5CF6",
    },
    {
        id: 9,
        title: "Gateway Load Balancer Certificate",
        issuer: "Simplilearn & Skillup",
        date: "2025",
        category: "Cloud",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104879/GateWay_Load_Balancer_Certificate-1_xp6fct.png",
        certificateUrl: "https://simpli-web.app.link/e/9PyjfBNl3Tb",
        skills: ["Load Balancing", "Cloud Networking", "ELB", "VPC"],
        verified: true,
        description: "Introduction to AWS Gateway Load Balancer focusing on cloud traffic management, network security, and scalable infrastructure deployment.",
        color: "#8B5CF6",
    },
    {
        id: 10,
        title: "GitHub Copilot Certificate",
        issuer: "Simplilearn & Skillup",
        date: "2025",
        category: "AI/Ml",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104875/GitHub_Copilot_By_SimpliLearn-1_sipv5o.png",
        certificateUrl: "https://simpli-web.app.link/e/DJhrGhVl3Tb",
        skills: ["Copilot", "VS Code integration", "Version Control"],
        verified: true,
        description: "A concise introduction to GitHub Copilot, exploring AI-powered code suggestions, developer productivity, and modern coding automation.",
        color: "#8B5CF6",
    },
    {
        id: 11,
        title: "RestAPI Intermediate Certificate",
        issuer: "HackerRank",
        date: "2025",
        category: "FullStack",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104922/RestAPI_Intermediate_Certificate-1_hzpttn.png",
        certificateUrl: "https://www.hackerrank.com/certificates/06321767fa90",
        skills: ["RstAPI", "HTTP", "CRUD"],
        verified: true,
        description: "A practical certification demonstrating intermediate-level skills in building, consuming, and securing RESTful APIs using modern web standards.",
        credentialId: "06321767FA90",
        color: "#8B5CF6",
    },
    {
        id: 12,
        title: "FrontEnd Devloper Certificate",
        issuer: "HackerRank",
        date: "2025",
        category: "Frontend",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104876/HackerRank_Frontend_Devloper_React_Certificate-1_reedsn.png",
        certificateUrl: "https://www.hackerrank.com/certificates/06321767fa90",
        skills: ["React", "Frontend", "DOM", "Web Devlopment"],
        verified: true,
        description: "A certification validating core frontend development skills including HTML, CSS, JavaScript, DOM manipulation, and responsive UI design.",
        credentialId: "C2242B94323C",
        color: "#8B5CF6",
    },
    {
        id: 13,
        title: "Css Certificate",
        issuer: "HackerRank",
        date: "2025",
        category: "Design",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104875/HackerRank_CSS_Certificate-1_vwoq34.png",
        certificateUrl: "https://www.hackerrank.com/certificates/a987a929cba1",
        skills: ["CSS", "GRID", "FlexBox", "Transitions"],
        verified: true,
        description: "A certification demonstrating proficiency in CSS concepts including selectors, layouts, styling, and responsive design techniques.",
        credentialId: "A987A929CBA1",
        color: "#8B5CF6",
    },
    {
        id: 14,
        title: "JavaScript Basics Certificate",
        issuer: "HackerRank",
        date: "2025",
        category: "Backend",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104876/HackerRank_Javascript_Certificate-1_vdjzfa.png",
        certificateUrl: "https://www.hackerrank.com/certificates/700e50151382",
        skills: ["Functions", "Variables & DataTypes", "Event Handling"],
        verified: true,
        description: "Fundamental course covering core JavaScript concepts like variables, functions, control flow, and DOM interactions.",
        credentialId: "700E50151382",
        color: "#8B5CF6",
    },
    {
        id: 15,
        title: "JavaScript Intermediate Certificate",
        issuer: "HackerRank",
        date: "2025",
        category: "Backend",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104876/HackerRank_JavaScript_Intermediate_Certificate-1_ijuifs.png",
        certificateUrl: "https://www.hackerrank.com/certificates/895974834bdf",
        skills: ["ES6+", "Error Handling", "Event Loop", "HOF"],
        verified: true,
        description: "Covers advanced JavaScript concepts including asynchronous programming, closures, ES6 features, and functional programming techniques.",
        credentialId: "895974834BDF",
        color: "#8B5CF6",
    },
    {
        id: 16,
        title: "React Certificate",
        issuer: "HackerRank",
        date: "2025",
        category: "Frontend",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104877/HackerRank_React_Basic_Certificate-1_jgqg8t.png",
        certificateUrl: "https://www.hackerrank.com/certificates/c5680401328b",
        skills: ["JSX", "State Management", "Hooks", "Virtual DOM", "Props"],
        verified: true,
        description: "A foundational certificate demonstrating proficiency in building dynamic user interfaces using React.js, hooks, and component-based architecture.",
        credentialId: "895974834BDF",
        color: "#8B5CF6",
    },
    {
        id: 17,
        title: "Problem Solving Certificate",
        issuer: "HackerRank",
        date: "2025",
        category: "Backend",
        image: "https://res.cloudinary.com/ddc8en3sk/image/upload/v1770104877/HackerRank_Problem_Solving_Certificate-1_p3ogcn.png",
        certificateUrl: "https://www.hackerrank.com/certificates/cff7d5d2dce9",
        skills: ["Algorithms", "Data Structures", "Time Complexxity", "Logical Thinking"],
        verified: true,
        description: "A certificate showcasing proficiency in solving algorithmic challenges using efficient logic, data structures, and analytical thinking.",
        credentialId: "C5680401328B",
        color: "#8B5CF6",
    },
]

const categories = ["All", "Frontend", "Full Stack", "Cloud", "AI/ML", "Security", "Design", "Backend"];

// Custom Card Component
function Card({ children, className, ...props }) {
    return (
        <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg ${className}`} {...props}>
            {children}
        </div>
    )
}

// Custom Button Component
function Button({ children, variant = "default", size = "default", className, ...props }) {
    const baseClasses =
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"

    const variants = {
        default:
            "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg hover:shadow-purple-500/25",
        outline: "border border-white/20 text-white hover:bg-white/5 bg-white/5",
    }

    const sizes = {
        default: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    }

    return (
        <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}

// Custom Badge Component
function Badge({ children, className }) {
    return (
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${className}`}>
            {children}
        </span>
    )
}

// Custom Input Component
function Input({ className, ...props }) {
    return (
        <input
            className={`w-full px-3 py-2 bg-transparent border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/30 ${className}`}
            {...props}
        />
    )
}

// Custom Modal Component
function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-slate-900/95 backdrop-blur-sm border border-white/10 rounded-lg max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl max-h-[90vh] overflow-y-auto">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                    <X className="w-6 h-6" />
                </button>
                {children}
            </div>
        </div>
    )
}

export default function Certificates() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [filteredCertificates, setFilteredCertificates] = useState(certificates)
    const [selectedCertificate, setSelectedCertificate] = useState(null)
    const [isVisible, setIsVisible] = useState(true)
    const [hoveredCard, setHoveredCard] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const sectionRef = useRef(null)

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // Filter certificates
    useEffect(() => {
        let filtered = certificates

        if (searchTerm) {
            filtered = filtered.filter(
                (cert) =>
                    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    cert.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())),
            )
        }

        if (selectedCategory !== "All") {
            filtered = filtered.filter((cert) => cert.category === selectedCategory)
        }

        setFilteredCertificates(filtered)
    }, [searchTerm, selectedCategory])

    const getCategoryColor = (category) => {
        const colors = {
            Frontend: "bg-cyan-500/20 text-cyan-400",
            "Full Stack": "bg-violet-500/20 text-violet-400",
            Cloud: "bg-sky-500/20 text-sky-400",
            "AI/ML": "bg-emerald-500/20 text-emerald-400",
            Security: "bg-rose-500/20 text-rose-400",
            Design: "bg-pink-500/20 text-pink-400",
        }
        return colors[category] || "bg-gray-500/20 text-gray-400"
    }

    const openModal = (cert) => {
        setSelectedCertificate(cert)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedCertificate(null)
    }

    return (
        <div
            ref={sectionRef}
            className="relative overflow-hidden"
            style={{
                minHeight: "calc(100vh - 80px)", // Subtract navbar height
                paddingTop: "80px", // Add space for fixed navbar
            }}
        >
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

            {/* Main Content */}
            <div className="relative z-20 px-3 sm:px-4 md:px-6 lg:px-8 pb-16">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div
                        className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
                            My Certifications
                        </h1>

                        <div className="relative px-4">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8">
                                These certifications tell the story of my learning journey—one step at a time, growing with every course and challenge in tech.
                            </p>
                        </div>
                    </div>

                    {/* Search and Category Filter */}
                    <div
                        className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                            {/* Search */}
                            <div className="relative w-full max-w-2xl mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"></div>
                                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-1">
                                    <div className="relative">
                                        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 sm:w-5 h-4 sm:h-5" />
                                        <Input
                                            placeholder="Search certificates, skills, or issuers..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-transparent border-0 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500/50 text-sm sm:text-base md:text-lg"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div className="relative w-full max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg sm:rounded-xl blur-sm sm:blur-lg"></div>
                                <div className="relative flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3">
                                    <Filter className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400 flex-shrink-0" />
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="bg-transparent text-white focus:outline-none cursor-pointer text-sm sm:text-base w-full"
                                    >
                                        {categories.map((category) => (
                                            <option key={category} value={category} className="bg-slate-800">
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certificates Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-10 gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-[0px]">
                        {filteredCertificates.map((cert, index) => {
                            const isLeftColumn = index % 2 === 0;
                            const cardRef = useRef(null);
                            const isInView = useInView(cardRef, { once: true, margin: "-100px" });

                            return (
                                <motion.div
                                    key={cert.id}
                                    ref={cardRef}
                                    initial={{
                                        opacity: 0,
                                        x: isLeftColumn ? -100 : 100,
                                        y: -80,
                                    }}
                                    animate={isInView ? {
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                    } : {}}
                                    transition={{
                                        duration: 0.8,
                                        delay: Math.floor(index / 2) * 0.2,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    className="max-w-[550px] w-full mx-auto"
                                >
                                    <Card
                                        className="group relative bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/30 transition-all duration-700 cursor-pointer overflow-hidden"
                                        style={{
                                            transformStyle: "preserve-3d",
                                        }}
                                        onMouseEnter={() => setHoveredCard(cert.id)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        {/* Glow Effect */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl"
                                            style={{
                                                background: `linear-gradient(45deg, ${cert.color}20, ${cert.color}40)`,
                                                transform: "translateZ(-10px)",
                                            }}
                                        ></div>

                                        {/* Hover Shadow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-violet-500/0 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-500 rounded-lg"></div>

                                        <div className="p-0 relative">
                                            {/* Certificate Image */}
                                            <div className="relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                                <img
                                                    src={cert.image || "/placeholder.svg"}
                                                    alt={cert.title}
                                                    className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                                    style={{
                                                        filter: hoveredCard === cert.id ? "saturate(1.2) contrast(1.1)" : "saturate(1) contrast(1)",
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                                {/* Verification Badge */}
                                                {cert.verified && (
                                                    <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full p-1.5 sm:p-2 md:p-3 group-hover:scale-110 transition-transform duration-300">
                                                        <CheckCircle className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-green-400" />
                                                        <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
                                                    </div>
                                                )}

                                                {/* Animated Elements */}
                                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                    <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-2 border-white/30 rounded-full animate-spin-slow"></div>
                                                    <div className="absolute inset-1 sm:inset-2 border border-purple-400/50 rounded-full animate-pulse"></div>
                                                </div>
                                            </div>

                                            {/* Certificate Content */}
                                            <div className="p-4 sm:p-6 md:p-8 relative">
                                                {/* Animated Particles */}
                                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float opacity-0 group-hover:opacity-100"
                                                            style={{
                                                                left: `${20 + i * 15}%`,
                                                                animationDelay: `${i * 0.2}s`,
                                                                animationDuration: "3s",
                                                            }}
                                                        ></div>
                                                    ))}
                                                </div>

                                                <div className="flex items-start justify-between mb-3 sm:mb-4">
                                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-tight">
                                                        {cert.title}
                                                    </h3>
                                                </div>

                                                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                                    <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg">
                                                        <Building className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400" />
                                                    </div>
                                                    <span className="text-gray-300 font-medium sm:font-semibold text-sm sm:text-base">
                                                        {cert.issuer}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                                    <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg">
                                                        <Calendar className="w-3 sm:w-4 h-3 sm:h-4 text-violet-400" />
                                                    </div>
                                                    <span className="text-gray-400 text-sm sm:text-base">{cert.date}</span>
                                                </div>

                                                {/* Category Badge */}
                                                <Badge
                                                    className={`${getCategoryColor(cert.category)} mb-4 sm:mb-6 px-2 sm:px-3 py-0.5 sm:py-1 group-hover:scale-105 transition-transform duration-300 text-xs sm:text-sm`}
                                                >
                                                    {cert.category}
                                                </Badge>

                                                {/* Skills */}
                                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                                                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className="text-xs bg-gradient-to-r from-white/10 to-white/5 text-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded-full border border-white/10 hover:border-purple-500/30 transition-colors duration-300"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                    {cert.skills.length > 3 && (
                                                        <span className="text-xs bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-300 px-2 sm:px-3 py-1 sm:py-2 rounded-full border border-purple-500/30">
                                                            +{cert.skills.length - 3} more
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                                    <Button
                                                        variant="outline"
                                                        size="lg"
                                                        className="flex-1 h-10 sm:h-12 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium sm:font-semibold"
                                                        onClick={() => openModal(cert)}
                                                    >
                                                        <Eye className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                                                        Preview
                                                    </Button>

                                                    <Button
                                                        size="lg"
                                                        className="flex-1 h-10 sm:h-12 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium sm:font-semibold"
                                                        onClick={() => window.open(cert.certificateUrl, "_blank")}
                                                    >
                                                        <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                                                        View Certificate
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* No Results */}
                    {
                        filteredCertificates.length === 0 && (
                            <div className="text-center py-12 sm:py-16 md:py-20">
                                <div className="relative w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-white/5 to-white/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 backdrop-blur-sm border border-white/10">
                                    <Search className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-purple-400" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full animate-pulse"></div>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">No certificates found</h3>
                                <p className="text-gray-400 text-base sm:text-lg">Try adjusting your search or filter criteria</p>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* Certificate Preview Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {selectedCertificate && (
                    <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                        <div className="mb-6 sm:mb-8">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                                Certificate Details
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                            {/* Certificate Image */}
                            <div className="space-y-4 sm:space-y-6 md:space-y-8">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg sm:rounded-xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                    <img
                                        src={selectedCertificate.image || "/placeholder.svg"}
                                        alt={selectedCertificate.title}
                                        className="relative w-full rounded-lg sm:rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Modal Action Buttons */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                    <Button
                                        size="lg"
                                        className="h-12 sm:h-14 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium sm:font-semibold"
                                        onClick={() => window.open(selectedCertificate.certificateUrl, "_blank")}
                                    >
                                        <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                                        View
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-12 sm:h-14 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium sm:font-semibold"
                                    >
                                        <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                                        Download
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-12 sm:h-14 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium sm:font-semibold"
                                    >
                                        <Share2 className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                                        Share
                                    </Button>
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="space-y-4 sm:space-y-6 md:space-y-8">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                                        {selectedCertificate.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                                        {selectedCertificate.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                                        <label className="text-xs sm:text-sm text-purple-400 uppercase tracking-wide font-semibold">
                                            Issuer
                                        </label>
                                        <p className="text-white font-bold text-sm sm:text-base md:text-lg">{selectedCertificate.issuer}</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                                        <label className="text-xs sm:text-sm text-violet-400 uppercase tracking-wide font-semibold">
                                            Date
                                        </label>
                                        <p className="text-white font-bold text-sm sm:text-base md:text-lg">{selectedCertificate.date}</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                                        <label className="text-xs sm:text-sm text-violet-400 uppercase tracking-wide font-semibold">
                                            Category
                                        </label>
                                        <Badge className={`${getCategoryColor(selectedCertificate.category)} mt-2 text-xs sm:text-sm`}>
                                            {selectedCertificate.category}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10">
                                    <label className="text-xs sm:text-sm text-purple-400 uppercase tracking-wide mb-3 block font-semibold">
                                        Credential ID
                                    </label>
                                    <code className="bg-black/30 border border-purple-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-purple-300 font-mono text-xs sm:text-sm block break-all">
                                        {selectedCertificate.credentialId}
                                    </code>
                                </div>

                                <div>
                                    <label className="text-xs sm:text-sm text-violet-400 uppercase tracking-wide mb-3 sm:mb-4 block font-semibold">
                                        Skills & Technologies
                                    </label>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {selectedCertificate.skills.map((skill, index) => (
                                            <Badge
                                                key={index}
                                                className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-300 border border-purple-500/30 px-2 sm:px-3 py-1 sm:py-2 hover:scale-105 transition-transform duration-300 text-xs sm:text-sm"
                                            >
                                                <Zap className="w-2 sm:w-3 h-2 sm:h-3 mr-1" />
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {selectedCertificate.verified && (
                                    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg sm:rounded-xl">
                                        <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 flex-shrink-0" />
                                        <span className="text-green-300 font-medium sm:font-semibold text-sm sm:text-base md:text-lg">
                                            Verified Certificate
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}