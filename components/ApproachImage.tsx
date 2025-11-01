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
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
   
       <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#215EB3] to-[#02B2E8] text-transparent bg-clip-text text-center mb-12">
        Company Highlights
      </h2>

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-8 mb-12">
        {topHighlights.map((highlight, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs lg:max-w-48 mx-auto">
            <h3 
              className="text-gray-800 mb-3"
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
      <div className="flex justify-center items-center my-8">
        <img 
          src="/approach/image1.png" 
          alt="Company Approach" 
          className="max-w-full h-auto"
        />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-16 max-w-4xl mx-auto">
        {bottomHighlights.map((highlight, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs lg:max-w-52 mx-auto">
            <h3 
              className="text-gray-800 mb-3"
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