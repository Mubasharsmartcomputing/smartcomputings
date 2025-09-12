import Image from "next/image"

export default function WhatWeDo() {
  const services = [
    {
      icon: "/whatwedo/web.png",
      title: "SOFTWARES & MOBILE/ WEB APPLICATIONS",
      description: "Custom Software and Mobile/Web Application Development.",
    },
    {
      icon: "/whatwedo/ai.png",
      title: "Artificial Intelligence Solution & Industry 4.0",
      description: "Solutions and Industry 4.0 for Smart Automation and Innovation.",
    },
    {
      icon: "/whatwedo/embaded.png",
      title: "Embedded Systems",
      description: "Embedded Systems for Advanced, Customised Technological Solutions.",
    },
    {
      icon: "/whatwedo/resource.png",
      title: "IT RESOURCE AUGMENTATION",
      description: "Resource Augmentation for Scalable and Flexible Workforce Solutions.",
    },
    {
      icon: "/whatwedo/interprice.png",
      title: "ENTERPRISE RESOURCE PLANNING SOLUTIONS",
      description: "ERP Solutions for Streamlined Business Operations.",
    },
    {
      icon: "/whatwedo/devops.png",
      title: "DEV OPS",
      description: "Our DevOps services accelerate development and streamline operations.",
    },
  ]

  return (
    <div className="min-h-screen py-16 px-4 relative overflow-hidden" >
      {/* Background Image - Large screens */}
      <div 
        className="absolute hidden xl:block"
        style={{
          width: '70vw',
          height: '100vh',
          top: '10%',
          left: '15%',
          transform: 'rotate(180.4deg)',
          zIndex: 0,
        }}
      >
        <Image 
          src="/bg.png" 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
      </div>
      
      {/* Background Image - Laptop screens */}
      <div 
        className="absolute hidden lg:block xl:hidden"
        style={{
          width: '80vw',
          height: '90vh',
          top: '-2%',
          left: '10%',
          transform: 'rotate(180.4deg)',
          zIndex: 0,
        }}
      >
        <Image 
          src="/bg.png" 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
      </div>
      
      {/* Background Image - Tablet screens */}
      <div 
        className="absolute hidden md:block lg:hidden"
        style={{
          width: '70vw',
          height: '80vh',
          top: '0%',
          left: '15%',
          transform: 'rotate(180.4deg)',
          zIndex: 0,
        }}
      >
        <Image 
          src="/bg.png" 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10"> {/* Added relative and z-10 to keep content on top */}
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-[55px] font-semibold font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#02B2E8] align-middle"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '-1.16px'
            }}
          >
            Our Core Verticals
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => {
            return (
              <div key={index} className="bg-[#183762] rounded-2xl p-6 text-white relative">
                {/* Icon Circle */}
                <div className="absolute top-[-35px] left-30 bg-transparent rounded-full flex items-center justify-center -translate-x-1/4 -translate-y-1/4">
                  <Image src={service.icon} alt={service.title} width={140} height={100} className="object-contain" />
                </div>

                {/* Content */}
                <div className="space-y-4 pt-16"> {/* Added pt-16 to push content down */}
                  <h3 
                    className="text-white leading-tight"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 600,
                      fontSize: '18px',
                      lineHeight: '100%',
                      letterSpacing: '-0.5px'
                    }}
                  >
                    {service.title}
                  </h3>

                  <p 
                    className="text-gray-300 leading-relaxed"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: '15.4px',
                      lineHeight: '24px',
                      letterSpacing: '0%'
                    }}
                  >
                    {service.description}
                  </p>

                  <div className="pt-4">
                    <button 
                      className="text-gray-300 hover:text-white transition-colors"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '44px',
                        letterSpacing: '0%'
                      }}
                    >
                      Learn more )
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}