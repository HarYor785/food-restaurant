import moment from 'moment';
import React from 'react'
import { useForm } from 'react-hook-form';
import { CiCalendarDate, CiUser } from "react-icons/ci";
import { IoTimeOutline, IoCloseOutline } from "react-icons/io5";

const ReservationDetails = ({formData, nextModal, setNextModal, setOrderConfirm}) => {

    const {
        register,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        mode: "onChange"
    })

    const handleComfirm = () =>{
        setNextModal(false)
        setOrderConfirm(true)
    }

  return (
    <div 
    className={`animate fixed top-0 left-0 w-full h-screen ${nextModal ? 'block' : 'hidden'} 
    bg-[rgba(0,0,0,0.1)] z-[999] transition-all 
    duration-500 ease-in-out`}>
        <div onClick={()=>setNextModal(false)}
        className='w-full h-screen overflow-y-scroll md:py-5 md:px-7 py-4 px-4 relative'>
            <div onClick={(e)=>e.stopPropagation()}
            className='md:w-[800px] mx-auto w-full h-max bg-white p-4 rounded-lg shadow-md
            flex flex-col gap-4 items-center'>

                <button onClick={()=>setNextModal(false)}
                className=' self-end p-1 flex items-center justify-center
                text-base bg-red-500 rounded-md text-white'>
                    <IoCloseOutline/>
                </button>
                <h1 className=' textbl text-2xl text-center font-semibold'>RESERVATION</h1>

                <div className='w-full flex items-start justify-between md:gap-8 gap-4
                md:flex-row flex-col'>

                    {/* RESERVATION FORM */}
                    <div className='md:w-1/2 w-full flex flex-col items-start gap-5'>
                        <h1 className='md:text-2xl text-lg font-bold'>Data Order</h1>
                        <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit(handleComfirm)}>
                            <div className='flex flex-col items-center justify-center w-full'>
                                <input type="text" placeholder='First Name' name="firstName"
                                className='w-full p-2 bg-transparent border border-gray-500
                                rounded-md outline-none focus:border-red-500 transition-all
                                duration-300 ease-in-out'
                                {...register('firstName',{required: 'First Name is required'})}/>
                                {errors.firstName && <span className='text-xs text-red-500'>
                                    {errors.firstName.message}
                                </span>}
                                
                            </div>
                            <div className='flex flex-col items-center justify-center w-full'>
                                <input type="text" placeholder='Last Name' name="lastName"
                                className='w-full p-2 bg-transparent border border-gray-500
                                rounded-md outline-none focus:border-red-500 transition-all
                                duration-300 ease-in-out'
                                {...register('lastName',{required: 'Last Name is required'})}/>
                                {errors.lastName && <span className='text-xs text-red-500'>
                                    {errors.lastName.message}
                                </span>}
                            </div>
                            <div className='flex flex-col items-center justify-center w-full'>
                                <input type="text" placeholder='Mobile Number' name="mobile"
                                className='w-full p-2 bg-transparent border border-gray-500
                                rounded-md outline-none focus:border-red-500 transition-all
                                duration-300 ease-in-out'
                                {...register('mobile',{required: 'Mobile Number is required'})}/>
                                {errors.mobile && <span className='text-xs text-red-500'>
                                    {errors.mobile.message}
                                </span>}
                            </div>
                            <div className='flex flex-col items-center justify-center w-full'>
                                <input type="email" placeholder='Email' name="email"
                                className='w-full p-2 bg-transparent border border-gray-500
                                rounded-md outline-none focus:border-red-500 transition-all
                                duration-300 ease-in-out'
                                {...register('email',{required: 'Emailis required'})}/>
                                {errors.email && <span className='text-xs text-red-500'>
                                    {errors.email.message}
                                </span>}
                            </div>
                            <div className='flex flex-col items-center justify-center w-full'>
                                <select id="occasion" name="occasion"
                                className='w-full p-2 bg-transparent border border-gray-500
                                rounded-md outline-none focus:border-red-500 transition-all
                                duration-300 ease-in-out'
                                {...register('occasion',{required: 'Occasion is required'})}>
                                    <option value="">Select an Occasion</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="business">Business Meeting</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.occasion && <span className='text-xs text-red-500'>
                                    {errors.occasion.message}
                                </span>}
                            </div>
                            <div className='flex flex-col items-center justify-center w-full'>
                                <textarea name="request" id="" rows={4} placeholder='Add a special request'
                                className='w-full p-2 bg-transparent border border-gray-500
                                rounded-md outline-none focus:border-red-500 transition-all
                                duration-300 ease-in-out'
                                {...register('request')}></textarea>
                                {errors.request && <span className='text-xs text-red-500'>
                                    {errors.request.message}
                                </span>}
                            </div>
                            <button className='w-full p-3 text-lg text-white bg-red-500 rounded-xl'>
                                Confirm reservation
                            </button>
                        </form>
                    </div>

                    {/* RESERVATION DETAILS */}
                    <div className='md:w-1/2 w-full flex flex-col gap-4'>
                        {/* RESERVATION DETAILS */}
                        <div className='w-full flex flex-col gap-5 bg-stone-50
                        rounded-xl p-5'>
                            <h1 className='md:text-2xl text-lg font-semibold'>Reservation Details</h1>
                            <div className='w-full flex flex-col gap-6'>
                                <div className='w-full flex items-center justify-between'>
                                    <CiCalendarDate className='text-gray-800 md:text-4xl text-2xl'/>
                                    <span className='text-gray-800 md:text-base text-sm'>
                                        {moment(formData?.date).format("dddd, MMM Do YYYY")}
                                    </span>
                                </div>
                                <div className='w-full flex items-center justify-between'>
                                    <IoTimeOutline className='text-gray-800 md:text-4xl text-2xl'/>
                                    <span className='text-gray-800 md:text-base text-sm'>
                                        {formData?.time}
                                    </span>
                                </div>
                                <div className='w-full flex items-center justify-between'>
                                    <CiUser className='text-gray-800 md:text-4xl text-2xl'/>
                                    <span className='text-gray-800 md:text-base text-sm'>
                                        {formData?.size} People
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RESTAURANT INFORMATIONS */}
                        <div className='w-full flex flex-col items-start gap-4'>
                            <h1 className='md:text-2xl text-lg font-semibold'>Restaurant Informations</h1>
                            <p className='md:text-base text-sm text-gray-800'>
                                At Savory, we pride ourselves on delivering a
                                dining experience like no other. Our passion for Japanese, Italian  
                                cuisine is evident in every dish we serve. From our farm-to-table 
                                ingredients to our carefully crafted menu, every detail is designed 
                                to delight your senses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReservationDetails