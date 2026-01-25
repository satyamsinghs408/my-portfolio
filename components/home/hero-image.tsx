import * as React from "react";

const HeroImage = () => {
  const id = "hero-anim";
  return (
    <svg
      width={1000}
      height={600}
      viewBox="0 0 1000 600"
      className="w-full h-auto select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}-grad-primary`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id={`${id}-grad-accent`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id={`${id}-grad-success`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
        <linearGradient id={`${id}-grad-dark`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <style>
          {`
            @keyframes ${id}-spin {
              100% { transform: rotate(360deg); }
            }
            @keyframes ${id}-reverse-spin {
              100% { transform: rotate(-360deg); }
            }
            @keyframes ${id}-float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes ${id}-tour-1 {
              0% { transform: translate(0, 0); }
              25% { transform: translate(200px, 100px); }
              50% { transform: translate(0px, 200px); }
              75% { transform: translate(-100px, 100px); }
              100% { transform: translate(0, 0); }
            }
            @keyframes ${id}-tour-2 {
              0% { transform: translate(0, 0); }
              25% { transform: translate(-200px, 150px); }
              50% { transform: translate(-50px, 300px); }
              75% { transform: translate(100px, 150px); }
              100% { transform: translate(0, 0); }
            }
            @keyframes ${id}-tour-3 {
              0% { transform: translate(0, 0); }
              33% { transform: translate(150px, 250px); }
              66% { transform: translate(-150px, 250px); }
              100% { transform: translate(0, 0); }
            }
            @keyframes ${id}-pulse {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 1; }
            }
            @keyframes ${id}-blink {
              0%, 48%, 52%, 100% { opacity: 1; }
              50% { opacity: 0.3; }
            }
            @keyframes ${id}-dash {
              to { stroke-dashoffset: -100; }
            }
            @keyframes ${id}-typing {
              0% { width: 0; }
              50% { width: 60px; }
              100% { width: 0; }
            }
            @keyframes ${id}-scan {
              0% { transform: translateY(-50px); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(150px); opacity: 0; }
            }
            @keyframes ${id}-code-float {
              0% { transform: translateY(0); opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { transform: translateY(-40px); opacity: 0; }
            }

            .${id}-fan { transform-origin: center; animation: ${id}-spin 4s linear infinite; }
            .${id}-fan-fast { transform-origin: center; animation: ${id}-spin 2s linear infinite; }
            .${id}-gear { transform-origin: center; animation: ${id}-reverse-spin 10s linear infinite; }
            .${id}-float-slow { animation: ${id}-float 6s ease-in-out infinite; }
            .${id}-float-med { animation: ${id}-float 4s ease-in-out infinite; }
            .${id}-float-fast { animation: ${id}-float 3s ease-in-out infinite; }
            .${id}-tour-slow { animation: ${id}-tour-1 25s ease-in-out infinite; }
            .${id}-tour-med { animation: ${id}-tour-2 20s ease-in-out infinite; }
            .${id}-tour-fast { animation: ${id}-tour-3 18s ease-in-out infinite; }
            .${id}-pulse-slow { animation: ${id}-pulse 4s ease-in-out infinite; }
            .${id}-data-stream { stroke-dasharray: 5 5; animation: ${id}-dash 1s linear infinite; }
            .${id}-blink-1 { animation: ${id}-blink 2s step-end infinite; }
            .${id}-blink-2 { animation: ${id}-blink 3s step-end infinite; }
            .${id}-blink-3 { animation: ${id}-blink 1.5s step-end infinite; }
            .${id}-blink-fast { animation: ${id}-blink 0.5s step-end infinite; }
            .${id}-scan-beam { animation: ${id}-scan 3s linear infinite; }
            .${id}-code-particle { animation: ${id}-code-float 6s linear infinite; opacity: 0.5; }
          `}
        </style>
      </defs>

      {/* BACKGROUND ELEMENTS */}
      {/* Grid Floor */}
      <g transform="translate(0, 400) scale(1, 0.5)" opacity="0.1">
        <path d="M0 0 H1000 M0 100 H1000 M0 200 H1000 M0 300 H1000 M0 400 H1000" stroke="#fff" strokeWidth="2" />
        <path d="M100 0 V400 M200 0 V400 M300 0 V400 M400 0 V400 M500 0 V400 M600 0 V400 M700 0 V400 M800 0 V400 M900 0 V400" stroke="#fff" strokeWidth="2" />
      </g>

      {/* Background Circuit Lines */}
      <g opacity="0.15" stroke="#38BDF8" strokeWidth="1" fill="none">
        <path d="M100 500 L100 300 L250 150 L400 150" strokeDasharray="3 3"/>
        <circle cx="100" cy="500" r="3" fill="#38BDF8"/>
        
        <path d="M900 500 L900 300 L750 150 L600 150" strokeDasharray="3 3"/>
        <circle cx="900" cy="500" r="3" fill="#38BDF8"/>
        
        <path d="M50 300 L150 300 L200 250" />
        <path d="M950 300 L850 300 L800 250" />
      </g>

      {/* Spinning Gears Background */}
      <g opacity="0.05">
        <path className={`${id}-gear`} transform="translate(200, 200) scale(1.5)" d="M40 0 L45 10 L55 10 L60 0 L70 0 L65 20 L55 30 L65 40 L70 40 L60 50 L55 50 L45 70 L40 70 L45 60 L35 50 L25 60 L25 70 L15 60 L20 50 L10 50 L5 40 L10 40 L20 30 L10 20 L5 20 L10 10 L20 10 L25 0 Z" fill="#fff" />
        <circle cx="200" cy="200" r="15" fill="none" stroke="#fff" strokeWidth="5" />
        
        <path className={`${id}-gear`} transform="translate(800, 450) scale(2)" style={{animationDirection: 'normal', animationDuration: '15s'}} d="M40 0 L45 10 L55 10 L60 0 L70 0 L65 20 L55 30 L65 40 L70 40 L60 50 L55 50 L45 70 L40 70 L45 60 L35 50 L25 60 L25 70 L15 60 L20 50 L10 50 L5 40 L10 40 L20 30 L10 20 L5 20 L10 10 L20 10 L25 0 Z" fill="#fff" />
        
        <path className={`${id}-gear`} transform="translate(100, 100) scale(1)" d="M40 0 L45 10 L55 10 L60 0 L70 0 L65 20 L55 30 L65 40 L70 40 L60 50 L55 50 L45 70 L40 70 L45 60 L35 50 L25 60 L25 70 L15 60 L20 50 L10 50 L5 40 L10 40 L20 30 L10 20 L5 20 L10 10 L20 10 L25 0 Z" fill="#fff" />
      </g>

      {/* ADDITIONAL FLOOR ELEMENTS (Stacks) */}
      {/* Left Server Stack */}
      <g transform="translate(50, 350)">
        <path d="M0 20 L40 40 L80 20 L40 0 Z" fill="#334155" />
        <path d="M0 20 L40 40 V100 L0 80 Z" fill="#1E293B" />
        <path d="M40 40 L80 20 V80 L40 100 Z" fill="#0F172A" />
        {/* Lights */}
        <circle cx="10" cy="40" r="2" fill="#22C55E" className={`${id}-blink-3`} />
        <circle cx="10" cy="50" r="2" fill="#22C55E" className={`${id}-blink-2`} />
        <circle cx="10" cy="60" r="2" fill="#22C55E" className={`${id}-blink-1`} />
      </g>
      
      {/* Right Server Stack */}
      <g transform="translate(850, 320)">
        <path d="M0 20 L40 40 L80 20 L40 0 Z" fill="#334155" />
        <path d="M0 20 L40 40 V120 L0 100 Z" fill="#1E293B" />
        <path d="M40 40 L80 20 V100 L40 120 Z" fill="#0F172A" />
        {/* Data cables */}
        <path d="M40 60 C60 60, 60 100, 100 100" stroke="#38BDF8" strokeWidth="2" fill="none" opacity="0.5" />
      </g>

      {/* CENTRAL MAINFRAME */}
      <g transform="translate(350, 150)">
        {/* Base Platform */}
        <path d="M-50 350 L350 350 L300 300 L0 300 Z" fill={`url(#${id}-grad-dark)`} stroke="#334155" strokeWidth="2" />
        
        {/* Main Tower Body */}
        <rect x="0" y="0" width="300" height="300" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="2" />
        
        {/* Server Racks / Ventilation */}
        <g transform="translate(20, 20)">
           {/* Top Fan Section */}
           <rect x="0" y="0" width="260" height="80" rx="5" fill="#1E293B" />
           <g transform="translate(40, 40)">
             <circle cx="0" cy="0" r="30" fill="#0F172A" />
             <g className={`${id}-fan`}>
               <path d="M-5 -25 L5 -25 L8 0 L-8 0 Z" fill="#38BDF8" transform="rotate(0)" />
               <path d="M-5 -25 L5 -25 L8 0 L-8 0 Z" fill="#38BDF8" transform="rotate(120)" />
               <path d="M-5 -25 L5 -25 L8 0 L-8 0 Z" fill="#38BDF8" transform="rotate(240)" />
             </g>
           </g>
           <g transform="translate(130, 40)">
             <circle cx="0" cy="0" r="30" fill="#0F172A" />
             <g className={`${id}-fan`} style={{animationDelay: '-1s'}}>
               <path d="M-5 -25 L5 -25 L8 0 L-8 0 Z" fill="#38BDF8" transform="rotate(0)" />
               <path d="M-5 -25 L5 -25 L8 0 L-8 0 Z" fill="#38BDF8" transform="rotate(120)" />
               <path d="M-5 -25 L5 -25 L8 0 L-8 0 Z" fill="#38BDF8" transform="rotate(240)" />
             </g>
           </g>
           <g transform="translate(220, 40)">
             <circle cx="0" cy="0" r="30" fill="#0F172A" />
             <g className={`${id}-fan`} style={{animationDelay: '-0.5s'}}>
               <path d="M-5 -25 L5 -25 L8 0 L-8 0 Z" fill="#38BDF8" transform="rotate(0)" />
               <path d="M-5 -25 L5 -25 L8 0 L-8 0 Z" fill="#38BDF8" transform="rotate(120)" />
               <path d="M-5 -25 L5 -25 L8 0 L-8 0 Z" fill="#38BDF8" transform="rotate(240)" />
             </g>
           </g>

           {/* Mid Screen Section */}
           <rect x="0" y="90" width="260" height="120" rx="5" fill="#1E293B" />
           <rect x="10" y="100" width="240" height="100" rx="2" fill="#0F172A" stroke={`url(#${id}-grad-primary)`} strokeWidth="2" />
           {/* Code typing lines */}
           <g transform="translate(20, 115)">
             <rect x="0" y="0" width="80" height="6" rx="3" fill="#A855F7" opacity="0.8" />
             <rect x="0" y="15" width="120" height="6" rx="3" fill="#38BDF8" opacity="0.6" />
             <rect x="0" y="30" width="90" height="6" rx="3" fill="#22C55E" opacity="0.6" />
             <rect x="0" y="45" width="60" height="6" rx="3" fill="#EAB308" opacity="0.6" style={{animation: `${id}-typing 3s step-end infinite`}} />
             
             {/* Scrolling Data on Right */}
             <g transform="translate(140, 0)">
                <rect x="0" y="0" width="80" height="80" fill="none" />
                <text x="0" y="10" fill="#38BDF8" fontSize="8" fontFamily="monospace" opacity="0.5">0101010</text>
                <text x="0" y="22" fill="#38BDF8" fontSize="8" fontFamily="monospace" opacity="0.4">1100101</text>
                <text x="0" y="34" fill="#38BDF8" fontSize="8" fontFamily="monospace" opacity="0.6">0011100</text>
                <text x="0" y="46" fill="#38BDF8" fontSize="8" fontFamily="monospace" opacity="0.3">1010111</text>
                <rect x="0" y="0" width="80" height="50" fill={`url(#${id}-grad-dark)`} opacity="0.5" className={`${id}-scan-beam`} />
             </g>
           </g>

           {/* Bottom Status Lights */}
           <rect x="0" y="220" width="260" height="40" rx="5" fill="#1E293B" />
           <circle cx="20" cy="240" r="5" fill="#EF4444" className={`${id}-blink-1`} />
           <circle cx="40" cy="240" r="5" fill="#EAB308" className={`${id}-blink-2`} />
           <circle cx="60" cy="240" r="5" fill="#22C55E" className={`${id}-blink-3`} />
           
           {/* Progress Bars */}
           <rect x="90" y="235" width="150" height="10" rx="2" fill="#334155" />
           <rect x="90" y="235" width="100" height="10" rx="2" fill={`url(#${id}-grad-primary)`} className={`${id}-pulse-slow`} />
        </g>
      </g>

      {/* FLOATING ELEMENTS & PIPES */}
      {/* Pipe 1 Left */}
      <path d="M350 400 L200 400 L200 300" stroke="#334155" strokeWidth="8" fill="none" />
      <path d="M350 400 L200 400 L200 300" stroke="#38BDF8" strokeWidth="4" fill="none" strokeDasharray="10 20" className={`${id}-data-stream`} />
      
      {/* Pipe 2 Right */}
      <path d="M650 400 L800 400 L800 300" stroke="#334155" strokeWidth="8" fill="none" />
      <path d="M650 400 L800 400 L800 300" stroke="#A855F7" strokeWidth="4" fill="none" strokeDasharray="10 20" className={`${id}-data-stream`} style={{animationDirection: 'reverse'}} />

      {/* Floating Database Node (Left) */}
      <g transform="translate(150, 250)" className={`${id}-float-slow`}>
        <ellipse cx="50" cy="20" rx="50" ry="20" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
        <path d="M0 20 V80 A50 20 0 0 0 100 80 V20" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" opacity="0.9" />
        <ellipse cx="50" cy="80" rx="50" ry="20" fill={`url(#${id}-grad-primary)`} opacity="0.3" />
        {/* DB Rings */}
        <path d="M0 40 A50 20 0 0 0 100 40" stroke="#38BDF8" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M0 60 A50 20 0 0 0 100 60" stroke="#38BDF8" strokeWidth="2" fill="none" opacity="0.5" />
        {/* Floating Particles */}
        <circle cx="20" cy="0" r="3" fill="#fff" className={`${id}-pulse`} opacity="0.5" />
        <circle cx="80" cy="100" r="4" fill="#38BDF8" className={`${id}-pulse`} opacity="0.8" />
      </g>

      {/* Floating React/Code Cube (Right) */}
      <g transform="translate(750, 220)" className={`${id}-float-med`}>
         {/* Isometric Cube */}
         <path d="M0 30 L30 50 L60 30 L30 10 Z" fill="#A855F7" opacity="0.8" />
         <path d="M0 30 L30 50 L30 90 L0 70 Z" fill="#7C3AED" opacity="0.9" />
         <path d="M60 30 L30 50 L30 90 L60 70 Z" fill="#6D28D9" opacity="0.9" />
         
         {/* Orbiting Electrons */}
         <g transform="translate(30, 50)">
           <ellipse cx="0" cy="0" rx="40" ry="10" stroke="#E879F9" strokeWidth="2" fill="none" transform="rotate(45)" opacity="0.6" />
           <ellipse cx="0" cy="0" rx="40" ry="10" stroke="#E879F9" strokeWidth="2" fill="none" transform="rotate(-45)" opacity="0.6" />
           <circle cx="0" cy="0" r="5" fill="#fff" filter={`url(#${id}-glow)`} />
         </g>
      </g>

      {/* Holographic Projection (Distributed) */}
      {/* 1. Center Hologram (Blue) */}
      <g transform="translate(500, 80)" className={`${id}-tour-slow`}>
         <path d="M-40 0 L40 0 L30 60 L-30 60 Z" fill={`url(#${id}-grad-primary)`} opacity="0.2" />
         <rect x="-30" y="10" width="60" height="40" rx="5" stroke="#38BDF8" strokeWidth="2" fill="none" opacity="0.8" />
         <circle cx="0" cy="30" r="10" fill="#38BDF8" opacity="0.5" className={`${id}-pulse`} />
         <line x1="0" y1="60" x2="0" y2="70" stroke="#38BDF8" strokeWidth="2" />
      </g>
      
      {/* 2. Left Hologram (Purple) - Disconnected and moved far left */}
      <g transform="translate(250, 100)" className={`${id}-tour-med`}>
         <rect x="0" y="0" width="40" height="30" rx="2" fill="#1E293B" stroke="#6366F1" strokeWidth="1" opacity="0.6" />
         <line x1="5" y1="10" x2="35" y2="10" stroke="#6366F1" strokeWidth="1" />
         <line x1="5" y1="15" x2="25" y2="15" stroke="#6366F1" strokeWidth="1" />
         <path d="M20 30 V50" stroke="#6366F1" strokeWidth="1" opacity="0.3" />
      </g>

      {/* 3. Right Hologram (Green) - Disconnected and moved far right */}
      <g transform="translate(750, 100)" className={`${id}-tour-fast`}>
         <circle cx="20" cy="20" r="15" stroke="#22C55E" strokeWidth="1" strokeDasharray="2 2" />
         <path d="M15 20 L20 25 L30 15" stroke="#22C55E" strokeWidth="2" fill="none" />
         <text x="0" y="50" fill="#22C55E" fontSize="8" fontFamily="monospace" opacity="0.8">VERIFIED</text>
         <path d="M20 35 V55" stroke="#22C55E" strokeWidth="1" opacity="0.3" />
      </g>

      {/* NEW ELEMENTS: Mobile Device & Cloud */}
      {/* Mobile Device (Floating Left-Mid) */}
      <g transform="translate(100, 150)" className={`${id}-wander-fast`}>
         <rect x="0" y="0" width="50" height="90" rx="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
         <rect x="5" y="10" width="40" height="60" fill="#1E293B" />
         <circle cx="25" cy="80" r="3" fill="#38BDF8" />
         <rect x="10" y="20" width="30" height="2" fill="#38BDF8" opacity="0.5" />
         <rect x="10" y="25" width="20" height="2" fill="#38BDF8" opacity="0.5" />
         {/* Connection Line */}
         <path d="M50 45 L150 100" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      </g>

      {/* Cloud Node (Floating Right-Top) */}
      <g transform="translate(850, 100)" className={`${id}-wander-slow`}>
         <path d="M10 20 Q0 20 0 10 Q0 0 10 0 Q15 -10 25 0 Q35 -5 40 5 Q50 5 50 15 Q50 25 40 25 H10 Z" fill="#1E293B" stroke="#A855F7" strokeWidth="2" />
         <circle cx="15" cy="12" r="2" fill="#A855F7" className={`${id}-blink-2`} />
         <circle cx="25" cy="12" r="2" fill="#A855F7" className={`${id}-blink-3`} />
         <circle cx="35" cy="12" r="2" fill="#A855F7" className={`${id}-blink-1`} />
         {/* Connection Line */}
         <path d="M0 15 L-100 120" stroke="#A855F7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      </g>

      {/* Floating Code Snippets (Background) */}
      <g opacity="0.3">
         <text x="100" y="100" fill="#fff" fontSize="10" fontFamily="monospace" className={`${id}-code-particle`}>&lt;div&gt;</text>
         <text x="800" y="80" fill="#fff" fontSize="10" fontFamily="monospace" className={`${id}-code-particle`} style={{animationDelay: '1s'}}>{`{api}`}</text>
         <text x="200" y="450" fill="#fff" fontSize="10" fontFamily="monospace" className={`${id}-code-particle`} style={{animationDelay: '2s'}}>const data</text>
         <text x="900" y="350" fill="#fff" fontSize="10" fontFamily="monospace" className={`${id}-code-particle`} style={{animationDelay: '3s'}}>import React</text>
         <text x="50" y="250" fill="#fff" fontSize="10" fontFamily="monospace" className={`${id}-code-particle`} style={{animationDelay: '1.5s'}}>404 Error</text>
      </g>

      {/* Connecting Wires/Cables randomly */}
      <path d="M350 200 C250 200, 250 150, 150 250" stroke="#64748B" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M650 200 C750 200, 750 150, 850 250" stroke="#64748B" strokeWidth="2" fill="none" opacity="0.5" />
      
      {/* Floor Shadows */}
      <ellipse cx="500" cy="480" rx="150" ry="20" fill="#000" opacity="0.3" filter={`url(#${id}-glow)`} />
      <ellipse cx="200" cy="400" rx="60" ry="10" fill="#000" opacity="0.3" filter={`url(#${id}-glow)`} />
      <ellipse cx="800" cy="400" rx="60" ry="10" fill="#000" opacity="0.3" filter={`url(#${id}-glow)`} />
      <ellipse cx="125" cy="250" rx="20" ry="5" fill="#000" opacity="0.3" filter={`url(#${id}-glow)`} />
      <ellipse cx="875" cy="140" rx="20" ry="5" fill="#000" opacity="0.3" filter={`url(#${id}-glow)`} />

    </svg>
  );
};

export default HeroImage;
