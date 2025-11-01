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
      className="overflow-hidden relative w-full h-[1000px] md:h-[602px]"
      style={{
        backgroundColor: '#183762',
        borderBottomLeftRadius: '26px',
        borderBottomRightRadius: '26px',

      }}
    >
      <div className="container mx-auto px-4 mt-40 md:mt-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 mb-auto md:mb-36 lg:pr-8">
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

            <div className="space-y-1 pt-2">
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
              className="bg-gradient-to-r from-[#215EB3] to-[#02B2E8] relative hover:opacity-90 text-white z-[999] cursor-pointer px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 mt-8"
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
          <div className="relative flex justify-center lg:justify-end mt-10 items-center">
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