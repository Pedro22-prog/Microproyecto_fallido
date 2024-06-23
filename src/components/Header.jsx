import React from 'react'
/*import Logo from './img/logo.png'*/
import { FiShoppingCart } from "react-icons/fi";

const Headers = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/*Computadora y Tablet*/}
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
          <img src="" alt="Logo" className="w-8 object-cover"/>
          <p className="text-headingColor text-xl font-bold"> City</p>
        </div>
        <ul className='flex items-center gap-8 ml-auto'>
          <li className='text-base text-textColor hover: text-headingColor duration-100 transition-all esae-in-out cursor-pointer'>Inicio</li>
          <li className='text-base text-textColor hover: text-headingColor duration-100 transition-all esae-in-out cursor-pointer'>Menu</li>
          <li className='text-base text-textColor hover: text-headingColor duration-100 transition-all esae-in-out cursor-pointer'>Nosotros</li>
          <li className='text-base text-textColor hover: text-headingColor duration-100 transition-all esae-in-out cursor-pointer'>Servicio</li>
        </ul>
        <div className='relative flex items-center justify-center'>
        <FiShoppingCart className="text-textColor text-2x1 ml-8 cursor-pointer"/>
        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
          <p className='text-xs text-white font-semibold'></p>
        </div>
        </div>
      </div>
      {/*Celulares*/}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  )
}

export default Headers;
