import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({cartCount}) {
  return (
    <>
    <div id='Home' className=" bg-gray-50">
      <nav className="flex items-center justify-between border-b-2 border-gray-400  bg-white px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600 max-sm:text-xl">
          2X  Store
        </h1>

        <div className="  items-center gap-5 md:flex">
          <Link  to="/" className="text-gray-700 font-medium max-sm:flex max-sm:mb-1 hover:text-white hover:bg-blue-600 hover:border-2 border-blue-600 rounded-3xl px-3">
            Home
          </Link>
          
          <a href="#products" className="hidden md:block  flex-col text-gray-700 font-medium  hover:text-white hover:bg-blue-600 hover:border-2 border-blue-600 rounded-3xl px-3">
            Shop
          </a>
      
          <Link to="/about" className="text-gray-700 font-medium max-sm:flex max-sm:mt-1 hover:text-white hover:bg-blue-600 hover:border-2 border-blue-600 rounded-3xl px-3">
            About
          </Link>
          <a href="#footer" className="hidden md:block text-gray-700 font-medium  hover:text-white hover:bg-blue-600 hover:border-2 border-blue-600 rounded-3xl px-3">
            Contact
          </a>
        </div>

          <Link  to="/cart"
          className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 max-sm:text-sm ml-3"
           >
         Cart ({cartCount})
         </Link>
         
      </nav>
    </div>
    </>
  )
}
