export default function WhatWeDoImage() {
  return (
    <div className="flex justify-center items-center py-8">
      <video 
        src="/circuit vedio.mp4" 
        width={1500} 
        height={100} 
        className="object-contain"
        autoPlay
        muted
        loop
      />
    </div>
  )
}