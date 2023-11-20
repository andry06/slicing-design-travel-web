import React from 'react';
import imgHero from '../assets/images/hero.png';
import iconWork from '../assets/images/icons/work.svg';
import iconPlay from '../assets/images/icons/play.svg';
import imgTripadvisor from '../assets/images/logo/tripadvisor.svg';
import imgExpedia from '../assets/images/logo/expedia.svg';
import imgBooking from '../assets/images/logo/booking.svg';
import imgAirbnb from '../assets/images/logo/airbnb.svg';
import imgGabitz from '../assets/images/logo/gabitz.svg';

const HeroSection = () => {
  return (
    <section>
        <div className='container  mx-auto px-4 pt-4  '>
            <div className="grid grid-cols-4 sm:grid-cols-12  items-center">
                <div className='col-span-12 lg:col-span-4 order-2 lg:order-1 '>
                    <div className='md:py-16'>
                        <button className='px-8 py-4 bg-white text-pink font-Circular flex gap-4 font-bold text-sm shadow-sm-shadow rounded-full mx-auto lg:mx-0 '>
                            Explore the world!
                            <img src={iconWork} alt="Work" className='w-6' />
                        </button>
                        <h1 className='mt-4 mb-6 md:my-[43px] lg:text-start text-bold text-[40px] md:text-[56px] lg:text-[69px] text-grey leading-tight'>Travel <span className='text-pink'>top destination</span> of the world</h1>
                        <p className='mb-8 md:mb-[43px] lg:text-start text-grey opacity-50 text-base md:text-lg font-inter w-3/4 lg:w-full mx-auto'>We always make our customer happy by providing as many choices as possible</p>
                        <div className='flex flex-col md:flex-row justify-center lg:justify-start gap-6 mb-8'>
                            <button className='py-6 md:py-4 px-8 bg-ungu shadow-lg-shadow text-white rounded-full text-sm font-bold font-Circular'>Get Started</button>
                            <button className='justify-center items-center z-10 flex gap-4 py-6 md:py-4 px-8 bg-white border border-[#EEE] rounded-full text-sm font-bold font-Circular'>
                                <img src={iconPlay} alt="play"/>Watch Button
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-8 order-1 lg:order-2 '>
                    <div>
                        <img src={imgHero} alt="hero" className='w-full lg:h-full'  />
                    </div>
                </div>
                <div className="col-span-12 order-3">
                    <div className='flex justify-center lg:justify-between gap-[27px] flex-wrap pt-8 pb-4 '>
                        <div><img src={imgTripadvisor} className='h-5 sm:h-8' alt="tripadvisor" /></div>
                        <div><img src={imgExpedia} className='h-5 sm:h-8' alt="" /></div>
                        <div><img src={imgBooking} className='h-5 sm:h-8' alt="" /></div>
                        <div><img src={imgAirbnb} className='h-5 sm:h-8' alt="" /></div>
                        <div><img src={imgGabitz} className='h-5 sm:h-8' alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection