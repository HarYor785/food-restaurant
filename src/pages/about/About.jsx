import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import aboutImg1 from '../../assets/about-img1.png'
import aboutImg2 from '../../assets/about-img2.png'
import aboutImg3 from '../../assets/about-img3.png'
import Container from '../../components/container/Container'

const About = () => {
  return (
      <section className='w-full min-h-screen'>
          <Topbar/>
          {/* ABOUT */}
          <div className='container flex items-center flex-col gap-10 px-3 md:py-[10rem] py-[5rem]'>

            <Container className='about-container reverse w-full flex justify-between md:gap-24 gap-12 
            items-center px-9 md:row-auto'>
              <div className='md:p-10 p-5 bg-slate-200 rounded-full
              flex items-center justify-center'>
                <div className='md:w-[400px] md:h-[400px] w-[300px] h-[300px] md:p-10 p-5 
                bg-slate-300 rounded-full flex items-center justify-center'>
                  <img src={aboutImg1} alt="" className='w-full h-full rounded-full'/>
                </div>
              </div>
              <div className=' flex flex-col md:gap-6 gap-3 items-start'>
                <h1 className='md:text-6xl text-3xl text-black font-semibold'>
                  About Our <br/> <span className=' text-red-500'>Restaurant</span>
                </h1>
                <p className='md:text-base text-sm text-gray-800'>
                  At Savory, we believe that every meal should be a 
                  delightful experience that brings people together. 
                  Nestled in the heart of New York, 
                  our restaurant is a haven for food enthusiasts 
                  who seek the perfect blend of taste, ambiance, and service.
                </p>
                <button className=' md:p-4 p-3 md:w-48 w-max bg-red-500 rounded-lg 
                md:text-xl text-sm text-white hover:opacity-80 font-semibold'>Order Now</button>
              </div>
            </Container>


            <Container className='about-container px-9 w-full flex justify-between md:gap-24 gap-12 items-center'>
              <div className=' flex flex-col gap-6 items-start'>
                <p className='md:text-base text-sm text-gray-800'>
                Exceptional service is at the heart of what we do. Our attentive and knowledgeable 
                staff are here to ensure your dining experience is nothing short of extraordinary. 
                From the moment you walk in, you'll feel like part of our family.
                <br/><br/>
                You'll be greeted by a warm and inviting atmosphere. Our interior is designed to 
                blend comfort with elegance, featuring  rustic 
                wooden tables, soft lighting, and vibrant artwork. Whether you're here for a 
                romantic dinner, a family gathering, or a casual lunch with friends, our space 
                is perfect for any occasion.
                </p>
              </div>
              <div className='md:p-10 p-5 bg-slate-200 rounded-full
              flex items-center justify-center'>
                <div className='md:w-[400px] md:h-[400px] w-[300px] h-[300px] md:p-10 p-5
                bg-slate-300 rounded-full flex items-center justify-center'>
                  <img src={aboutImg2} alt="" className='w-full h-full rounded-full'/>
                </div>
              </div>
            </Container>

            <Container className={`about-container reverse px-9 flex items-start justify-between md:gap-32 gap-8`}>
              <img src={aboutImg3} alt="" className='w-full h-[500px] object-cover'/>
              <div className='md:w-1/2 w-full flex flex-col items-start md:gap-14 gap-8'>
                <h1 className='text-black md:text-5xl text-3xl font-semibold'>
                  <span className=' text-red-500'>Owner</span> & Executive Chef
                </h1>
                <span className='md:text-4xl text-xl text-gray-600'>
                  Ismail Marzuki
                </span>
                <p className='md:text-4xl text-xl text-stone-500'>
                  The heart and soul behind Savory, brings over 12 years 
                  of culinary experience and a deep passion for Italian/French/Japanese/etc. cuisine. 
                </p>
              </div>
            </Container>


          </div>
      </section>
  )
}

export default About