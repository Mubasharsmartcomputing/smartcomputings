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
      className="overflow-hidden relative z-60 w-full h-auto md:h-[702px]" // Removed h-[702px] from here for better responsiveness, height will be determined by content or flex
      style={{
        backgroundColor: '#183762',
        borderBottomLeftRadius: '26px',
        borderBottomRightRadius: '26px'
      }}
    >
      {/* Main Content */}
      {/* Removed min-h-screen from here. The height of the section will now adapt. */}
      {/* Added py-16 lg:py-24 for vertical padding to ensure content is centered */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-auto flex items-center py-16 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 text-start order-1 lg:order-1">
            <div className="space-y-4">
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

           <div className="space-y-3">
  <p className="text-[#DCDCDC] text-[15.4px] leading-6 font-medium font-inter">
    <span className=" text-white">SMART COMPUTING</span> delivers innovative IT and AI-driven solutions
  </p>
  <p className="text-[#DCDCDC] text-[15.4px] leading-6 font-medium font-inter">
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
          {/* Adjusted margin top for better alignment and added mb-8 for spacing on small screens */}
          <div className="relative flex justify-center mt-4 sm:mt-8 lg:mt-0 items-center order-2 lg:order-2 mb-8 lg:mb-0">
           
              <Image
                src="/images/circuit.png"
                alt="Circuit Board Technology"
                width={900}
                height={900}
                className=" object-contain"
                priority
              />
             
          </div>
        </div>
      </div>

      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.1),transparent_50%)]"></div>
    </section>
  )
}