import React, { useState } from 'react'
import iconLogo from '../assets/images/icons/icon-logo.svg';
import iconFb from '../assets/images/icons/facebook.svg';
import iconTwitter from '../assets/images/icons/twitter.svg';
import iconInstagram from '../assets/images/icons/instagram.svg';
import iconTop from '../assets/images/icons/top.svg';
import { useSelector } from 'react-redux';

const Footer = () => {
    const [viewCompany, setViewCompany] = useState(false);
    const [viewContact, setViewContact] = useState(false);
    const [viewMeet, setViewMeet] = useState(false);
    const toggle = useSelector(state => state.toggle);

  return (
    <section className={`${toggle && 'pb-20'} mt-16`}>
        <div className='mx-4 sm:mx-16 py-8 sm:py-16 flex flex-col lg:flex-row gap-16'>
            <div className='flex flex-col gap-8 lg:w-1/2'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-row gap-4'>
                        <div><img src={iconLogo} alt="Logo" /></div>
                        <div className='text-grey font-Circular text-2xl font-[900px] leading-[40px]'>Travlog</div>
                    </div>
                    <div className='text-start text-grey opacity-50 font-Circular text-base sm:text-[23px] font-[450px] leading-relaxed'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</div>
                </div>
                <div className='flex flex-row gap-8'>
                    <div><img src={iconFb} alt="facebook" /></div>
                    <div><img src={iconTwitter} alt="twitter" /></div>
                    <div><img src={iconInstagram} alt="instagram" /></div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-8 lg:w-1/2'>
                <div className='flex flex-col gap-8 sm:w-1/3'>
                    <div className='flex flex-row justify-between ' >
                        <div className='text-grey text-[23px] font-bold'><h6>Company</h6></div>
                        <div className='sm:hidden w-6 h-6 rounded-full border-2 border-[#292D32] cursor-pointer' onClick={ () => setViewCompany(!viewCompany) }><img src={iconTop} alt="top" className={`m-auto my-2 ${viewCompany && 'rotate-180'}`} /></div>
                    </div>
                    <div className={`flex flex-col gap-8 text-start ${viewCompany ? 'transition duration-200  delay-100 opacity-100 translate-y-0 ease-in' : 'ease-out opacity-0 -translate-y-4 hidden sm:flex sm:opacity-100 sm:translate-y-0'}`}>
                        <div className='text-grey opacity-75 text-lg leading-relaxed'><a href="#About">About</a></div>
                        <div className='text-grey opacity-75 text-lg leading-relaxed'><a href="#Career">Career</a></div>
                        <div className='text-grey opacity-75 text-lg leading-relaxed'><a href="#Mobile">Mobile</a></div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 sm:w-1/3'>
                    <div className='flex flex-row justify-between ' >
                        <div className='text-grey text-[23px] font-bold'><h6>Contact Us</h6></div>
                        <div className='sm:hidden w-6 h-6 rounded-full border-2 border-[#292D32] cursor-pointer' onClick={ () => setViewContact(!viewContact) }><img src={iconTop} alt="top" className={`m-auto my-2 ${viewContact && 'rotate-180'}`} /></div>
                    </div>
                    <div className={`flex flex-col gap-8 text-start  ${viewContact ? 'transition duration-200  delay-100 opacity-100 translate-y-0 ease-in' : 'ease-out  opacity-0 -translate-y-4 hidden  sm:flex sm:opacity-100 sm:translate-y-0'}`}>
                        <div className='text-grey opacity-75 text-lg leading-relaxed'><a href="#wy">Why Travlog?</a></div>
                        <div className='text-grey opacity-75 text-lg leading-relaxed'><a href="#partner">Partner with us</a></div>
                        <div className='text-grey opacity-75 text-lg leading-relaxed'><a href="#faq">FAQ’s</a></div>
                        <div className='text-grey opacity-75 text-lg leading-relaxed'><a href="#blog">Blog</a></div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 sm:w-1/3'>
                    <div className='flex flex-row justify-between ' >
                        <div className='text-grey text-[23px] font-bold'><h6>Meet Us</h6></div>
                        <div className='sm:hidden w-6 h-6 rounded-full border-2 border-[#292D32] cursor-pointer' onClick={ () => setViewMeet(!viewMeet) }><img src={iconTop} alt="top" className={`m-auto my-2 ${viewMeet && 'rotate-180'}`} /></div>
                    </div>
                    <div className={`flex flex-col gap-8 text-start  ${viewMeet ? 'transition duration-200  delay-100 opacity-100 translate-y-0 ease-in' : 'ease-out  opacity-0 -translate-y-4 hidden  sm:flex sm:opacity-100 sm:translate-y-0'}`}>
                        <div className='text-grey opacity-75 text-lg leading-relaxed'>+00 92 1234 56789</div>
                        <div className='text-grey opacity-75 text-lg leading-relaxed'>info@travlog.com</div>
                        <div className='text-grey opacity-75 text-lg leading-relaxed'>205. R Street, New York</div>
                        <div className='text-grey opacity-75 text-lg leading-relaxed'>BD23200</div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Footer