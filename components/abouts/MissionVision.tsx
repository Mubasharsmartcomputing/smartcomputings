import { TrendingUp, Eye, Twitter, Linkedin } from "lucide-react"

export default function MissionVision() {
  return (
    <>
      {/* Mission & Vision Section */}
      <section className="container mx-auto bg-[#183762] px-6 mb-10 py-16 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-[55px] font-semibold font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#189EFF] align-middle">
              Our Mission & Vision
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Guiding principles that drive everything we do at Smart Computing
            </p>
          </div>

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div
            
              className=" backdrop-blur-sm rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: "#20202017",
                border: "0.3px dashed white",
                borderImage: "none",
                strokeDasharray: "0.6, 0.6",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower people and businesses with smart solutions that combine innovation, excellence, and global
                collaboration. By fostering continuous learning, leveraging breakthrough technology, and building
                meaningful partnerships, we aim to deliver lasting value and help our clients win in every challenge.
              </p>
            </div>

            {/* Vision Card */}
            <div
              className=" backdrop-blur-sm rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: "#20202017",
                border: "0.3px dashed white",
                borderImage: "none",
                strokeDasharray: "0.6, 0.6",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Eye className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be a globally trusted technology leader that transforms industries through innovation, empowers teams
                to achieve their best, and creates a positive impact worldwide. Our vision is to set new standards of
                excellence by uniting people, ideas, and technology for a smarter future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
