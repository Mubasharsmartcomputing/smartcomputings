"use client"


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
            <span className="text-2xl md:text-[36px] pt-2 lg:text-[55px]">Let's Collaborate.</span> <span className="text-2xl md:text-[36px] lg:text-[55px] font-semibold font-inter leading-[100%] tracking-[-1.16px] text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#189EFF] align-middle">We're All Ears!</span>
          </h1>
          <p 
            className="text-gray-600 max-w-3xl mx-auto"
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
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 flex items-center z-10 mr-2">
                  <select
                    id="country-code"
                    name="country-code"
                    className="h-full py-0 pl-3 pr-6 mr-2 border-transparent bg-transparent text-gray-700 text-sm rounded-l-md focus:outline-none"
                    style={{
                      height: '54px',
                    }}
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="contact-number"
                  id="contact-number"
                  autoComplete="tel"
                  required
                  className="block w-full pl-28 pr-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="123-456-7890"
                  style={{
                    height: '54px',
                    borderRadius: '7px',
                    border: '1px solid #B0B0B017',
                    backgroundColor: '#B0B0B017'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Name with Comment Field */}
          <div className="mt-6">
            <label 
              htmlFor="name-with-comment" 
              className="block text-sm font-medium text-gray-700 mb-2"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500
              }}
            >
              Comment
            </label>
            <div className="relative">
              <textarea
                id="name-with-comment"
                name="name-with-comment"
                rows={4}
                className="w-full px-4 py-3 text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=""
                style={{
                  borderRadius: '7px',
                  border: '1px solid #B0B0B017',
                  backgroundColor: '#B0B0B017',
                  resize: 'vertical',
                  minHeight: '120px',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#215EB3] to-[#02B2E8] hover:opacity-90 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0%',
                width: '120px',
                height: '40px'
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}