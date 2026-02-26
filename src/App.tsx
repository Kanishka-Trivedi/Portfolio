// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import { VortexBackground } from "@/components/ui/vortex-background";
// import LoadingScreen from "./components/LoadingScreen";
// import { useLoading } from "./hooks/useLoading";

// const queryClient = new QueryClient();

// const AppContent = () => {
//   const isLoading = useLoading(3000); // 3 second loading time

//   if (isLoading) {
//     return <LoadingScreen />;
//   }

//   return (
//     <div className="min-h-screen w-full font-sans relative">
//       {/* Dark Horizon Glow - Base Background Layer */}
//       <div
//         className="fixed inset-0 z-0"
//         style={{
//           background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
//         }}
//       />
//       {/* Animated Vortex Background - On top of gradient */}
//       <div className="fixed inset-0 z-1">
//         <VortexBackground />
//       </div>
//       <div className="relative z-10">
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Index />} />

//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <AppContent />
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import LoadingScreen, { SectionType } from "./components/LoadingScreen";
import { useLoading } from "./hooks/useLoading";

// Layout Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomScrollbar from "@/components/CustomScrollbar";

// Pages (each section becomes a page)
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Technologies from '@/components/Technologies';
import Certificates from '@/components/Certificates';
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RouteLoader = () => {
  const location = useLocation();
  const [loadingSection, setLoadingSection] = useState<SectionType | null>(null);

  // Determine which section's loader to show based on the route
  const getSectionFromPath = (path: string): SectionType => {
    if (path === "/") return "home";
    if (path.includes("technologies") || path.includes("skills")) return "skills";
    if (path.includes("certificates") || path.includes("work")) return "hallOfFame"; // Defaulting these to hallOfFame as it fits
    if (path.includes("projects")) return "projects";
    if (path.includes("contact")) return "contact";
    return "home"; // fallback
  };

  useEffect(() => {
    // Show loader on mount and route changes
    setLoadingSection(getSectionFromPath(location.pathname));
  }, [location.pathname]);

  if (!loadingSection) return null;

  return (
    <LoadingScreen
      section={loadingSection}
      onComplete={() => setLoadingSection(null)}
    />
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative z-10">
      <CustomScrollbar />
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const AppContent = () => {
  // We no longer use the global useLoading hook here because RouteLoader handles it per page

  return (
    <div className="min-h-screen w-full font-sans relative">
      {/* Background Gradient */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />



      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />
        <RouteLoader />
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/technologies" element={<Layout><Technologies /></Layout>} />
          <Route path="/certificates" element={<Layout><Certificates /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
