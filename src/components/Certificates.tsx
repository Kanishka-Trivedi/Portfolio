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
    Star,
    Code2,
    Award,
    Users,
    GraduationCap,
    MapPin,
    Monitor,
} from "lucide-react"

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

// Hackathon data
const hackathons = [
    {
        id: 101,
        title: "Hack The Tank 3.0 2026 - Top 4 Finalist",
        issuer: "SVNIT Surat",
        date: "2026",
        description:
            "Built a next-generation reverse-commerce platform, ReturnIQ, that reimagines the return and exchange experience for modern D2C brands. The system streamlines post-purchase workflows, reduces reverse logistics and delivery costs, accelerates customer exchanges, and integrates intelligent fraud-detection mechanisms to minimize revenue leakage. By leveraging automation and data-driven decisioning, ReturnIQ transforms returns from an operational burden into a strategic growth advantage.",
        location: "Surat, India",
        certificateUrl: "https://www.linkedin.com/posts/kanishka-trivedi_hackthetank3-dscnitsurat-openleaf-activity-7429396395079426048-81Zr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFVUuDcBgxMdGiH8DZwLSb1wC5NEu4mDJmY",
        featured: true,
    },
    {
        id: 102,
        title: "InnovAItion - DAIICT Hackathon 2026",
        issuer: "DAIICT Gandhinagar",
        date: "2026",
        description:
            "Developed a visual cloud infrastructure builder that enables users to design and deploy cloud architectures without prior cloud expertise. Built a drag-and-drop canvas interface where users can visually compose cloud services, while the platform automatically generates production-ready Terraform code in the background. The system abstracts infrastructure complexity, accelerates deployment workflows, and bridges the gap between visual design and Infrastructure as Code (IaC) automation.",
        location: "Gandhinagar, India",
        certificateUrl: "https://unstop.com/certificate-preview/9bbf6bf7-3c31-40bd-928e-7d3897a734e6",
        featured: true,
    },
        {
        id: 103,
        title: "Synapse - Symbiosis University Hackathon 2026",
        issuer: "Symbiosis University Pune",
        date: "2026",
        location: "Pune, India",
        certificateUrl: "https://drive.google.com/file/d/19AW2EeG-YEUs9mW-e2_otj6Ekdgy9Fkx/view?usp=sharing",
        featured: true,
    },
];

const filterTabs = [
    { key: "Hackathons", label: "Hackathons", icon: Code2, color: "#00d4ff" },
    { key: "Certifications", label: "Certifications", icon: Award, color: "#a1a1aa" },
    { key: "Workshops", label: "Workshops", icon: Users, color: "#d4a017" },
];

// Workshop data
const workshops = [
    {
        id: 201,
        title: "Industrial Visit - Odoo",
        issuer: "Odoo India Pvt. Ltd.",
        date: "2024",
        description:
            "Gained insights into ERP software development and enterprise solutions.",
        location: "Gandhinagar, Gujarat",
        certificateUrl: "#",
    },
];

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
    const [activeFilter, setActiveFilter] = useState<string | null>(null)
    const [selectedCertificate, setSelectedCertificate] = useState(null)
    const [isVisible, setIsVisible] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const sectionRef = useRef(null)
    const certificationsRef = useRef<HTMLDivElement>(null)
    const hackathonsRef = useRef<HTMLDivElement>(null)
    const workshopsRef = useRef<HTMLDivElement>(null)

    const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
        Certifications: certificationsRef,
        Hackathons: hackathonsRef,
        Workshops: workshopsRef,
    }

    const handleFilterClick = (key: string) => {
        setActiveFilter(key)
        const ref = sectionRefs[key]
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

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

    const getCategoryColor = (category) => {
        const colors = {
            Frontend: "bg-cyan-500/20 text-cyan-400",
            "Full Stack": "bg-violet-500/20 text-violet-400",
            Cloud: "bg-sky-500/20 text-sky-400",
            "AI/ML": "bg-emerald-500/20 text-emerald-400",
            Security: "bg-rose-500/20 text-rose-400",
            Design: "bg-pink-500/20 text-pink-400",
            Backend: "bg-orange-500/20 text-orange-400",
            FullStack: "bg-violet-500/20 text-violet-400",
            "AI/Ml": "bg-emerald-500/20 text-emerald-400",
            "Python/SQL": "bg-yellow-500/20 text-yellow-400",
        }
        return colors[category] || "bg-gray-500/20 text-gray-400"
    }

    // Theme color system matching the project cards
    const getCategoryTheme = (category) => {
        const themes = {
            Frontend: { color: '#6366f1', bg: 'bg-[#6366f125]' },
            "Full Stack": { color: '#10b981', bg: 'bg-[#10b98125]' },
            FullStack: { color: '#10b981', bg: 'bg-[#10b98125]' },
            Cloud: { color: '#0ea5e9', bg: 'bg-[#0ea5e925]' },
            "AI/ML": { color: '#10b981', bg: 'bg-[#10b98125]' },
            "AI/Ml": { color: '#10b981', bg: 'bg-[#10b98125]' },
            Security: { color: '#ec4899', bg: 'bg-[#ec489925]' },
            Design: { color: '#f43f5e', bg: 'bg-[#f43f5e25]' },
            Backend: { color: '#ec4899', bg: 'bg-[#ec489925]' },
            "Python/SQL": { color: '#eab308', bg: 'bg-[#eab30825]' },
        }
        return themes[category] || { color: '#8b5cf6', bg: 'bg-[#8b5cf625]' }
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
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-8"
                        >
                            Earned with<br />
                            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#9478ff] to-[#f244ff] pr-4">
                                Dedication
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#949494] mt-8 max-w-xl mx-auto text-lg font-normal leading-relaxed"
                        >
                            Every hackathon, certificate, and workshop here marks a milestone — built through curiosity, late nights, and a drive to never stop growing.
                        </motion.p>

                        {/* Filter Tabs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-3 mt-10"
                        >
                            {filterTabs.map((tab) => {
                                const isActive = activeFilter === tab.key;
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.key}
                                        onClick={() => handleFilterClick(tab.key)}
                                        className={`
                                            inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium
                                            transition-all duration-300 border cursor-pointer
                                            ${isActive
                                                ? ''
                                                : 'border-[#2a2a2a] bg-[#141414] text-[#888] hover:text-white hover:border-[#444]'
                                            }
                                        `}
                                        style={isActive ? { color: tab.color, borderColor: tab.color, backgroundColor: `${tab.color}15` } : {}}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Certifications Grid */}
                    <div ref={certificationsRef} className="scroll-mt-24 mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
                        >
                            Certifications
                        </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => {
                            const theme = getCategoryTheme(cert.category);
                            const cardRef = useRef(null);
                            const isInView = useInView(cardRef, { once: true, margin: "-100px" });

                            return (
                                <motion.div
                                    key={cert.id}
                                    ref={cardRef}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                                    className="group relative bg-[#09090b] border border-[#1a1a1a] rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]"
                                >
                                    {/* Hover Gradient Border Effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem] z-20"
                                        style={{
                                            border: `2px solid ${theme.color}`,
                                            maskImage: 'linear-gradient(to bottom, black, transparent)',
                                            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
                                        }}
                                    />

                                    {/* Image Section */}
                                    <div className="relative aspect-[1.4/1] m-2 overflow-hidden rounded-[1.6rem] z-10">
                                        <img
                                            src={cert.image || "/placeholder.svg"}
                                            alt={cert.title}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                        />

                                        {/* Darkened Overlay on Hover */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Emerging Action Buttons on Hover */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-6">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => openModal(cert)}
                                                className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 p-4 bg-[#212121] text-white rounded-full shadow-2xl"
                                            >
                                                <Eye size={28} />
                                            </motion.button>

                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => window.open(cert.certificateUrl, "_blank")}
                                                className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 p-4 bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] text-white rounded-full shadow-2xl"
                                            >
                                                <ExternalLink size={28} />
                                            </motion.button>
                                        </div>

                                        {/* Year Badge */}
                                        <div className="absolute top-4 right-4 bg-[#00000080] backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-[#d1d1d1] border border-white/10">
                                            {cert.date}
                                        </div>

                                        {/* Verified Badge */}
                                        {cert.verified && (
                                            <div className="absolute top-4 left-4 bg-[#00000080] backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-green-400 border border-green-500/20 flex items-center gap-1.5">
                                                <CheckCircle size={12} />
                                                Verified
                                            </div>
                                        )}
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-8 pt-4 relative z-10">
                                        {/* Category Badge */}
                                        <span
                                            className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-4 inline-block ${theme.bg}`}
                                            style={{ color: theme.color }}
                                        >
                                            {cert.category}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-[#9478ff] transition-colors line-clamp-2">
                                            {cert.title}
                                        </h3>

                                        {/* Issuer as tagline */}
                                        <p className="text-[13px] font-semibold mb-4" style={{ color: theme.color }}>
                                            {cert.issuer}
                                        </p>

                                        {/* Description */}
                                        <p className="text-[#808080] text-sm leading-relaxed mb-6 line-clamp-2">
                                            {cert.description}
                                        </p>

                                        {/* Skills as dot-prefixed items */}
                                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
                                            {cert.skills.map((skill) => (
                                                <span key={skill} className="text-[11px] text-[#555] font-medium flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: theme.color }} /> {skill}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => openModal(cert)}
                                                className="flex-1 py-3.5 rounded-full bg-[#121212] border border-[#1a1a1a] group-hover:bg-white group-hover:text-black transition-all duration-500 flex items-center justify-center gap-2 font-bold text-sm"
                                            >
                                                View Details <Eye size={16} />
                                            </button>
                                            <button
                                                onClick={() => window.open(cert.certificateUrl, "_blank")}
                                                className="py-3.5 px-5 rounded-full bg-[#121212] border border-[#1a1a1a] hover:bg-gradient-to-r hover:from-[#8b5cf6] hover:to-[#a855f7] hover:border-transparent transition-all duration-500 flex items-center justify-center"
                                            >
                                                <ExternalLink size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Bottom Highlight Bar on Hover */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"
                                        style={{ backgroundColor: theme.color }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                    </div>

                    {/* Hackathon Timeline */}
                    <div ref={hackathonsRef} className="scroll-mt-24 mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
                        >
                            Hackathon Journey
                        </motion.h2>
                            <div className="space-y-10 max-w-5xl mx-auto">
                                {hackathons.map((hackathon, index) => {
                                    const isEven = index % 2 === 0;
                                    return (
                                        <motion.div
                                            key={hackathon.id}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.6, delay: index * 0.15 }}
                                            className={`flex items-start gap-4 md:gap-6 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                                        >
                                            {/* Side Icon */}
                                            <div className="flex-shrink-0 mt-8 hidden sm:block">
                                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-dashed border-cyan-400/60 flex items-center justify-center">
                                                    <Code2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                                                </div>
                                            </div>

                                            {/* Hackathon Card */}
                                            <div className="flex-1 border border-dashed border-cyan-400/40 rounded-2xl p-6 md:p-8 bg-[#0a0a0a]/80 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-400/60 transition-colors duration-500">
                                                {/* Subtle glow on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                                {/* Top row: Year + Category + Star */}
                                                <div className="flex items-center justify-between mb-4 relative z-10">
                                                    <div className="flex items-center gap-3">
                                                        <span className="bg-[#1a1a2e] text-white text-xs font-bold px-3 py-1 rounded-md border border-white/10">
                                                            {hackathon.date}
                                                        </span>
                                                        <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
                                                            HACKATHONS
                                                        </span>
                                                    </div>
                                                    <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 relative z-10">
                                                    {hackathon.title}
                                                </h3>

                                                {/* Issuer */}
                                                <p className="text-cyan-400 font-semibold text-sm mb-4 relative z-10">
                                                    {hackathon.issuer}
                                                </p>

                                                {/* Description */}
                                                <p className="text-[#808080] text-sm leading-relaxed mb-6 relative z-10">
                                                    {hackathon.description}
                                                </p>

                                                {/* Location */}
                                                <div className="flex items-center gap-2 text-[#808080] text-sm mb-6 relative z-10">
                                                    <MapPin className="w-4 h-4" />
                                                    {hackathon.location}
                                                </div>

                                                {/* View Certificate Button */}
                                                <button
                                                    onClick={() => window.open(hackathon.certificateUrl, "_blank")}
                                                    className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors duration-300"
                                                >
                                                    View Certificate
                                                    <ExternalLink className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                    </div>

                    {/* Workshops Section */}
                    <div ref={workshopsRef} className="scroll-mt-24 mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
                        >
                            Workshops
                        </motion.h2>
                        <div className="space-y-10 max-w-5xl mx-auto">
                            {workshops.map((workshop, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <motion.div
                                        key={workshop.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, delay: index * 0.15 }}
                                        className={`flex items-start gap-4 md:gap-6 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                                    >
                                        {/* Side Icon */}
                                        <div className="flex-shrink-0 mt-8 hidden sm:block">
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-dashed border-purple-400/60 flex items-center justify-center">
                                                <Monitor className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                                            </div>
                                        </div>

                                        {/* Workshop Card */}
                                        <div className="flex-1 border border-dashed border-purple-400/40 rounded-2xl p-6 md:p-8 bg-[#0a0a0a]/80 backdrop-blur-sm relative overflow-hidden group hover:border-purple-400/60 transition-colors duration-500">
                                            {/* Subtle glow on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                            {/* Top row: Year + Category + Star */}
                                            <div className="flex items-center justify-between mb-4 relative z-10">
                                                <div className="flex items-center gap-3">
                                                    <span className="bg-[#1a1a2e] text-white text-xs font-bold px-3 py-1 rounded-md border border-white/10">
                                                        {workshop.date}
                                                    </span>
                                                    <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">
                                                        WORKSHOPS
                                                    </span>
                                                </div>
                                                <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 relative z-10">
                                                {workshop.title}
                                            </h3>

                                            {/* Issuer */}
                                            <p className="text-purple-400 font-semibold text-sm mb-4 relative z-10">
                                                {workshop.issuer}
                                            </p>

                                            {/* Description */}
                                            <p className="text-[#808080] text-sm leading-relaxed mb-6 relative z-10">
                                                {workshop.description}
                                            </p>

                                            {/* Location */}
                                            <div className="flex items-center gap-2 text-[#808080] text-sm relative z-10">
                                                <MapPin className="w-4 h-4" />
                                                {workshop.location}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
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