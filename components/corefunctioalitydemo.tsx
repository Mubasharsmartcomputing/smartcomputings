// import Image from "next/image"

// export default function WhatWeDo() {
//   const services = [
//     {
//       icon: "/whatwedo/web.png",
//       title: "SOFTWARES & MOBILE/ WEB APPLICATIONS",
//       description: "Custom Software and Mobile/Web Application Development.",
//     },
//     {
//       icon: "/whatwedo/ai.png",
//       title: "Artificial Intelligence Solution & Industry 4.0",
//       description: "Solutions and Industry 4.0 for Smart Automation and Innovation.",
//     },
//     {
//       icon: "/whatwedo/embaded.png",
//       title: "Embedded Systems",
//       description: "Embedded Systems for Advanced, Customised Technological Solutions.",
//     },
//     {
//       icon: "/whatwedo/resource.png",
//       title: "IT RESOURCE AUGMENTATION",
//       description: "Resource Augmentation for Scalable and Flexible Workforce Solutions.",
//     },
//     {
//       icon: "/whatwedo/interprice.png",
//       title: "ENTERPRISE RESOURCE PLANNING SOLUTIONS",
//       description: "ERP Solutions for Streamlined Business Operations.",
//     },
//     {
//       icon: "/whatwedo/devops.png",
//       title: "DEV OPS",
//       description: "Our DevOps services accelerate development and streamline operations.",
//     },
//   ]

//   return (
//     <div className="min-h-screen py-24 px-4 relative overflow-hidden" >
//       {/* Background Image - Large screens */}
//       {/* <div 
//         className="absolute hidden xl:block"
//         style={{
//           width: '70vw',
//           height: '100vh',
//           top: '10%',
//           left: '15%',
//           transform: 'rotate(180.4deg)',
//           zIndex: 0,
//         }}
//       >
//         <Image 
//           src="/bg.png" 
//           alt="Background" 
//           layout="fill" 
//           objectFit="cover" 
//           quality={100}
//         />
//       </div>
//        */}
//       {/* Background Image - Laptop screens */}
//       {/* <div 
//         className="absolute hidden lg:block xl:hidden"
//         style={{
//           width: '80vw',
//           height: '90vh',
//           top: '-2%',
//           left: '10%',
//           transform: 'rotate(180.4deg)',
//           zIndex: 0,
//         }}
//       >
//         <Image 
//           src="/bg.png" 
//           alt="Background" 
//           layout="fill" 
//           objectFit="cover" 
//           quality={100}
//         />
//       </div> */}
      
//       {/* Background Image - Tablet screens */}
//       {/* <div 
//         className="absolute hidden md:block lg:hidden"
//         style={{
//           width: '70vw',
//           height: '80vh',
//           top: '0%',
//           left: '15%',
//           transform: 'rotate(180.4deg)',
//           zIndex: 0,
//         }}
//       >
//         <Image 
//           src="/bg.png" 
//           alt="Background" 
//           layout="fill" 
//           objectFit="cover" 
//           quality={100}
//         />
//       </div> */}

//       <div className="max-w-7xl mx-auto relative z-10"> {/* Added relative and z-10 to keep content on top */}
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 
//             className="text-[55px] font-semibold font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#02B2E8] align-middle"
//             style={{
//               fontFamily: 'Inter',
//               fontWeight: 600,
//               fontSize: '36px',
//               lineHeight: '100%',
//               letterSpacing: '-1.16px'
//             }}
//           >
//             Our Core Verticals
//           </h1>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
//           {services.map((service, index) => {
//             return (
//               <div key={index} className="bg-[#183762] rounded-2xl p-6 text-white relative">
//                 {/* Icon Circle */}
//                 <div className="absolute top-[-35px] left-30 bg-transparent rounded-full flex items-center justify-center -translate-x-1/4 -translate-y-1/4">
//                   <Image src={service.icon} alt={service.title} width={140} height={100} className="object-contain" />
//                 </div>

//                 {/* Content */}
//                 <div className="space-y-4 pt-16"> {/* Added pt-16 to push content down */}
//                   <h3 
//                     className="text-white leading-tight"
//                     style={{
//                       fontFamily: 'Inter',
//                       fontWeight: 600,
//                       fontSize: '18px',
//                       lineHeight: '100%',
//                       letterSpacing: '-0.5px'
//                     }}
//                   >
//                     {service.title}
//                   </h3>

//                   <p 
//                     className="text-gray-300 leading-relaxed"
//                     style={{
//                       fontFamily: 'Inter',
//                       fontWeight: 400,
//                       fontSize: '15.4px',
//                       lineHeight: '24px',
//                       letterSpacing: '0%'
//                     }}
//                   >
//                     {service.description}
//                   </p>

//                   <div className="pt-4">
//                     <button 
//                       className="text-gray-300 hover:text-white transition-colors"
//                       style={{
//                         fontFamily: 'Inter',
//                         fontWeight: 500,
//                         fontSize: '14px',
//                         lineHeight: '44px',
//                         letterSpacing: '0%'
//                       }}
//                     >
//                       Learn more )
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }








"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function HeroBanner() {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('/contact')
  }

  return (
    <section
      className="overflow-hidden relative w-full h-[1000px] md:h-[590px]"
      style={{
        backgroundColor: '#183762',
        borderBottomLeftRadius: '26px',
        borderBottomRightRadius: '26px',

      }}
    >
      <div className="container mx-auto px-4 mt-40 md:mt-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 pt-auto md:pt-20 lg:pt-0 mb:auto md:mb-20 max-w-2xl">
            <div className="space-y-2">
              <p
                className="text-white font-semibold"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '36px',
                  lineHeight: '100%',
                  letterSpacing: '-1.16px'
                }}
              >
                Innovative Tech Solutions
              </p>

              <h1
                className="text-[55px] font-semibold font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#189EFF] align-middle"
              >
                Your Dream <span>Our Goal</span>
              </h1>

            </div>

            <div className="space-y-1">
              <p className="text-[#DCDCDC] text-[15.4px] leading-6 font-medium font-inter">
                <span className=" text-white">SMART COMPUTING</span> delivers innovative IT and AI-driven solutions
              </p>
              <p className="text-[#DCDCDC] font-inter" style={{ fontSize: '15.4px', lineHeight: '1.6', fontWeight: 400 }}>
                to empower businesses worldwide. We turn challenges into smart,
              </p>

              <p className="text-[#DCDCDC] text-[15.4px] leading-6 font-medium font-inter">
                customized technologies for growth and success.
              </p>
              <p className="text-[#DCDCDC] text-[15.4px] leading-6 font-medium font-inter">
                <span className="text-[#2DA7FF] font-medium">
                  Smart Solutions for a Smarter Future.
                </span>
              </p>
            </div>

            <Button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#215EB3] to-[#02B2E8] relative hover:opacity-90 text-white z-[999] cursor-pointer px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-4 mt-8"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '44px',
                letterSpacing: '0%'
              }}
            >
              Get In Touch
              <div className="border border-white/30 rounded-sm p-1">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Button>
          </div>

          {/* Right Content - Circuit Image */}
          <div className="relative flex justify-center lg:justify-end mt-auto md:mt-20 items-center">
            <div className="relative w-full max-w-[600px]">
              <Image
                src="/images/circuit.png"
                alt="Circuit Board Technology"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}






// --- HERO COMPONENT ---
// function HeroBanner() {
//   return (
//     <section className="relative w-full bg-[#183762] rounded-b-[40px] md:rounded-b-[60px] overflow-hidden pb-20 pt-10 md:pt-0">
      
//       {/* Background Elements for Hero */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[128px]" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-[128px]" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[85vh]">
          
//           {/* Left Content */}
//           <div className="space-y-8 pt-20 lg:pt-0 max-w-2xl">
//             <div className="space-y-4">
//               <p className="text-white font-semibold text-2xl md:text-4xl tracking-tight">
//                 Innovative Tech Solutions
//               </p>

//               <h1 className="text-5xl md:text-[70px] font-bold leading-[1.1] tracking-tight text-white">
//                 Your Dream <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#189EFF]">
//                   Our Goal
//                 </span>
//               </h1>
//             </div>

//             <div className="space-y-2 text-lg md:text-[17px] leading-relaxed text-gray-300 font-light">
//               <p>
//                 <span className="text-white font-medium">SMART COMPUTING</span> delivers innovative IT and AI-driven solutions
//                 to empower businesses worldwide. 
//               </p>
//               <p>
//                 We turn challenges into smart, customized technologies for growth and success.
//               </p>
//               <p className="text-cyan-400 font-medium pt-2">
//                 Smart Solutions for a Smarter Future.
//               </p>
//             </div>

//             <button className="
//               group
//               relative
//               bg-gradient-to-r from-[#215EB3] to-[#02B2E8] 
//               text-white 
//               px-8 py-4
//               rounded-xl
//               font-medium
//               text-lg
//               shadow-lg shadow-cyan-500/20
//               hover:shadow-cyan-500/40
//               hover:-translate-y-1
//               transition-all
//               duration-300
//               flex items-center gap-4
//             ">
//               Get In Touch
//               <div className="bg-white/20 p-1.5 rounded-md group-hover:bg-white/30 transition-colors">
//                 <ArrowRight className="w-4 h-4" />
//               </div>
//             </button>
//           </div>

//           {/* Right Content - SVG Circuit Illustration */}
//           <div className="relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
//             {/* Abstract Tech Graphic representing 'Circuit' */}
//             <div className="relative w-full max-w-lg aspect-square animate-fade-in">
              
//               {/* Central Glowing Orb */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500 rounded-full blur-[80px] animate-pulse" />
              
//               <svg viewBox="0 0 600 600" className="w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                   <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#22d3ee" />
//                     <stop offset="100%" stopColor="#3b82f6" />
//                   </linearGradient>
//                 </defs>
                
//                 {/* Circuit Board Base */}
//                 <path 
//                   d="M300 100 L500 200 L500 400 L300 500 L100 400 L100 200 Z" 
//                   fill="rgba(255,255,255,0.03)" 
//                   stroke="rgba(255,255,255,0.1)" 
//                   strokeWidth="2"
//                 />

//                 {/* Tech Nodes & Lines */}
//                 <g stroke="url(#circuitGrad)" strokeWidth="2" fill="none" strokeLinecap="round">
//                   {/* Top connection */}
//                   <path d="M300 100 L300 180" className="animate-[pulse_3s_ease-in-out_infinite]" />
//                   <circle cx="300" cy="180" r="4" fill="#22d3ee" />
                  
//                   {/* Right connections */}
//                   <path d="M500 200 L420 240" opacity="0.6" />
//                   <circle cx="420" cy="240" r="3" fill="#3b82f6" />
//                   <path d="M500 400 L420 360" opacity="0.6" />
                  
//                   {/* Left connections */}
//                   <path d="M100 200 L180 240" opacity="0.6" />
//                   <circle cx="180" cy="240" r="3" fill="#3b82f6" />
//                   <path d="M100 400 L180 360" opacity="0.6" />
                  
//                   {/* Central Hub Pattern */}
//                   <circle cx="300" cy="300" r="60" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
//                   <circle cx="300" cy="300" r="40" strokeWidth="3" />
//                   <path d="M300 260 L300 340 M260 300 L340 300" opacity="0.5" />
//                 </g>
                
//                 {/* Floating Icons */}
//                 <foreignObject x="280" y="280" width="40" height="40">
//                   <div className="flex items-center justify-center w-full h-full text-white">
//                     <BrainCircuit className="w-8 h-8 text-cyan-300" />
//                   </div>
//                 </foreignObject>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

