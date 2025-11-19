"use client"


import Image from "next/image"



export default function CredibilityProof() {
  
  return (
    <section className="py-20 bg-white w-full">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       
        {/* Statistics Row */}
        <div
          className="flex flex-wrap justify-center lg:justify-between items-center mb-10 px-6 sm:px-8 lg:px-12 py-8 gap-6 lg:gap-8 w-full max-w-full mx-auto"
          style={{ borderRadius: "20.17px", border: "1.3px solid #E5E7EB", backgroundColor: "#EAF4FCD1" }}
        >
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image 
                src="/ourValue/employee.png" 
                alt="Employees" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-gray-900">100+</span>
              <span className="text-base text-gray-600">Employees</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image 
                src="/ourValue/country.png" 
                alt="Countries" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-gray-900">16+</span>
              <span className="text-base text-gray-600">Countries</span>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image 
                src="/ourValue/projects.png" 
                alt="Projects done" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-gray-900">65+</span>
              <span className="text-base text-gray-600">Projects done</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image 
                src="/ourValue/offices.png" 
                alt="Offices" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-gray-900">04+</span>
              <span className="text-base text-gray-600">Offices</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image 
                src="/ourValue/award.png" 
                alt="Project awards" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-gray-900">20+</span>
              <span className="text-base text-gray-600">Projects awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}