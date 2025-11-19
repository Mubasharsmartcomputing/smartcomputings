import React from 'react';

export default function CompanyHighlights() {
  const highlights = [
    {
      title: "Team Expertise",
      description: "A team of over 100+ IT professionals with diverse tech skills.",
      position: "top"
    },
    {
      title: "Leadership Experience",
      description: "Team leaders with over 15 years of experience.",
      position: "top"
    },
    {
      title: "Support Availability",
      description: "24/7 support ensures continuous service.",
      position: "top"
    },
    {
      title: "Delivery Rate",
      description: "Over 95% project delivery rate.",
      position: "top"
    },
    {
      title: "Client Satisfaction",
      description: "Over 65+ satisfied clients internationally.",
      position: "bottom"
    },
    {
      title: "Project Delivery",
      description: "Successfully delivered over 65+ projects.",
      position: "bottom"
    },
    {
      title: "Global Presence",
      description: "Operations in Germany, KSA, China and Pakistan.",
      position: "bottom"
    }
  ];

  const topHighlights = highlights.filter(h => h.position === "top");
  const bottomHighlights = highlights.filter(h => h.position === "bottom");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-24 lg:py-28">

       <div className="text-center mb-12">
          <h1 
            className="text-[55px] font-semibold font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#02B2E8] align-middle"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '-1.16px'
            }}
          >
            Company Highlights
          </h1>
        </div>
    

      {/* Top Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 lg:mb-12">
        {topHighlights.map((highlight, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs lg:max-w-48 mx-auto">
            <h3 
              className="text-gray-800 mb-2 sm:mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '120%',
                letterSpacing: '-0.5px'
              }}
            >
              {highlight.title}
            </h3>
            <p 
              className="text-gray-600"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              {highlight.description}
            </p>
          </div>
        ))}
      </div>

      {/* Approach Image */}
      <div className="flex justify-center items-center my-6 sm:my-8 px-4">
        <img 
          src="/approach/image1.png" 
          alt="Company Approach" 
          className="max-w-full h-auto w-full sm:w-auto"
        />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-0 mt-8 sm:mt-12 lg:mt-16 max-w-4xl mx-auto px-4 sm:px-6">
        {bottomHighlights.map((highlight, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs lg:max-w-52 mx-auto">
            <h3 
              className="text-gray-800 mb-2 sm:mb-3"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '120%',
                letterSpacing: '-0.5px'
              }}
            >
              {highlight.title}
            </h3>
            <p 
              className="text-gray-600"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}