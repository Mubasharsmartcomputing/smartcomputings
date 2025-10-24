import Image from "next/image"

export default function ContactImage() {
  return (
    <div className="flex flex-col  w-full py-8">
      <div className="flex justify-center">
      <Image 
        src="/contactimage.png" 
        alt="Contact" 
        width={1500} 
        height={100} 
        className="object-contain w-full max-w-7xl h-auto"
      />
      </div>

    
    </div>
  )
}