import React from 'react';
import paradise from '../assets/images/paradise.png';
import iconLocation from '../assets/images/icons/location.svg';
import iconCalender from '../assets/images/icons/calendar.svg';
import iconTicket from '../assets/images/icons/ticket.svg';

const FeatureSection = () => {
  return (
    <section >
        <div className='mx-4 sm:mx-16 lg:mx-0 lg:ms-32 px-8 lg:px-0 py-8 sm:py-16 flex flex-col lg:flex-row gap-16 sm:gap-[70px]'>
            <div className='px-2 sm:px-[69px] lg:px-0 lg:order-2 lg:w-6/12'>
                <img src={paradise} alt="paradise" className='w-full'/>
            </div>
            <div className='px-4 flex flex-col gap-8 lg:gap-16 lg:order-1 lg:w-6/12'>

                <div className='flex flex-col gap-8  text-center lg:text-start'>
                    <div className='flex flex-col gap-4 '>
                        <div className='text-pink font-Circular text-base sm:text-[23px] font-bold tracking-[3.2px] sm:tracking-[4.6px] uppercase'>Key features</div>
                        <div className='text-grey text-[32px] sm:text-[40px] lg:text-[44px] font-bold'>We offer best services</div>
                    </div>
                    <div className='text-grey opacity-50 text-base sm:text-lg leading-relaxed'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</div>
                </div>

                <div className='flex flex-col '>
                    <div className='p-8 flex flex-col sm:flex-row gap-8 sm:items-center'>
                        <div className='bg-orange w-[100px] h-[100px] p-[26px] rounded-[32px] shrink-0	'>
                            <img src={iconLocation} alt="location"  />
                        </div>
                        <div className='text-start '>
                            <div><h6 className='text-grey font-Circular text-[23px] font-bold'>We offer best services</h6></div>
                            <div className='text-lg leading-relaxed text-grey opacity-50'>Lorem Ipsum is not simply random text</div>
                        </div>
                    </div>
                    <div className='p-8  flex flex-col sm:flex-row gap-8 border rounded-[32px] sm:items-center'>
                        <div className='bg-kuning w-[100px] h-[100px] p-[26px] rounded-[32px] shrink-0	'>
                            <img src={iconCalender} alt="calender"  />
                        </div>
                        <div className='text-start'>
                            <div><h6 className='text-grey font-Circular text-[23px] font-bold'>We Schedule your trip</h6></div>
                            <div className='text-lg leading-relaxed text-grey opacity-50'>It has roots in a piece of classical</div>
                        </div>
                    </div>
                    <div className='p-8  flex flex-col sm:flex-row gap-8 sm:items-center'>
                        <div className='bg-pink w-[100px] h-[100px] p-[26px] rounded-[32px] shrink-0	'>
                            <img src={iconTicket} alt="ticket"  />
                        </div>
                        <div className='text-start'>
                            <div><h6 className='text-grey font-Circular text-[23px] font-bold'>Get discounted coupons</h6></div>
                            <div className='text-lg leading-relaxed text-grey opacity-50'>Lorem Ipsum is not simply random text</div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection