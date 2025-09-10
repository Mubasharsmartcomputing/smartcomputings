import Image from 'next/image';

const NewsletterSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#FAFAFA] rounded-lg p-8 shadow-sm">
          <div className="flex items-center mb-6 md:mb-0 md:w-1/3">
            <div>
              <h3 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#215EB3] to-[#189EFF] mb-2"
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
            <Image src="/contactimage.png" alt="Newsletter" width={200} height={200} className="w-48 h-48 object-contain" />
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
  );
};

export default NewsletterSection;