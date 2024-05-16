import React from 'react'
import Container from '../container/Container'
import { blogPosts } from '../../utils'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <section className='w-full py-12 px-9'>
      <Container className={'flex flex-col items-center justify-center mt-6'}>
        <h1 className='md:text-5xl text-3xl text-black font-semibold'>Our Blog</h1>

        <div className='w-full relative grid gap-4 mt-12'
        style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}>
            {
                blogPosts.map((item)=>(
                    <motion.div key={item.id}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='flex flex-col items-center gap-2 bg-white 
                    shadow-gray-200 shadow-xl rounded-lg relative overflow-hidden'>
                        <img src={item.imageUrl} alt="" />
                        <div className='flex flex-col gap-2 md:p-2 p-3 items-center'>
                            <span className=' text-xs text-gray-400 self-start'>{item.date}</span>
                            <h3 className=' text-lg text-black font-semibold'>{item.title}</h3>
                            <p className=' text-sm text-gray-800'>{item.subDescription}</p>
                            <Link to={'/'} className=' text-sm underline text-red-500 self-end'>
                                Read more
                            </Link>
                        </div>
                    </motion.div>
                ))
            }
        </div>

        </Container>
    </section>
  )
}

export default Blog