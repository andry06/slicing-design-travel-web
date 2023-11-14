import React, { useState } from 'react'
import imgLogo from '../assets/images/logo.svg';
import imgToogle from '../assets/images/toggle.svg';
import { IoHomeOutline, IoAlbumsOutline, IoSparklesOutline, IoReorderThreeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";

const Navbar = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <nav className='py-8 px-4'>
        <div className='container  mx-auto'>
          <div className='flex justify-between items-center'>
            <img src={imgLogo} alt="logo" className='order-1 sm:order-2'/>
            <img src={imgToogle}  alt="toggle" onClick={() => { setShowMenu(!showMenu); setShowAccount(false) }} className='order-2 sm:order-1 lg:hidden'/>
            <div className='order-2 hidden lg:block'>
              <ul className='flex gap-16 font-ci'>
                <li>
                  <a href='#home' className='text-grey font-bold text-sm'>Home</a>
                </li>
                <li>
                  <a href='#discover' className='text-grey font-bold text-sm opacity-50'>Discover</a>
                </li>
                <li>
                  <a href='#special' className='text-grey font-bold text-sm opacity-50'>Special Deals</a>
                </li>
                <li>
                  <a href='#contact' className='text-grey font-bold text-sm opacity-50'>Contact</a>
                </li>
              </ul>
            </div>
            <div className='order-3 hidden sm:block'>
              <button className='grow bg-white px-8 py-4 font-bold text-grey rounded-full text-sm'>Login</button>
              <button className='grow bg-ungu px-8 py-4 font-bold text-white rounded-full text-sm'>Sign Up</button>
            </div>
          </div>
        </div>
        <div className={`fixed bottom-0 left-0 right-0 bg-white p-4 border lg:hidden transition duration-300 ease-in-out delay-150 ${showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <ul className='flex justify-between'>
            <li>
              <button className='flex justify-center flex-col items-center text-base'>
                <IoHomeOutline className=' text-2xl text-ungu'/>
                <span className='text-ungu text-base font-bold gap-1 '>Home </span>
              </button>
            </li>
            <li>
              <button className='flex justify-center flex-col items-center text-base'>
                <IoAlbumsOutline className='text-2xl text-grey opacity-50'/>
                <span className='text-grey opacity-50 text-base font-normal gap-1'>Discover </span>
              </button>
            </li>
            <li>
              <button className='flex justify-center flex-col items-center text-base'>
               <IoSparklesOutline className='text-2xl text-grey opacity-50'/> 
               <span className='text-grey opacity-50 text-base font-normal gap-1'>Special </span> 
              </button>
            </li>
            <li>
              <button className='flex justify-center flex-col items-center text-base'>
                <MdOutlineContactPhone className='text-2xl text-grey opacity-50'/>
                <span className='text-grey opacity-50 text-base font-normal gap-1'>Contact </span> 
              </button>
            </li>
            <li>
              <button className='flex justify-center flex-col items-center text-base' onClick={() => { setShowAccount(!showAccount) }}>
                <IoReorderThreeOutline className='text-2xl text-grey opacity-50'/>
                <span className='text-grey opacity-50 text-base font-normal gap-1'>More </span> 
              </button>
            </li>
          </ul>
          
          <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 w-3/4 transition duration-300 ease-in-out delay-150	${showAccount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className='grow bg-white px-8 py-4 font-bold text-grey rounded-full text-sm'>Login</button>
            <button className='grow bg-ungu px-8 py-4 font-bold text-white rounded-full text-sm'>Sign Up</button>
          </div>
         
        </div>
    </nav>
  )
}

export default Navbar