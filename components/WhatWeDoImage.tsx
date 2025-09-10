import Image from "next/image"

export default function WhatWeDoImage() {
  return (
    <div className="flex container mx-auto justify-center items-center py-8">
      <Image 
        src="whatwedo\image.png" 
        alt="Circuit Technology"
        width={1050} 
        height={100} 
        className="object-contain"
        priority={false}
        loading="lazy"
      />
    </div>
  )
}