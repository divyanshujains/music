import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { FaHome, FaCompass, FaSearch, FaUser } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { MdMusicNote } from 'react-icons/md';
import Navbar from '../components/Navbar';

const Home = () => {
 
    const musicarr = [
        {
            img:"https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Shappire",
            artist:"Ed shreen"
        },
        {
            img:"https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Shappire",
            artist:"Ed shreen"
        }
    ]



  return (
    <div className="flex flex-col h-screen bg-gray-100">
    <div className="flex-1 overflow-y-auto p-4 ">

  
        <div className="flex items-center p-2  gap-1 mb-2 ">
        <p className='text-xl'><MdMusicNote /></p> 
        <p  className=' text-xl font-semibold '>Streams</p>
        
        </div>       

        



      <div className="space-y-6">
        {musicarr.map(function(music, index) {
          return (
            <div key={index} className="flex items-center  bg-white py-1.5 px-2 w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <img src={music.img} alt={music.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold">{music.name}</h3>
                <p className="text-gray-600">{music.artist}</p>
              </div>
            </div>
          )
        })}
       
      </div>
    </div>

     <Navbar />
    
  </div>
  )
}

export default Home
