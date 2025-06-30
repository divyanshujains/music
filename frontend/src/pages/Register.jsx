import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-black rounded flex items-center justify-center">
              <span className="text-white text-2xl font-bold">x</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
          <form>
            <div className="mb-4">
            <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg  mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition duration-200"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4 text-red-500">Don't have any account? <Link to="/login" className="underline">Sign Up</Link></p>
        </div>
      </div>

  )
}

export default Register
