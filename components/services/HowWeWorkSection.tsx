import { TrendingUp } from "lucide-react"

export function HowWeWorkSection() {
  return (
    <section className="relative bg-gray-50 py-20 h-[100vh] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          
          <h3  className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold bg-gradient-to-r from-[#215EB3] mb-4 to-[#02B2E8] text-transparent bg-clip-text text-start">
          End To End Development Cycle
        </h3>
          <p 
            className="text-gray-600 leading-relaxed max-w-4xl"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '15.4px',
              lineHeight: '24px'
            }}
          >
            At SMART COMPUTING, we follow a client-focused approach built on collaboration, innovation, and efficiency.
            We start by understanding your unique challenges, then design customized technology solutions, and finally
            deliver with precision and ongoing support to ensure long-term success.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative mb-20">
          {/* Vertical dashed lines centered between columns */}
          <div className="hidden md:block absolute inset-0 pointer-events-none" style={{ height: '300px' }}>
            <div className="absolute left-[-10px] top-0 bottom-0 w-px border-r-2 border-dashed border-gray-300"></div>
            <div className="absolute left-[200px] top-0 bottom-0 w-px border-r-2 border-dashed border-gray-300"></div>
            <div className="absolute left-[calc(5/16*100%)] top-0 bottom-0 w-px border-r-2 border-dashed border-gray-300"></div>
            <div className="absolute left-[calc(7/14.2*100%)] top-0 bottom-0 w-px border-r-2 border-dashed border-gray-300"></div>
            <div className="absolute left-[calc(9/13.5*100%)] top-0 bottom-0 w-px border-r-2 border-dashed border-gray-300"></div>
            <div className="absolute left-[calc(11/13.2*100%)] top-0 bottom-0 w-px border-r-2 border-dashed border-gray-300"></div>
          </div>

          {/* Requirement Analysis */}
          <div className="relative z-10">
            <h3 
              className="text-gray-800 mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '100%'
              }}
            >
              Requirement Analysis
            </h3>
            <p 
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '13px',
                lineHeight: '18px'
              }}
            >
              We analyze your business needs and challenges.
            </p>
          </div>

          {/* Commence Project */}
          <div className="relative z-10">
            <h3 
              className="text-gray-800 mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '100%'
              }}
            >
              Commence Project
            </h3>
            <p 
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '13px',
                lineHeight: '18px'
              }}
            >
              We initiate the project with proper planning.
            </p>
          </div>

          {/* Coding & Development */}
          <div className="relative z-10">
            <h3 
              className="text-gray-800 mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '100%'
              }}
            >
              Coding & Development
            </h3>
            <p 
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '13px',
                lineHeight: '18px'
              }}
            >
              We develop the solution with precision.
            </p>
          </div>

          {/* Deployment Installation */}
          <div className="relative z-10">
            <h3 
              className="text-gray-800 mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '100%'
              }}
            >
              Deployment Installation
            </h3>
            <p 
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '13px',
                lineHeight: '18px'
              }}
            >
              We deploy and install the solution.
            </p>
          </div>

          {/* Customer Feedback */}
          <div className="relative z-10">
            <h3 
              className="text-gray-800 mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '100%'
              }}
            >
              Customer Feedback
            </h3>
            <p 
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '13px',
                lineHeight: '18px'
              }}
            >
              We gather and implement your feedback.
            </p>
          </div>

          {/* Maintenance & Updates */}
          <div className="relative z-10">
            <h3 
              className="text-gray-800 mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '100%'
              }}
            >
              Maintenance & Updates
            </h3>
            <p 
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '13px',
                lineHeight: '18px'
              }}
            >
              We provide ongoing support and updates.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-20 flex flex-col justify-end items-center lg:ml-[900px] lg:mt-[300px] mt-8 mb-8 px-4 w-full lg:w-auto">
          <div className="text-right">
            <div 
              className="text-gray-800 hidden md:block"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '30px',
                lineHeight: '100%'
              }}
            >
              80+
            </div>
            <div 
              className="text-gray-600 hidden md:block"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '16px'
              }}
            >
              95%+ project success
            </div>
          </div>
        </div>
      </div>

      {/* Background Image with Gradient - Desktop Only */}
      <div 
        className="absolute pointer-events-none hidden lg:block" 
        style={{ top: '375px', left: '37%', transform: 'translateX(-50%)', width: '1450px', height: '390px' }}
      >
        <div className="relative w-full h-full">
          <img 
            src="/howwework/image.png" 
            alt="How we work background" 
            className="w-full h-full object-cover"
          />         
        </div>
      </div>
    </section>
  )
}
