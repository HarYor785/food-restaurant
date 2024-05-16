import React, { useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Container from '../../components/container/Container'
import { menuData } from '../../utils'
import { FaStar } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


const MenuCard = ({img, name, desc, price}) =>{
    return(
        <AnimatePresence>
            <motion.div className='flex flex-col items-center gap-2 p-6 rounded-[30px]
            bg-white shadow-gray-200 shadow-xl min-w-[200px]'
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
                <img src={img} alt={name} className=' w-1/2 h-full object-cover'/>
                <h4 className='md:text-lg text-base text-black font-semibold'>{name}</h4>
                <div className='flex items-center self-start'>
                    <FaStar className='md:text-sm text-xs text-red-500'/>
                    <FaStar className='md:text-sm text-xs text-red-500'/>
                    <FaStar className='md:text-sm text-xs text-red-500'/>
                    <FaStar className='md:text-sm text-xs text-red-500'/>
                    <FaStar className='md:text-sm text-xs text-red-500'/>
                </div>
                <p className='md:text-sm text-xs text-gray-900 text-center'>{desc}</p>
                <span className='md:text-lg text-base font-semibold text-black
                    text-center'>
                    ${price}
                </span>
                <div className='w-full flex items-center'>
                    <div>

                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

const OrderOnline = () => {
    const [menuTab, setMenuTab] = useState('Pasta')
    const itemsPerPage = 9
    const [currentPage, setCurrentPage] = useState(1)
    // Initialize state with quantities for each item
    const [quantities, setQuantities] = useState({
        spaghetti: 2,
        penne: 1,
        linguine: 4
    });

    // Generic handler for increasing quantity
    const handleIncrease = (item) => {
        setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item]: prevQuantities[item] + 1,
        }));
    };

    // Generic handler for decreasing quantity
    const handleDecrease = (item) => {
        setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item]: prevQuantities[item] > 0 ? prevQuantities[item] - 1 : 0,
        }));
    };
  
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
        <section className='w-full px-10 py-12'>
            <Topbar/>

            {/* MENU CONTENTS */}
            <div className='container flex items-center min-h-screen px-3 py-[5rem]'>
                <Container className={'flex flex-col items-center justify-center md:mt-6'}>
                    <h1 className='md:text-5xl text-4xl text-black font-semibold'>
                        Menu
                    </h1>
            
                    {/* BUTTON TAB */}
                    <div className='tab-container w-full md:mt-24 mt-8 flex items-center 
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
                    <div className='flex md:items-start items-center md:justify-between 
                    justify-center md:flex-row flex-col md:gap-12 gap-6 md:mt-12 mt-6'>
                        <div className='flex-1 flex items-center flex-col gap-6'>
                            <div className='w-full mt-12 grid gap-8'
                            style={{
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
                            {/* PAGINATION */}
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
                        </div>

                        {/* CART */}
                        <div className='flex flex-col gap-6 p-8 rounded-2xl bg-white shadow-lg
                        min-w-[300px] mt-12 items-center'>
                            <h1 className='w-full text-black text-3xl font-semibold pb-5 border-b-2 
                            border-gray-300 text-center'>
                                Order List
                            </h1>

                            {/* CART ITEM */}
                            <div className='w-full flex flex-col gap-6 pb-5 border-b-2 
                            border-gray-300'>

                                {/* ITEM 1 */}
                                <div className='flex flex-col gap-4 w-full'>
                                    <div className='w-full flex items-center justify-between'>
                                        <h1 className='text-black text-lg font-semibold'>
                                            Spaghetti
                                        </h1>
                                        <button className='border-none outline-none text-red-500 text-lg'>
                                            <RiDeleteBinLine/>
                                        </button>
                                    </div>
                                    <div className='w-full flex items-center justify-between'>
                                        <div className='px-2 py-1 bg-gray-100 rounded-[30px] flex items-center
                                        justify-center w-24 relative'>
                                            <button onClick={()=>handleDecrease('spaghetti')}
                                            className='p-2 w-8 h-8 rounded-full bg-white shadow-xl flex
                                            items-center justify-center text-sm text-red-500 absolute left-0 top-0'>
                                                -
                                            </button>
                                            <span>{quantities.spaghetti}</span>
                                            <button onClick={()=>handleIncrease('spaghetti')}
                                            className='p-2 w-8 h-8 rounded-full bg-white shadow-xl flex
                                            items-center justify-center text-sm text-green-500 absolute right-0 top-0'>
                                                +
                                            </button>
                                        </div>
                                        <span className='text-black text-lg font-semibold'>$25.3</span>
                                    </div>
                                </div>

                                {/* ITEM 2 */}
                                <div className='flex flex-col gap-4 w-full'>
                                    <div className='w-full flex items-center justify-between'>
                                        <h1 className='text-black text-lg font-semibold'>
                                            Penne Alla Vodka
                                        </h1>
                                        <button className='border-none outline-none text-red-500 text-lg'>
                                            <RiDeleteBinLine/>
                                        </button>
                                    </div>
                                    <div className='w-full flex items-center justify-between'>
                                        <div className='px-2 py-1 bg-gray-100 rounded-[30px] flex items-center
                                        justify-center w-24 relative'>
                                            <button onClick={()=>handleDecrease('penne')}
                                            className='p-2 w-8 h-8 rounded-full bg-white shadow-xl flex
                                            items-center justify-center text-sm text-red-500 absolute left-0 top-0'>
                                                -
                                            </button>
                                            <span>{quantities.penne}</span>
                                            <button onClick={()=>handleIncrease('penne')}
                                            className='p-2 w-8 h-8 rounded-full bg-white shadow-xl flex
                                            items-center justify-center text-sm text-green-500 absolute right-0 top-0'>
                                                +
                                            </button>
                                        </div>
                                        <span className='text-black text-lg font-semibold'>$25.3</span>
                                    </div>
                                </div>

                                {/* ITEM 3 */}
                                <div className='flex flex-col gap-4 w-full'>
                                    <div className='w-full flex items-center justify-between'>
                                        <h1 className='text-black text-lg font-semibold'>
                                            Linguine
                                        </h1>
                                        <button className='border-none outline-none text-red-500 text-lg'>
                                            <RiDeleteBinLine/>
                                        </button>
                                    </div>
                                    <div className='w-full flex items-center justify-between'>
                                        <div className='px-2 py-1 bg-gray-100 rounded-[30px] flex items-center
                                        justify-center w-24 relative'>
                                            <button onClick={()=>handleDecrease('linguine')}
                                            className='p-2 w-8 h-8 rounded-full bg-white shadow-xl flex
                                            items-center justify-center text-sm text-red-500 absolute left-0 top-0'>
                                                -
                                            </button>
                                            <span>{quantities.linguine}</span>
                                            <button onClick={()=>handleIncrease('linguine')}
                                            className='p-2 w-8 h-8 rounded-full bg-white shadow-xl flex
                                            items-center justify-center text-sm text-green-500 absolute right-0 top-0'>
                                                +
                                            </button>
                                        </div>
                                        <span className='text-black text-lg font-semibold'>$25.3</span>
                                    </div>
                                </div>

                            </div>
                            
                            {/* VOUCHER INPUT */}
                            <div className='flex flex-col items-start w-full gap-7 pb-5 border-b-2 
                            border-gray-300'>
                                <h1 className='text-black text-2xl font-semibold'>
                                    Voucher Code
                                </h1>
                                <div className='w-full flex items-center gap-4'>
                                    <input type="text" className="w-full border-none outline-none 
                                    p-2 px-3 rounded-[10px] bg-gray-100 text-black text"
                                    placeholder='FREETOEAT'/>
                                    <button className='p-2 w-12 h-10 text-lg bg-blue-500 flex
                                    items-center justify-center rounded-xl shadow-lg text-white'>
                                        +
                                    </button>
                                </div>
                                <div className='w-full flex items-center gap-7'>
                                    <span className='w-full py-2 px-4 text-center bg-red-500 text-xl
                                    text-white font-semibold rounded-md'>
                                        FREETOEAT
                                    </span>
                                    <button className='p-2 w-8 h-8 text-lg bg-red-500 flex
                                    items-center justify-center rounded-xl shadow-lg text-white'>
                                        <IoMdClose/>
                                    </button>
                                </div>
                            </div>

                            {/* TOTAL */}
                            <div className='w-full flex flex-col items-center gap-5'>
                                <div className='flex w-full items-center justify-between'>
                                    <h1 className='text-black text-lg font-semibold'>Subtotal</h1>
                                    <span className='text-black text-lg font-semibold'>$105.13</span>
                                </div>
                                <div className='flex w-full items-center justify-between'>
                                    <h1 className='text-black text-lg font-semibold'>Tax Fee</h1>
                                    <span className='text-black text-lg font-semibold'>$3.5</span>
                                </div>
                                <div className='flex w-full items-center justify-between'>
                                    <h1 className='text-black text-lg font-semibold'>Voucher</h1>
                                    <span className='text-black text-lg font-semibold'>$5.0</span>
                                </div>
                                <div className='flex w-full items-center justify-between'>
                                    <h1 className='text-black text-lg font-semibold'>Total</h1>
                                    <span className='text-black text-lg font-semibold'>$103.3</span>
                                </div>

                                <button className='w-full p-3 py-4 text-center bg-red-500 font-semibold
                                rounded-lg text-white'>
                                    Checkout
                                </button>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default OrderOnline