import React from 'react';
import iconMessage from '../assets/images/icons/message.svg';

const SubscribeSection = () => {
  return (
    <section>
        <div className='mx-4 sm:mx-16 sm:mt-[45px] lg:mt-[113px] px-8 sm:px-16 py-16 sm:py-32 bg-cream rounded-[32px]'>
            <div className='flex flex-col gap-16'>
                <div className='flex flex-col gap-8 text-center'>
                    <div><h3 className='text-pink text-base sm:text-[23px] font-bold tracking-[3.2px] sm:tracking-[4.6] uppercase'>subscribe to our newsletter</h3></div>
                    <div className='text-grey font-Circular text-[32px] sm:text-[40px] font-bold'>Prepare yourself & let’s explore the beauty of the world</div>
                </div>
                <div className='flex flex-col sm:flex-row gap-8'>
                    <div className='px-8 py-6 md:py-8 bg-white flex flex-row gap-4 items-center rounded-2xl sm:roundex-[32px] sm:w-8/12'>
                        <div><img src={iconMessage} alt="message" /></div>
                        <div className='font-Circular text-sm sm:text-[23px] text-grey opacity-75 font-bold'>Your Email</div>
                    </div>
                    <div className='px-16 sm:px-4 m py-6 md:py-8 bg-ungu rounded-2xl sm:rounded-[32px] sm:w-4/12 items-stretch	'>
                    <span className='text-center font-Circular font-bold text-base sm:text-lg md:text-[23px] text-white'>Subscribe</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SubscribeSection