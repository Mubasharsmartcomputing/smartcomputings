import { Users, Globe, Briefcase, MapPin, UserCheck, Star, Heart, Lightbulb, Shield, TrendingUp, Rocket, GraduationCap, UserPlus, Globe2 } from "lucide-react"

export default function AboutValues() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Statistics Row */}
        {/* <div
          className="flex flex-wrap justify-center lg:justify-between items-center mb-10 px-4 sm:px-6 lg:px-8 py-6 gap-4 lg:gap-0 w-full max-w-full mx-auto"
          style={{ borderRadius: "20.17px", border: "1.3px solid #ccc", backgroundColor: "#E1EBFF" }}
        >
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">50+</span>
              <span className="text-xs sm:text-sm text-gray-600">Team members</span>
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
              <span className="text-base sm:text-lg font-semibold text-gray-800">80+</span>
              <span className="text-xs sm:text-sm text-gray-600">Projects done</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">4+</span>
              <span className="text-xs sm:text-sm text-gray-600">Offices</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-gray-800">20+</span>
              <span className="text-xs sm:text-sm text-gray-600">Project awards</span>
            </div>
          </div>
        </div> */}

        {/* Core Values Section */}
        <div className="text-center gap-4 mb-12 px-4">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#189EFF] mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            The principles that shape our vision, inspire our people, and guide every solution we deliver.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
          {/* Empower & Win */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Empower & Win</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We empower our team with trust and responsibility, enabling everyone to deliver their best work and win
              together as one strong unit.
            </p>
          </div>

          {/* Breakthrough Technology */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Breakthrough Technology</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We embrace innovation through extensive R&D, leveraging modern technologies to optimize our products and
              services for maximum impact.
            </p>
          </div>

          {/* Training & Development */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Training & Development</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We believe in continuous learning and development, ensuring every team member stays current, skilled, and
              ready for tomorrow’s challenges.
            </p>
          </div>

          {/* Strategic Partnerships */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Strategic Partnerships</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We believe in building strong global partnerships that strengthen our capabilities with shared knowledge,
              expertise, and skills.
            </p>
          </div>

          {/* Excellence */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Excellence</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We honor our responsibilities with ownership and accountability, ensuring every task is executed with the
              highest level of excellence for our customers.
            </p>
          </div>

          {/* Global Impact */}
          <div className="bg-white p-8 shadow-sm" style={{ borderRadius: "16px", border: "0.3px solid #02B2E8" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <Globe2 className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Global Impact</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We aim to develop products and services that contribute to modern technology and create a lasting positive
              impact on a global scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
