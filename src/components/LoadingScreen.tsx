"use client";

import React, { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";

export type SectionType = "home" | "skills" | "hallOfFame" | "projects" | "contact";

interface LoadingScreenProps {
  section?: SectionType;
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ section = "home", onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If it's the home section, we use the original time-based progress logic
    if (section === "home") {
      const duration = 2000; // 2 seconds loading
      const start = Date.now();

      const animate = () => {
        const now = Date.now();
        const timePassed = now - start;
        const newProgress = Math.min(timePassed / duration, 1);

        setProgress(newProgress);

        if (newProgress < 1) {
          requestAnimationFrame(animate);
        } else if (onComplete) {
          setTimeout(onComplete, 200);
        }
      };

      requestAnimationFrame(animate);
      return;
    }

    // For other sections, use GSAP
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // ==============================
      // SKILLS LOADER (Orbiting Data Rings)
      // ==============================
      if (section === "skills") {
        gsap.set([".orbit-1", ".orbit-2", ".orbit-3"], { transformOrigin: "center center" });

        tl.from(".core-node", {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(2)",
        })
          .from(".orbit-1", { scale: 0, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
          .from(".orbit-2", { scale: 0, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
          .from(".orbit-3", { scale: 0, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
          .from(".loading-text", { opacity: 0, y: 10, duration: 0.4 }, "-=0.2");

        // Continuous rotation
        gsap.to(".orbit-1", { rotation: 360, duration: 3, repeat: -1, ease: "none" });
        gsap.to(".orbit-2", { rotation: -360, duration: 4, repeat: -1, ease: "none" });
        gsap.to(".orbit-3", { rotation: 360, duration: 5, repeat: -1, ease: "none" });
        gsap.to(".core-node", { scale: 1.1, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut" });

        // Exit animation
        tl.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          delay: 1.2,
        });
      }

      // ==============================
      // HALL OF FAME LOADER (Bursting Stars)
      // ==============================
      if (section === "hallOfFame") {
        gsap.set(".main-star", { transformOrigin: "center center" });
        gsap.set(".mini-star", { transformOrigin: "center center" });

        tl.from(".main-star", {
          scale: 0,
          rotation: -180,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
        })
          .from(".mini-star", {
            scale: 0,
            opacity: 0,
            rotation: 90,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(2)",
          }, "-=0.4")
          .to(".gold-glow", {
            opacity: 0.5,
            scale: 1.5,
            duration: 0.8,
            repeat: 1,
            yoyo: true,
            ease: "power2.inOut"
          }, 0)
          .from(".loading-text", { opacity: 0, y: 10, duration: 0.4 }, "-=0.2");

        // Continuous hover
        gsap.to(".main-star", { y: -8, repeat: -1, yoyo: true, duration: 1.5, ease: "power1.inOut" });

        tl.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          delay: 1.2,
        });
      }

      // ==============================
      // PROJECTS LOADER (Terminal)
      // ==============================
      if (section === "projects") {
        tl.from(".terminal", {
          y: 30,
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          ease: "power3.out"
        })
          .from(".code-line", {
            opacity: 0,
            x: -10,
            stagger: 0.3,
            duration: 0.2
          })
          .to(".progress-bar-fill", {
            width: "100%",
            duration: 0.8,
            ease: "power2.inOut",
          })
          .to(containerRef.current, {
            opacity: 0,
            duration: 0.4,
            delay: 0.4,
          });
      }

      // ==============================
      // CONTACT LOADER (Paper Airplane Launch)
      // ==============================
      if (section === "contact") {
        tl.from(".paper-plane", {
          x: -80,
          y: 80,
          opacity: 0,
          scale: 0.5,
          duration: 0.8,
          ease: "back.out(1.2)",
        })
          .from(".loading-text", { opacity: 0, duration: 0.4 }, "-=0.2")
          .to(".paper-plane", {
            y: -5,
            repeat: 2,
            yoyo: true,
            duration: 0.4,
            ease: "power1.inOut"
          })
          .to(".paper-plane", {
            x: 100,
            y: -100,
            scale: 1.2,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in"
          })
          .to(containerRef.current, {
            opacity: 0,
            duration: 0.4,
            delay: -0.2
          });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [section, onComplete]);

  // Render for "home" section
  if (section === "home") {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden group">

        {/* Core Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[400px] md:h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-12 w-full px-4">

          {/* Main Title Area */}
          <div className="relative flex flex-col items-center">
            {/* The main text */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.2em] md:tracking-[0.3em] ml-[0.2em] md:ml-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 drop-shadow-2xl text-center relative z-10 transition-transform duration-1000">
              KANISHKA
            </h1>

            {/* Ambient colored blur behind text */}
            <h1 className="absolute top-0 text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.2em] md:tracking-[0.3em] ml-[0.2em] md:ml-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-40 blur-[12px] animate-pulse pointer-events-none">
              KANISHKA
            </h1>

            {/* Sleek Subtitle */}
            <p className="mt-8 text-[20px] md:text-xs tracking-[0.6em] md:tracking-[0.8em] text-white/40 uppercase font-light">
              Digital Experience
            </p>
          </div>

          {/* Loading Elements */}
          <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-xs md:max-w-md">
            {/* Premium thin progress line */}
            <div className="relative w-full h-[1px] bg-white/5 overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-blue-400 to-blue-200 transition-all duration-75 ease-out"
                style={{ width: `${progress * 100}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 h-[3px] w-6 bg-white shadow-[0_0_15px_rgba(96,165,250,1)] rounded-full transition-all duration-75 ease-out"
                style={{ left: `calc(${progress * 100}% - 24px)`, opacity: progress > 0.05 ? 1 : 0 }}
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3 text-white/70 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-light">
                {/* Glowing Dot */}
                <div className="relative flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 z-10" />
                  <div className="absolute w-4 h-4 rounded-full bg-blue-400/40 animate-ping" />
                </div>
                <span className="text-[20px]">Welcome to my world</span>
              </div>

              {/* Loading Percentage numeric */}
              <div className="text-[15px] text-white/30 font-mono tracking-[0.3em] mt-1">
                {Math.round(progress * 100).toString().padStart(3, '0')} %
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Grid Background overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '4vw 4vw',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          }}
        />

        {/* Top/Bottom Fade for depth */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-0" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-0" />
      </div>
    );
  }

  // Render for other sections
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-white"
    >
      {/* ================= SKILLS ================= */}
      {section === "skills" && (
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Core Node */}
            <div className="core-node absolute z-10 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]" />

            {/* Orbits */}
            <div className="orbit-1 absolute inset-0 rounded-full border border-purple-500/30 flex items-start justify-center">
              <div className="w-2 h-2 rounded-full bg-purple-400 -mt-1 shadow-[0_0_8px_rgba(168,85,247,1)]" />
            </div>
            <div className="orbit-2 absolute inset-3 rounded-full border border-blue-500/30 flex items-center justify-end">
              <div className="w-2 h-2 rounded-full bg-blue-400 -mr-1 shadow-[0_0_8px_rgba(59,130,246,1)]" />
            </div>
            <div className="orbit-3 absolute inset-6 rounded-full border border-pink-500/30 flex items-end justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-400 -mb-0.5 shadow-[0_0_8px_rgba(236,72,153,1)]" />
            </div>
          </div>
          <p className="loading-text text-blue-300/80 tracking-[0.3em] uppercase text-xs font-semibold">
            Compiling Skills...
          </p>
        </div>
      )}

      {/* ================= HALL OF FAME ================= */}
      {section === "hallOfFame" && (
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="gold-glow absolute w-full h-full bg-yellow-500/20 rounded-full blur-2xl opacity-0 pointer-events-none" />

            <svg viewBox="0 0 100 100" className="main-star w-20 h-20 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)] z-10">
              <polygon fill="currentColor" points="50,5 61,35 95,35 68,54 78,85 50,67 22,85 32,54 5,35 39,35" />
            </svg>

            {/* Floating mini stars */}
            <svg viewBox="0 0 100 100" className="mini-star absolute top-2 right-4 w-6 h-6 text-yellow-300/80 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
              <polygon fill="currentColor" points="50,5 61,35 95,35 68,54 78,85 50,67 22,85 32,54 5,35 39,35" />
            </svg>
            <svg viewBox="0 0 100 100" className="mini-star absolute bottom-4 left-2 w-8 h-8 text-yellow-500/80 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
              <polygon fill="currentColor" points="50,5 61,35 95,35 68,54 78,85 50,67 22,85 32,54 5,35 39,35" />
            </svg>
            <svg viewBox="0 0 100 100" className="mini-star absolute top-10 left-4 w-4 h-4 text-yellow-200/80 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
              <polygon fill="currentColor" points="50,5 61,35 95,35 68,54 78,85 50,67 22,85 32,54 5,35 39,35" />
            </svg>
          </div>
          <p className="loading-text text-yellow-500/80 tracking-[0.3em] uppercase text-xs font-semibold">
            Unlocking Achievements...
          </p>
        </div>
      )}

      {/* ================= PROJECTS ================= */}
      {section === "projects" && (
        <div className="terminal bg-[#0a0a0a] border border-gray-800 p-6 rounded-xl w-[320px] shadow-2xl shadow-blue-500/10 relative">
          <div className="absolute top-0 left-0 w-full h-8 bg-[#111] border-b border-gray-800 rounded-t-xl flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 leading-none" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 leading-none" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 leading-none" />
          </div>
          <div className="mt-6">
            <p className="code-line text-green-400 font-mono text-xs mb-3">
              <span className="text-gray-600 mr-2">$</span>Initializing Projects...
            </p>
            <p className="code-line text-green-400 font-mono text-xs mb-3">
              <span className="text-gray-600 mr-2">$</span>Building UI...
            </p>
            <p className="code-line text-blue-400 font-mono text-xs mb-5">
              <span className="text-gray-600 mr-2">$</span>Deploying Experience...
            </p>
            <div className="mt-4 bg-gray-900 h-1.5 rounded-full overflow-hidden">
              <div className="progress-bar-fill bg-gradient-to-r from-blue-500 to-purple-500 h-full w-0 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            </div>
          </div>
        </div>
      )}

      {/* ================= CONTACT ================= */}
      {section === "contact" && (
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-32 h-20 flex justify-center items-center">
            <svg
              viewBox="0 0 24 24"
              className="paper-plane w-14 h-14 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </div>
          <p className="loading-text text-purple-400/80 tracking-[0.3em] uppercase text-xs font-semibold">
            Let's Connect...
          </p>
        </div>
      )}
    </div>
  );
}

export default LoadingScreen;