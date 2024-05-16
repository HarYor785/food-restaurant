import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagramSquare, FaFacebook  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=' w-full py-16 md:px-16 px-10 bg-neutral-900 mb-auto flex flex-col 
    items-center gap-7'>
      <div className='w-full grid gap-8 md:place-items-center place-items-start'
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      }}>

        <div className='flex flex-col items-start gap-10'>
          <div className='flex items-center gap-2'>
              <span className='p-1 bg-red-500 w-12 h-12 rounded-full flex
              items-center justify-center text-3xl text-white rotate-[-40deg]'>
                  S
              </span>
              <h2 className=' text-lg font-bold text-white'>Savory</h2>
          </div>
          <p className='text-white text-xs'>
            At Savory, we are passionate about delivering an unforgettable 
            dining experience.
          </p>
          <div className='flex items-center gap-5'>
            <Link to={'/'}
            className='w-14 h-14 flex items-center justify-center rounded-full
             bg-red-100'>
              <FaTwitter className=' text-3xl'/>
            </Link>
            <Link to={'/'}
            className='w-14 h-14 flex items-center justify-center rounded-full
             bg-red-100'>
              <FaInstagramSquare className=' text-3xl'/>
            </Link>
            <Link to={'/'}
            className='w-14 h-14 flex items-center justify-center rounded-full
             bg-red-100'>
              <FaFacebook className=' text-3xl'/>
            </Link>
          </div>
        </div>

        <div className='flex flex-col items-start gap-5'>
          <div className='flex items-center gap-2'>
              <span className='p-1 bg-red-500 w-12 h-12 rounded-full flex
              items-center justify-center text-3xl text-white rotate-[-40deg]'>
                  S
              </span>
              <h2 className=' text-lg font-bold text-white'>Savory</h2>
          </div>

          <div className=' flex flex-col items-start gap-5'>
            <Link to={'/'}
            className='md:text-base text-sm text-white hover:text-red-500 
            transition-all ease-in-out'>
              Home
            </Link>
            <Link to={'/menu'}
            className='md:text-base text-sm text-white hover:text-red-500 
            transition-all ease-in-out'>
              Menu
            </Link>
            <Link to={'/order'}
            className='md:text-base text-sm text-white hover:text-red-500 
            transition-all ease-in-out'>
              Order online
            </Link>
            <Link to={'/order'}
            className='md:text-base text-sm text-white hover:text-red-500 
            transition-all ease-in-out'>
              Reservation
            </Link>
          </div>
        </div>

        <div className='flex flex-col items-start gap-5'>
          <div className='flex items-center gap-2'>
              <span className='p-1 bg-red-500 w-12 h-12 rounded-full flex
              items-center justify-center text-3xl text-white rotate-[-40deg]'>
                  S
              </span>
              <h2 className=' text-lg font-bold text-white'>Savory</h2>
          </div>

          <div className=' flex flex-col items-start gap-5'>
            <Link to={'/about-us'}
            className='md:text-base text-sm text-white hover:text-red-500 
            transition-all ease-in-out'>
              About Us
            </Link>
            <Link to={'/contact'}
            className='md:text-base text-sm text-white hover:text-red-500 
            transition-all ease-in-out'>
              Contact Us
            </Link>
            <Link to={'/'}
            className='md:text-base text-sm text-white hover:text-red-500 
            transition-all ease-in-out'>
              Event
            </Link>
            <Link to={'/testimonial'}
            className='md:text-base text-sm text-white hover:text-red-500 
            transition-all ease-in-out'>
              Testimonial
            </Link>
          </div>
        </div>

        <div className='flex flex-col items-start gap-5'>
          <div className='flex items-center gap-2'>
              <span className='p-1 bg-red-500 w-12 h-12 rounded-full flex
              items-center justify-center text-3xl text-white rotate-[-40deg]'>
                  S
              </span>
              <h2 className=' text-lg font-bold text-white'>Savory</h2>
          </div>

          <div className=' flex flex-col items-start gap-5'>
            <p className='md:text-lg text-sm text-white'>
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
            <p className='md:text-lg text-sm text-white'>
              support@savory.com
            </p>
            <p className='md:text-lg text-sm text-white'>
              +123 4567 8901
            </p>
          </div>
        </div>

      </div>
      <span className=' mt-8 text-white md:text-lg text-sm'>
        Copyright © {new Date().getFullYear()}
      </span>
    </footer>
  )
}

export default Footer