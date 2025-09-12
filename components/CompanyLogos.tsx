"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function CompanyLogos() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [isAnimatingRight, setIsAnimatingRight] = useState(true)
  const carouselLeftRef = useRef<HTMLDivElement>(null)
  const carouselRightRef = useRef<HTMLDivElement>(null)

  const techLogosLeft = [
    { name: "React", icon: "/technology/react.svg" },
    { name: "Next.js", icon: "/technology/nextjs.svg" },
    { name: "Node.js", icon: "/technology/nodejs.svg" },
    { name: "Python", icon: "/technology/python.svg" },
    { name: "Java", icon: "/technology/java.svg" },
    { name: "TypeScript", icon: "/technology/typescript.svg" },
    { name: "AWS", icon: "/technology/aws.svg" },
    { name: "Docker", icon: "/technology/docker.svg" },
    { name: "Kubernetes", icon: "/technology/kubernetes.svg" },
    { name: "MongoDB", icon: "/technology/mongodb.svg" }
  ]

  const techLogosRight = [
    { name: "Angular", icon: "/technology/angular.svg" },
    { name: "Vue.js", icon: "/technology/vue.svg" },
    { name: "Azure", icon: "/technology/azure.svg" },
    { name: "GCP", icon: "/technology/gcp.svg" },
    { name: "MySQL", icon: "/technology/mysql.svg" },
    { name: "PostgreSQL", icon: "/technology/postgresql.svg" },
    { name: "Redis", icon: "/technology/redis.svg" },
    { name: "Elasticsearch", icon: "/technology/elasticsearch.svg" },
    { name: ".NET", icon: "/technology/dotnet.svg" },
    { name: "Swift", icon: "/technology/swift.svg" }
  ]

  const extendedLogosLeft = [...techLogosLeft, ...techLogosLeft]
  const extendedLogosRight = [...techLogosRight, ...techLogosRight]

  useEffect(() => {
    const initVanta = () => {
      if (typeof window !== 'undefined' && (window as any).VANTA && (window as any).THREE) {
        (window as any).VANTA.NET({
          el: "#hero-bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xf21863,
          backgroundColor: 0x0f0c17
        })
      } else {
        setTimeout(initVanta, 100)
      }
    }
    
    setTimeout(initVanta, 500)
  }, [])

  useEffect(() => {
    const carouselLeft = carouselLeftRef.current
    let animationId: number
    let position = carouselLeft?.children[0] ? -(carouselLeft.children[0] as HTMLElement).offsetWidth * techLogosLeft.length : 0

    const animate = () => {
      if (!isAnimating || !carouselLeft) return
      
      position += 0.5
      
      if (position >= 0 && carouselLeft.children[0]) {
        position = -(carouselLeft.children[0] as HTMLElement).offsetWidth * techLogosLeft.length
      }
      
      carouselLeft.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    
    const handleVisibilityChange = () => {
      setIsAnimating(!document.hidden)
    }
    
    document.addEventListener("visibilitychange", handleVisibilityChange)
    
    return () => {
      cancelAnimationFrame(animationId)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [isAnimating, techLogosLeft.length])

  useEffect(() => {
    const carouselRight = carouselRightRef.current
    let animationId: number
    let position = 0

    const animate = () => {
      if (!isAnimatingRight || !carouselRight) return
      
      position -= 0.5
      
      if (carouselRight.children[0] && position <= -(carouselRight.children[0] as HTMLElement).offsetWidth * techLogosRight.length) {
        position = 0
      }
      
      carouselRight.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    
    const handleVisibilityChange = () => {
      setIsAnimatingRight(!document.hidden)
    }
    
    document.addEventListener("visibilitychange", handleVisibilityChange)
    
    return () => {
      cancelAnimationFrame(animationId)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [isAnimatingRight, techLogosRight.length])

  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-4 ">
         <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Main Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '-1.16px'
            }}
          >
            <div className="font-semibold font-inter leading-[120%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#189EFF] pb-1">Technologies We Manage</div>

          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-pretty"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '15.4px',
              lineHeight: '24px',
              letterSpacing: '0%'
              
            }}
          >
           Our skilled developers are trained on multiple Tech-stacks to bring you the best product & services. 
          </p>
        </div>
 
    <motion.div
      className="text-center relative z-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {/* First Row - Moving Right */}
      <div className="overflow-hidden mb-6 relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <div
          className="flex gap-6"
          onMouseEnter={() => setIsAnimating(false)}
          onMouseLeave={() => setIsAnimating(true)}
        >
          <div
            ref={carouselLeftRef}
            className="flex gap-6 transition-transform"
            style={{ willChange: 'transform' }}
          >
            {extendedLogosLeft.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 p-4 gap-3 
                           w-[180px] h-[80px] rounded-[16.75px] bg-[#F8F8F8] 
                           border border-dashed border-[#BFBFBF]"
              >
                <span className="text-base font-semibold text-gray-800">
                  {tech.name}
                </span>
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  onError={() => console.log(`Failed to load: ${tech.icon}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row - Moving Left */}
      <div className="overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <div
          className="flex gap-6"
          onMouseEnter={() => setIsAnimatingRight(false)}
          onMouseLeave={() => setIsAnimatingRight(true)}
        >
          <div
            ref={carouselRightRef}
            className="flex gap-6 transition-transform"
            style={{ willChange: 'transform' }}
          >
            {extendedLogosRight.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 p-4 gap-3 
                           w-[180px] h-[80px] rounded-[16.75px] bg-[#F8F8F8] 
                           border border-dashed border-[#BFBFBF]"
              >
                <span className="text-base font-semibold text-gray-800">
                  {tech.name}
                </span>
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  onError={() => console.log(`Failed to load: ${tech.icon}`)}
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