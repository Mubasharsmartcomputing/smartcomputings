import Image from "next/image"

export default function ServiceCard() {
  const services = [
    {
      icon: "/whatwedo/web.png",
      title: "SOFTWARES & MOBILE/ WEB APPLICATIONS",
      description: "Custom Software and Mobile/Web Application Development.",
    },
    {
      icon: "/whatwedo/ai.png",
      title: "ARTIFICIAL INTELLIGENCE SOLUTION & INDUSTRY 4.0",
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
   <div className="min-h-screen py-8 md:py-16 px-4 relative overflow-hidden" >
       
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <h1 
              className="text-2xl md:text-[36px] lg:text-[55px] font-semibold font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#189EFF] align-middle"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                lineHeight: '100%',
                letterSpacing: '-1.16px'
              }}
            >
              What We Do
            </h1>
          </div>
  
          {/* Services Grid - Responsive layout */}
          <div className="flex flex-col gap-8 md:gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => {
              return (
                <div key={index} className="bg-[#183762] rounded-xl md:rounded-2xl p-4 md:p-6 text-white relative flex flex-col md:flex-row md:items-center min-h-[140px] md:min-h-[120px]">
                  {/* Icon Circle - Mobile: Top positioned, Desktop: Left positioned */}
                  <div className="flex-shrink-0 md:mr-6 absolute top-[-60px] md:top-[-60px] left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-transparent">
                    <Image 
                      src={service.icon} 
                      alt={service.title} 
                      width={120} 
                      height={100} 
                      className="object-contain " 
                    />
                  </div>
  
                  {/* Content - Adjusted for mobile */}
                  <div className="md:flex-row flex flex-col space-y-2 flex-1 mt-8 md:mt-0 md:ml-20 text-center md:text-left">
                    <h3 
                      className="text-white w-auto md:w-52  leading-tight text-sm md:text-lg"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        lineHeight: '100%',
                        letterSpacing: '-0.5px'
                      }}
                    >
                      {service.title}
                    </h3>
  
                    <p 
                      className="text-gray-300 w-auto ml-[0px] md:ml-20 md:w-[500px] leading-relaxed text-xs md:text-[15.4px]"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0%'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
  )
}