import React from 'react'
import MenuContainer from '../../components/menu/Menu'
import Topbar from '../../components/topbar/Topbar'

const Menu = () => {
  return (
      <section className='w-full flex flex-col items-center'>
          <Topbar/>
          {/* MENU */}
          <div className=' py-14'>
            <MenuContainer/>
          </div>
      </section>
  )
}

export default Menu