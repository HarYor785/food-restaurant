import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Container from '../../components/container/Container'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useForm } from 'react-hook-form';

// Fix for default marker icon issue in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        mode: "onChange"
    })

    const onsubmit = (data)=>{
        window.alert('Success')
        reset()
    }
  return (
        <section className='w-full flex flex-col items-center relative'>
            <Topbar/>
            {/* RESERVATION */}
            <div className='container flex flex-col items-center px-3 
            md:py-[8rem] py-[5rem] relative'>
                <h1 className='text-black md:text-5xl text-2xl font-semibold'>
                    Contact Us
                </h1>
                <p className='text-gray-500 md:text-base text-sm text-center'>
                    We love hearing from our customers. Feel free to share your experience
                    or <br/> ask any questions you may have.
                </p>
                <Container className={`flex items-start justify-center 
                md:gap-9 gap-9 md:flex-row flex-col-reverse mt-9 md:px-28`}>

                    {/* CONTACT MAP */}
                    <div className='w-full h-[400px]'>
                        <MapContainer center={[51.505, -0.09]} zoom={13} 
                        style={{ height: '100%', width: '100%', zIndex: '1', borderRadius: '15px' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    {/* CONTACT FORM */}
                    <div className='w-full'>
                        <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit(onsubmit)}>
                            <div className='flex flex-col items-start w-full'>
                                <input type="text" placeholder='First Name'
                                className='w-full p-2 bg-transparent border border-gray-300
                                focus:border-red-500 transition-all duration-300 ease-in-out
                                md:text-base text-sm rounded-lg outline-none'
                                {...register('firstName',{required: 'First Name is required'})}/>
                                {errors.firstName && <span className='text-xs text-red-500'>
                                    {errors.firstName.message}
                                </span>}
                            </div>
                            <div className='flex flex-col items-start w-full'>
                                <input type="text" placeholder='Last Name'
                                className='w-full p-2 bg-transparent border border-gray-300
                                focus:border-red-500 transition-all duration-300 ease-in-out
                                md:text-base text-sm rounded-lg outline-none'
                                {...register('lastName',{required: 'Last Name is required'})}/>
                                {errors.lastName && <span className='text-xs text-red-500'>
                                    {errors.lastName.message}
                                </span>}
                            </div>
                            <div className='flex flex-col items-start w-full'>
                                <input type="email" placeholder='Email'
                                className='w-full p-2 bg-transparent border border-gray-300
                                focus:border-red-500 transition-all duration-300 ease-in-out
                                md:text-base text-sm rounded-lg outline-none'
                                {...register('email',{required: 'Email is required'})}/>
                                {errors.email && <span className='text-xs text-red-500'>
                                    {errors.email.message}
                                </span>}
                            </div>
                            <div className='flex flex-col items-start w-full'>
                                <input type="text" placeholder='Subject'
                                className='w-full p-2 bg-transparent border border-gray-300
                                focus:border-red-500 transition-all duration-300 ease-in-out
                                md:text-base text-sm rounded-lg outline-none'
                                {...register('subject',{required: 'Subject is required'})}/>
                                {errors.subject && <span className='text-xs text-red-500'>
                                    {errors.subject.message}
                                </span>}
                            </div>
                            <div className='flex flex-col items-start w-full'>
                                <textarea type="text" placeholder='Message' rows={4}
                                className='w-full p-2 bg-transparent border border-gray-300
                                focus:border-red-500 transition-all duration-300 ease-in-out
                                md:text-base text-sm rounded-lg outline-none'
                                {...register('message',{required: 'Message is required'})}/>
                                {errors.message && <span className='text-xs text-red-500'>
                                    {errors.message.message}
                                </span>}
                            </div>
                            <button className='w-full p-3 bg-red-500 md:text-base text-sm 
                            font-semibold rounded-lg text-white'>
                                Send
                            </button>
                        </form>
                    </div>
                </Container>
            </div>
        </section>
  )
}

export default Contact