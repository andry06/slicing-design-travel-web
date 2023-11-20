import React from 'react';
import travelPoint from '../assets/images/travel-point.png';

const PointSection = () => {
  return (
    <section style={{ 'backgroundSize' : '80px 80px', 'backgroundPositionX' : '95%', 'backgroundPositionY' : '40%' }}  className="lg:bg-[url('app/assets/images/icons/bucket.png')] lg:bg-no-repeat">
        <div className='px-4 sm:px-16 lg:ps-0 py-8 flex flex-col lg:flex-row gap-16 lg:gap-0 '>
            <div className='flex col-span-12 lg:basis-7/12 sm:ps-8 lg:ps-0 '>
                <img src={travelPoint} alt="travel-point" />
            </div>
            <div className="grid grid-cols-12 col-span-12 lg:basis-5/12 sm:px-8">
                <div className="col-span-12 text-center  mb-4 lg:pb-4 lg:text-start">
                    <div className="mb-8 ">
                        <div className='text-pink font-Circular text-base sm:text-[23px] tracking-[3.2px] sm:tracking-[4.6px] font-bold'>Travel Point</div>
                        <div className='text-grey font-Circular text-[32px] sm:text-[40px] lg:text-[44px] font-bold mt-4'>We helping you find your dream location</div>
                    </div>
                    <div className='text-grey opacity-50 font-inter text-base sm:text-lg leading-relaxed '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</div>
                </div>
                <div className='col-span-12 flex flex-col gap-4 sm:gap-8'>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
                        <div className='p-8 flex flex-col text-center gap-4 border rounded-[32px] self-stretch sm:w-1/2'>
                            <div><h4 className='text-orange font-Circular text-[35px] font-bold'>500+</h4></div>
                            <div className='text-lg tracking leading-relaxed text-grey'>Holiday Package</div>
                        </div>
                        <div className='p-8 flex flex-col text-center gap-4 border rounded-[32px] self-stretch sm:w-1/2'>
                            <div><h4 className='text-orange font-Circular text-[35px] font-bold'>100</h4></div>
                            <div className='text-lg tracking leading-relaxed text-grey'>Luxury Hotel</div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
                        <div className='p-8 flex flex-col text-center gap-4 border rounded-[32px] self-stretch sm:w-1/2'>
                            <div><h4 className='text-orange font-Circular text-[35px] font-bold'>7</h4></div>
                            <div className='text-lg tracking leading-relaxed text-grey'>Premium Airlines</div>
                        </div>
                        <div className='p-8 flex flex-col text-center gap-4 border rounded-[32px] self-stretch sm:w-1/2'>
                            <div><h4 className='text-orange font-Circular text-[35px] font-bold'>2k+</h4></div>
                            <div className='text-lg tracking leading-relaxed text-grey'>Happy Customer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PointSection