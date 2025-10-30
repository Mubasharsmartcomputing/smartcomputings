export default function Cycle() {
  return (
    <section className="container max-w-6xl rounded-[32px] lg:rounded-[55px] mx-auto bg-[#183762] px-4 sm:px-6 lg:px-8 my-6 lg:my-10 py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-28">
          <h1 className="text-2xl sm:text-3xl lg:text-[35px] font-semibold font-inter leading-[110%] lg:leading-[100%] tracking-[-0.5px] lg:tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#189EFF] px-2">
            Which engagement model should be chosen for the project?  
          </h1>
        </div>

        {/* Flowchart */}
        <div className="relative flex flex-col items-center">
          {/* Top Row - Fixed Cost and Hourly */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 w-full mb-12 lg:mb-0 relative">
            {/* Fixed Cost - Left */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:w-1/2 lg:pr-48 px-4">
              <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                Fixed Cost
              </h2>
              <p className="text-white text-sm sm:text-base max-w-xs leading-relaxed">
                Suitable for projects with clear requirements and timelines.
              </p>
            </div>

            {/* Center Arrow Image - Visible on all screens */}
            <div className="flex items-center justify-center my-6 lg:my-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
              <img 
                src="/cycle/arrowcycle.png" 
                alt="Arrow Cycle" 
                className="w-48 sm:w-64 lg:w-80 h-auto"
              />
            </div>

            {/* Hourly (Augmentation) - Right */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 lg:pl-48 px-4">
              <h2 className="text-[#189EFF] text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                Hourly (Augmentation)
              </h2>
              <p className="text-white text-sm sm:text-base max-w-xs leading-relaxed">
                Best for ongoing work or evolving project scope.
              </p>
            </div>
          </div>

          {/* Bottom - SLA-Based */}
          <div className="text-center mt-12 lg:mt-20 px-4">
            <h2 className="text-[#00D9FF] text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
              SLA-Based
            </h2>
            <p className="text-white text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Ensures long-term support with defined service levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}