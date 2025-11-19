import Image from "next/image"

export default function AboutValues() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        

        {/* Core Values Section */}
        <div className="text-center gap-4 mb-12 px-4">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-inter leading-normal tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#189EFF] mb-4 pt-2 pb-2">
       Our Core Values
        </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            The principles that shape our vision, inspire our people, and guide every solution we deliver.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
          {/* Empower & Win */}
          <div className="bg-white p-8 shadow-sm flex flex-col" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="w-16 h-16 mb-1 flex items-center justify-center">
              <Image 
                src="/ourValue/empower.png" 
                alt="Empower & Win" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">Empower & Win</h3>
            <p className="text-gray-600 leading-relaxed">
              We empower our team with trust and responsibility, enabling everyone to deliver their best work and win
              together as one strong unit.
            </p>
          </div>

          {/* Breakthrough Technology */}
          <div className="bg-white p-8 shadow-sm flex flex-col" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="w-16 h-16 mb-1 flex items-center">
              <Image 
                src="/ourValue/breakthrought.png" 
                alt="Breakthrough Technology" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">Breakthrough Technology</h3>
            <p className="text-gray-600 leading-relaxed text-left">
              We embrace innovation through extensive R&D, leveraging modern technologies to optimize our products and
              services for maximum impact.
            </p>
          </div>

          {/* Training & Development */}
          <div className="bg-white p-8 shadow-sm flex flex-col" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="w-16 h-16 mb-1 flex items-center">
              <Image 
                src="/ourValue/traning.png" 
                alt="Training & Development" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">Training & Development</h3>
            <p className="text-gray-600 leading-relaxed text-left">
              We believe in continuous learning and development, ensuring every team member stays current, skilled, and
              ready for tomorrow’s challenges.
            </p>
          </div>

          {/* Strategic Partnerships */}
          <div className="bg-white p-8 shadow-sm flex flex-col" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="w-16 h-16 mb-1 flex items-center">
              <Image 
                src="/ourValue/startegic.png" 
                alt="Strategic Partnerships" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">Strategic Partnerships</h3>
            <p className="text-gray-600 leading-relaxed text-left">
              We believe in building strong global partnerships that strengthen our capabilities with shared knowledge,
              expertise, and skills.
            </p>
          </div>

          {/* Excellence */}
          <div className="bg-white p-8 shadow-sm flex flex-col" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="w-16 h-16 mb-1 flex items-center">
              <Image 
                src="/ourValue/excellence.png" 
                alt="Excellence" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">Excellence</h3>
            <p className="text-gray-600 leading-relaxed text-left">
              We honor our responsibilities with ownership and accountability, ensuring every task is executed with the
              highest level of excellence for our customers.
            </p>
          </div>

          {/* Global Impact */}
          <div className="bg-white p-8 shadow-sm flex flex-col" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="w-16 h-16 mb-1 flex items-center">
              <Image 
                src="/ourValue/global.png" 
                alt="Global Impact" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">Global Impact</h3>
            <p className="text-gray-600 leading-relaxed text-left">
              We aim to develop products and services that contribute to modern technology and create a lasting positive
              impact on a global scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
