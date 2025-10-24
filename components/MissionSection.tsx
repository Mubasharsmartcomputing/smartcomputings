import React from 'react';

const MissionSection = () => {
  return (

    
    <section className="bg-[#02B2E8]  text-white py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute pointer-events-none hidden lg:block"
        style={{
          width: '20vw',
          height: '20vw',
          top: '-15%',
          right: '-2%',
          transform: 'rotate(-105.96deg)',
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      />
      {/* Smaller background for laptop screens */}
      <div 
        className="absolute pointer-events-none hidden md:block lg:hidden"
        style={{
          width: '20vw',
          height: '25vw',
          top: '-5%',
          right: '-3%',
          transform: 'rotate(-110.96deg)',
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <p 
          className="mb-2"
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '24px',
            letterSpacing: '0%'
          }}
        >
          Our mission is simple.
        </p>
        <h2 
          className="mb-8 leading-tight"
          style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '-1.16px'
          }}
        >
          No Delays, Just Results!
        </h2>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <span className="mr-3 text-2xl text-white">•</span>
            <span 
              className="text-white"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              IOT
            </span>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-2xl text-white">•</span>
            <span 
              className="text-white"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              Software
            </span>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-2xl text-white">•</span>
            <span 
              className="text-white"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              Apps
            </span>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-2xl text-white">•</span>
            <span 
              className="text-white"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              Blockchain
            </span>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-2xl text-white">•</span>
            <span 
              className="text-white"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;