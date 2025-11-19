export default function WhatWeDoImage() {
  return (
    <div className="flex flex-col container mx-auto justify-center items-center py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 space-y-4 md:space-y-6">
      
      {/* Heading with gradient text */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#215EB3] to-[#02B2E8] text-transparent bg-clip-text text-center">
        Flow Computer
      </h2>
      
      {/* Description */}
      <p 
        className="text-gray-600 text-center max-w-4xl"
        style={{
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: '15.4px',
          lineHeight: '24px',
          letterSpacing: '0%'
        }}
      >
        A flow computer is a specialized device that processes data from flow meters to calculate and record the volume of liquids or gases in real time. It's widely used across industries for accurate flow measurement and monitoring.
      </p>

      {/* Video section */}
      <div className="w-full flex justify-center px-4">
        <div className="relative overflow-hidden border-[5px] border-[#E1E1E1] rounded-[68px] w-full max-w-[1025px] aspect-video">
          <video 
            src="/flow_computer.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
