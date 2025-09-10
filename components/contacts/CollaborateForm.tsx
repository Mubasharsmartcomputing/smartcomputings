"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function CollaborateForm() {
  return (
    <div className=" bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-8">
          <h1 
            className="text-gray-800 mb-4"
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '-1.16px'
            }}
          >
            Let's Collaborate. <span className="text-2xl md:text-[36px] lg:text-[55px] font-semibold font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#189EFF] align-middle">We're All Ears!</span>
          </h1>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '15.4px',
              lineHeight: '24px',
              letterSpacing: '0%'
            }}
          >
            Open the door to collaboration by sharing your details, project goals, and timelines. Together, we'll turn your vision into reality and move towards success as one team.
          </p>
        </div>
      <div className="max-w-9xl container mx-auto w-full bg-[#FAFAFA] p-8 rounded-lg shadow-md">
       

        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label 
                htmlFor="full-name" 
                className="block text-sm font-medium text-gray-700"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500
                }}
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  style={{
                    height: '54px',
                    borderRadius: '7px',
                    border: '1px solid #B0B0B017',
                    backgroundColor: '#B0B0B017'
                  }}
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="email-address" 
                className="block text-sm font-medium text-gray-700"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500
                }}
              >
                Your Email
              </label>
              <div className="mt-1">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  style={{
                    height: '54px',
                    borderRadius: '7px',
                    border: '1px solid #B0B0B017',
                    backgroundColor: '#B0B0B017'
                  }}
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="company-organization" 
                className="block text-sm font-medium text-gray-700"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500
                }}
              >
                Company/Organization
              </label>
              <div className="mt-1">
                <input
                  id="company-organization"
                  name="company-organization"
                  type="text"
                  autoComplete="organization"
                  className="appearance-none block w-full px-3 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  style={{
                    height: '54px',
                    borderRadius: '7px',
                    border: '1px solid #B0B0B017',
                    backgroundColor: '#B0B0B017'
                  }}
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="contact-number" 
                className="block text-sm font-medium text-gray-700"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500
                }}
              >
                Contact Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country-code" className="sr-only">
                    Country Code
                  </label>
                  <select
                    id="country-code"
                    name="country-code"
                    className="focus:ring-blue-500 focus:border-blue-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                  >
                    <option>+92</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="contact-number"
                  id="contact-number"
                  autoComplete="tel"
                  className="block w-full pl-20 pr-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="XXX-XXX-XXXX"
                  style={{
                    height: '54px',
                    borderRadius: '7px',
                    border: '1px solid #B0B0B017',
                    backgroundColor: '#B0B0B017'
                  }}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#215EB3] to-[#02B2E8] hover:opacity-90 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '44px',
                letterSpacing: '0%'
              }}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}