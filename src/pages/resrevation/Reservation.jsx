import React, { useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Container from '../../components/container/Container'
import reserveImg from '../../assets/reserve-img1.png'
import ReservationDetails from './ReservationDetails'
import { useForm } from 'react-hook-form'
import Confirmed from './Confirmed'
import Cancellation from './Cancellation'

const Reservation = () => {
    const [nextModal, setNextModal] = useState(false)
    const [orderComfirm, setOrderConfirm] = useState(false)
    const [orderCancel, setOrderCancel] = useState(false)
    const [formData, setFormData] = useState()
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        mode: "onChange"
    })


    const handleFormSubmit = (data)=>{
        setFormData(data)
        setNextModal(true)
    }
  return (
        <section className='w-full flex flex-col items-center relative'>
            <Topbar/>
            {/* RESERVATION */}
            <div className='container flex items-center justify-between px-3 
            md:py-[10rem] py-[5rem] relative'>
                <Container className={`flex items-start md:justify-between justify-center 
                md:gap-36 gap-9 md:flex-row flex-col-reverse`}>
                    <div className='md:w-1/2 w-full'>
                        <img src={reserveImg} alt="" className='w-full h-[500px] rounded-[30px]
                        object-cover'/>
                    </div>
                    <div className='md:w-1/2 w-full flex flex-col items-start gap-8'>
                        <h1 className='text-black md:text-6xl text-2xl font-semibold'>
                            Book a Table
                        </h1>
                        <form className="w-full flex flex-col gap-7" 
                        onSubmit={handleSubmit(handleFormSubmit)}>
                            <div className='w-full flex flex-col items-start'>
                                <label htmlFor="date"
                                className='md:text-2xl text-sm text-gray-700'>
                                    Date
                                </label>
                                <input type="date" placeholder='Date' name='date'
                                className='text-base md:h-16 h-12 w-full bg-gray-100
                                rounded-[10px] md:p-4 p-2'
                                {...register("date",{required: 'This field is required'})}/>
                                {
                                    errors.date && <span className='text-xs text-red-500'>
                                        {errors.date.message}
                                    </span>
                                }
                            </div>
                            <div className='w-full flex flex-col items-start'>
                                <label htmlFor="time"
                                className='md:text-2xl text-sm text-gray-700'>
                                    Time
                                </label>
                                <input type="time" placeholder='Time' name='time'                                
                                className='text-base md:h-16 h-12 w-full bg-gray-100
                                rounded-[10px] md:p-4 p-2' 
                                {...register("time",{required: 'This field is required'})}/>
                                {
                                    errors.time && <span className='text-xs text-red-500'>
                                        {errors.time.message}
                                    </span>
                                }
                            </div>
                            <div className='w-full flex flex-col items-start'>
                                <label htmlFor="size"
                                className='md:text-2xl text-sm text-gray-700'>
                                    Party Size
                                </label>
                                <input type="number" placeholder='Party Size' name='size'                                
                                className='text-base md:h-16 h-12 w-full bg-gray-100
                                rounded-[10px] md:p-4 p-2'  
                                {...register("size",{required: 'This field is required'})}/>
                                {
                                    errors.size && <span className='text-xs text-red-500'>
                                        {errors.size.message}
                                    </span>
                                }
                            </div>
                            <button className='w-full md:p-4 p-3 md:text-lg text-sm text-white 
                            bg-red-500 rounded-xl'>
                                Proceed
                            </button>
                        </form>
                    </div>
                </Container>
            </div>
            <ReservationDetails formData={formData} 
            nextModal={nextModal} setNextModal={setNextModal}
            setOrderConfirm={setOrderConfirm}/>
            <Confirmed formData={formData}
            setNextModal={setNextModal}
            orderComfirm={orderComfirm} 
            setOrderConfirm={setOrderConfirm}
            setOrderCancel={setOrderCancel}/>
            <Cancellation formData={formData}
            orderCancel={orderCancel}
            setOrderCancel={setOrderCancel}
            setOrderConfirm={setOrderConfirm}/>
        </section>
  )
}

export default Reservation