import React, { useState } from 'react'
import Container from '../container/Container'
import { menuData } from '../../utils'
import { FaStar } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';

const MenuCard = ({img, name, desc, price}) =>{
  return(
    <AnimatePresence>
      <motion.div className='flex flex-col items-center gap-4 p-6 rounded-[30px]
      bg-white shadow-gray-200 shadow-xl min-w-[300px]'
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
        <img src={img} alt={name} className=' w-1/2 h-full object-cover'/>
        <h4 className='md:text-2xl text-xl text-black font-semibold'>{name}</h4>
        <p className='md:text-base text-sm text-gray-900 text-center'>{desc}</p>
        <div className='flex items-center self-start'>
          <FaStar className='md:text-base text-sm text-red-500'/>
          <FaStar className='md:text-base text-sm text-red-500'/>
          <FaStar className='md:text-base text-sm text-red-500'/>
          <FaStar className='md:text-base text-sm text-red-500'/>
          <FaStar className='md:text-base text-sm text-red-500'/>
        </div>
        <div className='w-full flex items-center justify-between'>
          <span className='md:text-2xl text-xl font-semibold text-black'>${price}</span>
          <button className=' p-2 bg-red-500 rounded-lg md:text-base text-sm
          text-white hover:opacity-80 font-semibold'>Order Now</button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}



const MenuContainer = () => {
  const [menuTab, setMenuTab] = useState('All')
  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)

  const filterMenuData = menuData.filter((item)=>{
    if(menuTab === "All"){
      return item
    }else{
      return item.tag.toLowerCase().includes(menuTab.toLowerCase())
    }
  })

  const handleToggleTab = (val) =>{
    setMenuTab(val)
  }

  const handlePagination = (val) =>{
    if(val < 1 || val > totalPages) return
    setCurrentPage(val)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const totalPages = Math.ceil(filterMenuData.length / itemsPerPage)
  const currentItems = filterMenuData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className='w-full md:px-10 md:py-12 px-5 py-6'>
      <Container className={'flex flex-col items-center justify-center mt-6'}>
        <h1 className='md:text-5xl text-4xl text-black font-semibold'>
          Our Popular Menu
        </h1>

        {/* BUTTON TAB */}
        <div className='tab-container w-full md:mt-24 mt-6 flex items-center 
        justify-center md:gap-16 gap-2'>
          <button onClick={()=>handleToggleTab('All')}
          className={`md:text-base text-sm md:py-3 py-2 md:px-6 px-4 ${menuTab === 'All' 
          ? ' bg-red-500 text-white rounded-lg' : ''}`}>
            All Category
          </button>
          <button onClick={()=>handleToggleTab('Pasta')}
          className={` text-base py-3 px-6 ${menuTab === 'Pasta' 
          ? ' bg-red-500 text-white rounded-lg' : ''}`}>
            Pasta
          </button>
          <button onClick={()=>handleToggleTab('Dinner')}
          className={` text-base py-3 px-6 ${menuTab === 'Dinner' 
          ? ' bg-red-500 text-white rounded-lg' : ''}`}>
            Dinner
          </button>
          <button onClick={()=>handleToggleTab('Lunch')}
          className={` text-base py-3 px-6 ${menuTab === 'Lunch' 
          ? ' bg-red-500 text-white rounded-lg' : ''}`}>
            Lunch
          </button>
          <button onClick={()=>handleToggleTab('Dessert')}
          className={` text-base py-3 px-6 ${menuTab === 'Dessert' 
          ? ' bg-red-500 text-white rounded-lg' : ''}`}>
            Dessert
          </button>
          <button onClick={()=>handleToggleTab('Drink')}
          className={` text-base py-3 px-6 ${menuTab === 'Drink' 
          ? ' bg-red-500 text-white rounded-lg' : ''}`}>
            Drink
          </button>
        </div>

        {/* CONTENT */}
        <div className='w-full mt-12 grid gap-8'
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}>
          <AnimatePresence>
            {
              currentItems.map((item, index)=>(
                <MenuCard key={index}
                name={item.name} img={item.imageUrl} 
                desc={item.description} price={item.price}
                />
              ))
            }
          </AnimatePresence>
        </div>

        <div className='flex items-center gap-3 mt-12'>
          <button className=' text-2xl'
          disabled={currentPage === 1}>
            {"<"}
          </button>
          {Array.from({length: totalPages}, (_, index)=>(
            <button key={index + 1}
            onClick={()=>handlePagination(index + 1)}
            className={`p-2 w-9 h-9 flex items-center justify-center text-sm text-black
            rounded-lg bg-slate-200 ${currentPage === index + 1 ? ' bg-stone-800 text-white' : ''}`}>
              {index + 1}
            </button>
          ))}
          <button className=' text-2xl'
          disabled={currentPage === totalPages}>
            {">"}
          </button>
        </div>
      </Container>
    </section>
  )
}

export default MenuContainer