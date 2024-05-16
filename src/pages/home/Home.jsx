import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import heroImg from '../../assets/hero-img.png'
import popular from '../../assets/popular.png'
import Container from '../../components/container/Container'
import { motion } from 'framer-motion'
import MenuContainer from '../../components/menu/Menu'
import chef1 from '../../assets/chef1.png'
import chef2 from '../../assets/chef2.png'
import chef3 from '../../assets/chef3.png'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { testimonials } from '../../utils'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Blog from '../../components/blog/Blog'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
        <section className='w-full bg-gradient-to-b from-red-200 to-slate-100 
        flex flex-col items-center'>
            <Topbar/>
            {/* HERO */}
            <div className='container flex items-center justify-between md:h-screen flex-col 
            md:flex-row px-3 py-[5rem]'>
                {/* LEFT */}
                <div className='flex flex-col items-start gap-4'>
                    <h1 className=' md:text-7xl text-5xl font-semibold leading-snug'>
                        Best <br/> Restaurant <br/>
                        In <span className=' text-red-500'>Town.</span>
                    </h1>
                    <p className='md:text-xl text-base'>
                        We provide best food in town, we provide home delivery and dine in services.
                    </p>
                    <div className='flex items-center gap-4'>
                        <Link to={'/menu'} className=' md:p-4 p-3 md:w-48 w-max bg-red-500 rounded-lg 
                        md:text-xl text-sm text-white hover:opacity-80 font-semibold'>Order Now</Link>
                        <Link to={'/reservation'} className=' md:p-4 p-3 md:w-48 w-max bg-red-200 rounded-lg
                        text-red-500 hover:opacity-80 font-semibold md:text-xl text-sm'>Reservation</Link>
                    </div>
                </div>

                {/* RIGTH */}
                <div className='md:w-1/2 w-full'>
                    <img src={heroImg} alt="" className=' w-full h-full'/>
                </div>
            </div>
        </section>

        {/* POPULAR DISH */}
        <section className='w-full py-12 px-12 bg-[#e7f7ed]'>
            <Container className={'w-full flex items-center md:flex-row flex-col-reverse justify-between gap-8'}>
                <div className='md:w-5/12'>
                    <img src={popular} alt="" className='w-full h-full'/>
                </div>
                <div className='md:w-5/12 w-full flex flex-col items-start gap-5'>
                    <h1 className=' md:text-6xl text-5xl text-black font-semibold'>
                        Our Most <br/> Popular <span className='text-red-500'>Dish.</span>
                    </h1>
                    <p className='md:text-base text-sm text-gray-900'>
                        Experience the luxury of our Lobster Thermidor, featuring succulent lobster meat 
                        cooked in a creamy white wine sauce, topped with a golden Parmesan crust. A true 
                        indulgence for the discerning palate.
                    </p>
                    <Link to={'/menu'} className=' md:p-4 p-3 md:w-48 w-28 bg-red-500 rounded-lg 
                    md:text-xl text-base text-white hover:opacity-80 font-semibold
                     transition-all duration-300 ease-in-out'>Order Now</Link>
                </div>
            </Container>
        </section>

        {/* MENU */}
        <MenuContainer/>

        {/* CHEFS */}
        <section className='mt-24 px-8 py-12'>
            <Container className={'flex flex-col items-center justify-center gap-4'}>
                <h1 className='md:text-5xl text-4xl text-black font-semibold'>
                    Our Popular <span className=' text-red-500'>Chefs</span>
                </h1>
                <div className='w-full mt-8 mx-auto grid gap-4 gap-y-6 place-items-center'
                style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                }}
                >
                    <motion.div className='flex flex-col items-center gap-4'
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                        <img src={chef1} alt="" className=' bg-slate-300 rounded-[40px]
                        flex items-center justify-center h-[500px] object-cover'/>
                        <h3 className='md:text-3xl text-xl text-black font-semibold'>Marguerite Bush</h3>
                        <span className=' text-base text-gray-400'>Chef</span>
                    </motion.div>
                    <motion.div className=' flex flex-col items-center gap-4'
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                        <img src={chef2} alt="" className=' bg-slate-300 rounded-[40px]
                        flex items-center justify-center h-[500px] object-cover'/>
                        <h3 className='md:text-3xl text-xl text-black font-semibold'>Ada Johnson</h3>
                        <span className=' text-base text-gray-400'>Chef</span>
                    </motion.div>
                    <motion.div className=' flex flex-col items-center gap-4'
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                        <img src={chef3} alt="" className=' bg-slate-300 rounded-[40px]
                        flex items-center justify-center h-[500px] object-cover'/>
                        <h3 className='md:text-3xl text-xl text-black font-semibold'>Wayne Tate</h3>
                        <span className=' text-base text-gray-400'>Chef</span>
                    </motion.div>
                </div>
            </Container>
        </section>

        {/* TESTIMONIALS */}
        <section className=' mt-16 bg-slate-100 py-12 px-9'>
            <Container className='flex flex-col items-center justify-center gap-4'>
                <h1 className='md:text-5xl text-3xl text-black font-semibold text-center'>
                    What Our <span className=' text-red-500'>Customers</span> Say
                </h1>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="h-full mt-20 md:w-[700px] w-full"
                >
                    {
                        testimonials.map((item, i)=>(
                            <SwiperSlide key={i}
                            className='flex flex-col items-center gap-4 w-full h-[350px] p-8 bg-white
                            rounded-[30px]'>
                                <FaQuoteLeft className='text-xl text-black self-start mb-6'/>
                                <p className='md:text-sm text-xs text-black text-center'>
                                    {item.text}
                                </p>
                                <FaQuoteRight className='text-xl text-black self-end'/>
                                <div className='flex items-center justify-center gap-4'>
                                    <img src={item.img} alt="" className=' w-12 h-12
                                    rounded-full object-cover'/>
                                    <div className='flex flex-col items-star'>
                                        <h3 className='text-sm text-black font-semibold'>
                                            {item.Name}
                                        </h3>
                                        <span className='text-sm text-black'>
                                            Financial Advisor
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </section>

        {/* BLOG */}
        <Blog/>

        {/* ORDER */}
        <section className='md:px-0 px-12 py-6'>
            <Container className='p-8 h-[300px] flex flex-col gap-10 items-center justify-center
            bg-red-200 rounded-3xl'>
                <h1 className='md:text-5xl text-3xl text-black font-semibold text-center'>
                    Hungry? We are open now...
                </h1>
                <div className='flex items-center gap-4'>
                    <Link to={'/menu'} className='md:p-4 p-3 md:w-48 w-28 bg-red-500 rounded-lg 
                    md:text-xl text-sm text-white hover:opacity-80 font-semibold'>Order Now</Link>
                    <Link to={'/reservation'} className='md:p-4 p-3 md:w-48 w-28 bg-red-50 rounded-lg md:text-xl text-sm
                    text-red-500 hover:opacity-80 font-semibold'>Reservation</Link>
                </div>
            </Container>
        </section>

    </>
  )
}

export default Home