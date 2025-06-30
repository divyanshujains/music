import React from 'react'
import { FaCompass, FaHome, FaSearch, FaUser ,  } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-2 flex justify-around">
          <Link to="/home" className="text-gray-600 hover:text-black">
            <FaHome className="text-xl" />
            <span className="block text-center text-xs">Home</span>
          </Link>
          <a href="/uploadMusic" className="text-gray-600 flex flex-col  hover:text-black">
            <FaCompass className="text-xl" />
            <span className="block text-center text-xs">UploadMusic</span>
          </a>
          <Link to="/search" className="text-gray-600 hover:text-black">
            <FaSearch className="text-[18px]" />
            <span className="block text-center text-xs">Search</span>
          </Link>
          <a href="/uploadMusic" className="text-gray-600 hover:text-black">
            <FaUser className="text-xl" />
            <span className="block text-center text-xs">Profile</span>
          </a>
        </div>
  )
}

export default Navbar
