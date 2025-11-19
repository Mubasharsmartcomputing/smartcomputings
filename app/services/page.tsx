
import ServiceCard from '@/components/services/ServiceCard'


import Cycle from '@/components/services/Cycle'
import { HowWeWorkSection } from '@/components/services/HowWeWorkSection'

export default function Services() {
  return (
    <>
      <section 
        className="relative overflow-hidden w-full h-auto py-10 px-4 md:px-8 lg:px-16"
        style={{
          backgroundColor: '#183762',
          borderBottomLeftRadius: '26px',
          borderBottomRightRadius: '26px'
        }}
      >
        <div className="container mx-auto justify-center items-center mt-20 ml-14">
          <h1 
            className="text-transparent text-[35px] md:text-[50px] mb-2 bg-clip-text bg-gradient-to-r from-[#E9F2FA] to-[#74A9D0] align-middle capitalize"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              lineHeight: '100%',
              letterSpacing: '-0.78px'
            }}
          >
            Our Services
          </h1>
          <p 
            className="max-w-2xl"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '15.38px',
              lineHeight: '24px',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}
          >
            We provide end-to-end technology solutions, from AI and IoT to software development and IT systems. Our services are designed to help businesses innovate, optimize operations, and achieve sustainable growth.
          </p>
        </div>
      </section>
       <ServiceCard/>
      <HowWeWorkSection/> 
      
      {/* <CompanyLogos /> */}
      <Cycle/>
     
    </>
  )
}