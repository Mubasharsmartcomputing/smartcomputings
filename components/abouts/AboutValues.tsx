import { Users, Globe, Briefcase, MapPin, UserCheck, Star, Heart, Lightbulb, Shield, TrendingUp } from "lucide-react"

export default function AboutValues() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Statistics Row */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center mb-10 px-4 sm:px-6 lg:px-8 py-6 gap-4 lg:gap-0 w-full max-w-full mx-auto" style={{ borderRadius: "20.17px", border: "1.3px solid #ccc", backgroundColor: "#E1EBFF" }}>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">50+</span>
              <span className="text-xs sm:text-sm text-gray-600">employees</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">15+</span>
              <span className="text-xs sm:text-sm text-gray-600">Countries</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">60+</span>
              <span className="text-xs sm:text-sm text-gray-600">Projects done</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">30+</span>
              <span className="text-xs sm:text-sm text-gray-600">Offices</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">20+</span>
              <span className="text-xs sm:text-sm text-gray-600">Projects awards</span>
            </div>
          </div>
        </div>


        {/* Core Values Section */}
        <div className="text-center gap-4 mb-12 px-4">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#189EFF] mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            The principles that guide our approach to business and technology
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
          {/* Excellence */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: '16px', border: '0.3px solid #02B2E8' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Excellence</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We strive for excellence in every solution we deliver, ensuring the highest standards of quality and
              performance.
            </p>
          </div>

          {/* Integrity */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: '16px', border: '0.3px solid #02B2E8' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We conduct our business with the highest level of integrity, transparency and ethical standards in all our
              interactions.
            </p>
          </div>

          {/* Innovation */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: '16px', border: '0.3px solid #02B2E8' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We embrace innovation and continuously explore new technologies and approaches to deliver cutting-edge
              solutions.
            </p>
          </div>

          {/* Collaboration */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: '16px', border: '0.3px solid #02B2E8' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Collaboration</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Together, we combine expertise and experience to create tailored solutions. Our collaborative ethos drives
              growth, efficiency, and lasting impact.
            </p>
          </div>

          {/* Reliability */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: '16px', border: '0.3px solid #02B2E8' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Reliability</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We are committed to being a reliable partner, consistently delivering on our promises and providing
              dependable support.
            </p>
          </div>

          {/* Growth */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: '16px', border: '0.3px solid #02B2E8' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Growth</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to continuous growth and improvement, both for our clients' businesses and for our own
              organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}