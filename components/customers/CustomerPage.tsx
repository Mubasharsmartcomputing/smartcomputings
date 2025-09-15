"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Users, Globe, Briefcase, MapPin } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const logos = [
  { src: "/customer/alkaram.png", alt: "Alkaram" },
  { src: "/customer/arkhadia.png", alt: "Arkhadia" },
  { src: "/customer/arogon.png", alt: "Arogon" },
  { src: "/customer/bapp.png", alt: "Bapp" },
  { src: "/customer/bemindpower.png", alt: "BeMindPower" },
  { src: "/customer/blocbelt.png", alt: "BlocBelt" },
  { src: "/customer/candao.png", alt: "Candao" },
  { src: "/customer/contructiongroup.png", alt: "Construction Group" },
  { src: "/customer/express.png", alt: "Express" },
  { src: "/customer/fture-clinic.png", alt: "Future Clinic" },
  { src: "/customer/hyperloop.png", alt: "Hyperloop" },
  { src: "/customer/nexaru.png", alt: "Nexaru" },
  { src: "/customer/opsninja.png", alt: "OpsNinja" },
  { src: "/customer/protag.png", alt: "Protag" },
  { src: "/customer/rma.png", alt: "RMA" },
  { src: "/customer/shamggins.png", alt: "Shamggins" },
  { src: "/customer/zero-axis.png", alt: "Zero Axis" },
];

export default function CredibilityProof() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);
  
  const extendedLogos = [...logos, ...logos];

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationId;
    let position = 0;

    const animate = () => {
      if (!isAnimating || !carousel) return;
      
      position -= 0.5; // Adjust speed here
      
      // Reset position when we've scrolled the width of our original logos
      if (position <= -carousel.children[0].offsetWidth * logos.length) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    
    // Pause animation when not in viewport or tab is inactive
    const handleVisibilityChange = () => {
      setIsAnimating(!document.hidden);
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isAnimating]);

  // Pause on hover
  const handleMouseEnter = () => setIsAnimating(false);
  const handleMouseLeave = () => setIsAnimating(true);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="font-semibold text-[55px] font-inter leading-[120%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#189EFF] pb-1 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Credibility & Proof
        </motion.h2>

        {/* Statistics Row */}
        <div
          className="flex flex-wrap justify-center lg:justify-between items-center mb-10 px-4 sm:px-6 lg:px-8 py-6 gap-4 lg:gap-0 w-full max-w-full mx-auto"
          style={{ borderRadius: "20.17px", border: "1.3px solid #ccc", backgroundColor: "#E1EBFF" }}
        >
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">50+</span>
              <span className="text-xs sm:text-sm text-gray-600">Team members</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">15+</span>
              <span className="text-xs sm:text-sm text-gray-600">Countries</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">80+</span>
              <span className="text-xs sm:text-sm text-gray-600">Projects done</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">4+</span>
              <span className="text-xs sm:text-sm text-gray-600">Offices</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">20+</span>
              <span className="text-xs sm:text-sm text-gray-600">Project awards</span>
            </div>
          </div>
        </div>

        <motion.p
          className="text-black mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by SaaS, Fintech, and Healthtech companies worldwide
        </motion.p>

        <motion.div
          className="flex justify-center items-center opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl w-full overflow-hidden h-20 my-8">
            <div
              className="flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={carouselRef}
                className="flex space-x-10 transition-transform"
                style={{ willChange: "transform" }}
              >
                {extendedLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-[158px] h-[32px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}