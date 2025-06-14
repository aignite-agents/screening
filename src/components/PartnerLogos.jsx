import React, { useState } from 'react'

const PartnerLogos = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  // Placeholder partner data
  const partners = [
    { id: 1, name: 'NCFE', logo: '/api/placeholder/150/80' },
    { id: 2, name: 'CMI', logo: '/api/placeholder/150/80' },
    { id: 3, name: 'Pearson', logo: '/api/placeholder/150/80' },
    { id: 4, name: 'Partner 4', logo: '/api/placeholder/150/80' },
  ]

  return (
    <section className="page-container page-boundaries py-16 bg-white">
      <div className="page-content">
        <h2 className="text-3xl md:text-4xl font-bold text-demont-navy mb-12 text-center font-poppins">
          Our Academic Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto group">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`relative bg-gray-50 rounded-lg p-8 flex items-center justify-center transition-all duration-300 ${index === 0 ? 'hover:bg-[#879DA5] hover:scale-110 hover:shadow-2xl hover:z-10' : 'hover:shadow-lg'}`}
            >
              {index === 2 ? (
                <div className="relative w-full h-full">
                  {/* Top rectangle - hover trigger */}
                  <div 
                    className="absolute top-0 left-0 w-full h-1/2 cursor-pointer z-20"
                    onMouseEnter={() => setShowOverlay(true)}
                    onMouseLeave={() => setShowOverlay(false)}
                  ></div>
                  {/* Bottom rectangle */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2"></div>
                  {/* Original content */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 relative z-10"
                  />
                  {/* Hidden overlay that appears on top rectangle hover */}
                  {showOverlay && (
                    <div className="absolute bg-red-500 border-4 border-blue-500 rounded-lg p-8 flex items-center justify-center shadow-2xl transition-opacity duration-300" 
                         style={{
                           top: '-32px',
                           left: '-32px', 
                           right: '-32px',
                           bottom: '-32px',
                           zIndex: 9999
                         }}>
                      <img
                        src={partners[0].logo}
                        alt={partners[0].name}
                        className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  )}
                </div>
              ) : (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 font-poppins">
            A leading global organization focused on enhancing management and leadership capabilities through accreditation, qualifications, and resources.
          </p>
          <div className="flex gap-4">
            <button 
              className="bg-demont-orange text-white px-8 py-3 rounded-md font-medium transition-all duration-200 inline-flex items-center gap-2 font-poppins"
              onMouseEnter={(e) => e.target.style.backgroundColor = '#879DA5'}
              onMouseLeave={(e) => e.target.style.backgroundColor = ''}
            >
              Get in touch!
              <span className="text-lg">→</span>
            </button>
            <button 
              className="bg-demont-orange text-white px-8 py-3 rounded-md font-medium transition-all duration-200 inline-flex items-center gap-2 font-poppins"
              onMouseEnter={(e) => e.target.style.backgroundColor = '#879DA5'}
              onMouseLeave={(e) => e.target.style.backgroundColor = ''}
            >
              Learn More
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerLogos