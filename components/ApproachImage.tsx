import Image from "next/image"

export default function ApproachImage() {
  return (
    <div className="flex cpntainer mx-auto justify-center items-center py-8">
      <Image 
        src="/approach/image.png" 
        alt="Our Approach" 
        width={1050} 
        height={900} 
        className="object-contain"
      />
    </div>
  )
}