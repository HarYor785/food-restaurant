import React from 'react'

const Checkout = () => {
  return (
    <div className='p-6 rounded-lg bg-white shadow-lg
    flex flex-col items-center gap-5 w-full'>
        <h1 className='text-black text-3xl font-semibold'>Checkout</h1>
        <div className='w-full flex flex-col items-start gap-4'>
            <h1 className='text-black text-lg font-semibold'>Shipping Address</h1>
            <form className='w-full flex flex-col gap-4 '>
                <div className='w-full flex flex-col items-start'>
                    <input type="text" placeholder='Name' name='name' 
                    className='w-full p-3 rounded-lg text-sm text-black border
                    border-gray-200 outline-none'/>
                    <span className='text-xs text-red-500'></span>
                </div>
                <div className='w-full grid gap-3'
                style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                    <div className='w-full flex flex-col items-start'>
                        <input type="text" placeholder='Mobile Number' name='mobile' 
                        className='w-full p-3 rounded-lg text-sm text-black border
                        border-gray-200 outline-none'/>
                        <span className='text-xs text-red-500'></span>
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <input type="email" placeholder='Email' name='email' 
                        className='w-full p-3 rounded-lg text-sm text-black border
                        border-gray-200 outline-none'/>
                        <span className='text-xs text-red-500'></span>
                    </div>
                </div>
                <div className='w-full flex flex-col items-start'>
                    <input type="text" placeholder='Street Address' name='Street' 
                    className='w-full p-3 rounded-lg text-sm text-black border
                    border-gray-200 outline-none'/>
                    <span className='text-xs text-red-500'></span>
                </div>
                <div className='w-full grid gap-3'
                style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                    <div className='w-full flex flex-col items-start'>
                        <input type="text" placeholder='State' name='State' 
                        className='w-full p-3 rounded-lg text-sm text-black border
                        border-gray-200 outline-none'/>
                        <span className='text-xs text-red-500'></span>
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <input type="text" placeholder='Country' name='country' 
                        className='w-full p-3 rounded-lg text-sm text-black border
                        border-gray-200 outline-none'/>
                        <span className='text-xs text-red-500'></span>
                    </div>
                </div>

                <h1 className='text-black text-lg font-semibold'>Payment Type</h1>

                <div className='w-full flex items-center justify-between'>
                    <div className="flex items-center gap-2">
                        <input type="radio" className=" w-4 h-4 cursor-pointer" name='type' id='cash'/>
                        <label htmlFor="cash" className='text-black text-sm'>Cash on delivery</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" className=" w-4 h-4 cursor-pointer" name='type' id='card' checked/>
                        <label htmlFor="card" className='text-black text-sm'>Credit Card</label>
                    </div>
                </div>

                <div className='w-full flex flex-col items-start'>
                    <input type="number" placeholder='Card Number' name='cardNumber' 
                    className='w-full p-3 rounded-lg text-sm text-black border
                    border-gray-200 outline-none'/>
                    <span className='text-xs text-red-500'></span>
                </div>
                <div className='w-full grid gap-3'
                style={{gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))'}}>
                    <div className='w-full flex flex-col items-start'>
                        <label htmlFor="month" className="text-sm text-black">Month</label>
                        <input type="month" placeholder='Month' name='month' 
                        className='w-full p-3 rounded-lg text-sm text-black border
                        border-gray-200 outline-none'/>
                        <span className='text-xs text-red-500'></span>
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <label htmlFor="year" className="text-sm text-black">Year</label>
                        <input type="month" placeholder='Year' name='year' 
                        className='w-full p-3 rounded-lg text-sm text-black border
                        border-gray-200 outline-none'/>
                        <span className='text-xs text-red-500'></span>
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <label htmlFor="code" className="text-sm text-black">Security Code</label>
                        <input type="number" placeholder='Code' name='code' 
                        className='w-full p-3 rounded-lg text-sm text-black border
                        border-gray-200 outline-none'/>
                        <span className='text-xs text-red-500'></span>
                    </div>
                </div>
                <button className='w-full p-3 text-base text-white bg-red-500 rounded-lg'>
                    Order now
                </button>

            </form>
        </div>
    </div>
  )
}

export default Checkout