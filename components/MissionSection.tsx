import React from 'react';

const MissionSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#183762] to-[#02B2E8] text-white py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-16 relative overflow-hidden">
      {/* Background image - Hidden on mobile, shown on md and up */}
      <div 
        className="absolute pointer-events-none hidden md:block"
        style={{
          width: '30vw',
          maxWidth: '380px',
          height: '30vw',
          maxHeight: '380px',
          top: '-15%',
          right: '-1%',
          transform: 'rotate(-105.96deg)',
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-2 sm:px-4">
        <p 
          className="mb-2 text-base sm:text-lg md:text-xl"
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            lineHeight: '1.4',
            letterSpacing: '0.02em'
          }}
        >
          Our mission is simple.
        </p>
        
        <h2 
          className="mb-6 sm:mb-8 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}
        >
          No Delays, Just Results!
        </h2>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          {['IOT', 'Software', 'Apps', 'Blockchain', 'AI'].map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="mr-2 text-xl sm:text-2xl text-white">•</span>
              <span 
                className="text-white text-sm sm:text-base"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  letterSpacing: '0%',
                  whiteSpace: 'nowrap'
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;