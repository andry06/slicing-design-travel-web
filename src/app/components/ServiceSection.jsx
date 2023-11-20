import React from 'react'
import iconTour from '../assets/images/icons/tour.png';
import iconBooking from '../assets/images/icons/booking.png';
import iconCloudly from '../assets/images/icons/cloudy.png';


const ServiceSection = () => {
  return (
    <section className='overflow-x-hidden'>
        <div className="container mx-auto px-4 py-16">
            <div className="grid sm:grid-cols-12 grid-col-4 items-center">
                <div className="lg:col-span-4 col-span-12 flex gap-4 flex-col ">
                    <span className='text-pink font-bold sm:text-[23px] text-base leading-tight tracking-[4.6px] text-center  lg:text-start'>SERVICES</span>
                    <h1 className='font-bold font-Circular lg:text-[44px] sm:text-[40px] text-[32px] text-center lg:text-start'>Our top value categories for you</h1>
                </div>
                <div className="lg:col-span-8 col-span-12 flex flex-col sm:flex-row gap-[21px] lg:w-screen sm:w-auto mt-8 sm:mt-8 lg:mt-0">
                    <div className='flex flex-col justify-center items-center gap-16 w-full sm:w-[350px] rounded-[32px] lg:p-16 border bg-white p-8'>
                        <div><img src={iconTour} alt="Tour Guide" /></div>
                        <div className='flex gap-8 flex-col'>
                        <h2 className='text-grey text-center font-Circular font-bold  text-[28px]'>Best Tour Guide</h2>
                        <p className='text-grey opacity-50 text-lg leading-relaxed text-center'>What looked like a small patch of purple grass, above five feet.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-16 w-full sm:w-[350px] rounded-[32px] lg:p-16 border bg-white shadow-xl-shadow p-8'>
                        <div><img src={iconBooking} alt="Tour Guide" /></div>
                        <div className='flex gap-8 flex-col'>
                        <h2 className='text-grey text-center font-Circular font-bold  text-[28px]'>Easy Booking</h2>
                        <p className='text-grey opacity-50 text-lg leading-relaxed text-center'>Square, was moving across the sand in their direction.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-16 w-full sm:w-[350px] rounded-[32px] lg:p-16 border bg-white sm:shadow-xl-shadow p-8'>
                        <div><img src={iconCloudly} alt="Tour Guide" /></div>
                        <div className='flex gap-8 flex-col'>
                        <h2 className='text-grey text-center font-Circular font-bold  text-[28px]'>Weather Forecast</h2>
                        <p className='text-grey opacity-50 text-lg leading-relaxed text-center'>What looked like a small patch of purple grass, above five feet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection