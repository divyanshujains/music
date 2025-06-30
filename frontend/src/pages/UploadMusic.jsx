import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const UploadMusic = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
          <form className="w-full max-w-md p-6 space-y-6">
            <div className="flex items-center mb-4">
              <Link to="/home" className="text-black hover:text-gray-700">
                <FaArrowLeft className="text-xl" />
              </Link>
              <h2 className="text-2xl font-bold text-center mb-2 flex-1 text-black">Upload Music</h2>
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Song Title</label>
              <input
                type="text"
                placeholder="Enter song title"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Artist Name</label>
              <input
                type="text"
                placeholder="Enter artist name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Upload Audio</label>
              <input
                type="file"
                accept="audio/*"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white text-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
  )
}

export default UploadMusic
