import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import reserveImg from '../../assets/reserve-img1.png'
import { CiCalendarDate, CiUser } from "react-icons/ci";
import { IoTimeOutline, IoCloseOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import moment from 'moment';

const Confirmed = ({formData,setNextModal,orderComfirm,setOrderConfirm,setOrderCancel}) => {

    const handleEdit = ()=>{
        setOrderConfirm(false)
        setNextModal(true)
    }
    const handleCancel = ()=>{
        setOrderConfirm(false)
        setOrderCancel(true)
    }

  return (
    <div 
    className={`animate fixed top-0 left-0 w-full h-screen ${orderComfirm ? 'flex' : 'hidden'}
    bg-[rgba(0,0,0,0.1)] z-[999] items-center justify-center transition-all 
    duration-500 ease-in-out`}>
        <div onClick={()=>setOrderConfirm(false)}
        className='w-full h-screen overflow-y-scroll md:py-5 md:px-7 py-4 px-4 relative'>
            <div onClick={(e)=>e.stopPropagation()}
            className='md:w-[600px] mx-auto w-full h-max bg-white rounded-lg shadow-md
            flex flex-col md:gap-4 gap-2 items-center'>

                <div className='w-full flex items-end justify-between p-4'>
                    <h1 className='md:text-xl text-lg text-center font-semibold
                    flex-1'>RESERVATION</h1>
                    <button onClick={()=>setOrderConfirm(false)}
                    className=' self-end p-1 flex items-center justify-center
                    text-base bg-red-500 rounded-md text-white'>
                        <IoCloseOutline/>
                    </button>
                </div>

                <div className='w-full flex flex-col md:gap-10 gap-3'>

                    <div className='flex flex-col gap-4 items-start p-5
                    bg-green-500 relative'>
                        <span className='absolute top-0 left-0 w-16 h-16 rounded-full
                         bg-white opacity-10'></span>
                        <span className='absolute top-[-0.5rem] right-[-0.5rem] w-16 h-16 rounded-full
                         bg-white opacity-10'></span>
                        <span className='absolute top-[-0.5rem] right-[-0.5rem] w-12 h-12 rounded-full
                         bg-white opacity-10'></span>
                        <span className='absolute top-[3rem] right-[5rem] w-14 h-14 rounded-full
                         bg-white opacity-10'></span>
                        <span className='absolute bottom-0 right-[15rem] w-14 h-14 rounded-full
                         bg-white opacity-10'></span>
                        <span className='absolute top-[1rem] left-[15rem] w-14 h-14 rounded-full
                         bg-white opacity-10'></span>
                        <h1 className='text-white md:text-2xl text-lg font-semibold'>
                            Reservation has been confirmed
                        </h1>
                        <div className='flex items-start gap-4'>
                            <span className=' w-6 h-6 flex items-center
                            justify-center p-1 rounded-md bg-[rgba(255,255,255,0.46)]'>
                                <IoIosCheckmarkCircleOutline className='text-lg text-white'/>
                            </span>
                            <span className='text-white md:text-sm text-xs'>
                                The confirmation result has been sent to your email
                            </span>
                        </div>
                        <div className='flex items-start gap-4'>
                            <span className=' w-6 h-6 flex items-center
                            justify-center p-1 rounded-md bg-[rgba(255,255,255,0.46)]'>
                                <TbReportAnalytics className='text-lg text-white'/>
                            </span>
                            <span className='text-white md:text-sm text-xs'>
                                YOur order ID: #948902938
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center md:flex-row flex-col md:justify-between 
                    gap-3 md:px-5 md:py-5 px-3 py-2'>
                        <div className='md:p-3 p-2 bg-red-50 rounded-full
                        flex items-center justify-center md:w-[150px] md:h-[150px] w-[100px] h-[100px]'>
                            <div className=' md:p-3 p-2 w-full h-full
                            bg-red-100 rounded-full flex items-center justify-center'>
                            <img src={reserveImg} alt="" className='w-full h-full rounded-full'/>
                            </div>
                        </div>

                        {/* RESERVATION DETAILS */}
                        <div className='flex flex-col gap-3'>
                            <h1 className='md:text-lg text-sm font-semibold'>Reservation Details</h1>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex items-start gap-3'>
                                    <CiCalendarDate className='text-gray-800 md:text-2xl text-lg'/>
                                    <span className='text-gray-800 md:text-sm text-xs'>
                                        {moment(formData?.date).format("dddd, MMM Do YYYY")}
                                    </span>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <IoTimeOutline className='text-gray-800 md:text-2xl text-lg'/>
                                    <span className='text-gray-800 md:text-sm text-xs'>
                                        {formData?.time}
                                    </span>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <CiUser className='text-gray-800 md:text-2xl text-lg'/>
                                    <span className='text-gray-800 md:text-sm text-xs'>
                                        {formData?.size} People
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ACTION BUTTONS */}  
                        <div className='flex md:flex-col flex-row items-start md:gap-5 gap-3'>
                            <button onClick={handleEdit}
                            className='md:w-[130px] w-fit md:p-3 p-2 flex items-center justify-center
                            rounded-lg bg-blue-200 gap-4 text-blue-700 md:text-base text-sm'>
                                Modify
                                <FaRegEdit/>
                            </button>
                            <button onClick={handleCancel}
                            className='md:w-[130px] w-fit md:p-3 p-2 flex items-center justify-center
                            rounded-lg bg-red-200 gap-4 text-red-700 md:text-base text-sm'>
                                Cancel
                                <IoCloseOutline/>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Confirmed