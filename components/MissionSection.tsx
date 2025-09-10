import React from 'react';

const MissionSection = () => {
  return (
    <section className="bg-[#02B2E8] text-white py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: '389.28px',
          height: '450.4px',
          top: '-123px',
          left: '1455px',
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
            fontSize: '15.4px',
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
            fontSize: '36px',
            lineHeight: '100%',
            letterSpacing: '-1.16px'
          }}
        >
          No Delays, Just Results!
        </h2>

        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="mr-3 text-2xl text-black">•</span>
            <span 
              className="text-black"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              Enabling growth through technology
            </span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl text-black">•</span>
            <span 
              className="text-black"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              Empowering organizations with AI & IT solutions
            </span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl text-black">•</span>
            <span 
              className="text-black"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              Driving transformation and success
            </span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl text-black">•</span>
            <span 
              className="text-black"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              Focused on innovation
            </span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl text-black">•</span>
            <span 
              className="text-black"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              Customized solutions for every challenge
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MissionSection;