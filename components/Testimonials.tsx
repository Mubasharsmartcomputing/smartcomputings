"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const testimonialsData = [
  {
    id: 1,
    rating: 5,
    image: "/testimonials/image1.png",
    name: "David",
    role: "CEO",
    text: "Smart Computing transformed our business operations with their cutting-edge ERP solution. Their professional approach and technical excellence made all the difference."
  },
  {
    id: 2,
    rating: 5,
    image: "/testimonials/image2.png",
    name: "Harper",
    role: "Lead Developer",
    text: "The AI integration project exceeded our expectations. Smart Computing's innovative solutions and seamless implementation process were truly impressive."
  },
  {
    id: 3,
    rating: 5,
    image: "/testimonials/image3.png",
    name: "Amelia",
    role: "Project Manager",
    text: "Outstanding collaboration and delivery! Smart Computing's team understood our requirements perfectly and delivered a robust, scalable solution on schedule."
  },
  {
    id: 4,
    rating: 5,
    image: "/testimonials/image4.png",
    name: "Sarah",
    role: "CTO",
    text: "Their digital transformation expertise helped us modernize our entire infrastructure. The results have significantly improved our operational efficiency."
  },
  {
    id: 5,
    rating: 5,
    image: "/testimonials/image5.png",
    name: "Michael",
    role: "Product Manager",
    text: "Exceptional service quality and technical support throughout our project lifecycle. Smart Computing truly delivers smart solutions for complex challenges."
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-[#FACC15]' : 'text-gray-500'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="rounded-xl p-8 min-h-[320px] flex flex-col h-full mx-auto max-w-xs" style={{ backgroundColor: '#FFFFFF1A' }}>
      <StarRating rating={testimonial.rating} />
      <div className="text-white mb-4">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-9.983z" />
        </svg>
      </div>
      
      <p className="text-white mb-6 flex-grow leading-relaxed">"{testimonial.text}"</p>
     
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleSlides = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };

  const getMaxIndex = () => Math.max(0, testimonialsData.length - getVisibleSlides());

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= getMaxIndex() ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, windowWidth]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, getMaxIndex()));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= getMaxIndex() ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? getMaxIndex() : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <>
      <section className="py-20 bg-[#183762] container relative overflow-hidden rounded-[40px] mt-20 mx-auto max-w-6xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className=" mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#189EFF] align-middle"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '36px',
                lineHeight: '100%',
                letterSpacing: '-1.16px'
              }}
            >
              What Our Clients Say
            </h2>
            <p 
              className="text-gray-300 max-w-3xl mx-auto"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15.4px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              Don't just take our word for it. Here's what some of our clients have to say about their experience working with Smart Computing.
            </p>
          </div>

          <div className="relative mb-12">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / getVisibleSlides())}%)` }}
              >
                {testimonialsData.map((testimonial) => (
                  <div key={testimonial.id} className="flex-shrink-0 px-1" style={{ width: `${100 / getVisibleSlides()}%` }}>
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button onClick={prevSlide} className="rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200" style={{ backgroundColor: '#FFFFFF1A' }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200" style={{ backgroundColor: '#FFFFFF1A' }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-12" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#FAFAFA] rounded-lg p-8 shadow-sm">
            <div className="flex items-center mb-6 md:mb-0 md:w-1/3">
              <div>
                <h3 
                  className="text-[55px] font-semibold font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] mb-2 to-[#189EFF] align-middle"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '-0.5px'
                  }}
                >
                  Join Our Newsletter
                </h3>
                <p 
                  className="text-gray-600 max-w-sm"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0%'
                  }}
                >
                  Subscribe to receive updates on new technology, exclusive updates on technology to get more updated be the first to subscribe
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <Image src="/joinnews/image.png" alt="Newsletter" width={80} height={80} className=" object-contain" />
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-end">
              <div className="flex flex-col sm:flex-row w-full max-w-md space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 focus:ring-2 focus:ring-[#183762]"
                  style={{
                    minWidth: '200px',
                    height: '44px',
                    borderRadius: '6.1px',
                    border: '0.46px dashed #183762',
                    borderStyle: 'dashed',
                    strokeDasharray: '2.4',
                    background: 'linear-gradient(to bottom, #FFFFFF, #D3EDFF)',
                    padding: '12px 16px',
                    outline: 'none'
                  }}
                />
                <button 
                  className="bg-gradient-to-r from-[#215EB3] to-[#02B2E8] hover:opacity-90 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 flex-shrink-0"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '44px',
                    letterSpacing: '0%',
                    minWidth: '120px',
                    height: '44px'
                  }}
                >
                  Subscribe
                </button>
              </div>
              <p 
                className="text-gray-500 text-xs mt-2 max-w-md"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '0%'
                }}
              >
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;