import React from 'react';
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#183762] text-[#DCDCDC] px-2  py-12">
  <div className="container mx-auto py-4 ">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative">
      
      {/* Left Section - Logo and Description */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo/image.png" 
            alt="Smart Computing Logo"
            width={80}
            height={80}
          />
        </div>
        
        <p 
          className="text-[#DCDCDC] max-w-sm"
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: '24px',
            letterSpacing: '0%'
          }}
        >
          We believe in growing together by empowering businesses through technology.
        </p>
      </div>

      {/* Vertical Divider - Hidden on mobile, visible on large screens */}
      <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-white opacity-30"></div>

      {/* Middle Section - Pakistan Address */}
      <div className="space-y-4 lg:px-4">
        <div className="flex items-center gap-3 mb-6">
          <img 
            src="/flag/image.png" 
            alt="Pakistan Flag"
            className="w-6 h-4"
          />
          <span className="text-white font-medium text-lg">Pakistan</span>
        </div>
        
        <div className="flex justify-between items-start lg:items-center gap-8">
          {/* Left Side - Address */}
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-[#DCDCDC] mt-0.5 flex-shrink-0" />
            <div 
              className="text-[#DCDCDC]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '13px',
                lineHeight: '21px',
                letterSpacing: '0%'
              }}
            >
              <div>Building 102b Commercial Area, Phase 1</div>
              <div>Lake City Meadows, Lahore</div>
            </div>
          </div>
          
          {/* Right Side - Phone and Email */}
          <div className="space-y-3">
            <div className="flex  items-center gap-3">
              <img src="/icons/mobile.png" alt="Phone" className="w-5 h-5" />
              <span 
                className="text-[#DCDCDC]"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: '21px',
                  letterSpacing: '0%'
                }}
              >
                +92 336 0965165
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#DCDCDC]" />
              <span 
                className="text-[#DCDCDC]"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: '21px',
                  letterSpacing: '0%'
                }}
              >
                info@smartcomputings.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Divider - Hidden on mobile, visible on large screens */}
      <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 w-px bg-white opacity-30"></div>

      {/* Right Section - Social Media */}
      <div className="space-y-6 lg:px-8">
        <div className="space-y-4">
          <a 
            href="#" 
            className="flex items-center gap-3 text-[#DCDCDC] hover:text-white transition-colors"
          >
            <img src="/icons/facebook.png" alt="Facebook" className="w-5 h-5" />
            <span 
              style={{
                fontFamily: 'lato',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '0%'
              }}
            >
              Facebook
            </span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 text-[#DCDCDC] hover:text-white transition-colors"
          >
            <img src="/icons/linkdin.png" alt="LinkedIn" className="w-5 h-5" />
            <span 
              style={{
                fontFamily: 'lato',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '0%'
              }}
            >
              LinkedIn
            </span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 text-[#DCDCDC] hover:text-white transition-colors"
          >
            <img src="/icons/insta.png" alt="Instagram" className="w-5 h-5" />
            <span 
              style={{
                fontFamily: 'lato',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '0%'
              }}
            >
              Instagram
            </span>
          </a>
          

        </div>
      </div>
    </div>
    
    {/* Bottom Copyright */}
    <div className="mt-12">
      <p 
        className="text-[#DCDCDC] text-center"
         style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '21px',
            letterSpacing: '0%'
          }}
      >
        All copyrights by Smart Computing SMC Pvt Ltd® 2025 - Careers
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;