import Image from "next/image";

export default function Cycle() {
    return (
        <div className="flex flex-col container mx-auto justify-center items-center pb-8 md:pb-12 lg:pb-16 px-4 md:px-6 lg:px-8 space-y-4 md:space-y-6">

            {/* Heading with gradient text */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#215EB3] to-[#02B2E8] text-transparent bg-clip-text text-center">
                End To End Development Cycle
            </h2>
            <p className="text-lg md:text-xl  max-w-4xl mx-auto leading-relaxed  text-gray-600 mx-auto text"


                style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '15.4px',
                    lineHeight: '24px',
                    letterSpacing: '0%'
                }}>
                Guiding principles that drive everything we do at Smart Computing
            </p>
            {/* Image section */}
            <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                <Image
                    src="/cycle/image.png"
                    alt="End to End Development Cycle"
                    width={1400}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg md:rounded-xl lg:rounded-2xl"
                    priority={false}
                    loading="lazy"
                />
            </div>
        </div>
    );
}
