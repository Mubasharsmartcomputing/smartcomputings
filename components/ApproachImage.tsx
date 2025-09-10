import Image from "next/image"

export default function ApproachImage() {
  return (
    <div className="flex justify-center items-center py-8">
      <Image 
        src="/approach/image.png" 
        alt="Our Approach" 
        width={1400} 
        height={900} 
        className="object-contain"
      />
    </div>
  )
}