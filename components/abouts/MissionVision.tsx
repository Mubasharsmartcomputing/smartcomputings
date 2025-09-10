import { TrendingUp, Eye, Twitter, Linkedin } from "lucide-react"

export default function MissionVision() {
  return (
    <>
      {/* Mission & Vision Section */}
      <section className="container mx-auto bg-[#183762] px-6 my-10 py-16 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-[55px] font-semibold font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#189EFF] align-middle">
              Our Mission &Vision
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Guiding principles that drive everything we do at Smart Computing
            </p>
          </div>

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div className=" backdrop-blur-sm rounded-2xl p-8 md:p-10" style={{ backgroundColor: '#20202017', border: '0.3px dashed white', borderImage: 'none', strokeDasharray: '0.6, 0.6' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses through innovative technology solutions that drive efficiency, growth, and
                competitive advantage. We are committed to delivering exceptional value to our clients by combining
                technical expertise with a deep understanding of their business needs.
              </p>
            </div>

            {/* Vision Card */}
            <div className=" backdrop-blur-sm rounded-2xl p-8 md:p-10" style={{ backgroundColor: '#20202017', border: '0.3px dashed white', borderImage: 'none', strokeDasharray: '0.6, 0.6' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Eye className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be recognized globally as a leading technology partner that consistently delivers transformative
                solutions. We aspire to be at the cutting edge of technological advancement, setting new standards of
                excellence and innovation in the IT industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
     {/* <section className="bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
       
        <div className="text-center mb-16 relative">
          <div className="relative inline-block mb-6">
            <h2 className="font-semibold font-inter text-[48px] md:text-[62px] leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#189EFF]">
              Leadership Team With Vision
            </h2>
            <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full absolute -top-4 -right-8 md:-right-16">
              Our Team
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-6">
            A team of innovators and experts dedicated to delivering smarter solutions.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
         
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
             
              <div className="rounded-2xl mb-8 h-64 flex items-center justify-center overflow-hidden relative" style={{ background: 'linear-gradient(to bottom right, #C7E7FF, #FFFFFF)' }}>
                <img
                  src="/mission/image.png"
                  alt="ALIS - CEO & Co-Founder"
                  className="w-full h-full object-contain"
                />
              </div>

              
              <div className="flex justify-between">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ALIS</h3>
                <p className="text-gray-500 text-base font-medium">CEO & Co-Founder</p>
              </div>

             
              <div className="flex gap-4">
                <button className=" bg-blue-50 rounded-full mt-4 justify-center items-center text-center w-12 h-12 transition-all duration-200">
                  <Twitter className="w-5 h-5 ml-3" />
                </button>
                <button className="bg-blue-50 rounded-full mt-4 justify-center items-center text-center w-12 h-12 transition-all duration-200">
                  <Linkedin className="w-5 h-5 ml-3" />
                </button>
              </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section> */}
    </>
  )
}