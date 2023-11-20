import React from 'react';
import arrowBlack from '../assets/images/icons/arrowBlack.svg';
import arrowWhite from '../assets/images/icons/arrowWhite.svg';
import fish from '../assets/images/fish.jpeg';
import beach from '../assets/images/beach.jpeg';
import mountain from '../assets/images/mountain.jpeg';
import start from '../assets/images/icons/star.svg';

const DestinationSection = () => {
  return (
    <section>
        <div className='grid grid-col px-4 sm:px-16 py-16 lg:ms-[100px]'>
            <div className='flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center'>
                <div className='grid grid-col col-span-12'>
                    <div><h2 className='text-pink text-center font-Circular text-base sm:text-[23px] font-bold tracking-[3.2px]'>Top Destination</h2> </div>
                    <div><h2 className='mt-4 text-grey text-center font-Circular text-[32px] sm:text-[40px] lg:text-[44px] font-bold'>Explore top destination</h2></div>
                </div>
                <div className='flex flex-row col-span-12 justify-between sm:justify-center'>
                    <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] rounded-full p-[24px] sm:p-[38px] border cursor-pointer" ><img src={arrowBlack} alt=""  /></div>
                    <div className="w-16 h-16 sm:w-[100px] sm:h-[100px]  rounded-full p-[24px] sm:p-[38px] border bg-ungu sm:ms-8 cursor-pointer" ><img src={arrowWhite} alt="" /></div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-8 sm:gap-[31px] mt-8 sm:mt-[67px] lg:mt-16'>
                <div className='grid grid-col  bg-white rounded-[32px] shadow-top-destination overflow-hidden sm:w-1/3'>
                    <div className='col-span-12 '>
                        <div >
                            <img src={beach} alt="beach" className='h-[314px] w-full object-cover' />
                        </div>
                    </div>
                    <div className='col-span-12 p-8 text-start'>
                        <div className='flex flex-col lg:flex-row'>
                            <div className='col-span-12 lg:col-span-4 lg:order-2'><span className='text-pink font-Circular text-[23px] font-bold '>$550.16</span></div>
                            <div className='col-span-12 lg:col-span-8 lg:order-1 lg:mr-8'><h3 className='font-Circular text-[23px] font-bold text-start'>Paradise Beach, Bantayan Island</h3></div>
                        </div>
                        <div className='mt-4'><span className='text-grey opacity-75 font-inter text-lg leading-relaxed'>Rome, Italy</span></div>
                        <div className='flex mt-8'>
                            <span className='font-Circular text-[23px] font-bold'>4.8</span>
                            <img src={start} alt="start" className='ms-2' />
                        </div>
                    </div>
                </div>

                <div className='grid grid-col bg-white rounded-[32px] shadow-top-destination overflow-hidden sm:w-1/3'>
                    <div className='col-span-12'>
                        <div >
                            <img src={fish} alt="fish" className='h-[314px] w-full object-cover'/>
                        </div>
                    </div>
                    <div className='col-span-12 p-8 text-start'>
                        <div className='flex flex-col lg:flex-row'>
                           <div className='col-span-12 lg:col-span-4 lg:order-2'><span className='text-pink font-Circular text-[23px] font-bold '>$20.99</span></div>
                           <div className='col-span-12 lg:col-span-8 lg:order-1 lg:mr-8'><h3 className='font-Circular text-[23px] font-bold text-start'>Ocean with full of Colors</h3></div>
                        </div>
                        <div className='mt-4'><span className='text-grey opacity-75 font-inter text-lg leading-relaxed'>Maldives</span></div>
                        <div className='flex mt-8'>
                            <span className='font-Circular text-[23px] font-bold'>4.5</span>
                            <img src={start} alt="start" className='ms-2' />
                        </div>
                    </div>
                </div>

                <div className='grid grid-col  bg-white rounded-[32px] shadow-top-destination overflow-hidden sm:w-1/3'>
                    <div className='col-span-12 '>
                        <div >
                            <img src={mountain} alt="fish" className='w-full h-[314px] object-cover'/>
                        </div>
                    </div>
                    <div className='col-span-12 p-8 text-start'>
                        <div className='flex flex-col lg:flex-row'>
                            <div className='col-span-12 lg:col-span-4 lg:order-2'><span className='text-pink font-Circular text-[23px] font-bold '>$150.99</span></div>
                            <div className='col-span-12 lg:col-span-8 lg:order-1 lg:mr-8'><h3 className='font-Circular text-[23px] font-bold text-start'>Mountain View, Above the cloud</h3></div>
                        </div>
                        <div className='mt-4'><span className='text-grey opacity-75 font-inter text-lg leading-relaxed'>United Arab Emeries</span></div>
                        <div className='flex mt-8'>
                            <span className='font-Circular text-[23px] font-bold'>5.0</span>
                            <img src={start} alt="start" className='ms-2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DestinationSection