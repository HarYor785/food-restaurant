import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const routeLink = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Order Online', path: '/order-online' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Contact Us', path: '/contact-us' },
]

const CustomLink = ({path,name})=>{
    const location = useLocation()
    const isActive = location.pathname === path
    return(
        <li>
            <Link to={path} 
            className={`topbar-link text-base text-black hover:text-red-500 
            relative transition-all ease-in-out duration-300 ${isActive ? 'active' : ''}`}>
                {name}
            </Link>
        </li>
    )
}

const Topbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [appBar, setAppBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`fixed top-0 left-0 mx-auto right-0 z-50 bg-white
    transition-all duration-300 ${scrolled ? 'md:bg-white shadow-lg' : 'md:bg-transparent'}`}>
        <nav className={`container md:p-3 p-2 w-full flex items-center justify-between `}>

            <Link to="/" className='flex items-center gap-2 z-50'>
                <span className='p-1 bg-red-500 md:w-12 md:h-12 w-10 h-10 rounded-full flex
                items-center justify-center text-3xl text-white rotate-[-40deg]'>
                    S
                </span>
                <h2 className=' text-lg font-bold text-black'>Savory</h2>
            </Link>

            <div className={`absolute md:relative md:top-0 md:left-[none] md:bg-transparent py-4
            left-0 bg-white w-full md:w-fit transition-all duration-500 ease-in-out 
            ${appBar ? 'top-14' : 'top-[-500%]'}`}>
                <ul className='flex items-center md:flex-row flex-col gap-5 mx-auto'>
                    {
                        routeLink.map((item, i)=>(
                            <CustomLink path={item.path} name={item.name}/>
                        ))
                    }
                </ul>
            </div>

            <div className='flex items-center gap-4'>
                <Link to={'/cart'} 
                className='topbar-link text-sm text-black hover:text-red-500 
                relative transition-all ease-in-out duration-300 flex items-center justify-center 
                md:w-8 m:h-12 w-8 h-8 p-1 bg-white shadow-lg rounded-full'>
                    <MdOutlineShoppingCart className='md:text-xl text-lg' />
                    <span className='absolute md:top-[-0.8rem] top-[-0.5rem] 
                    right-[-0.4rem] p-1 rounded-full flex md:w-5 md:h-5 w-4 h-4 
                    items-center justify-center bg-red-500 text-white text-xs'>3</span>
                </Link>
                <button className='bg-red-500 text-white md:px-4 py-2 
                px-2 md:text-base text-sm rounded-md'>Login</button>
                <button className='text-black bg-none outline-none border-none md:hidden'
                onClick={()=>setAppBar(!appBar)}>
                    {appBar ? <IoMdClose className=' text-2xl'/> : <IoMenu className=' text-2xl'/> }
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Topbar