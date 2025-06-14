import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="text-white bg-demont-dark">
      <div className="page-container page-boundaries px-8">
        <div className="py-16 page-content" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div className="grid md:grid-cols-4" style={{ gap: '64px 0px', columnGap: '0px' }}>
          <div style={{ marginRight: '80px' }}>
            <div className="flex items-center gap-2 mb-4">
              <div>
                <img src="/footer-logo.png" alt="DEMONT Institute" style={{ width: '282px', height: '87px' }} />
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-white">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#ECA22D" stroke="#ECA22D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" fill="#0C2D46" stroke="#ECA22D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#FFFFFF'
              }}>
                802, 8th Floor, Block No. 10, Academic City - Dubai
              </p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <img src="/toll-free.png" alt="Toll Free" style={{ width: '30px', height: '30px' }} />
              </div>
              <p style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#FFFFFF'
              }}>
                800 33 666 8
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center transition-colors rounded-full hover:bg-demont-orange group" style={{ width: '37px', height: '37px' }}>
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.9974 18.5006C36.9974 27.8443 30.0716 35.5689 21.0743 36.8224C20.2331 36.9391 19.3724 37 18.4987 37C17.4902 37 16.4999 36.9196 15.5355 36.7641C6.72751 35.3459 0 27.7082 0 18.5006C0 8.28329 8.283 0 18.5 0C28.717 0 37 8.28329 37 18.5006H36.9974Z" fill="white" className="group-hover:fill-[#ECA22D] transition-colors"/>
                  <path d="M21.0741 15.85533V19.8855H26.0595L25.2701 25.3144H21.0741L21.0741 37.8223C20.2329 37.9389 19.3722 38 18.4985 38C17.4900 38 16.4997 37.9195 15.5353 37.7639L15.5353 25.3144H10.9375L10.9375 19.8855H15.5353L15.5353 14.95441C15.5353 11.8952 18.015 9.414063 21.0754 9.414063V9.416658C21.0845 9.416658 21.0923 9.414063 21.1014 9.414063L26.0608 9.414063V14.10923H22.8202C21.8571 14.10923 21.0754 14.8909 21.0754 15.854L21.0741 15.85533Z" fill="#181818" className="group-hover:fill-white transition-colors"/>
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center transition-colors rounded-full hover:bg-demont-orange group" style={{ width: '37px', height: '37px' }}>
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.9974 18.5006C36.9974 27.8443 30.0716 35.5689 21.0743 36.8224C20.2331 36.9391 19.3724 37 18.4987 37C17.4902 37 16.4999 36.9196 15.5355 36.7641C6.72751 35.3459 0 27.7082 0 18.5006C0 8.28329 8.283 0 18.5 0C28.717 0 37 8.28329 37 18.5006H36.9974Z" fill="white" className="group-hover:fill-[#ECA22D] transition-colors"/>
                  <path d="M7.50237 8.15967L16.0342 19.567L7.44922 28.842H9.38192L16.8989 20.722L22.9718 28.842H29.5476L20.5361 16.793L28.5275 8.15967L26.5947 8.15967L19.6728 15.638L14.0795 8.15967L7.50365 8.15967H7.50237ZM10.3437 9.58299L13.364 9.58299L26.7036 27.4186H23.6834L10.3437 9.58299Z" fill="#181818" className="group-hover:fill-white transition-colors"/>
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center transition-colors rounded-full hover:bg-demont-orange group" style={{ width: '37px', height: '37px' }}>
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5421 0L18.4579 0C8.26387 0 0 8.26387 0 18.4579L0 18.5421C0 28.7361 8.26387 37 18.4579 37H18.5421C28.7361 37 37 28.7361 37 18.5421V18.4579C37 8.26387 28.7361 0 18.5421 0Z" fill="white" className="group-hover:fill-[#ECA22D] transition-colors"/>
                  <path d="M24.225 7.52734L12.7761 7.52734C9.61317 7.52734 7.04004 10.1005 7.04004 13.2634L7.04004 23.7374C7.04004 26.9004 9.61317 29.4735 12.7761 29.4735H24.225C27.3879 29.4735 29.961 26.9004 29.961 23.7374V13.2634C29.961 10.1005 27.3879 7.52734 24.225 7.52734ZM9.06355 13.2634C9.06355 11.2166 10.7293 9.55085 12.7761 9.55085L24.225 9.55085C26.2718 9.55085 27.9375 11.2166 27.9375 13.2634V23.7374C27.9375 25.7843 26.2718 27.45 24.225 27.45H12.7761C10.7293 27.45 9.06355 25.7843 9.06355 23.7374L9.06355 13.2634Z" fill="#181818" className="group-hover:fill-white transition-colors"/>
                  <path d="M18.5006 23.8351C21.4419 23.8351 23.8361 21.4422 23.8361 18.4996C23.8361 15.557 21.4432 13.1641 18.5006 13.1641C15.558 13.1641 13.165 15.557 13.165 18.4996C13.165 21.4422 15.558 23.8351 18.5006 23.8351ZM18.5006 15.1889C20.327 15.1889 21.8126 16.6744 21.8126 18.5009C21.8126 20.3274 20.327 21.8129 18.5006 21.8129C16.6741 21.8129 15.1886 20.3274 15.1886 18.5009C15.1886 16.6744 16.6741 15.1889 18.5006 15.1889Z" fill="#181818" className="group-hover:fill-white transition-colors"/>
                  <path d="M24.3302 14.0256C25.1222 14.0256 25.7677 13.3813 25.7677 12.588C25.7677 11.7947 25.1235 11.1504 24.3302 11.1504C23.5368 11.1504 22.8926 11.7947 22.8926 12.588C22.8926 13.3813 23.5368 14.0256 24.3302 14.0256Z" fill="#181818" className="group-hover:fill-white transition-colors"/>
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center transition-colors rounded-full hover:bg-demont-orange group" style={{ width: '37px', height: '37px' }}>
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5421 0L18.4579 0C8.26388 0 0 8.26387 0 18.4579L0 18.5421C0 28.7361 8.26388 37 18.4579 37H18.5421C28.7361 37 37 28.7361 37 18.5421V18.4579C37 8.26387 28.7361 0 18.5421 0Z" fill="white" className="group-hover:fill-[#ECA22D] transition-colors"/>
                  <path d="M8.82355 12.2984C8.33614 11.846 8.09375 11.286 8.09375 10.6197C8.09375 9.95343 8.33744 9.3688 8.82355 8.91509C9.31095 8.46269 9.93836 8.23584 10.7071 8.23584C11.4758 8.23584 12.0785 8.46269 12.5647 8.91509C13.0521 9.3675 13.2945 9.93657 13.2945 10.6197C13.2945 11.3029 13.0508 11.846 12.5647 12.2984C12.0773 12.7508 11.4589 12.9777 10.7071 12.9777C9.95521 12.9777 9.31095 12.7508 8.82355 12.2984ZM12.8848 14.8936L12.8848 28.7639H8.50207L8.50207 14.8936H12.8848Z" fill="#181818" className="group-hover:fill-white transition-colors"/>
                  <path d="M27.4744 16.264C28.4298 17.3011 28.9069 18.7244 28.9069 20.5366V28.5192H24.7445V21.0992C24.7445 20.1853 24.5073 19.475 24.0341 18.9694C23.561 18.4638 22.9232 18.2098 22.1247 18.2098C21.3262 18.2098 20.6884 18.4625 20.2152 18.9694C19.7421 19.475 19.5049 20.1853 19.5049 21.0992V28.5192H15.3179L15.3179 14.855H19.5049V16.6672C19.9287 16.0631 20.5004 15.5861 21.2186 15.2348C21.9367 14.8835 22.7443 14.7085 23.6426 14.7085C25.2423 14.7085 26.5204 15.227 27.4744 16.2628V16.264Z" fill="#181818" className="group-hover:fill-white transition-colors"/>
                </svg>
              </a>
            </div>
          </div>

          <div style={{ marginRight: '32px', marginLeft: '100px' }}>
            <h4 className="mb-4 text-lg font-semibold font-poppins" style={{ marginLeft: '16px' }}>Menu</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 group">
                <span className="w-[9px] h-[1px] bg-white flex-shrink-0 transition-all duration-300 group-hover:bg-[#ECA22D] group-hover:w-[18px]"></span>
                <a href="#" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-2 font-poppins">About Us</a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-[9px] h-[1px] bg-white flex-shrink-0 transition-all duration-300 group-hover:bg-[#ECA22D] group-hover:w-[18px]"></span>
                <a href="#" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-2 font-poppins">Programs</a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-[9px] h-[1px] bg-white flex-shrink-0 transition-all duration-300 group-hover:bg-[#ECA22D] group-hover:w-[18px]"></span>
                <a href="#" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-2 font-poppins">Our Partners</a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-[9px] h-[1px] bg-white flex-shrink-0 transition-all duration-300 group-hover:bg-[#ECA22D] group-hover:w-[18px]"></span>
                <a href="#" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-2 font-poppins">Our Blogs</a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-[9px] h-[1px] bg-white flex-shrink-0 transition-all duration-300 group-hover:bg-[#ECA22D] group-hover:w-[18px]"></span>
                <a href="#" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-2 font-poppins">Contact Us</a>
              </li>
            </ul>
          </div>

          <div style={{ marginRight: '32px' }}>
            <h4 className="mb-4 text-lg font-semibold font-poppins" style={{ marginLeft: '16px' }}>Information</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 group">
                <span className="w-[9px] h-[1px] bg-white flex-shrink-0 transition-all duration-300 group-hover:bg-[#ECA22D] group-hover:w-[18px]"></span>
                <a href="#" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-2 font-poppins">Skill Master</a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-[9px] h-[1px] bg-white flex-shrink-0 transition-all duration-300 group-hover:bg-[#ECA22D] group-hover:w-[18px]"></span>
                <a href="#" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-2 font-poppins">DeLead</a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-[9px] h-[1px] bg-white flex-shrink-0 transition-all duration-300 group-hover:bg-[#ECA22D] group-hover:w-[18px]"></span>
                <a href="#" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-2 font-poppins">DeCode</a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-[9px] h-[1px] bg-white flex-shrink-0 transition-all duration-300 group-hover:bg-[#ECA22D] group-hover:w-[18px]"></span>
                <a href="#" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-2 font-poppins">Privacy Policy</a>
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-[9px] h-[1px] bg-white flex-shrink-0 transition-all duration-300 group-hover:bg-[#ECA22D] group-hover:w-[18px]"></span>
                <a href="#" className="text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-2 font-poppins">Refund Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold font-poppins">Get in Touch</h4>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-2 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-demont-orange font-poppins"
                style={{ backgroundColor: '#E7EBED', width: '272px', height: '40px', borderRadius: '25px' }}
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-demont-orange font-poppins"
                style={{ backgroundColor: '#E7EBED', width: '272px', height: '40px', borderRadius: '25px' }}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="px-4 py-2 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-demont-orange font-poppins"
                style={{ backgroundColor: '#E7EBED', width: '272px', height: '40px', borderRadius: '25px' }}
              />
              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows="3"
                  className="px-4 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-demont-orange font-poppins resize-none"
                  style={{ backgroundColor: '#E7EBED', width: '272px', height: '77px', borderRadius: '25px' }}
                ></textarea>
                <button
                  type="submit"
                  className="absolute flex items-center justify-center transition-colors font-poppins group"
                  style={{ 
                    width: '38.88px', 
                    height: '38.88px',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.6856 4.55664C39.6396 1.91768 37.0824 -0.639568 34.4434 0.31664L2.1907 11.9811C-0.457092 12.9395 -0.777301 16.5523 1.65849 17.9634L11.9537 23.9237L21.147 14.7304C21.5635 14.3282 22.1214 14.1056 22.7004 14.1106C23.2794 14.1156 23.8333 14.3479 24.2427 14.7573C24.6522 15.1668 24.8844 15.7207 24.8894 16.2997C24.8945 16.8787 24.6719 17.4365 24.2696 17.853L15.0763 27.0463L21.0388 37.3416C22.4477 39.7773 26.0606 39.4549 27.019 36.8093L38.6856 4.55664Z" fill="#ECA22D" className="group-hover:fill-white transition-colors"/>
                  </svg>
                </button>
              </div>
            </form>
            <div className="flex items-start gap-2 mt-3" style={{ width: '272px' }}>
              <input
                type="checkbox"
                id="agree-checkbox"
                className="w-4 h-4 text-demont-orange bg-gray-100 border-gray-300 rounded focus:ring-demont-orange focus:ring-2"
              />
              <label htmlFor="agree-checkbox" className="text-xs text-gray-400 font-poppins">
                I agree to share my contact info and receive exclusive offers via email or call.
              </label>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="py-4 bg-white page-container">
        <div className="text-sm text-center text-gray-400 page-content">
          <p className="font-poppins">© 2025 DEMONT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer