import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function Portfolio() {

  return (
      <section 
      className="relative overflow-hidden w-full h-[441px] py-20 px-4 md:px-8 lg:px-16" // Added padding for better spacing
      style={{
        backgroundColor: '#183762',
        borderBottomLeftRadius: '26px',
        borderBottomRightRadius: '26px'
      }}
    >
      <div className="container mx-auto justify-center items-center mt-16 md:mt-28"> {/* Centering content */}
        <h1 
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#E9F2FA] to-[#74A9D0] align-middle capitalize"
          style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '65px',
            lineHeight: '100%',
            letterSpacing: '-0.78px'
          }}
        >
          About Us
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
          SMART COMPUTING is a pioneering technology company built on expertise and innovation. We specialize in AI, IoT, and IT solutions tailored to business needs. Our mission is to empower organizations with smarter technologies for growth and success.
        </p>
      </div>
    </section>
  )
}