import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Topbar from './components/topbar/Topbar'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Menu from './pages/menu/Menu'
import OrderOnline from './pages/orderOnline/OrderOnline'
import Reservation from './pages/resrevation/Reservation'
import Contact from './pages/contact/Contact'
import Cart from './pages/cart/Cart'

function App() {

  return (
    <main className=' bg-white w-full overflow-hidden'>
      <div className='relative min-h-screen w-full'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/order-online' element={<OrderOnline/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
      <Footer/>
    </main>
  )
}

export default App
