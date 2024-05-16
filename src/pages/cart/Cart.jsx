import React, { useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Container from '../../components/container/Container'
import { AnimatePresence, motion } from 'framer-motion';
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Checkout from './Checkout';




const CartItems = ()=>{
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

    return(
        <div className='flex flex-col gap-6 p-8 rounded-2xl bg-white shadow-lg
        md:w-[550px] w-full items-center'>
            <h1 className='w-full text-black text-3xl font-semibold pb-5 border-b-2 
            border-gray-300 text-center'>
                My Cart
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
            <div className='flex flex-col items-start w-full gap-3 pb-5 border-b-2 
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
            <div className='w-full flex flex-col items-center gap-2'>
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

                <Link to={'/order-online'}
                className='w-full p-3 text-center bg-red-500 font-semibold
                rounded-lg text-white'>
                    Order More
                </Link>
            </div>

        </div>
    )
}


const Cart = () => {
    const [progress, setProgress] = useState('cart')
  return (
        <section className='w-full flex flex-col items-center relative'>
            <Topbar/>
            {/* RESERVATION */}
            <div className='container flex flex-col items-center px-3 
            md:py-[10rem] py-[5rem] relative'>

                {/* PROGRESS BAR */}

                <Container className={`w-full flex items-start justify-center md:gap-16
                gap-4 md:flex-row flex-col-reverse`}>
                    {/* CHECKOUT */}
                    <Checkout/>
                    {/* CART */}
                    <CartItems setProgress={setProgress}/>
                </Container>
            </div>
        </section>
  )
}

export default Cart