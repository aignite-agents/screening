import React, { useState } from 'react'
import Header from './components/Header'
import ProgramCard from './components/ProgramCard'
import PartnerLogos from './components/PartnerLogos'
import Footer from './components/Footer'

const programs = [
  {
    id: 1,
    title: 'Higher National Diploma International in Computing (Cyber Security)',
    provider: 'Pearson',
    image: '/api/placeholder/400/250',
    duration: '24 Months',
    level: 'Level 5',
    credits: '240',
    modules: '15',
    description: 'Comprehensive program focused on cybersecurity fundamentals and advanced techniques.',
  },
  {
    id: 2,
    title: 'Higher National Diploma International in Computing',
    provider: 'Pearson',
    image: '/api/placeholder/400/250',
    duration: '24 Months',
    level: 'Level 5',
    credits: '240',
    modules: '15',
    description: 'Broad computing program covering software development, networking, and systems.',
  },
  {
    id: 3,
    title: 'BTEC International Level 3 Foundation-Diploma in Information Technology',
    provider: 'Pearson',
    image: '/api/placeholder/400/250',
    duration: '12 Months',
    level: 'Level 3',
    credits: '67',
    modules: '67',
    description: 'Foundation program in IT covering essential concepts and practical skills.',
  },
  {
    id: 4,
    title: 'BTEC International Level 3 Extended Diploma in Information Technology',
    provider: 'Pearson',
    image: '/api/placeholder/400/250',
    duration: '18-18 Months',
    level: 'Level 3',
    credits: '180',
    modules: '15',
    description: 'Extended diploma providing comprehensive IT education and practical experience.',
  },
]

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupClosing, setIsPopupClosing] = useState(false);

  const handleClosePopup = () => {
    setIsPopupClosing(true);
    setTimeout(() => {
      setIsPopupOpen(false);
      setIsPopupClosing(false);
    }, 300);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: scale(0.8) translateY(-20px); 
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0); 
          }
        }
        @keyframes slideOut {
          from { 
            opacity: 1;
            transform: scale(1) translateY(0); 
          }
          to { 
            opacity: 0;
            transform: scale(0.8) translateY(-20px); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-fadeOut {
          animation: fadeOut 0.3s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        .animate-slideOut {
          animation: slideOut 0.3s ease-out;
        }
        .phone-container:hover .phone-icon {
          transform: rotate(-5deg);
          transform-origin: center;
          transition: transform 0.3s ease-in-out;
        }
        .phone-circle {
          transform-origin: center;
          transition: transform 0.3s ease-in-out;
        }
        .phone-icon {
          transform-origin: center;
          transition: transform 0.3s ease-in-out;
        }
        .search-container:hover .magnifying-glass-only {
          transform: scale(1.1);
          transform-origin: center;
          transition: transform 0.3s ease-in-out;
        }
        .magnifying-glass-only {
          transform-origin: center;
          transition: transform 0.3s ease-in-out;
        }
        .chat-container:hover .chat-bubble {
          transform: rotate(-5deg);
          transform-origin: center;
          transition: transform 0.3s ease-in-out;
        }
        .chat-container:hover .chat-line-1 {
          transform: translateX(4px);
          transition: transform 0.3s ease-in-out;
        }
        .chat-container:hover .chat-line-2 {
          transform: translateX(-4px);
          transition: transform 0.3s ease-in-out;
        }
        .chat-bubble {
          transform-origin: center;
          transition: transform 0.3s ease-in-out;
        }
        .chat-line-1, .chat-line-2 {
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
      <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <section className="page-container page-boundaries relative w-full h-[600px] bg-white overflow-hidden" style={{marginTop: 0, paddingTop: 0}}>
        <div className="relative h-full page-content">
        <div className="absolute w-[297px] h-[108px] left-0 top-[140px] bg-[#F6F6F6] rounded-r-[54px] rounded-bl-[0px]"></div>
        
        <a href="#" className="absolute left-[43px] top-[84px] w-[220px] h-[24px] flex items-center gap-2 text-black transition-colors hover:text-[#ECA22D]">
          <span>←</span>
          <span className="font-sans text-base font-medium leading-6 whitespace-nowrap">Back to all Programs</span>
        </a>
        
        <div className="absolute left-[42px] top-[166px] w-[189px] h-[57px]">
          <img 
            src="/pearson.png" 
            alt="Pearson" 
            className="object-contain w-full h-full"
          />
        </div>
        
        <h1 className="absolute left-[42px] top-[283px] w-[743px] h-[60px] font-sans font-light text-[40px] leading-[60px] text-black">
          Higher National diploma international
        </h1>
        <p className="absolute left-[42px] top-[347px] w-[551px] h-[45px] font-sans font-light text-[30px] leading-[45px] text-black">
          In Computing (Software Engineering)
        </p>
        
        <div className="absolute left-[866px] top-[0px] w-[574px] h-[536px] z-10">
          <img 
            src="/software-dev-hero.png" 
            alt="Software Engineering" 
            className="object-cover w-full h-full rounded-tl-[30px]"
          />
        </div>
        
        <div className="absolute left-0 top-[438px] w-[1178px] h-[98px] bg-[#0C2D46]">
          <div className="absolute left-[42px] top-[25px] w-[700px] h-[46px] flex justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-[44px] h-[44px]">
                <img src="/src/assets/svg/clock-icon.svg" alt="Duration" className="w-10 h-10" />
              </div>
              <div>
                <p className="font-['Poppins'] font-light text-[14px] leading-[21px] text-white">Duration</p>
                <p className="font-['Poppins'] font-medium text-[14px] leading-[21px] text-white">24 Months</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-[44px] h-[44px]">
                <img src="/src/assets/svg/chart-icon.svg" alt="Course Level" className="w-12 h-8" />
              </div>
              <div>
                <p className="font-['Poppins'] font-light text-[14px] leading-[21px] text-white">Course Level</p>
                <p className="font-['Poppins'] font-medium text-[14px] leading-[21px] text-white">Level 5</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-[44px] h-[44px]">
                <img src="/src/assets/svg/star-icon.svg" alt="Credits" className="w-11 h-11" />
              </div>
              <div>
                <p className="font-['Poppins'] font-light text-[14px] leading-[21px] text-white">Credits</p>
                <p className="font-['Poppins'] font-medium text-[14px] leading-[21px] text-white">240</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-[44px] h-[44px]">
                <img src="/src/assets/svg/module-icon.svg" alt="Modules" className="w-11 h-11" />
              </div>
              <div>
                <p className="font-['Poppins'] font-light text-[14px] leading-[21px] text-white">Modules</p>
                <p className="font-['Poppins'] font-medium text-[14px] leading-[21px] text-white">15</p>
              </div>
            </div>
          </div>
        </div>
        
        </div>
      </section>

      <section className="pt-0 pb-2 bg-white page-container page-boundaries">
        <div className="page-content relative overflow-visible">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-[100px] mb-12 pl-8">
                <div className="flex items-start gap-4 group">
                  <div className="flex flex-col items-start transition-transform duration-300 ease-in group-hover:translate-x-2">
                    <button className="flex items-center gap-2">
                      <span className="text-[#0C2D46] text-[16px] font-medium leading-[24px] font-['Poppins']">
                        Get Brochure
                      </span>
                    </button>
                    <div className="w-[105px] h-[5px] bg-[#0C2D46] rounded-full mt-1 transition-colors duration-300 group-hover:bg-[#ECA22D]"></div>
                  </div>
                  <img src="/src/assets/svg/document-icon.svg" alt="Get Brochure" className="w-11 h-11" />
                </div>

                <div className="relative flex items-center group">
                  <button className="flex flex-col items-center transition-transform duration-300 ease-in group-hover:translate-x-2">
                    <span className="text-[#0C2D46] text-[16px] font-medium leading-[24px] font-['Poppins'] mb-1">
                      Apply Now
                    </span>
                    <div className="w-[80px] h-[5px] bg-[#0C2D46] rounded-full transition-colors duration-300 group-hover:bg-[#ECA22D]"></div>
                  </button>
                </div>
              </div>

              <div className="pl-8">
                <h2 className="mb-6 font-poppins" style={{
                  width: '439px',
                  height: '60px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '40px',
                  lineHeight: '60px',
                  color: '#000000'
                }}>
                  <span>Programme </span>
                  <span className="text-[#ECA22D]">Overview</span>
                </h2>
                
                <div className="prose max-w-none font-poppins" style={{
                  width: '814px',
                  height: '288px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '300',
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0.01em',
                  color: '#000000'
                }}>
                  <p className="mb-6">
                  The Higher National Diploma International (HND) in Computing with a specialization in Software Engineering is a comprehensive program designed to equip students with the knowledge, skills, and practical experience needed to excel in the dynamic field of software development. This program focuses on preparing students for careers in designing, building, and maintaining software applications that meet modern technological and business demands.
                  </p>
                  <p className="mb-8">
                  The Higher National Diploma International in Computing with a specialization in Software Engineering offers a comprehensive education in the ever-evolving field of software development. Through a blend of theoretical knowledge and hands-on experience, students are prepared to contribute effectively to the creation of innovative and practical software solutions, meeting the demands of modern technology-driven industries. This program serves as a gateway for those seeking to build a successful career in software engineering
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-center lg:items-end w-full lg:w-1/3 lg:-mr-4">
              <div className="absolute z-20 hidden lg:block" style={{
                top: '100px',
                right: '0',
                width: '299px',
                height: '537px'
              }}>
                <img src="/src/assets/svg/form-background.svg" alt="Form Background" className="w-full h-full" />
              </div>
              
              <div className="relative z-30 font-poppins w-full max-w-[262px] px-4 lg:px-0">
                <h3 className="text-[36px] font-light leading-[54px] text-left mb-1 font-poppins" style={{marginLeft: '20px'}}>
                  <span className="font-medium text-demont-orange">Talk</span> to Our
                </h3>
                <p className="text-[24px] font-light text-left mb-6 font-poppins" style={{marginLeft: '20px'}}>Admission Team</p>
                <div className="p-6">
                <form className="relative z-10 space-y-8">
                  <div>
                    <label className="block mb-1 text-sm font-semibold font-poppins">Name</label>
                    <input type="text" placeholder="Enter your First & Last Names" className="w-full px-0 py-2 text-sm bg-transparent border-0 border-b border-gray-400 rounded-none font-poppins focus:outline-none focus:border-demont-orange" />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold font-poppins">Email</label>
                    <input type="email" placeholder="Enter your Email" className="w-full px-0 py-2 text-sm bg-transparent border-0 border-b border-gray-400 rounded-none font-poppins focus:outline-none focus:border-demont-orange" />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold font-poppins">Interested Course</label>
                    <select className="w-full px-0 py-2 text-sm text-gray-400 bg-transparent border-0 border-b border-gray-400 rounded-none font-poppins focus:outline-none focus:border-demont-orange">
                      <option value="" className="text-gray-400">Select a Course</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-semibold font-poppins">Phone</label>
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-400 focus-within:border-demont-orange">
                      <button disabled className="flex items-center gap-1">
                        <img src="/src/assets/svg/uae-flag.svg" alt="UAE Flag" className="w-6 h-3" />
                        <img src="/src/assets/svg/chevron-down.svg" alt="Dropdown" className="w-2 h-1" />
                      </button>
                      <input 
                        type="tel" 
                        placeholder="+971" 
                        className="flex-1 px-0 py-0 text-sm bg-transparent border-0 rounded-none font-poppins focus:outline-none" 
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/\D/g, '');
                        }}
                      />
                    </div>
                  </div>
                  <div className="pt-4 lg:-mr-[50px] lg:-ml-[18px]">
                  <button type="button" onClick={() => setIsPopupOpen(true)} className="flex items-center gap-2 text-sm font-semibold text-white bg-demont-orange hover:bg-[#879DA5] font-poppins transition-all duration-300 ease-in-out group" style={{
                    borderTopLeftRadius: '15px',
                    borderBottomLeftRadius: '15px',
                    borderTopRightRadius: '0px',
                    borderBottomRightRadius: '0px',
                    paddingLeft: '30px',
                    justifyContent: 'flex-start',
                    width: '254px',
                    height: '38px'
                  }}>
                    Schedule a Call 
                    <img src="/src/assets/svg/chevron-right.svg" alt="Right Arrow" className="w-1.5 h-2.5 transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:brightness-0 group-hover:invert" />
                  </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 page-container page-boundaries bg-demont-bg-gray" style={{marginTop: '-40px'}}>
        <div className="page-content">
          <h2 className="mb-12 text-center font-poppins" style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '40px',
            lineHeight: '60px',
            color: '#000000'
          }}>
            Top <span className="text-demont-orange">Skills</span> you will Learn
          </h2>
          
          <div className="flex flex-col max-w-6xl gap-8 md:gap-12 mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-24 gap-y-8 lg:gap-y-12 items-start">
              <div className="flex flex-col items-start w-full">
                <div className="relative flex items-center gap-6">
                  <div style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <img 
                      src="/programming-proficiency.png" 
                      alt="Programming Proficiency" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#000000',
                    width: '139px'
                  }}>
                    Programming Proficiency
                  </div>
                  <div style={{
                    position: 'absolute',
                    left: '154px',
                    top: '62px',
                    width: '30px',
                    height: '5px',
                    backgroundColor: '#ECA22D',
                    borderRadius: '2.5px'
                  }}></div>
                </div>
              </div>

              <div className="flex flex-col items-start w-full max-w-sm h-auto">
                <div className="flex items-center gap-6">
                  <div style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <img 
                      src="/software-design-principles.png" 
                      alt="Software Design Principles" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#000000',
                    width: '169px'
                  }}>
                    Software Design Principles
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start w-full">
                <div className="flex items-center gap-6">
                  <div style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <img 
                      src="/object-oriented-programming.png" 
                      alt="Object-Oriented Programming" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#000000',
                    width: '162px'
                  }}>
                    Object-Oriented Programming
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <div className="flex items-center gap-6">
                  <div style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <img 
                      src="/agile-development.png" 
                      alt="Agile Development" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#000000',
                    width: '162px'
                  }}>
                    Agile Development
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start" style={{width: '300px'}}>
                <div className="flex items-center gap-6">
                  <div style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <img 
                      src="/software-documentation.png" 
                      alt="Software Documentation" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#000000',
                    width: '169px'
                  }}>
                    Software Documentation
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start" style={{width: '300px'}}>
                <div className="flex items-center gap-6">
                  <div style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <img 
                      src="/critical-thinking.png" 
                      alt="Critical Thinking" 
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#000000',
                    width: '131px'
                  }}>
                    Critical Thinking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white page-container page-boundaries" style={{minHeight: '400px'}}>
        <div className="relative h-full page-content" style={{paddingTop: '60px', paddingBottom: '60px', overflow: 'visible'}}>
          <div className="absolute" style={{
            top: '0',
            bottom: '0',
            right: '0px',
            width: '63%',
            height: '100%',
            zIndex: 20
          }}>
            <img 
              src="/chair-spotlight.png" 
              alt="Chair Spotlight" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative z-10 h-full">
            <div className="flex h-full gap-12">
              <div className="relative flex-1 pl-8">
              <h2 className="relative z-10 font-poppins" style={{
                width: '467px',
                height: '60px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '40px',
                lineHeight: '60px',
                color: '#000000',
                marginBottom: '20px'
              }}>
                <span className="text-demont-orange">Job</span> Opportunities
              </h2>
          
          <div className="relative z-10 prose max-w-none font-poppins" style={{
            width: '814px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.01em',
            color: '#000000',
            marginTop: '20px'
          }}>
            <p>
            Graduates of the Higher National Diploma International (HND) in Computing (Software Engineering) are well-equipped to pursue a wide range of job opportunities in the dynamic field of software development. The skills gained through this program open doors to various roles across industries that rely on technology and software solutions.
            </p>
          </div>
          
          <h3 style={{
            width: '640px',
            height: '36px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '24px',
            lineHeight: '36px',
            color: '#000000',
            marginTop: '40px'
          }}>
            Here are some of the <span style={{fontWeight: '500'}}>job opportunities for graduates:</span>
          </h3>
          
          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginTop: '20px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#000000'
          }}>
            <li style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
              <div style={{
                width: '12px',
                height: '5px',
                backgroundColor: '#879DA5',
                borderRadius: '2.5px',
                marginRight: '15px'
              }}></div>
              Software Developer
            </li>
            <li style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
              <div style={{
                width: '12px',
                height: '5px',
                backgroundColor: '#879DA5',
                borderRadius: '2.5px',
                marginRight: '15px'
              }}></div>
              Web Developer
            </li>
            <li style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
              <div style={{
                width: '12px',
                height: '5px',
                backgroundColor: '#879DA5',
                borderRadius: '2.5px',
                marginRight: '15px'
              }}></div>
              Quality Assurance Engineer
            </li>
            <li style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
              <div style={{
                width: '12px',
                height: '5px',
                backgroundColor: '#879DA5',
                borderRadius: '2.5px',
                marginRight: '15px'
              }}></div>
              Database Developer
            </li>
            <li style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
              <div style={{
                width: '12px',
                height: '5px',
                backgroundColor: '#879DA5',
                borderRadius: '2.5px',
                marginRight: '15px'
              }}></div>
              Software Tester
            </li>
            <li style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
              <div style={{
                width: '12px',
                height: '5px',
                backgroundColor: '#879DA5',
                borderRadius: '2.5px',
                marginRight: '15px'
              }}></div>
              Technical Support Engineer
            </li>
          </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 page-container page-boundaries" style={{backgroundColor: '#0C2D46'}}>
        <div className="page-content">
          <div className="pl-8">
          <h2 className="font-poppins" style={{
            width: '600px',
            height: '60px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '40px',
            lineHeight: '60px',
            color: '#FFFFFF',
            marginBottom: '20px'
          }}>
            <span className="text-demont-orange">Who</span> Is This Programme for?
          </h2>
          
          <div className="prose max-w-none font-poppins" style={{
            width: '814px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.01em',
            color: '#FFFFFF',
            marginTop: '20px'
          }}>
            <p>
            The Higher National Diploma International (HND) in Computing with a specialization in Software Engineering is designed for a diverse range of individuals who are interested in pursuing a career in the field of software development. This program caters to various backgrounds and aspirations, making it suitable for High School Graduates, Tech Enthusiasts, and IT Professionals etc.
            </p>
          </div>
          </div>
        </div>
      </section>

      <section className="relative pt-20 pb-10 bg-white page-container page-boundaries">
        <div className="page-content">
          <div className="pl-8">
          <h2 className="font-poppins" style={{
            width: '600px',
            height: '60px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '40px',
            lineHeight: '60px',
            color: '#000000',
            marginBottom: '20px'
          }}>
            Minimum <span className="text-demont-orange">Eligibility</span>
          </h2>
          
          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginTop: '20px',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#000000'
          }}>
            <li style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
              <div style={{
                width: '12px',
                height: '5px',
                backgroundColor: '#879DA5',
                borderRadius: '2.5px',
                marginRight: '15px'
              }}></div>
              Students must be&nbsp;<span style={{fontWeight: '500'}}>High School Graduates</span>
            </li>
          </ul>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginTop: '40px'
          }}>
            <h3 style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: '40px',
              lineHeight: '60px',
              color: '#000000',
              margin: '0'
            }}>
              Awarding Body:
            </h3>
            <img 
              src="/pearson.png" 
              alt="Pearson" 
              style={{
                width: '150px',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
          
          <div className="prose max-w-none font-poppins" style={{
            width: '97%',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.01em',
            color: '#000000',
            marginTop: '30px'
          }}>
            <p>
            Pearson Education is a British-owned educational publishing and appraisal service for educational institutions and corporations, as for students directly. It integrates world-class educational content and evaluation, driven by services and technology, to allow more efficient teaching and customized learning. Their mission is to have a direct partnership with millions of lifelong learners and to link education to the way people aspire to live and work each day. They assume that wherever learning flourishes, people do as well.
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '60px',
            marginTop: '60px'
          }}>
            <div style={{flex: 1}}>
              <h3 style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '40px',
                lineHeight: '72px',
                color: '#000000',
                margin: '0 0 20px 0'
              }}>
                Core Modules
              </h3>
              
              <div style={{
                border: '1px solid #E8E8E8',
                borderRadius: '20px',
                padding: '20px 30px',
                width: '100%'
              }}>
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '500',
                  fontSize: '20px',
                  color: '#000000',
                  marginTop: '12px',
                  marginBottom: '24px'
                }}>
                  <span style={{flex: 1}}>Module Name</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>Credit</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Programming</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Networking</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Professional Practice</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Database Design & Development</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Security</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Planning a Computing Project (Pearson-set)</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Software Development Lifecycle</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Website Design & Development</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Computing Research Project (Pearson-set)</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Business Process Support</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Discrete Maths</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Data Structures & Algorithms</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Applied Programming and Design Principles</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Operating Systems</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: '300',
                  fontSize: '16px',
                  color: '#000000',
                  borderBottom: '1px solid #E8E8E8',
                  marginBottom: '18px'
                }}>
                  <span style={{flex: 1}}>Cloud Computing</span>
                  <span style={{marginLeft: '10px', textAlign: 'center', minWidth: '60px'}}>15</span>
                </div>
              </div>
            </div>
            
            <div style={{flex: 1, marginLeft: '60px'}}>
              <h3 style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '40px',
                lineHeight: '72px',
                color: '#000000',
                margin: '0 0 20px 50px'
              }}>
                Key Learnings
              </h3>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginTop: '20px',
                marginLeft: '30px',
                marginRight: '75px',
                fontFamily: 'Poppins',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#000000'
              }}>
                <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '20px'}}>
                  <div style={{
                    width: '12px',
                    height: '5px',
                    backgroundColor: '#ECA22D',
                    borderRadius: '2.5px',
                    marginRight: '15px',
                    marginTop: '9px',
                    flexShrink: 0
                  }}></div>
                  Gain the essential knowledge, understanding, and skills required for a successful career in the computing industry, equipping you with a solid foundation to excel in various roles.
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '20px'}}>
                  <div style={{
                    width: '12px',
                    height: '5px',
                    backgroundColor: '#ECA22D',
                    borderRadius: '2.5px',
                    marginRight: '15px',
                    marginTop: '9px',
                    flexShrink: 0
                  }}></div>
                  Develop a versatile skill set through the effective integration of knowledge and skills gained across different program components, enabling you to tackle multifaceted challenges in the computing industry.
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '20px'}}>
                  <div style={{
                    width: '12px',
                    height: '5px',
                    backgroundColor: '#ECA22D',
                    borderRadius: '2.5px',
                    marginRight: '15px',
                    marginTop: '9px',
                    flexShrink: 0
                  }}></div>
                  Gain flexibility, knowledge, skills, and motivation that serve as a solid foundation for ongoing studies and career advancement in the dynamic realm of computing
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white page-container page-boundaries">
        <div className="page-content">
          <div className="pl-8">
          <h2 className="font-poppins" style={{
            width: '600px',
            height: '60px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '40px',
            lineHeight: '60px',
            color: '#000000',
            marginBottom: '40px'
          }}>
            Related <span className="text-demont-orange">Courses</span>
          </h2>
          
          <div style={{
            display: 'flex',
            gap: '30px',
            justifyContent: 'space-between',
            marginTop: '40px',
            marginRight: '70px'
          }}>
            <div style={{
              width: '308px',
              height: '363px',
              backgroundColor: '#F5F5F5',
              borderRadius: '25px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                height: '50%',
                backgroundColor: '#F5F5F5',
                position: 'relative'
              }}>
                <img 
                  src="/pearson.png" 
                  alt="Pearson" 
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '150px',
                    height: '45px',
                    objectFit: 'contain'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  width: '258px',
                  height: '81px',
                  left: '16px',
                  top: '76px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '300',
                  fontSize: '18px',
                  lineHeight: '27px',
                  color: '#000000'
                }}>
                  Higher National Diploma International in Computing (Cyber Security)
                </div>
              </div>
              <div style={{
                height: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/cyber-security.png" 
                  alt="Cyber Security Course" 
                  style={{
                    width: '100%',
                    height: '110%',
                    objectFit: 'cover',
                    opacity: '0.85'
                  }}
                />
              </div>
              
              <div style={{
                position: 'absolute',
                width: '308px',
                height: '57px',
                left: '0px',
                top: '172px',
                background: 'linear-gradient(180deg, #F5F5F5 0%, rgba(247, 247, 247, 0.81) 38.68%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '0px'
              }}>
              </div>
              
              <button style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '67px',
                height: '28px',
                backgroundColor: '#ECA22D',
                borderRadius: '14px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '8px'
              }}>
                <svg width="33" height="15" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7.50003C0 7.68364 0.0694656 7.85972 0.193115 7.98955C0.316769 8.11938 0.484478 8.19232 0.659348 8.19232L30.7298 8.19231L25.2849 13.8136C25.2231 13.8774 25.1739 13.9533 25.1401 14.037C25.1063 14.1208 25.0885 14.2107 25.0878 14.3016C25.087 14.3925 25.1034 14.4827 25.1358 14.5671C25.1683 14.6514 25.2163 14.7281 25.277 14.793C25.3377 14.8578 25.41 14.9095 25.4898 14.945C25.5695 14.9805 25.6551 14.9992 25.7417 15C25.9167 15.0015 26.085 14.9301 26.2097 14.8013L32.8019 7.99478C32.8049 7.99178 32.8078 7.9887 32.8107 7.98555C32.8723 7.9198 32.9208 7.84178 32.9533 7.75607C32.9857 7.67037 33.0016 7.57872 32.9999 7.48649C32.9982 7.39427 32.9789 7.30333 32.9432 7.21903C32.9076 7.13473 32.8562 7.05876 32.7922 6.99559L26.2097 0.198765C26.148 0.135006 26.0749 0.0846395 25.9946 0.050539C25.9144 0.0164385 25.8285 -0.0007267 25.7419 2.38419e-05C25.6553 0.00077343 25.5697 0.0194216 25.49 0.0549078C25.4102 0.090394 25.3379 0.142022 25.2772 0.206841C25.2165 0.271662 25.1685 0.348407 25.136 0.432693C25.1036 0.516978 25.0872 0.607155 25.0879 0.698074C25.0886 0.788994 25.1064 0.878875 25.1402 0.962586C25.174 1.0463 25.2232 1.1222 25.2849 1.18596L30.7298 6.80775L0.659348 6.80775C0.484478 6.80775 0.316769 6.88069 0.193115 7.01052C0.0694656 7.14034 0 7.31643 0 7.50003Z" fill="white"/>
                </svg>
              </button>
            </div>
            
            <div style={{
              width: '308px',
              height: '363px',
              backgroundColor: '#F5F5F5',
              borderRadius: '25px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                height: '50%',
                backgroundColor: '#F5F5F5',
                position: 'relative'
              }}>
                <img 
                  src="/pearson.png" 
                  alt="Pearson" 
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '150px',
                    height: '45px',
                    objectFit: 'contain'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  width: '258px',
                  height: '81px',
                  left: '16px',
                  top: '76px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '300',
                  fontSize: '18px',
                  lineHeight: '27px',
                  color: '#000000'
                }}>
                  Higher National Diploma International in Computing
                </div>
              </div>
              <div style={{
                height: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/computing.png" 
                  alt="Computing Course" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div style={{
                position: 'absolute',
                width: '308px',
                height: '60px',
                left: '0px',
                top: '172px',
                background: 'linear-gradient(180deg, #F5F5F5 0%, rgba(247, 247, 247, 0.95) 38.68%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '0px'
              }}>
              </div>
              
              <button style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '67px',
                height: '28px',
                backgroundColor: '#ECA22D',
                borderRadius: '14px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '8px'
              }}>
                <svg width="33" height="15" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7.50003C0 7.68364 0.0694656 7.85972 0.193115 7.98955C0.316769 8.11938 0.484478 8.19232 0.659348 8.19232L30.7298 8.19231L25.2849 13.8136C25.2231 13.8774 25.1739 13.9533 25.1401 14.037C25.1063 14.1208 25.0885 14.2107 25.0878 14.3016C25.087 14.3925 25.1034 14.4827 25.1358 14.5671C25.1683 14.6514 25.2163 14.7281 25.277 14.793C25.3377 14.8578 25.41 14.9095 25.4898 14.945C25.5695 14.9805 25.6551 14.9992 25.7417 15C25.9167 15.0015 26.085 14.9301 26.2097 14.8013L32.8019 7.99478C32.8049 7.99178 32.8078 7.9887 32.8107 7.98555C32.8723 7.9198 32.9208 7.84178 32.9533 7.75607C32.9857 7.67037 33.0016 7.57872 32.9999 7.48649C32.9982 7.39427 32.9789 7.30333 32.9432 7.21903C32.9076 7.13473 32.8562 7.05876 32.7922 6.99559L26.2097 0.198765C26.148 0.135006 26.0749 0.0846395 25.9946 0.050539C25.9144 0.0164385 25.8285 -0.0007267 25.7419 2.38419e-05C25.6553 0.00077343 25.5697 0.0194216 25.49 0.0549078C25.4102 0.090394 25.3379 0.142022 25.2772 0.206841C25.2165 0.271662 25.1685 0.348407 25.136 0.432693C25.1036 0.516978 25.0872 0.607155 25.0879 0.698074C25.0886 0.788994 25.1064 0.878875 25.1402 0.962586C25.174 1.0463 25.2232 1.1222 25.2849 1.18596L30.7298 6.80775L0.659348 6.80775C0.484478 6.80775 0.316769 6.88069 0.193115 7.01052C0.0694656 7.14034 0 7.31643 0 7.50003Z" fill="white"/>
                </svg>
              </button>
            </div>
            
            <div style={{
              width: '308px',
              height: '363px',
              backgroundColor: '#F5F5F5',
              borderRadius: '25px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                height: '50%',
                backgroundColor: '#F5F5F5',
                position: 'relative'
              }}>
                <img 
                  src="/pearson.png" 
                  alt="Pearson" 
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '150px',
                    height: '45px',
                    objectFit: 'contain'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  width: '258px',
                  height: '81px',
                  left: '16px',
                  top: '76px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '300',
                  fontSize: '18px',
                  lineHeight: '27px',
                  color: '#000000'
                }}>
                  BTEC International Level 3 Foundation-Diploma in Information Technology
                </div>
              </div>
              <div style={{
                height: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/foundation.png" 
                  alt="Foundation Course" 
                  style={{
                    width: '100%',
                    height: '110%',
                    objectFit: 'cover',
                    opacity: '0.85'
                  }}
                />
              </div>
              
              <div style={{
                position: 'absolute',
                width: '308px',
                height: '60px',
                left: '0px',
                top: '172px',
                background: 'linear-gradient(180deg, #F5F5F5 0%, rgba(247, 247, 247, 0.95) 38.68%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '0px'
              }}>
              </div>
              
              <button style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '67px',
                height: '28px',
                backgroundColor: '#ECA22D',
                borderRadius: '14px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '8px'
              }}>
                <svg width="33" height="15" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7.50003C0 7.68364 0.0694656 7.85972 0.193115 7.98955C0.316769 8.11938 0.484478 8.19232 0.659348 8.19232L30.7298 8.19231L25.2849 13.8136C25.2231 13.8774 25.1739 13.9533 25.1401 14.037C25.1063 14.1208 25.0885 14.2107 25.0878 14.3016C25.087 14.3925 25.1034 14.4827 25.1358 14.5671C25.1683 14.6514 25.2163 14.7281 25.277 14.793C25.3377 14.8578 25.41 14.9095 25.4898 14.945C25.5695 14.9805 25.6551 14.9992 25.7417 15C25.9167 15.0015 26.085 14.9301 26.2097 14.8013L32.8019 7.99478C32.8049 7.99178 32.8078 7.9887 32.8107 7.98555C32.8723 7.9198 32.9208 7.84178 32.9533 7.75607C32.9857 7.67037 33.0016 7.57872 32.9999 7.48649C32.9982 7.39427 32.9789 7.30333 32.9432 7.21903C32.9076 7.13473 32.8562 7.05876 32.7922 6.99559L26.2097 0.198765C26.148 0.135006 26.0749 0.0846395 25.9946 0.050539C25.9144 0.0164385 25.8285 -0.0007267 25.7419 2.38419e-05C25.6553 0.00077343 25.5697 0.0194216 25.49 0.0549078C25.4102 0.090394 25.3379 0.142022 25.2772 0.206841C25.2165 0.271662 25.1685 0.348407 25.136 0.432693C25.1036 0.516978 25.0872 0.607155 25.0879 0.698074C25.0886 0.788994 25.1064 0.878875 25.1402 0.962586C25.174 1.0463 25.2232 1.1222 25.2849 1.18596L30.7298 6.80775L0.659348 6.80775C0.484478 6.80775 0.316769 6.88069 0.193115 7.01052C0.0694656 7.14034 0 7.31643 0 7.50003Z" fill="white"/>
                </svg>
              </button>
            </div>
            
            <div style={{
              width: '308px',
              height: '363px',
              backgroundColor: '#F5F5F5',
              borderRadius: '25px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                height: '50%',
                backgroundColor: '#F5F5F5',
                position: 'relative'
              }}>
                <img 
                  src="/pearson.png" 
                  alt="Pearson" 
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '150px',
                    height: '45px',
                    objectFit: 'contain'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  width: '258px',
                  height: '81px',
                  left: '16px',
                  top: '76px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '300',
                  fontSize: '18px',
                  lineHeight: '27px',
                  color: '#000000'
                }}>
                  BTEC International Level 3 Extended Diploma in Information Technology
                </div>
              </div>
              <div style={{
                height: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/extended.png" 
                  alt="Extended Course" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div style={{
                position: 'absolute',
                width: '308px',
                height: '57px',
                left: '0px',
                top: '172px',
                background: 'linear-gradient(180deg, #F5F5F5 0%, rgba(247, 247, 247, 0.81) 38.68%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '0px'
              }}>
              </div>
              
              <button style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '67px',
                height: '28px',
                backgroundColor: '#ECA22D',
                borderRadius: '14px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '8px'
              }}>
                <svg width="33" height="15" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 7.50003C0 7.68364 0.0694656 7.85972 0.193115 7.98955C0.316769 8.11938 0.484478 8.19232 0.659348 8.19232L30.7298 8.19231L25.2849 13.8136C25.2231 13.8774 25.1739 13.9533 25.1401 14.037C25.1063 14.1208 25.0885 14.2107 25.0878 14.3016C25.087 14.3925 25.1034 14.4827 25.1358 14.5671C25.1683 14.6514 25.2163 14.7281 25.277 14.793C25.3377 14.8578 25.41 14.9095 25.4898 14.945C25.5695 14.9805 25.6551 14.9992 25.7417 15C25.9167 15.0015 26.085 14.9301 26.2097 14.8013L32.8019 7.99478C32.8049 7.99178 32.8078 7.9887 32.8107 7.98555C32.8723 7.9198 32.9208 7.84178 32.9533 7.75607C32.9857 7.67037 33.0016 7.57872 32.9999 7.48649C32.9982 7.39427 32.9789 7.30333 32.9432 7.21903C32.9076 7.13473 32.8562 7.05876 32.7922 6.99559L26.2097 0.198765C26.148 0.135006 26.0749 0.0846395 25.9946 0.050539C25.9144 0.0164385 25.8285 -0.0007267 25.7419 2.38419e-05C25.6553 0.00077343 25.5697 0.0194216 25.49 0.0549078C25.4102 0.090394 25.3379 0.142022 25.2772 0.206841C25.2165 0.271662 25.1685 0.348407 25.136 0.432693C25.1036 0.516978 25.0872 0.607155 25.0879 0.698074C25.0886 0.788994 25.1064 0.878875 25.1402 0.962586C25.174 1.0463 25.2232 1.1222 25.2849 1.18596L30.7298 6.80775L0.659348 6.80775C0.484478 6.80775 0.316769 6.88069 0.193115 7.01052C0.0694656 7.14034 0 7.31643 0 7.50003Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
          
          <button className="group" style={{
            marginTop: '60px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '24px',
            lineHeight: '36px',
            color: '#000000',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0'
          }}>
            <span>Explore <span style={{fontWeight: 'bold'}}>All Programs</span></span>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '10px'
            }}>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-125" style={{
                marginLeft: '5px'
              }}>
                <circle cx="10.5" cy="10.5" r="10.5" transform="matrix(-1 0 0 1 21 0)" fill="#879DA5"/>
              </svg>
              <svg width="23" height="10" viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                position: 'absolute',
                top: '50%',
                left: '25%',
                transform: 'translate(-50%, -50%)'
              }}>
                <path d="M22 5L1 5M22 5L18 9M22 5L18 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
          </div>
        </div>
      </section>

      <section className="relative py-20 page-container page-boundaries bg-demont-bg-gray">
        <div className="page-content" style={{paddingLeft: '100px', paddingRight: '100px'}}>
          <div style={{
            display: 'flex',
            gap: '27px',
            alignItems: 'stretch'
          }}>
            <div style={{
              flex: 1,
              backgroundColor: '#FFFFFF',
              border: '5px solid #0C2D46',
              borderRadius: '20px',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                height: '40%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '15px 15px 0 0'
              }}>
                <img 
                  src="/pearson.png" 
                  alt="Person" 
                  style={{
                    width: '180px',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              
              <div style={{
                height: '60%',
                backgroundColor: '#0C2D46',
                borderRadius: '0 0 15px 15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 20px 20px 20px'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: '100%',
                  height: '100%'
                }}>
                  <p style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    textAlign: 'left',
                    marginBottom: '0px',
                    marginTop: '10px'
                  }}>
                    A leading global organization focused on enhancing management and leadership capabilities through accreditation, qualifications, and resources.
                  </p>
                  
                  <div className="flex justify-between mt-[30px] lg:w-[calc(100%+50px)] lg:-ml-[25px] lg:-mr-[25px]">
                    <button style={{
                      backgroundColor: 'white',
                      color: '#0C2D46',
                      border: 'none',
                      borderRadius: '0 12px 12px 0',
                      padding: '6px 20px',
                      fontFamily: 'Poppins',
                      fontWeight: '600',
                      fontSize: '14px',
                      cursor: 'pointer'
                    }}>
                      Get in touch!
                    </button>
                    
                    <button style={{
                      backgroundColor: '#ECA22D',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px 0 0 12px',
                      padding: '0px',
                      fontFamily: 'Poppins',
                      fontWeight: '600',
                      fontSize: '14px',
                      cursor: 'pointer',
                      width: '140px',
                      height: '33px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg width="140" height="33" viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M160 0H15C6.71573 0 0 6.71573 0 15V23C0 31.2843 6.71573 38 15 38H160V0Z" fill="#ECA22D"/>
                        <path d="M42.408 24L38.344 19.024V24H36.104V12.832H38.344V17.84L42.408 12.832H45.112L40.504 18.368L45.24 24H42.408ZM52.9214 24V19.104C52.9214 17.68 52.1374 16.912 50.9534 16.912C49.7374 16.912 48.9534 17.68 48.9534 19.104V24H46.7134V15.136H48.9534V16.24C49.5294 15.488 50.4894 15.008 51.6254 15.008C53.6894 15.008 55.1614 16.352 55.1614 18.8V24H52.9214ZM65.8515 19.568C65.8515 22.352 63.8035 24.144 61.2275 24.144C58.6675 24.144 56.7315 22.352 56.7315 19.568C56.7315 16.768 58.7315 14.992 61.2915 14.992C63.8515 14.992 65.8515 16.768 65.8515 19.568ZM59.0035 19.568C59.0035 21.328 60.0275 22.192 61.2275 22.192C62.4115 22.192 63.5475 21.328 63.5475 19.568C63.5475 17.792 62.4435 16.944 61.2595 16.944C60.0755 16.944 59.0035 17.792 59.0035 19.568ZM69.1106 24L66.5026 15.136H68.7746L70.3426 21.888L72.0386 15.136H74.4066L76.0706 21.872L77.6386 15.136H79.7826L77.1906 24H74.7746L73.1586 17.808L71.5426 24H69.1106ZM84.8071 24V12.832H87.3511L90.9031 21.136L94.4551 12.832H96.9831V24H94.7431V16.736L91.7511 24H90.0551L87.0471 16.736V24H84.8071ZM107.758 19.568C107.758 22.352 105.71 24.144 103.134 24.144C100.574 24.144 98.6378 22.352 98.6378 19.568C98.6378 16.768 100.638 14.992 103.198 14.992C105.758 14.992 107.758 16.768 107.758 19.568ZM100.91 19.568C100.91 21.328 101.934 22.192 103.134 22.192C104.318 22.192 105.454 21.328 105.454 19.568C105.454 17.792 104.35 16.944 103.166 16.944C101.982 16.944 100.91 17.792 100.91 19.568ZM111.641 19.584V24H109.401V15.136H111.641V16.512C112.201 15.6 113.129 15.008 114.361 15.008V17.36H113.769C112.441 17.36 111.641 17.872 111.641 19.584ZM119.678 16.832C118.606 16.832 117.758 17.52 117.582 18.736H121.79C121.758 17.568 120.83 16.832 119.678 16.832ZM123.886 21.216C123.406 22.848 121.934 24.144 119.742 24.144C117.166 24.144 115.294 22.352 115.294 19.568C115.294 16.768 117.118 14.992 119.742 14.992C122.302 14.992 124.11 16.736 124.11 19.376C124.11 19.664 124.094 19.952 124.046 20.24H117.566C117.678 21.552 118.574 22.288 119.694 22.288C120.654 22.288 121.182 21.808 121.47 21.216H123.886Z" fill="white"/>
                        <path d="M139.811 19.4361L133.022 25.8336C132.909 25.9404 132.758 26 132.602 26C132.445 26 132.295 25.9404 132.182 25.8336L132.174 25.8264C132.119 25.7746 132.075 25.7123 132.045 25.6432C132.015 25.5742 132 25.4998 132 25.4246C132 25.3494 132.015 25.275 132.045 25.206C132.075 25.1369 132.119 25.0746 132.174 25.0228L138.567 18.9988L132.174 12.9772C132.119 12.9254 132.075 12.8631 132.045 12.794C132.015 12.725 132 12.6506 132 12.5754C132 12.5002 132.015 12.4259 132.045 12.3568C132.075 12.2877 132.119 12.2254 132.174 12.1736L132.182 12.1664C132.295 12.0596 132.445 12 132.602 12C132.758 12 132.909 12.0596 133.022 12.1664L139.811 18.5639C139.871 18.6201 139.918 18.6878 139.951 18.7628C139.983 18.8377 140 18.9184 140 19C140 19.0816 139.983 19.1623 139.951 19.2372C139.918 19.3122 139.871 19.3799 139.811 19.4361Z" fill="black"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                height: '190px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/ncfe.png" 
                  alt="NCFE" 
                  style={{
                    width: '196px',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                height: '190px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/cmi.png" 
                  alt="CMI" 
                  style={{
                    width: '179px',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
            
            <div style={{
              flex: 1.2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginLeft: '40px',
              marginRight: '80px'
            }}>
              <h2 style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '40px',
                lineHeight: '60px',
                color: '#000000',
                textAlign: 'left',
                marginBottom: '20px'
              }}>
                Discover Our Academic <span style={{color: '#ECA22D'}}>Partners</span>
              </h2>
              <p style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#000000',
                textAlign: 'left'
              }}>
<span style={{fontWeight: 'bold'}}>DeMont</span> Institute of Management and Technology proudly collaborates with top institutions globally, ensuring our students receive world-class higher education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white page-container page-boundaries">
        <style jsx>{`
          input::placeholder {
            color: #000000 !important;
          }
        `}</style>
        <div className="page-content" style={{paddingLeft: '0', paddingRight: '0'}}>
          <div style={{
            paddingLeft: '100px',
            paddingRight: '100px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '40px'
            }}>
              <h2 style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '40px',
                lineHeight: '60px',
                color: '#000000',
                textAlign: 'left',
                marginBottom: '0px'
              }}>
                Explore <span style={{color: '#ECA22D'}}>Our Courses</span>
              </h2>
              
              <div style={{
                position: 'relative',
                width: '700px',
                height: '57px',
                marginRight: '70px'
              }}>
                <svg width="712" height="69" viewBox="0 0 712 69" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                  position: 'absolute',
                  top: '-6px',
                  left: '-6px'
                }}>
                  <g filter="url(#filter0_d_645_7256)">
                    <rect x="6" y="3" width="700" height="57" rx="25" fill="#F0F0F0"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_645_7256" x="0" y="0" width="712" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="3"/>
                      <feGaussianBlur stdDeviation="3"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_7256"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_7256" result="shape"/>
                    </filter>
                  </defs>
                </svg>
                <input 
                  type="text" 
                  placeholder="Search for Courses..." 
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '620px',
                    height: '57px',
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '0 30px',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    color: '#000000',
                    outline: 'none'
                  }}
                />
                <button className="group" style={{
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  width: '80px',
                  height: '57px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="87" height="65" viewBox="0 0 87 65" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px'
                  }}>
                    <g filter="url(#filter0_d_5341_82)">
                      <path d="M4 3H58C71.8071 3 83 14.1929 83 28V35C83 48.8071 71.8071 60 58 60H4V3Z" fill="#879DA5" className="group-hover:fill-[#0C2D46] transition-colors"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_5341_82" x="0" y="0" width="87" height="65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5341_82"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5341_82" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                  <svg width="33" height="15" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <path d="M0 7.50003C0 7.68364 0.0694656 7.85972 0.193115 7.98955C0.316765 8.11938 0.484478 8.19232 0.659348 8.19232L30.7298 8.19231L25.2849 13.8136C25.2231 13.8774 25.1739 13.9533 25.1401 14.037C25.1063 14.1208 25.0885 14.2107 25.0878 14.3016C25.087 14.3925 25.1034 14.4827 25.1358 14.5671C25.1683 14.6514 25.2163 14.7281 25.277 14.793C25.3377 14.8578 25.41 14.9095 25.4898 14.945C25.5695 14.9805 25.6551 14.9992 25.7417 15C25.9167 15.0015 26.085 14.9301 26.2097 14.8013L32.8019 7.99478C32.8049 7.99178 32.8078 7.9887 32.8107 7.98555C32.8723 7.9198 32.9208 7.84178 32.9533 7.75607C32.9857 7.67037 33.0016 7.57872 32.9999 7.48649C32.9982 7.39427 32.9789 7.30333 32.9432 7.21903C32.9076 7.13473 32.8562 7.05876 32.7922 6.99559L26.2097 0.198765C26.148 0.135005 26.0749 0.0846395 25.9946 0.050539C25.9144 0.0164385 25.8285 -0.000725746 25.7419 2.38419e-05C25.6553 0.00077343 25.5697 0.0194216 25.49 0.0549078C25.4102 0.090394 25.3379 0.142021 25.2772 0.206841C25.2165 0.271662 25.1685 0.348407 25.136 0.432693C25.1036 0.516978 25.0872 0.607155 25.0879 0.698074C25.0886 0.788994 25.1064 0.878875 25.1402 0.962586C25.174 1.0463 25.2232 1.1222 25.2849 1.18596L30.7298 6.80775L0.659348 6.80775C0.484478 6.80775 0.316765 6.88069 0.193115 7.01052C0.0694656 7.14034 0 7.31643 0 7.50003Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%'
          }}>
            <div style={{
              width: '802px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
            <div style={{width: '802px'}}>
              <button 
                onClick={() => {
                  const content = document.getElementById('course-content-1');
                  const icon = document.getElementById('course-icon-1');
                  if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                    icon.innerHTML = '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10L17.5 10" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>';
                  } else {
                    content.style.display = 'none';
                    icon.innerHTML = '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10L17.5 10M9.5 18V2" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>';
                  }
                }}
                style={{
                  width: '100%',
                  height: '57px',
                  backgroundColor: '#0C2D46',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0 25px 25px 0',
                  padding: '0 20px 0 100px',
                  fontFamily: 'Poppins',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  outline: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Higher National Diploma</span>
                <div id="course-icon-1" style={{marginRight: '5px'}}>
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 10L17.5 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              <div id="course-content-1" style={{display: 'block', padding: '20px 0', paddingLeft: '100px'}}>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>International In Computing <span style={{fontWeight: 'bold'}}>(Software Engineering)</span></span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>International In Computing <span style={{fontWeight: 'bold'}}>(Cyber Security)</span></span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>International In <span style={{fontWeight: 'bold'}}>Computing</span></span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>International In Computing <span style={{fontWeight: 'bold'}}>(Business Management)</span></span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>International In Computing <span style={{fontWeight: 'bold'}}>(Marketing)</span></span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>International In Computing <span style={{fontWeight: 'bold'}}>(Accounting and Finance)</span></span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>International In Computing <span style={{fontWeight: 'bold'}}>(Human Resources Management)</span></span>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{width: '802px'}}>
              <button 
                onClick={() => {
                  const content = document.getElementById('course-content-2');
                  const icon = document.getElementById('course-icon-2');
                  if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                    icon.innerHTML = '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10L17.5 10" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>';
                  } else {
                    content.style.display = 'none';
                    icon.innerHTML = '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10L17.5 10M9.5 18V2" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>';
                  }
                }}
                style={{
                  width: '100%',
                  height: '57px',
                  backgroundColor: '#0C2D46',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0 25px 25px 0',
                  padding: '0 20px 0 100px',
                  fontFamily: 'Poppins',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  outline: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Foundation</span>
                <div id="course-icon-2" style={{marginRight: '5px'}}>
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 10L17.5 10M9.5 18V2" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              <div id="course-content-2" style={{display: 'none', padding: '20px 0', paddingLeft: '100px'}}>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>Project Management</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>Digital Marketing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{width: '802px'}}>
              <button 
                onClick={() => {
                  const content = document.getElementById('course-content-3');
                  const icon = document.getElementById('course-icon-3');
                  if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                    icon.innerHTML = '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10L17.5 10" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>';
                  } else {
                    content.style.display = 'none';
                    icon.innerHTML = '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10L17.5 10M9.5 18V2" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>';
                  }
                }}
                style={{
                  width: '100%',
                  height: '57px',
                  backgroundColor: '#0C2D46',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0 25px 25px 0',
                  padding: '0 20px 0 100px',
                  fontFamily: 'Poppins',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  outline: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Management and Leadership</span>
                <div id="course-icon-3" style={{marginRight: '5px'}}>
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 10L17.5 10M9.5 18V2" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              <div id="course-content-3" style={{display: 'none', padding: '20px 0', paddingLeft: '100px'}}>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>Mechanical Engineering</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>Graphic Design</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>Architecture</span>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{width: '802px'}}>
              <button 
                onClick={() => {
                  const content = document.getElementById('course-content-4');
                  const icon = document.getElementById('course-icon-4');
                  if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                    icon.innerHTML = '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10L17.5 10" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>';
                  } else {
                    content.style.display = 'none';
                    icon.innerHTML = '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10L17.5 10M9.5 18V2" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>';
                  }
                }}
                style={{
                  width: '100%',
                  height: '57px',
                  backgroundColor: '#0C2D46',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0 25px 25px 0',
                  padding: '0 20px 0 100px',
                  fontFamily: 'Poppins',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  outline: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Teacher Education</span>
                <div id="course-icon-4" style={{marginRight: '5px'}}>
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 10L17.5 10M9.5 18V2" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              <div id="course-content-4" style={{display: 'none', padding: '20px 0', paddingLeft: '100px'}}>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>Healthcare Management</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>Biomedical Sciences</span>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{width: '802px'}}>
              <button 
                onClick={() => {
                  const content = document.getElementById('course-content-5');
                  const icon = document.getElementById('course-icon-5');
                  if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                    icon.innerHTML = '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10L17.5 10" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>';
                  } else {
                    content.style.display = 'none';
                    icon.innerHTML = '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10L17.5 10M9.5 18V2" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>';
                  }
                }}
                style={{
                  width: '100%',
                  height: '57px',
                  backgroundColor: '#0C2D46',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0 25px 25px 0',
                  padding: '0 20px 0 100px',
                  fontFamily: 'Poppins',
                  fontSize: '18px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  outline: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Certification Programs</span>
                <div id="course-icon-5" style={{marginRight: '5px'}}>
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 10L17.5 10M9.5 18V2" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              <div id="course-content-5" style={{display: 'none', padding: '20px 0', paddingLeft: '100px'}}>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>Film Production</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>Digital Arts</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: '4px', height: '4px', backgroundColor: '#000000', borderRadius: '50%', marginRight: '15px'}}></div>
                    <span style={{fontFamily: 'Poppins', fontSize: '16px', color: '#000000'}}>Music Technology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0',
                marginTop: '20px'
              }}>
                <img 
                  src="/r1-3.png" 
                  alt="r1-3" 
                  style={{
                    width: 'auto',
                    height: '121px',
                    objectFit: 'contain'
                  }}
                />
                <div style={{height: '121px', display: 'flex', alignItems: 'center'}}>
                  <svg viewBox="0 0 108 133" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '100%', width: 'auto'}}>
                    <g filter="url(#filter0_d_645_7283)">
                      <path d="M6 55C6 27.3858 28.3858 5 56 5H102V126H56C28.3858 126 6 103.614 6 76V55Z" fill="#ECA22D"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_645_7283" x="0" y="0" width="108" height="133" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="3"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_7283"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_7283" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <img 
                  src="/r1-1.png" 
                  alt="r1-1" 
                  style={{
                    width: 'auto',
                    height: '121px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0',
                height: '121px'
              }}>
                <img 
                  src="/r2-3.png" 
                  alt="r2-3" 
                  style={{
                    width: 'auto',
                    height: '121px',
                    objectFit: 'contain'
                  }}
                />
                <img 
                  src="/r2-2.png" 
                  alt="r2-2" 
                  style={{
                    width: 'auto',
                    height: '121px',
                    objectFit: 'contain'
                  }}
                />
                <img 
                  src="/r2-1.png" 
                  alt="r2-1" 
                  style={{
                    width: 'auto',
                    height: '121px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0',
                height: '121px'
              }}>
                <div style={{height: '121px', display: 'flex', alignItems: 'center'}}>
                  <svg viewBox="0 0 114 134" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '100%', width: 'auto'}}>
                    <g filter="url(#filter0_d_645_7286)">
                      <path d="M6 55C6 27.3858 28.3858 5 56 5H58C85.6142 5 108 27.3858 108 55V127H9C7.34315 127 6 125.657 6 124V55Z" fill="#0C2D46"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_645_7286" x="0" y="0" width="114" height="134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="3"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_7286"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_7286" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <img 
                  src="/r3-2.png" 
                  alt="r3-2" 
                  style={{
                    width: 'auto',
                    height: '121px',
                    objectFit: 'contain'
                  }}
                />
                <div style={{height: '121px', display: 'flex', alignItems: 'center'}}>
                  <svg viewBox="0 0 27 134" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '100%', width: 'auto'}}>
                    <g filter="url(#filter0_d_645_7285)">
                      <path d="M6 26C6 14.402 15.402 5 27 5V127H6V26Z" fill="#ECA22D"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_645_7285" x="0" y="0" width="33" height="134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="3"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_7285"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_7285" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0',
                height: '121px',
                justifyContent: 'flex-end'
              }}>
                <div style={{height: '121px', display: 'flex', alignItems: 'flex-start'}}>
                  <svg viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '87px', width: '87px'}}>
                    <g filter="url(#filter0_d_645_7295)">
                      <circle cx="43.5" cy="42.5" r="37.5" fill="#ECA22D"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_645_7295" x="0" y="0" width="87" height="87" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="3"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_7295"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_7295" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <img 
                  src="/r4-2.png" 
                  alt="r4-2" 
                  style={{
                    width: 'auto',
                    height: '121px',
                    objectFit: 'contain'
                  }}
                />
                <img 
                  src="/r4-1.png" 
                  alt="r4-1" 
                  style={{
                    width: 'auto',
                    height: '121px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0',
                height: '121px',
                justifyContent: 'flex-end'
              }}>
                <img 
                  src="/r5-3.png" 
                  alt="r5-3" 
                  style={{
                    width: 'auto',
                    height: '121px',
                    objectFit: 'contain'
                  }}
                />
                <div style={{height: '121px', display: 'flex', alignItems: 'center'}}>
                  <svg viewBox="0 0 44 133" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '100%', width: 'auto'}}>
                    <g filter="url(#filter0_d_645_7291)">
                      <path d="M6 110C6 118.837 13.1634 126 22 126C30.8366 126 38 118.837 38 110V21C38 12.1634 30.8366 5 22 5C13.1634 5 6 12.1634 6 21V110Z" fill="#0C2D46"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_645_7291" x="0" y="0" width="44" height="133" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="3"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_7291"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_7291" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <img 
                  src="/r5-1.png" 
                  alt="r5-1" 
                  style={{
                    width: 'auto',
                    height: '121px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 page-container page-boundaries bg-demont-bg-gray">
        <div className="page-content">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '120px'
          }}>
            <div className="phone-container" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '280px'
            }}>
              <svg width="191" height="69" viewBox="0 0 191 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21.2983 6.20672C21.3365 2.77965 24.1788 0.0056962 27.6575 8.42128e-06C31.2507 -0.00566247 34.1711 2.85348 34.1695 6.37548C34.1687 9.81229 31.0996 12.828 27.625 12.807C24.139 12.7858 21.2584 9.78146 21.2983 6.20672Z" fill="#ECA22D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M34.1631 62.1682H34.1656C34.1582 45.9326 34.1509 29.6978 34.1444 13.4639C29.3242 16.0804 24.7843 19.1886 19.4912 21.29C19.4912 21.29 22.1492 23.0344 22.2507 28.7299C22.4287 29.3043 22.2735 29.9266 22.2743 30.5132C22.2759 31.3781 22.2767 32.2438 22.2784 33.1095H22.2572V56.8816C22.2507 57.9209 22.2548 58.9602 22.2458 59.9987C22.245 60.1513 22.2507 60.2859 22.2572 60.4214V63.2757C22.2515 64.0773 22.2524 64.8773 22.2458 65.6781C22.232 67.3802 22.6001 68.0317 24.4455 67.9352C27.6787 67.7673 30.925 67.863 34.1656 67.8476C34.1647 65.9539 34.1639 64.0611 34.1631 62.1682Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M110.405 68.3864H111.274V6.75342H110.405V68.3864Z" fill="#ECA22D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M64.7255 21.2808C60.6025 21.2808 56.5583 22.8645 53.1495 26.823C51.8803 22.9432 48.9469 21.2808 45.4577 21.2808C41.771 21.2808 38.1591 22.6235 34.9819 25.8015V30.9154C36.7363 29.4111 38.7304 28.4854 40.3035 28.4854C42.4446 28.4854 43.7139 29.5937 43.7139 33.0776V67.8327H53.9426V32.048V31.1766C55.6864 29.5142 57.9064 28.4854 59.5714 28.4854C61.6329 28.4854 62.9021 29.5937 62.9021 33.0776V67.8327H73.2097V32.048C73.2097 24.8433 69.6416 21.2808 64.7255 21.2808Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.2873 67.9442C11.4497 67.9247 6.52143 65.8193 3.05822 60.9529C-0.604064 55.8075 -1.00629 50.2125 2.00919 44.6516C5.25625 38.664 10.5299 35.9695 17.245 36.0052C10.9158 46.6832 10.9451 57.1867 17.2873 67.9442Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M79.7932 29.1351H90.6557V29.118H97.5545V22.0716H90.6557V15.1696L79.7932 8.90771V22.0716H75.1948V29.118H79.7932V29.1351Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M94.779 59.8364C92.0041 59.8364 90.656 58.5691 90.656 55.482V35.0518H79.7935V56.432C79.7935 63.8744 82.41 68.3862 91.211 68.3862C93.9071 68.3862 96.2855 68.1485 98.1098 67.8321V59.5192C97.0786 59.7569 95.889 59.8364 94.779 59.8364Z" fill="#0C2D46"/>
                <circle className="phone-circle" cx="157" cy="34" r="33" stroke="#ECA22D" strokeWidth="2"/>
                <path className="phone-icon" d="M149.961 15.2023C151.036 14.8888 152.19 14.9409 153.23 15.3498C154.271 15.7587 155.135 16.4998 155.679 17.4496L155.861 17.8036L157.487 21.2981C157.981 22.3588 158.141 23.5363 157.948 24.6844C157.755 25.8324 157.217 26.9002 156.401 27.755L156.074 28.0686L153.512 30.38C153.05 30.8029 153.396 32.4397 155.067 35.2382C156.571 37.7563 157.794 38.9323 158.396 38.9964H158.502L158.632 38.9726L163.67 37.4831C164.347 37.2824 165.069 37.2745 165.75 37.4602C166.432 37.646 167.044 38.0177 167.513 38.5308L167.736 38.804L171.071 43.2701C171.724 44.1455 172.05 45.21 171.994 46.2882C171.938 47.3664 171.504 48.3941 170.763 49.202L170.464 49.5014L169.132 50.7224C167.936 51.8174 166.44 52.5573 164.822 52.8542C163.203 53.1511 161.531 52.9925 160.003 52.3972C155.249 50.5442 150.929 46.3109 147.005 39.74C143.073 33.1524 141.439 27.4105 142.169 22.493C142.39 21.0065 143.023 19.6056 144.001 18.439C144.98 17.2725 146.266 16.3838 147.725 15.8674L148.199 15.7154L149.961 15.2023Z" fill="#ECA22D"/>
              </svg>
              <p style={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#000000',
                marginTop: '20px',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                Got question? Let's talk!
              </p>
              <p style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: '400',
                color: '#000000',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                +971 4 580 4285
              </p>
              <p style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#000000',
                textAlign: 'center'
              }}>
                Contact Us
              </p>
            </div>

            <div className="search-container" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '280px'
            }}>
              <svg width="95" height="72" viewBox="0 0 95 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H80.2646M2 33.4341H23.5228M2 64.8683H23.5228" stroke="#0C2D46" strokeWidth="4" strokeLinecap="round"/>
                <g className="magnifying-glass-only">
                  <path d="M61.2736 57.4657C66.8689 57.4657 72.2349 55.243 76.1914 51.2866C80.1478 47.3302 82.3705 41.9641 82.3705 36.3688C82.3705 30.7736 80.1478 25.4075 76.1914 21.4511C72.2349 17.4947 66.8689 15.272 61.2736 15.272C55.6784 15.272 50.3123 17.4947 46.3559 21.4511C42.3995 25.4075 40.1768 30.7736 40.1768 36.3688C40.1768 41.9641 42.3995 47.3302 46.3559 51.2866C50.3123 55.243 55.6784 57.4657 61.2736 57.4657Z" stroke="#ECA22D" strokeWidth="4"/>
                  <path d="M74.9243 52.502L92.2982 69.9999" stroke="#ECA22D" strokeWidth="4" strokeLinecap="round"/>
                </g>
              </svg>
              <p style={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#000000',
                marginTop: '20px',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                Want to know more?
              </p>
              <p style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: '400',
                color: '#000000',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                Let's find out!
              </p>
              <p style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#000000',
                textAlign: 'center'
              }}>
                Learn More
              </p>
            </div>

            <div className="chat-container" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '280px'
            }}>
              <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="chat-bubble" d="M17.0336 64.8376L16.2695 62.5562L17.3304 62.2104L18.2891 62.782L17.0336 64.8376ZM7.30025 55.232L9.34911 53.9352L9.97691 54.9054L9.60705 55.9908L7.30025 55.232ZM2.43361 69.5923L3.19767 71.8784C2.76859 72.0186 2.30845 72.038 1.86882 71.9345C1.42919 71.831 1.02745 71.6087 0.708626 71.2926C0.389801 70.9765 0.166504 70.579 0.063736 70.1446C-0.0390244 69.7103 -0.0171814 69.2563 0.126816 68.8335L2.43361 69.5923ZM18.2891 62.782C22.9417 65.5436 30.3828 67.1957 36.5001 67.1957V71.9985C29.7598 71.9985 21.3843 70.2215 15.778 66.8932L18.2891 62.782ZM36.5001 67.1909C53.9714 67.1909 68.1334 53.2244 68.1334 35.9921H73C72.9987 40.7211 72.0536 45.4036 70.2186 49.7722C68.3836 54.1408 65.6947 58.11 62.3054 61.4531C58.9161 64.7961 54.8927 67.4476 50.465 69.2562C46.0374 71.0648 41.2921 71.995 36.5001 71.9937V67.1909ZM68.1334 35.9921C68.1295 27.7159 64.7947 19.7849 58.8624 13.935C52.9302 8.08516 44.8864 4.80024 36.5001 4.80278V1.28371e-06C46.1771 -0.00254681 55.4588 3.78838 62.3037 10.539C69.1486 17.2895 72.9961 26.4421 73 35.9921H68.1334ZM36.5001 4.80278C19.0289 4.80278 4.86693 18.7693 4.86693 35.9969H0.000282288C0.00415802 26.4469 3.85168 17.2895 10.6966 10.539C17.5415 3.78838 26.8232 -0.00254681 36.5001 1.28371e-06V4.80278ZM4.86693 35.9969C4.86693 42.3894 6.30746 49.2429 9.34911 53.9352L5.2514 56.5288C1.52841 50.7894 0.000282288 42.9225 0.000282288 35.9969H4.86693ZM17.7976 67.1189L3.19767 71.8784L1.66955 67.3158L16.2695 62.5611L17.7976 67.1189ZM0.126816 68.8335L4.99346 54.4732L9.60705 55.9908L4.7404 70.356L0.126816 68.8335Z" fill="black"/>
                <path className="chat-line-1" d="M24 30H49" stroke="#ECA22D" strokeWidth="4" strokeLinecap="round"/>
                <path className="chat-line-2" d="M24 42H40" stroke="#ECA22D" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <p style={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#000000',
                marginTop: '20px',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                We are here to guide you
              </p>
              <p style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: '400',
                color: '#000000',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                +971 58 625 0566
              </p>
              <p style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#000000',
                textAlign: 'center'
              }}>
                Chat with an Admission Counselor
              </p>
            </div>
          </div>
        </div>
      </section>




      <Footer />

      {isPopupOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isPopupClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
          <div className={`bg-white rounded-[25px] shadow-lg relative ${isPopupClosing ? 'animate-slideOut' : 'animate-slideIn'}`} style={{
            width: '586px',
            height: '918px'
          }}>
            <button 
              onClick={handleClosePopup}
              className="absolute top-4 right-4 hover:opacity-70 transition-opacity"
            >
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 9L24 24M9 24L24 9" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="16.5" cy="16.5" r="16" stroke="black"/>
              </svg>
            </button>
            
            <div className="flex justify-center items-center pt-24 pb-16">
              <svg width="223.15" height="68.39" viewBox="0 0 235 72" fill="none" className="w-auto">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.5756 6.54783C22.6158 2.94127 25.6071 0.0220468 29.2679 0.0160611C33.0493 0.0100932 36.1226 3.01897 36.1209 6.72542C36.1201 10.3422 32.8902 13.5159 29.2337 13.4938C25.5652 13.4715 22.5337 10.3098 22.5756 6.54783Z" fill="#ECA22D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M36.1141 65.44H36.1167C36.109 48.3541 36.1013 31.2691 36.0944 14.1849C31.0218 16.9385 26.2442 20.2095 20.6738 22.4209C20.6738 22.4209 23.471 24.2566 23.5779 30.2505C23.7651 30.855 23.6018 31.5099 23.6027 32.1272C23.6044 33.0374 23.6052 33.9484 23.6069 34.8594H23.5847V59.8765C23.5779 60.9702 23.5821 62.064 23.5727 63.1569C23.5719 63.3174 23.5779 63.4591 23.5847 63.6017V66.6055C23.5787 67.4491 23.5796 68.2909 23.5727 69.1337C23.5582 70.925 23.9456 71.6106 25.8876 71.509C29.2902 71.3323 32.7064 71.433 36.1167 71.4168C36.1158 69.424 36.115 67.432 36.1141 65.44Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M116.35 71.984H117.264V7.12323H116.35V71.984Z" fill="#ECA22D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M132.776 9.02471V23.1657H134.907C136.812 23.1657 138.257 22.6406 139.243 21.5896C140.413 20.3379 140.998 18.3357 140.998 15.5821C140.998 13.3135 140.48 11.6366 139.444 10.5513C138.474 9.53445 137.07 9.02471 135.232 9.02471H132.776ZM129.016 7.57321H137.588C140.096 7.57321 142.026 8.39886 143.378 10.051C144.565 11.5025 145.159 13.3545 145.159 15.6068C145.159 18.3775 144.281 20.5881 142.527 22.2402C140.856 23.8258 138.691 24.6181 136.035 24.6181H129.016V7.57321Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M170.176 19.3306C170.877 17.9457 171.505 16.7188 172.056 15.6515C172.741 14.3161 173.401 13.0063 174.037 11.7213C174.938 9.88646 175.599 8.50156 176.017 7.56662C176.251 7.60248 176.455 7.63236 176.631 7.65883C176.806 7.6853 176.952 7.69811 177.07 7.69811C177.186 7.69811 177.362 7.68103 177.596 7.64603C177.83 7.61017 178.013 7.58455 178.147 7.56662C178.381 9.68667 178.624 11.7965 178.875 13.8994C179.259 17.2029 179.484 19.089 179.551 19.556C179.768 21.1074 180.036 22.8347 180.353 24.737C180.103 24.737 179.726 24.7165 179.225 24.6773C178.724 24.6371 178.406 24.6175 178.273 24.6175C177.989 24.6175 177.608 24.6371 177.133 24.6773C176.655 24.7165 176.359 24.737 176.242 24.737C176.242 23.1523 176.117 21.297 175.866 19.1709C175.616 17.0449 175.381 15.0137 175.164 13.0798C174.53 14.3648 173.899 15.6455 173.272 16.9211C172.646 18.1976 172.022 19.4706 171.405 20.7386C170.986 21.6061 170.385 22.8996 169.599 24.6175C169.332 24.5842 169.131 24.568 168.998 24.568C168.931 24.568 168.814 24.5842 168.647 24.6175C168.078 23.4162 167.511 22.2234 166.943 21.0383C166.224 19.5705 165.605 18.3103 165.087 17.2592C164.436 15.958 163.792 14.6559 163.157 13.3547C162.907 15.2408 162.731 16.6172 162.631 17.4846C162.463 18.8695 162.334 20.1631 162.242 21.3636C162.15 22.5658 162.105 23.6919 162.105 24.743C161.837 24.7097 161.607 24.6807 161.415 24.6551C161.222 24.6303 161.06 24.6175 160.926 24.6175C160.676 24.6175 160.467 24.6294 160.299 24.6534C160.133 24.6773 159.957 24.7046 159.773 24.737C160.074 23.102 160.366 21.3414 160.65 19.4553C160.818 18.4042 161.089 16.519 161.465 13.7987C161.841 11.0793 162.129 9.0019 162.329 7.56662C162.564 7.60248 162.765 7.63236 162.931 7.65883C163.099 7.6853 163.241 7.69811 163.357 7.69811C163.592 7.69811 163.796 7.68103 163.972 7.64603C164.147 7.61017 164.294 7.58455 164.411 7.56662C164.828 8.48448 165.446 9.78656 166.266 11.4712C166.9 12.7732 167.544 14.083 168.196 15.4005C168.847 16.7188 169.507 18.0294 170.176 19.3306Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M191.809 8.6244C190.021 8.6244 188.659 9.29039 187.724 10.6232C186.737 12.0218 186.245 14.0966 186.245 16.845C186.245 18.6773 186.646 20.2023 187.447 21.4173C188.383 22.8337 189.728 23.5416 191.483 23.5416C193.305 23.5416 194.716 22.7338 195.719 21.1176C196.622 19.6524 197.073 17.7945 197.073 15.5455C197.073 13.6961 196.672 12.1396 195.87 10.8725C194.918 9.37406 193.565 8.6244 191.809 8.6244ZM201.234 16.0202C201.234 18.5535 200.357 20.6693 198.602 22.3693C196.764 24.1521 194.35 25.0434 191.358 25.0434C188.534 25.0434 186.282 24.2605 184.602 22.6946C182.922 21.1278 182.083 18.9369 182.083 16.1201C182.083 13.5373 182.944 11.4138 184.665 9.74718C186.47 7.9977 188.901 7.12253 191.959 7.12253C195.202 7.12253 197.641 8.12236 199.279 10.122C200.583 11.7212 201.234 13.6884 201.234 16.0202Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M204.192 24.6928V7.57278H206.674C207.777 8.77412 208.972 10.0591 210.26 11.4278C210.978 12.1783 212.202 13.4881 213.931 15.3571C215.661 17.2261 216.852 18.5359 217.503 19.2864V7.57278L218.506 7.64792L219.509 7.57278V24.7432L217.379 24.7176C215.957 23.15 214.545 21.5729 213.142 19.9874C211.671 18.3523 210.267 16.8334 208.931 15.4322L206.199 12.5788V24.7432L205.195 24.6177L204.192 24.6928Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M230.512 9.35026V24.743C230.229 24.743 229.995 24.7345 229.811 24.7182C229.092 24.6508 228.7 24.6175 228.633 24.6175C228.348 24.6175 227.98 24.6388 227.53 24.6807C227.078 24.7217 226.819 24.743 226.753 24.743V9.35026C225.866 9.35026 225.093 9.37929 224.434 9.43821C223.773 9.49627 222.992 9.58421 222.089 9.70033C222.123 9.46724 222.153 9.26232 222.177 9.08729C222.202 8.91225 222.215 8.75856 222.215 8.62451C222.215 8.39056 222.198 8.1865 222.165 8.01147C222.131 7.83643 222.106 7.69043 222.089 7.5726H234.999C234.966 7.80655 234.937 8.01147 234.912 8.1865C234.886 8.36153 234.874 8.50754 234.874 8.62451C234.874 8.87468 234.891 9.08729 234.924 9.26232C234.957 9.43821 234.983 9.58421 234.999 9.70033C233.779 9.55006 233.044 9.46724 232.794 9.45016C232.041 9.38356 231.28 9.35026 230.512 9.35026Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M129.528 39.7328V30.4731L130.123 30.514L130.72 30.4731V39.7191L130.123 39.679L129.528 39.7328Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M141.21 30.4733V39.733H140.803L140.092 38.9005L134.251 32.4336H134.115V39.7193L133.737 39.6783L133.357 39.733V30.4733L133.888 30.4707L140.309 37.4405L140.451 37.4345V30.4733L140.831 30.5143L141.21 30.4733Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M143.377 37.8942H143.513C143.804 38.3587 144.104 38.6977 144.413 38.9111C144.776 39.1613 145.212 39.2868 145.721 39.2868C146.266 39.2868 146.717 39.0955 147.076 38.713C147.435 38.3314 147.614 37.8652 147.614 37.3162C147.614 36.6323 147.249 36.1012 146.518 35.7238C145.832 35.4258 145.151 35.1253 144.473 34.8187C143.743 34.3782 143.377 33.7258 143.377 32.8618C143.377 32.0344 143.675 31.3864 144.271 30.9185C144.82 30.4864 145.525 30.2704 146.383 30.2704C146.744 30.2704 147.096 30.3251 147.439 30.4326C147.781 30.5411 148.075 30.7033 148.318 30.9193C148.256 31.0636 148.202 31.1985 148.156 31.3249C148.147 31.3522 148.079 31.5862 147.954 32.0276H147.818C147.673 31.6502 147.459 31.359 147.175 31.1558C146.89 30.9535 146.545 30.8519 146.138 30.8519C145.66 30.8519 145.257 30.9987 144.927 31.2907C144.598 31.5827 144.433 31.9636 144.433 32.4314C144.433 33.1145 144.798 33.6456 145.53 34.0238C146.215 34.3295 146.901 34.6309 147.588 34.928C148.327 35.3601 148.698 35.9808 148.698 36.7911C148.698 37.7354 148.373 38.491 147.723 39.058C147.109 39.5976 146.319 39.8683 145.354 39.8683C144.984 39.8683 144.577 39.7965 144.136 39.6539C143.693 39.5105 143.363 39.3218 143.147 39.0887C143.212 38.8923 143.257 38.7113 143.286 38.5457C143.315 38.38 143.345 38.1632 143.377 37.8942Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M153.733 31.122V39.7328L153.137 39.7063L152.541 39.7464V31.122C151.838 31.122 151.337 31.1314 151.039 31.1493C150.74 31.1672 150.254 31.2116 149.577 31.2842L149.618 30.8786L149.577 30.4731H156.562L156.522 30.8786L156.562 31.2842C156.228 31.2483 155.806 31.2116 155.297 31.1757C154.786 31.1399 154.265 31.122 153.733 31.122Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M158.119 39.7328V30.4731L158.714 30.514L159.311 30.4731V39.7191L158.714 39.679L158.119 39.7328Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M165.024 31.122V39.7328L164.428 39.7063L163.832 39.7464V31.122C163.129 31.122 162.628 31.1314 162.33 31.1493C162.032 31.1672 161.545 31.2116 160.868 31.2842L160.909 30.8786L160.868 30.4731H167.853L167.813 30.8786L167.853 31.2842C167.519 31.2483 167.097 31.2116 166.588 31.1757C166.077 31.1399 165.556 31.122 165.024 31.122Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M170.588 30.4733V35.6432C170.588 36.8846 170.795 37.7803 171.211 38.3285C171.671 38.9406 172.46 39.2455 173.579 39.2455C174.599 39.2455 175.353 38.8997 175.841 38.2072C176.282 37.5771 176.504 36.6772 176.504 35.5074V30.4733L176.883 30.5143L177.262 30.4733V35.8455C177.262 37.1502 176.908 38.1466 176.199 38.8356C175.491 39.5247 174.527 39.8679 173.309 39.8679C172.045 39.8679 171.066 39.5537 170.371 38.9227C169.992 38.5812 169.725 38.1133 169.573 37.519C169.455 37.0699 169.396 36.5209 169.396 35.872V30.4733L169.992 30.5143L170.588 30.4733Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M183.084 31.122V39.7328L182.489 39.7063L181.893 39.7464V31.122C181.189 31.122 180.688 31.1314 180.39 31.1493C180.092 31.1672 179.605 31.2116 178.928 31.2842L178.969 30.8786L178.928 30.4731H185.914L185.874 30.8786L185.914 31.2842C185.579 31.2483 185.158 31.2116 184.648 31.1757C184.138 31.1399 183.617 31.122 183.084 31.122Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M188.581 31.1086V34.5017H190.679C190.85 34.5017 191.08 34.4932 191.363 34.4744C191.647 34.4564 191.821 34.4471 191.884 34.4471L191.843 34.7988L191.884 35.1779C191.723 35.1779 191.496 35.1643 191.208 35.1369C190.919 35.1105 190.743 35.096 190.679 35.096H188.581V39.0432C188.87 39.0432 189.342 39.0347 189.996 39.0167C190.65 38.9979 190.995 38.9885 191.032 38.9885C191.284 38.9885 191.469 38.9826 191.587 38.9689C191.704 38.9552 191.934 38.9211 192.277 38.8682L192.237 39.2737L192.277 39.6784H187.39V30.4734H192.196L192.155 30.8627L192.196 31.2572C191.925 31.2034 191.704 31.165 191.533 31.1428C191.361 31.1206 191.176 31.1086 190.978 31.1086H189.624H188.581Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M201.788 33.5767C201.495 33.5494 201.252 33.5357 201.059 33.5357C199.607 33.5357 198.494 34.0924 197.722 35.2058C197.419 35.6472 197.162 36.1527 196.953 36.723C196.742 37.2943 196.638 37.7715 196.638 38.1575C196.638 38.4281 196.716 38.6493 196.873 38.8234C197.031 38.9968 197.231 39.083 197.473 39.083C198.048 39.083 198.683 38.6228 199.379 37.7024C200.074 36.782 200.421 35.9392 200.421 35.1725C200.421 35.0017 200.377 34.8574 200.285 34.7388C200.194 34.6201 200.085 34.5603 199.958 34.5603C199.516 34.5603 199.094 35.0017 198.691 35.8837C198.664 35.7736 198.649 35.6771 198.649 35.5943C198.649 35.2528 198.862 34.8942 199.287 34.5193C199.712 34.1445 200.115 33.9567 200.496 33.9567C200.75 33.9567 200.965 34.06 201.142 34.2674C201.319 34.4741 201.407 34.7268 201.407 35.0239C201.407 36.0212 200.77 37.0799 199.494 38.1985C198.401 39.1693 197.493 39.6542 196.77 39.6542C196.456 39.6542 196.194 39.5407 195.987 39.3153C195.781 39.089 195.677 38.8055 195.677 38.464C195.677 37.7084 195.94 36.9186 196.468 36.0946C196.995 35.2707 197.689 34.5603 198.55 33.9652C199.025 33.6399 199.543 33.3735 200.103 33.1643C200.663 32.9543 201.139 32.8492 201.531 32.8492C201.774 32.8492 201.895 32.9568 201.895 33.1711C201.895 33.2548 201.859 33.3897 201.788 33.5767Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M205.919 32.9897L205.843 33.2467H204.503L202.25 39.5957C202.035 39.5957 201.891 39.6213 201.819 39.67C201.747 39.7204 201.667 39.8519 201.58 40.067C201.121 41.142 200.735 41.919 200.419 42.3997C200.056 42.9717 199.637 43.4302 199.166 43.7718C198.694 44.1124 198.251 44.2841 197.837 44.2841C197.61 44.2841 197.42 44.226 197.27 44.1099C197.118 43.9946 197.042 43.8486 197.042 43.6727C197.042 43.6164 197.055 43.5378 197.083 43.4319C197.381 43.5037 197.668 43.5395 197.945 43.5395C198.911 43.5395 199.676 43.0861 200.241 42.1802C200.808 41.2726 201.643 39.1611 202.747 35.8423L203.517 33.5276L203.608 33.2467H202.689L202.78 33.0144H202.88L203.111 32.9982C203.503 32.9982 203.824 32.7173 204.072 32.1546C204.397 31.4101 204.766 30.815 205.177 30.3693C205.589 29.9227 206.164 29.4864 206.904 29.0621C207.71 28.6053 208.378 28.3765 208.907 28.3765C209.288 28.3765 209.473 28.4584 209.463 28.6249C209.457 28.6907 209.404 28.87 209.305 29.162L208.916 30.3112H208.651C208.755 29.9748 208.808 29.7187 208.808 29.5419C208.808 29.261 208.552 29.121 208.039 29.121C207.288 29.121 206.659 29.3951 206.154 29.9432C205.649 30.4914 205.153 31.4357 204.668 32.7754L204.593 32.9897H205.919Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M138.219 46.394H138.503C138.693 48.1905 138.81 49.2911 138.855 49.6966C139 51.0235 139.119 52.0549 139.214 52.79C139.308 53.526 139.438 54.4806 139.6 55.6538L138.964 55.5991L138.328 55.6393C138.245 54.7385 138.171 53.8787 138.104 53.0581C138.036 52.2385 137.959 51.4273 137.874 50.6247C137.788 49.823 137.708 49.1698 137.637 48.6644C137.087 49.6557 136.608 50.5214 136.202 51.26C135.732 52.1249 135.34 52.8737 135.024 53.5038C134.68 54.198 134.369 54.8606 134.09 55.4907H133.941L133.196 53.9632C132.871 53.2878 132.582 52.7047 132.33 52.2129C132.077 51.7219 131.765 51.1251 131.396 50.4224C131.079 49.8358 130.768 49.2509 130.462 48.6644C130.308 49.9536 130.158 51.2549 130.015 52.5706C129.87 53.8864 129.798 54.9101 129.798 55.6393L129.325 55.5991L128.836 55.6393C129.026 54.4687 129.274 52.8037 129.581 50.6452C129.888 48.4868 130.074 47.0694 130.137 46.394H130.489C130.958 47.3128 131.341 48.0658 131.64 48.6516C132 49.3449 132.429 50.1432 132.926 51.0431C133.467 52.0267 133.931 52.837 134.32 53.4774C135.619 51.1157 136.919 48.7549 138.219 46.394Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M146.037 51.4219L144.542 47.975L143.061 51.4219H146.037ZM145.027 46.1906L149.089 55.6535L148.386 55.5997L147.668 55.639C147.343 54.7117 147.068 53.9638 146.842 53.396C146.698 53.0357 146.499 52.5669 146.247 51.9897H142.808C142.284 53.2961 141.991 54.0398 141.928 54.2199C141.792 54.5811 141.639 55.0541 141.468 55.639L140.966 55.5997L140.493 55.639L144.716 46.1906H145.027Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M158.512 46.394V55.6538H158.105L157.394 54.8213L151.553 48.3536H151.418V55.6392L151.039 55.5991L150.659 55.6538V46.394L151.19 46.3906L157.611 53.3612L157.753 53.3553V46.394L158.133 46.4342L158.512 46.394Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M165.599 51.4219L164.104 47.975L162.623 51.4219H165.599ZM164.59 46.1906L168.652 55.6535L167.948 55.5997L167.231 55.639C166.906 54.7117 166.63 53.9638 166.405 53.396C166.26 53.0357 166.062 52.5669 165.809 51.9897H162.371C161.847 53.2961 161.553 54.0398 161.49 54.2199C161.355 54.5811 161.201 55.0541 161.03 55.639L160.529 55.5997L160.055 55.639L164.279 46.1906H164.59Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M178.156 48.0159H178.008C177.638 47.5924 177.184 47.2679 176.647 47.0425C176.109 46.818 175.548 46.7044 174.962 46.7044C173.779 46.7044 172.833 47.0758 172.125 47.8186C171.416 48.5606 171.062 49.6014 171.062 50.9428C171.062 52.3098 171.408 53.3736 172.098 54.1344C172.789 54.8951 173.792 55.2751 175.11 55.2751C175.49 55.2751 175.861 55.2367 176.227 55.1598C176.593 55.0838 176.925 54.9703 177.223 54.8166V51.3543L177.818 51.3953L178.414 51.3543V55.1684C177.213 55.5816 175.986 55.7891 174.732 55.7891C173.088 55.7891 171.83 55.334 170.954 54.4255C170.142 53.5794 169.736 52.4412 169.736 51.0102C169.736 49.4802 170.236 48.2831 171.238 47.4199C172.195 46.6011 173.454 46.1904 175.015 46.1904C175.9 46.1904 176.69 46.2946 177.385 46.502C177.809 46.6284 178.17 46.7864 178.468 46.9751C178.432 47.0741 178.385 47.2227 178.326 47.4216C178.267 47.6197 178.21 47.8178 178.156 48.0159Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M181.798 47.0294V50.4225H183.897C184.068 50.4225 184.297 50.4131 184.581 50.3944C184.865 50.3773 185.038 50.3679 185.102 50.3679L185.06 50.7188L185.102 51.0979C184.940 51.0979 184.713 51.0843 184.425 51.0578C184.136 51.0305 183.96 51.0168 183.897 51.0168H181.798V54.964C182.087 54.964 182.559 54.9546 183.213 54.9367C183.868 54.9188 184.212 54.9094 184.249 54.9094C184.501 54.9094 184.687 54.9034 184.804 54.8897C184.921 54.8752 185.151 54.8419 185.494 54.7881L185.454 55.1937L185.494 55.5993H180.607V46.3942H185.414L185.373 46.7827L185.414 47.178C185.143 47.1234 184.921 47.0849 184.75 47.0627C184.578 47.0405 184.393 47.0294 184.195 47.0294H182.841H181.798Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M196.148 46.394H196.432C196.621 48.1905 196.739 49.2911 196.784 49.6966C196.928 51.0235 197.048 52.0549 197.143 52.79C197.237 53.526 197.366 54.4806 197.529 55.6538L196.892 55.5991L196.256 55.6393C196.174 54.7385 196.1 53.8787 196.032 53.0581C195.965 52.2385 195.888 51.4273 195.803 50.6247C195.717 49.823 195.637 49.1698 195.565 48.6644C195.015 49.6557 194.537 50.5214 194.13 51.26C193.661 52.1249 193.268 52.8737 192.953 53.5038C192.609 54.198 192.298 54.8606 192.018 55.4907H191.869L191.125 53.9632C190.8 53.2878 190.511 52.7047 190.258 52.2129C190.005 51.7219 189.694 51.1251 189.325 50.4224C189.008 49.8358 188.697 49.2509 188.391 48.6644C188.237 49.9536 188.087 51.2549 187.944 52.5706C187.799 53.8864 187.726 54.9101 187.726 55.6393L187.253 55.5991L186.765 55.6393C186.955 54.4687 187.203 52.8037 187.51 50.6452C187.817 48.4868 188.003 47.0694 188.066 46.394H188.417C188.887 47.3128 189.27 48.0658 189.568 48.6516C189.929 49.3449 190.358 50.1432 190.854 51.0431C191.396 52.0267 191.86 52.837 192.248 53.4774C193.548 51.1157 194.848 48.7549 196.148 46.394Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M200.601 47.0294V50.4225H202.7C202.871 50.4225 203.1 50.4131 203.384 50.3944C203.668 50.3773 203.841 50.3679 203.905 50.3679L203.864 50.7188L203.905 51.0979C203.743 51.0979 203.517 51.0843 203.228 51.0578C202.939 51.0305 202.763 51.0168 202.7 51.0168H200.601V54.964C200.89 54.964 201.362 54.9546 202.017 54.9367C202.671 54.9188 203.015 54.9094 203.052 54.9094C203.304 54.9094 203.49 54.9034 203.607 54.8897C203.724 54.8752 203.954 54.8419 204.297 54.7881L204.257 55.1937L204.297 55.5993H199.41V46.3942H204.217L204.176 46.7827L204.217 47.178C203.946 47.1234 203.724 47.0849 203.553 47.0627C203.381 47.0405 203.197 47.0294 202.998 47.0294H201.645H200.601Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M214.181 46.394V55.6538H213.774L213.064 54.8213L207.222 48.3536H207.087V55.6392L206.708 55.5991L206.329 55.6538V46.394L206.86 46.3906L213.281 53.3612L213.423 53.3553V46.394L213.802 46.4342L214.181 46.394Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M219.934 47.0428V55.6536L219.339 55.6263L218.743 55.6672V47.0428C218.039 47.0428 217.538 47.0522 217.24 47.0692C216.942 47.088 216.455 47.1324 215.778 47.2041L215.819 46.7994L215.778 46.3939H222.763L222.723 46.7994L222.763 47.2041C222.429 47.1683 222.007 47.1324 221.498 47.0966C220.987 47.0607 220.467 47.0428 219.934 47.0428Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M132.56 66.0312C132.983 65.7255 133.304 65.4318 133.521 65.1526C133.8 64.7829 133.94 64.3816 133.94 63.9496C133.94 63.6251 133.841 63.3544 133.642 63.1384C133.444 62.9216 133.182 62.8131 132.857 62.8131C132.487 62.8131 132.202 62.9352 132.005 63.1786C131.806 63.4219 131.706 63.7241 131.706 64.0845C131.706 64.3184 131.767 64.5899 131.889 64.8956C132.011 65.2021 132.234 65.5804 132.56 66.0312ZM131.896 66.8824L131.788 66.9499C131.318 67.2479 130.971 67.545 130.745 67.8421C130.456 68.2204 130.312 68.6533 130.312 69.14C130.312 69.7077 130.504 70.1782 130.887 70.553C131.271 70.9262 131.742 71.1131 132.302 71.1131C132.663 71.1131 133.034 71.0235 133.412 70.8433C133.791 70.6632 134.134 70.4198 134.441 70.1133C134.08 69.6719 133.647 69.1331 133.142 68.4979C132.636 67.8626 132.221 67.3247 131.896 66.8824ZM135.47 69.6002L137.163 71.546C136.927 71.5273 136.756 71.5144 136.647 71.5059C136.54 71.4965 136.435 71.4922 136.337 71.4922L135.566 71.5324C135.339 71.2079 135.204 71.015 135.159 70.9518C135.05 70.7981 134.901 70.6137 134.712 70.3968C133.918 71.272 132.943 71.7083 131.788 71.7083C131.038 71.7083 130.423 71.5033 129.94 71.0935C129.456 70.6828 129.215 70.1364 129.215 69.4507C129.215 68.8471 129.45 68.2887 129.919 67.7747C130.307 67.3512 130.862 66.9593 131.584 66.599L131.666 66.558C131.359 66.0986 131.156 65.7691 131.056 65.5718C130.858 65.1748 130.759 64.8017 130.759 64.449C130.759 63.8454 130.95 63.3613 131.333 62.9958C131.718 62.6321 132.221 62.4494 132.844 62.4494C133.367 62.4494 133.795 62.5723 134.13 62.8208C134.464 63.0684 134.631 63.4176 134.631 63.8684C134.631 64.3731 134.432 64.8503 134.036 65.3012C133.773 65.5983 133.358 65.9364 132.79 66.3147C133.34 67.0173 133.895 67.7209 134.455 68.4236L135.172 69.2347C135.425 68.8727 135.702 68.4347 136.004 67.9241C136.307 67.4118 136.567 66.9567 136.783 66.558C136.837 66.6493 136.907 66.7416 136.994 66.8363C137.078 66.932 137.18 67.0242 137.298 67.1155C136.684 68.0565 136.074 68.8847 135.47 69.6002Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M146.205 62.9627V71.5735L145.61 71.5462L145.014 71.5872V62.9627C144.31 62.9627 143.809 62.9721 143.512 62.9892C143.213 63.008 142.727 63.0524 142.049 63.1241L142.09 62.7194L142.049 62.3138H149.035L148.995 62.7194L149.035 63.1241C148.701 63.0882 148.279 63.0524 147.769 63.0165C147.259 62.9806 146.738 62.9627 146.205 62.9627Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M151.701 62.9494V66.3425H153.8C153.971 66.3425 154.2 66.3331 154.484 66.3144C154.768 66.2973 154.942 66.2879 155.005 66.2879L154.964 66.6388L155.005 67.0179C154.843 67.0179 154.617 67.0043 154.328 66.9778C154.039 66.9505 153.863 66.9368 153.8 66.9368H151.701V70.884C151.99 70.884 152.463 70.8746 153.117 70.8567C153.771 70.8388 154.115 70.8294 154.152 70.8294C154.405 70.8294 154.59 70.8234 154.707 70.8097C154.824 70.7952 155.054 70.7619 155.397 70.7081L155.357 71.1137L155.397 71.5193H150.51V62.3142H155.317L155.276 62.7027L155.317 63.098C155.046 63.0434 154.824 63.0049 154.653 62.9827C154.481 62.9605 154.297 62.9494 154.098 62.9494H152.745H151.701Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M164.414 70.1002L164.347 70.9438C163.95 71.2127 163.489 71.4065 162.967 71.5278C162.442 71.6473 161.905 71.7088 161.356 71.7088C159.874 71.7088 158.711 71.2716 157.862 70.399C157.014 69.5264 156.59 68.3516 156.59 66.8762C156.59 65.3999 157.082 64.2259 158.065 63.3533C159.004 62.5251 160.213 62.111 161.693 62.111C162.172 62.111 162.661 62.1648 163.162 62.2732C163.664 62.3816 164.144 62.5353 164.604 62.7325C164.55 62.8674 164.496 63.0374 164.442 63.2397C164.388 63.4421 164.347 63.6205 164.32 63.7734L164.224 63.787C164.125 63.6606 163.95 63.5078 163.697 63.3268C163.038 62.8598 162.353 62.6241 161.639 62.6241C160.447 62.6241 159.518 63.0519 158.85 63.9066C158.228 64.6989 157.916 65.7064 157.916 66.9299C157.916 68.2167 158.251 69.2464 158.918 70.0208C159.586 70.7944 160.462 71.1811 161.545 71.1811C162.032 71.1811 162.533 71.0855 163.047 70.8943C163.562 70.703 164.018 70.4383 164.414 70.1002Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M173.215 66.1929V62.314L173.81 62.3541L174.406 62.314V71.5737L173.81 71.5191L173.215 71.5592V66.9101C172.772 66.9101 172.415 66.905 172.145 66.8956C171.062 66.8598 170.471 66.8427 170.371 66.8427C169.939 66.8427 169.384 66.8529 168.706 66.876C168.03 66.8982 167.632 66.9101 167.515 66.9101V71.5737L166.919 71.5191L166.323 71.5592V62.314L166.919 62.3541L167.515 62.314V66.1929C167.966 66.1929 168.532 66.2049 169.214 66.2271C169.895 66.2493 170.281 66.2604 170.371 66.2604C170.805 66.2604 171.157 66.2561 171.428 66.2467C172.511 66.2108 173.106 66.1929 173.215 66.1929Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M184.844 62.3141V71.5738H184.437L183.726 70.7414L177.885 64.2736H177.75V71.5593L177.371 71.5192L176.991 71.5738V62.3141L177.522 62.3107L183.943 69.2813L184.085 69.2753V62.3141L184.465 62.3542L184.844 62.3141Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M195.553 66.8358C195.553 66.2236 195.494 65.6815 195.377 65.2093C195.259 64.7371 195.034 64.2897 194.7 63.8662C194.365 63.4436 193.953 63.1191 193.461 62.8946C192.97 62.6692 192.443 62.5565 191.884 62.5565C190.701 62.5565 189.77 62.9689 189.088 63.792C188.407 64.615 188.066 65.7156 188.066 67.092C188.066 68.4146 188.427 69.4537 189.15 70.2093C189.826 70.9111 190.697 71.2629 191.761 71.2629C193.035 71.2629 194.023 70.7139 194.727 69.6159C195.278 68.7612 195.553 67.8348 195.553 66.8358ZM191.722 71.7086C190.215 71.7086 189.007 71.274 188.1 70.4065C187.193 69.5373 186.739 68.3796 186.739 66.9298C186.739 65.4808 187.222 64.3068 188.189 63.406C189.118 62.5428 190.304 62.1108 191.749 62.1108C193.156 62.1108 194.329 62.4762 195.268 63.2045C196.342 64.0413 196.879 65.2161 196.879 66.7274C196.879 68.2216 196.401 69.4246 195.445 70.3391C194.488 71.2518 193.247 71.7086 191.722 71.7086Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M199.845 62.3141V70.8839C200.134 70.8839 200.606 70.8745 201.26 70.8566C201.914 70.8387 202.259 70.8301 202.295 70.8301C202.512 70.8301 202.778 70.8113 203.094 70.7755C203.311 70.7396 203.473 70.7174 203.581 70.708L203.54 71.1136L203.581 71.5192H198.653V62.3141L199.249 62.3542L199.845 62.3141Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M213.599 66.8358C213.599 66.2236 213.54 65.6815 213.423 65.2093C213.305 64.7371 213.08 64.2897 212.746 63.8662C212.411 63.4436 211.999 63.1191 211.507 62.8946C211.016 62.6692 210.489 62.5565 209.93 62.5565C208.747 62.5565 207.816 62.9689 207.134 63.792C206.453 64.615 206.112 65.7156 206.112 67.092C206.112 68.4146 206.473 69.4537 207.196 70.2093C207.872 70.9111 208.743 71.2629 209.807 71.2629C211.081 71.2629 212.069 70.7139 212.773 69.6159C213.324 68.7612 213.599 67.8348 213.599 66.8358ZM209.768 71.7086C208.26 71.7086 207.053 71.274 206.146 70.4065C205.239 69.5373 204.785 68.3796 204.785 66.9298C204.785 65.4808 205.268 64.3068 206.235 63.406C207.164 62.5428 208.35 62.1108 209.795 62.1108C211.202 62.1108 212.375 62.4762 213.314 63.2045C214.388 64.0413 214.925 65.2161 214.925 66.7274C214.925 68.2216 214.446 69.4246 213.49 70.3391C212.534 71.2518 211.293 71.7086 209.768 71.7086Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M224.781 63.9358H224.633C224.263 63.5123 223.809 63.1879 223.272 62.9625C222.734 62.7379 222.173 62.6244 221.587 62.6244C220.404 62.6244 219.458 62.9958 218.75 63.7386C218.041 64.4806 217.687 65.5214 217.687 66.8627C217.687 68.2297 218.033 69.2936 218.723 70.0543C219.414 70.8151 220.417 71.195 221.735 71.195C222.115 71.195 222.486 71.1566 222.852 71.0798C223.218 71.0038 223.55 70.8902 223.848 70.7365V67.2743L224.443 67.3153L225.039 67.2743V71.0883C223.838 71.5016 222.611 71.709 221.357 71.709C219.713 71.709 218.455 71.254 217.579 70.3455C216.767 69.4993 216.361 68.3612 216.361 66.9302C216.361 65.4001 216.861 64.2031 217.863 63.3399C218.82 62.521 220.079 62.1104 221.64 62.1104C222.525 62.1104 223.315 62.2145 224.01 62.422C224.434 62.5484 224.795 62.7063 225.093 62.895C225.057 62.9941 225.01 63.1426 224.951 63.3416C224.892 63.5397 224.835 63.7377 224.781 63.9358Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M230.805 67.417V71.5734L230.209 71.5196L229.613 71.5597V67.6663L226.297 62.3137L227.055 62.3538L227.799 62.3137C228.097 62.8994 228.542 63.7105 229.133 64.7471C229.723 65.7836 230.137 66.4812 230.372 66.8424C230.516 66.6707 230.778 66.2566 231.157 65.5983C231.428 65.1296 231.78 64.4943 232.213 63.6926C232.457 63.2332 232.705 62.7739 232.958 62.3137L233.486 62.3538L234.014 62.3137C233.679 62.738 233.359 63.1897 233.052 63.667L231.564 66.0637C231.382 66.3429 231.24 66.5743 231.137 66.7544C231.033 66.9346 230.922 67.1557 230.805 67.417Z" fill="#879DA5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M152.103 12.588C153.29 12.588 154.338 12.617 155.249 12.6759C156.16 12.734 157.041 12.8219 157.893 12.938C157.877 12.8048 157.852 12.6213 157.819 12.3873C157.786 12.1542 157.769 11.9792 157.769 11.8622C157.769 11.729 157.781 11.5617 157.806 11.361C157.831 11.1612 157.86 10.9691 157.893 10.7856H148.343V18.4034V20.6216V24.6175H157.893C157.877 24.4843 157.852 24.3007 157.819 24.0668C157.786 23.8337 157.769 23.6587 157.769 23.5417C157.769 23.4085 157.781 23.2411 157.806 23.0413C157.831 22.8407 157.86 22.6494 157.893 22.465C157.041 22.582 156.16 22.6699 155.249 22.728C154.338 22.7869 153.29 22.8159 152.103 22.8159V20.6216V19.6713V18.4034V18.4008H153.985C154.453 18.4008 154.983 18.4256 155.577 18.4759C156.17 18.5263 156.668 18.5758 157.069 18.6262C157.052 18.493 157.027 18.3095 156.994 18.0755C156.96 17.8416 156.943 17.6665 156.943 17.5496C156.943 17.4164 156.956 17.249 156.981 17.0492C157.006 16.8486 157.036 16.6573 157.069 16.4737C156.383 16.5736 155.862 16.636 155.502 16.6616C155.142 16.6863 154.637 16.6983 153.985 16.6983H152.103V16.1322V12.588Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M148.13 9.51905H158.107V7.72943H148.13V9.51905Z" fill="#ECA22D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M68.2769 22.4111C63.9379 22.4111 59.6819 24.0777 56.0947 28.2435C54.7589 24.1606 51.6719 22.4111 48 22.4111C44.1202 22.4111 40.3192 23.8242 36.9756 27.1686V32.5502C38.8218 30.9672 40.9203 29.993 42.5759 29.993C44.8291 29.993 46.1649 31.1594 46.1649 34.8257V71.401H56.9293V33.7422V32.8252C58.7644 31.0757 61.1006 29.993 62.8528 29.993C65.0223 29.993 66.358 31.1594 66.358 34.8257V71.401H77.2053V33.7422C77.2053 26.1602 73.4504 22.4111 68.2769 22.4111Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18.3542 71.5185C12.211 71.498 7.02459 69.2823 3.38001 64.1611C-0.474078 58.7461 -0.89737 52.8582 2.27603 47.006C5.69314 40.7048 11.243 37.8693 18.3098 37.9068C11.6491 49.144 11.6799 60.1976 18.3542 71.5185Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M84.1336 30.6771H95.5651V30.6592H102.825V23.2437H95.5651V15.9802L84.1336 9.39041V23.2437H79.2944V30.6592H84.1336V30.6771Z" fill="#0C2D46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M99.9046 62.9862C96.9844 62.9862 95.5657 61.6525 95.5657 58.4037V36.9036H84.1343V59.4035C84.1343 67.2357 86.8878 71.9838 96.1498 71.9838C98.9871 71.9838 101.49 71.7336 103.41 71.4006V62.6523C102.325 62.9025 101.073 62.9862 99.9046 62.9862Z" fill="#0C2D46"/>
              </svg>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-demont-orange font-light" style={{fontSize: '55px'}}>Thank you</h2>
              <p className="text-black font-normal -mt-4" style={{fontSize: '32px'}}>for your interest!</p>
              <p className="text-black text-center mt-16 px-16 mx-2 leading-relaxed" style={{fontSize: '18px'}}>
                Your inquiry has been successfully submitted. Our Academic Advisor shall get in touch with you within the next 48 hours.
              </p>
              <p className="text-black text-center mt-16 px-16 mx-2" style={{fontSize: '18px'}}>
                Please don't hesitate to contact us directly at:
              </p>
              
              <div className="flex justify-center gap-2 mt-8 px-8">
                <button className="bg-demont-orange text-white font-medium flex items-center justify-center gap-2" style={{
                  width: '257px',
                  height: '48px',
                  borderRadius: '5px'
                }}>
                  <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.30982 0.0233456C6.53139 -0.141953 7.55855 0.591997 8.04457 1.54596L9.24006 3.89332C9.9033 5.19592 9.52219 6.72435 8.51696 7.68587C7.92306 8.25336 7.32621 8.90175 6.98007 9.4739C6.95714 9.51468 6.94998 9.56221 6.95991 9.60776C7.27998 11.3108 8.45531 12.9935 9.50381 14.2C9.55655 14.2576 9.62537 14.2986 9.70168 14.3179C9.778 14.3373 9.85843 14.3341 9.93293 14.3089L12.2889 13.586C12.9236 13.3912 13.6051 13.4012 14.2336 13.6144C14.862 13.8277 15.4044 14.233 15.7812 14.771L17.4864 17.2069C17.9487 17.8675 18.1828 18.7638 17.8284 19.6258C17.5119 20.3958 16.8996 21.5064 15.7859 22.245C14.6301 23.0109 13.047 23.302 10.9755 22.6047C8.66098 21.8247 6.47449 19.8691 4.66139 17.3681C2.83763 14.8513 1.3363 11.7078 0.425905 8.42972C-0.434707 5.33502 0.0845054 3.25133 1.30667 1.90973C2.48556 0.615278 4.17478 0.176422 5.30982 0.0233456ZM6.71868 2.19668C6.44781 1.66527 5.96476 1.40278 5.51134 1.46389C4.50314 1.60009 3.24067 1.96852 2.41148 2.87941C1.62555 3.74257 1.08144 5.26285 1.85433 8.04674C2.72265 11.1711 4.15226 14.157 5.86815 16.5241C7.5947 18.9064 9.55657 20.5885 11.4556 21.2282C13.1478 21.798 14.2354 21.5163 14.9561 21.039C15.7184 20.5332 16.1872 19.7294 16.4539 19.081C16.576 18.7842 16.5233 18.4 16.2648 18.031L14.5596 15.5958C14.3623 15.3139 14.0782 15.1016 13.7491 14.9898C13.4199 14.8781 13.063 14.8728 12.7305 14.9747L10.3745 15.6976C9.67036 15.9136 8.87732 15.7209 8.37648 15.1447C7.28531 13.8892 5.89482 11.9639 5.50185 9.87143C5.42674 9.47928 5.49919 9.07368 5.70574 8.73005C6.15502 7.98854 6.86627 7.23247 7.48209 6.64345C8.08369 6.06839 8.25439 5.2128 7.91417 4.54403L6.71868 2.19668Z" fill="white"/>
                  </svg>
                  <span style={{fontSize: '18px'}}>+971 45804285</span>
                </button>
                <button className="bg-[#0C2D46] text-white font-medium flex items-center justify-center gap-2" style={{
                  width: '257px',
                  height: '48px',
                  borderRadius: '5px'
                }}>
                  <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.1667 20H2.5C1.11667 20 0 18.8833 0 17.5V2.5C0 1.11667 1.11667 0 2.5 0H24.1667C25.55 0 26.6667 1.11667 26.6667 2.5V17.5C26.6667 18.8833 25.55 20 24.1667 20ZM2.5 1.66667C2.03333 1.66667 1.66667 2.03333 1.66667 2.5V17.5C1.66667 17.9667 2.03333 18.3333 2.5 18.3333H24.1667C24.6333 18.3333 25 17.9667 25 17.5V2.5C25 2.03333 24.6333 1.66667 24.1667 1.66667H2.5Z" fill="white"/>
                    <path d="M13.3333 13.2669C12.1666 13.2669 11.1 12.8003 10.3 11.9503L1.54995 2.65028C1.23329 2.31695 1.24995 1.78361 1.58329 1.46695C1.91662 1.15028 2.44995 1.16695 2.76662 1.50028L11.5166 10.8003C12.4666 11.8169 14.2 11.8169 15.15 10.8003L23.9 1.51695C24.2166 1.18361 24.75 1.16695 25.0833 1.48361C25.4166 1.80028 25.4333 2.33361 25.1166 2.66695L16.3666 11.9669C15.5666 12.8169 14.5 13.2836 13.3333 13.2836V13.2669Z" fill="white"/>
                  </svg>
                  <span style={{fontSize: '18px'}}>hello@demont.ac.ae</span>
                </button>
              </div>
              
              <div className="flex justify-center gap-4 mt-24">
                <a href="#" className="flex items-center justify-center transition-colors rounded-full hover:bg-demont-orange" style={{ width: '37px', height: '37px' }}>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.9974 18.5006C36.9974 27.8443 30.0716 35.5689 21.0743 36.8224C20.2331 36.9391 19.3724 37 18.4987 37C17.4902 37 16.4999 36.9196 15.5355 36.7641C6.72751 35.3459 0 27.7082 0 18.5006C0 8.28329 8.283 0 18.5 0C28.717 0 37 8.28329 37 18.5006H36.9974Z" fill="#0C2D46"/>
                    <path d="M21.0741 15.85533V19.8855H26.0595L25.2701 25.3144H21.0741L21.0741 37.8223C20.2329 37.9389 19.3722 38 18.4985 38C17.4900 38 16.4997 37.9195 15.5353 37.7639L15.5353 25.3144H10.9375L10.9375 19.8855H15.5353L15.5353 14.95441C15.5353 11.8952 18.015 9.414063 21.0754 9.414063V9.416658C21.0845 9.416658 21.0923 9.414063 21.1014 9.414063L26.0608 9.414063V14.10923H22.8202C21.8571 14.10923 21.0754 14.8909 21.0754 15.854L21.0741 15.85533Z" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center transition-colors rounded-full hover:bg-demont-orange" style={{ width: '37px', height: '37px' }}>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.9974 18.5006C36.9974 27.8443 30.0716 35.5689 21.0743 36.8224C20.2331 36.9391 19.3724 37 18.4987 37C17.4902 37 16.4999 36.9196 15.5355 36.7641C6.72751 35.3459 0 27.7082 0 18.5006C0 8.28329 8.283 0 18.5 0C28.717 0 37 8.28329 37 18.5006H36.9974Z" fill="#0C2D46"/>
                    <path d="M7.50237 8.15967L16.0342 19.567L7.44922 28.842H9.38192L16.8989 20.722L22.9718 28.842H29.5476L20.5361 16.793L28.5275 8.15967L26.5947 8.15967L19.6728 15.638L14.0795 8.15967L7.50365 8.15967H7.50237ZM10.3437 9.58299L13.364 9.58299L26.7036 27.4186H23.6834L10.3437 9.58299Z" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center transition-colors rounded-full hover:bg-demont-orange" style={{ width: '37px', height: '37px' }}>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5421 0L18.4579 0C8.26387 0 0 8.26387 0 18.4579L0 18.5421C0 28.7361 8.26387 37 18.4579 37H18.5421C28.7361 37 37 28.7361 37 18.5421V18.4579C37 8.26387 28.7361 0 18.5421 0Z" fill="#0C2D46"/>
                    <path d="M24.225 7.52734L12.7761 7.52734C9.61317 7.52734 7.04004 10.1005 7.04004 13.2634L7.04004 23.7374C7.04004 26.9004 9.61317 29.4735 12.7761 29.4735H24.225C27.3879 29.4735 29.961 26.9004 29.961 23.7374V13.2634C29.961 10.1005 27.3879 7.52734 24.225 7.52734ZM9.06355 13.2634C9.06355 11.2166 10.7293 9.55085 12.7761 9.55085L24.225 9.55085C26.2718 9.55085 27.9375 11.2166 27.9375 13.2634V23.7374C27.9375 25.7843 26.2718 27.45 24.225 27.45H12.7761C10.7293 27.45 9.06355 25.7843 9.06355 23.7374L9.06355 13.2634Z" fill="white"/>
                    <path d="M18.5006 23.8351C21.4419 23.8351 23.8361 21.4422 23.8361 18.4996C23.8361 15.557 21.4432 13.1641 18.5006 13.1641C15.558 13.1641 13.165 15.557 13.165 18.4996C13.165 21.4422 15.558 23.8351 18.5006 23.8351ZM18.5006 15.1889C20.327 15.1889 21.8126 16.6744 21.8126 18.5009C21.8126 20.3274 20.327 21.8129 18.5006 21.8129C16.6741 21.8129 15.1886 20.3274 15.1886 18.5009C15.1886 16.6744 16.6741 15.1889 18.5006 15.1889Z" fill="white"/>
                    <path d="M24.3302 14.0256C25.1222 14.0256 25.7677 13.3813 25.7677 12.588C25.7677 11.7947 25.1235 11.1504 24.3302 11.1504C23.5368 11.1504 22.8926 11.7947 22.8926 12.588C22.8926 13.3813 23.5368 14.0256 24.3302 14.0256Z" fill="white"/>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center transition-colors rounded-full hover:bg-demont-orange" style={{ width: '37px', height: '37px' }}>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5421 0L18.4579 0C8.26388 0 0 8.26387 0 18.4579L0 18.5421C0 28.7361 8.26388 37 18.4579 37H18.5421C28.7361 37 37 28.7361 37 18.5421V18.4579C37 8.26387 28.7361 0 18.5421 0Z" fill="#0C2D46"/>
                    <path d="M8.82355 12.2984C8.33614 11.846 8.09375 11.286 8.09375 10.6197C8.09375 9.95343 8.33744 9.3688 8.82355 8.91509C9.31095 8.46269 9.93836 8.23584 10.7071 8.23584C11.4758 8.23584 12.0785 8.46269 12.5647 8.91509C13.0521 9.3675 13.2945 9.93657 13.2945 10.6197C13.2945 11.3029 13.0508 11.846 12.5647 12.2984C12.0773 12.7508 11.4589 12.9777 10.7071 12.9777C9.95521 12.9777 9.31095 12.7508 8.82355 12.2984ZM12.8848 14.8936L12.8848 28.7639H8.50207L8.50207 14.8936H12.8848Z" fill="white"/>
                    <path d="M27.4744 16.264C28.4298 17.3011 28.9069 18.7244 28.9069 20.5366V28.5192H24.7445V21.0992C24.7445 20.1853 24.5073 19.475 24.0341 18.9694C23.561 18.4638 22.9232 18.2098 22.1247 18.2098C21.3262 18.2098 20.6884 18.4625 20.2152 18.9694C19.7421 19.475 19.5049 20.1853 19.5049 21.0992V28.5192H15.3179L15.3179 14.855H19.5049V16.6672C19.9287 16.0631 20.5004 15.5861 21.2186 15.2348C21.9367 14.8835 22.7443 14.7085 23.6426 14.7085C25.2423 14.7085 26.5204 15.227 27.4744 16.2628V16.264Z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  )
}

export default App