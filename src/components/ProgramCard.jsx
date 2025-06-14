import React from 'react'
import { FaClock, FaGraduationCap, FaAward, FaBook } from 'react-icons/fa'

const ProgramCard = ({ program }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <img 
          src={program.image} 
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-demont-orange text-white px-3 py-1 rounded-full text-sm font-medium font-poppins">
          {program.provider}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-demont-navy mb-3 line-clamp-2 font-poppins">
          {program.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 font-poppins">
          {program.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <FaClock className="text-demont-orange" />
            <div>
              <p className="text-xs text-gray-500 font-poppins">Duration</p>
              <p className="font-semibold text-sm font-poppins">{program.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaGraduationCap className="text-demont-orange" />
            <div>
              <p className="text-xs text-gray-500 font-poppins">Course Level</p>
              <p className="font-semibold text-sm font-poppins">{program.level}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaAward className="text-demont-orange" />
            <div>
              <p className="text-xs text-gray-500 font-poppins">Credits</p>
              <p className="font-semibold text-sm font-poppins">{program.credits}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaBook className="text-demont-orange" />
            <div>
              <p className="text-xs text-gray-500 font-poppins">Modules</p>
              <p className="font-semibold text-sm font-poppins">{program.modules}</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-demont-orange text-white py-3 rounded-md font-medium hover:bg-orange-600 transition-all duration-200 flex items-center justify-center gap-2 font-poppins">
          Know More
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  )
}

export default ProgramCard