import React from 'react'
import { FaCompass, FaHome, FaSearch, FaUser } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const Search = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
    {/* Search Input */}
    <div className="p-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search songs..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black text-md shadow-md transition duration-200"
            />
            <FaSearch className="absolute left-4 text-gray-500" />
          </div>
        </div>

    {/* Song List */}
    <div className="flex-1 overflow-y-auto p-4">
      <div className="space-y-6">
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md">
          <img src="https://via.placeholder.com/50" alt="Song" className="rounded-full mr-3" />
          <div>
            <h3 className="text-sm font-semibold">Never The Same</h3>
            <p className="text-xs text-gray-500">Where Is The Pope</p>
          </div>
        </div>
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md">
          <img src="https://via.placeholder.com/50" alt="Song" className="rounded-full mr-3" />
          <div>
            <h3 className="text-sm font-semibold">Trippin' on Your Love ...</h3>
            <p className="text-xs text-gray-500"></p>
          </div>
        </div>
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md">
          <img src="https://via.placeholder.com/50" alt="Song" className="rounded-full mr-3" />
          <div>
            <h3 className="text-sm font-semibold">Sunshine</h3>
            <p className="text-xs text-gray-500">Jason Dating</p>
          </div>
        </div>
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md">
          <img src="https://via.placeholder.com/50" alt="Song" className="rounded-full mr-3" />
          <div>
            <h3 className="text-sm font-semibold">Dust on the Ground - In...</h3>
            <p className="text-xs text-gray-500"></p>
          </div>
        </div>
        <div className="flex items-center p-2 bg-white rounded-lg shadow-md">
          <img src="https://via.placeholder.com/50" alt="Song" className="rounded-full mr-3" />
          <div>
            <h3 className="text-sm font-semibold">Living My Best Life</h3>
            <p className="text-xs text-gray-500">Affection</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Navbar */}
    <Navbar />
  </div>

  )
}

export default Search
