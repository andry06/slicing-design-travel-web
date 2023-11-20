import React from 'react'
import iconStar from '../assets/images/icons/star-kuning.svg';
import arrowBlack from '../assets/images/icons/arrowBlack.svg';
import arrowWhite from '../assets/images/icons/arrowWhite.svg';

const TestimonialSection = () => {
  return (
    <section>
        <div className='mx-4 sm:mx-16 lg:mx-32 py-8 sm:py-16 flex flex-col sm:flex-row gap-16 sm:gap-[56px] sm:items-center '>

            <div className="hidden sm:flex w-16 h-16 sm:w-[100px] sm:h-full rounded-full p-[24px] md:p-[28px]  lg:p-[32px] border cursor-pointer" ><img src={arrowBlack} alt="arrow-black"   /></div>

            <div className='flex flex-col gap-16 sm:gap-[56px]'>
                <div className='flex flex-col gap-4 px-4 text-center'>
                    <div><h2 className='text-pink font-Circular text-base sm:text-[23px] font-bold tracking-[3.2px] sm:tracking-[4.6px] uppercase'>Testimonials</h2></div>
                    <div className='text-grey font-Circular text-[32px] sm:text-[40px] lg:text-[44px]'>Trust our clients</div>
                </div>
                <div>
                    <div style={{ 'backgroundPositionY': '60%' }} className="w-[128px] h-[128px] mx-auto bg-[url('app/assets/images/testimonial.jpeg')] bg-no-repeat rounded-full"></div>
                </div>
                <div className='flex flex-col gap-8 text-center'>
                    <div>
                        <h5 className='text-orange font-Circular text-[28px] font-bold inline'>Mark Smith</h5>
                        <h6 className='text-grey font-Circular text-[23px] font-bold inline'> / Travel Enthusiast</h6>
                    </div>
                    <div className='flex flex-row gap-4 mx-auto'>
                        <div><img src={iconStar} alt="star"  /></div>
                        <div><img src={iconStar} alt="star"  /></div>
                        <div><img src={iconStar} alt="star"  /></div>
                        <div><img src={iconStar} alt="star"  /></div>
                        <div><img src={iconStar} alt="star"  /></div>
                    </div>
                </div>
                <div className='text-grey opacity-75 text-lg sm:text-[23px] font-Circular text-center leading-relaxed '>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                </div>
                <div className='flex flex-row gap-6 mx-auto'>
                    <div className='bg-grey opacity-5 w-6 h-6 rounded-full cursor-pointer'></div>
                    <div className='bg-pink w-6 h-6 rounded-full cursor-pointer'></div>
                    <div className='bg-grey opacity-5 w-6 h-6 rounded-full cursor-pointer'></div>
                </div>
            </div>

            <div className="hidden sm:flex w-16 h-16 sm:w-[100px] sm:h-full  rounded-full p-[24px] md:p-[28px] lg:p-[32px]  border bg-ungu sm:ms-8 cursor-pointer" ><img src={arrowWhite} alt="arrow-white"  /></div>

            <div className='flex flex-row justify-between sm:hidden'>
                <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] rounded-full p-[24px] sm:p-[38px] border cursor-pointer" ><img src={arrowBlack} alt=""  /></div>
                <div className="w-16 h-16 sm:w-[100px] sm:h-[100px]  rounded-full p-[24px] sm:p-[38px] border bg-ungu sm:ms-8 cursor-pointer" ><img src={arrowWhite} alt="" /></div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection