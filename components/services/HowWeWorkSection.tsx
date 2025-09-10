import { TrendingUp } from "lucide-react"

export function HowWeWorkSection() {
  return (
    <section className="relative bg-gray-50 py-20 h-[100vh] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 
            className="text-cyan-600 mb-6"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '-1.16px'
            }}
          >
            How we work?
          </h2>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mb-20">
          {/* Vertical dashed lines */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <div className="absolute left-1/4 top-0 bottom-0 w-px border-l-2 h-60 border-dashed border-gray-300"></div>
            <div className="absolute left-2/4 top-0 bottom-0 w-px border-l-2 h-60 border-dashed border-gray-300"></div>
            <div className="absolute left-3/4 top-0 bottom-0 w-px border-l-2 h-60 border-dashed border-gray-300"></div>
          </div>

          {/* Discover */}
          <div className="relative z-10">
            <h3 
              className="text-gray-800 mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%'
              }}
            >
              Discover
            </h3>
            <p 
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px'
              }}
            >
              We analyze your business needs and challenges.
            </p>
          </div>

          {/* Design */}
          <div className="relative z-10">
            <h3 
              className="text-gray-800 mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%'
              }}
            >
              Design
            </h3>
            <p 
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px'
              }}
            >
              We craft customized, innovative technology solutions.
            </p>
          </div>

          {/* Deliver */}
          <div className="relative z-10">
            <h3 
              className="text-gray-800 mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%'
              }}
            >
              Deliver
            </h3>
            <p 
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px'
              }}
            >
              We implement with precision and efficiency.
            </p>
          </div>

          {/* Support */}
          <div className="relative z-10">
            <h3 
              className="text-gray-800 mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%'
              }}
            >
              Support
            </h3>
            <p 
              className="text-gray-600 leading-relaxed"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px'
              }}
            >
              We provide continuous guidance for long-term success.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-20 flex flex-col justify-end items-center ml-[-54px] lg:ml-[1080px] lg:mt-56 mt-[-50px] space-x-4 mb-8">
          <div className="bg-blue-900 rounded-full p-3">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div 
              className="text-gray-800"
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
              className="text-gray-600"
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
        style={{ top: '375px', left: '37%', transform: 'translateX(-50%)', width: '1450px', height: '407px' }}
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
