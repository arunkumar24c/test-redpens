import React, { useEffect } from 'react'
import Testimonial from '../Component/Testimonial/Testimonial'
import PeopleIcon from '../Elements/IconElement/OurServiceIcons/PeopleIcon'
import { ScrolltoTop } from '../Utility'

function Services() {
    // Document title
    document.title='The Red Pen - Services'

    useEffect(()=>{
        ScrolltoTop()
    },[])
    
  return (
    <>
    <div className='Container-wrapper mt-3 my-5'>
        <div className='bg-brnd-gray w-full h-64 shadow-md rounded-md'>
        </div>
        <div className='flex flex-col gap-y-2 mt-5'>
            <p className='text-sm font-thin'>Pre-College Advising • Guest Post</p>
            <p className='font-bold text-xl'>Overcoming Education Inflation and Currency Depreciation</p>
            <p>POSTED ON 03/02/2023 BY EELA DUBEY, CO-FOUNDER, EDUFUND</p>
            <p>Every parent wants to give their children a world-class education. One way to ensure that is to send them to a reputed university abroad. According to the Bureau of Immigration, nearly 6.5 lakh Indian students travelled to different countries for further education in 2022, indicating that many Indian parents believe in the quality of education abroad. But an international education is an expensive endeavour. To create a substantial corpus for their child’s education, parents must understand the obstacles well in advance to beat them.</p>
        </div>

        <img className='w-full my-5 h-auto' src="assets/images/service1.png" alt=""/>
        <p className='text-center text-2xl font-bold'>LOOKING FOR SOMETHING MORE SPECIFIC?</p>

<div className='flex gap-y-10 flex-col md:flex-row lg:flex-row xl:flex-row my-5 gap-x-10'>
        <div className='flex gap-y-4 flex-col justify-center items-center'>
            <PeopleIcon />
            <p className='text-center'>Behind every successful MBA application is a systematic and structured plan. We begin by analysing your profile, work experience</p>
        </div>
        <div className='flex gap-y-4  flex-col justify-center items-center'>
            <PeopleIcon />
            <p className='text-center'>Behind every successful MBA application is a systematic and structured plan. We begin by analysing your profile, work experience</p>
        </div>
        <div className='flex gap-y-4  flex-col justify-center items-center'>
            <PeopleIcon />
            <p className='text-center'>Behind every successful MBA application is a systematic and structured plan. We begin by analysing your profile, work experience</p>
        </div>
        <div className='flex gap-y-4  flex-col justify-center items-center'>
            <PeopleIcon />
            <p className='text-center'>Behind every successful MBA application is a systematic and structured plan. We begin by analysing your profile, work experience</p>
        </div>
</div>
    </div>

    <Testimonial/>
    <div className='Container-wrapper'>
    <div className='flex flex-col gap-y-2 mt-5'>
            <p className='text-sm font-thin'>Pre-College Advising • Guest Post</p>
            <p className='font-bold text-xl'>Overcoming Education Inflation and Currency Depreciation</p>
            <p>POSTED ON 03/02/2023 BY EELA DUBEY, CO-FOUNDER, EDUFUND</p>
            <p>Every parent wants to give their children a world-class education. One way to ensure that is to send them to a reputed university abroad. According to the Bureau of Immigration, nearly 6.5 lakh Indian students travelled to different countries for further education in 2022, indicating that many Indian parents believe in the quality of education abroad. But an international education is an expensive endeavour. To create a substantial corpus for their child’s education, parents must understand the obstacles well in advance to beat them.</p>
        </div>
        <img className='w-full my-5 h-auto' src="assets/images/service1.png" alt=""/>
    
        <p className='text-xl font-bold capitalize my-5 text-center'>our team</p>
<div className='flex gap-x-5 flex-col md:flex-row lg:flex-row xl:flex-row gap-y-5'>
    
        <div className='flex items-start flex-col gap-y-2 p-5 bg-brnd-gray rounded-md'>
            <img src="assets/images/teamimg.png" alt=""/>
            <p className='text-xl font-bold'>Heading 1</p>
            <p>Behind every successful MBA application is a systematic and structured plan. We begin by analysing your profile, work experience, and cultural and financial preferences to create a roadmap with a customised action plan for the way forward. We also help you identify programmes best suited to your goals.</p>
        </div>
        <div className='flex items-start flex-col gap-y-2 p-5 bg-brnd-gray rounded-md'>
            <img src="assets/images/teamimg.png" alt=""/>
            <p className='text-xl font-bold'>Heading 1</p>
            <p>Behind every successful MBA application is a systematic and structured plan. We begin by analysing your profile, work experience, and cultural and financial preferences to create a roadmap with a customised action plan for the way forward. We also help you identify programmes best suited to your goals.</p>
        </div> 
        <div className='flex items-start flex-col gap-y-2 p-5 bg-brnd-gray rounded-md'>
            <img src="assets/images/teamimg.png" alt=""/>
            <p className='text-xl font-bold'>Heading 1</p>
            <p>Behind every successful MBA application is a systematic and structured plan. We begin by analysing your profile, work experience, and cultural and financial preferences to create a roadmap with a customised action plan for the way forward. We also help you identify programmes best suited to your goals.</p>
        </div> 
        <div className='flex items-start flex-col gap-y-2 p-5 bg-brnd-gray rounded-md'>
            <img src="assets/images/teamimg.png" alt=""/>
            <p className='text-xl font-bold'>Heading 1</p>
            <p>Behind every successful MBA application is a systematic and structured plan. We begin by analysing your profile, work experience, and cultural and financial preferences to create a roadmap with a customised action plan for the way forward. We also help you identify programmes best suited to your goals.</p>
        </div>
</div>
<p className='text-center text-xl font-bold my-5'>Our Team</p>
<div className='flex gap-x-5 flex-col md:flex-row lg:flex-row xl:flex-row gap-y-5'>
        <div className='flex flex-col gap-y-3 items-start'>
            <img src="assets/images/ourteam.png" alt=""/>
            <p>Behind every successful MBA application is a systematic</p>
        </div>
        <div className='flex flex-col gap-y-3 items-start'>
            <img src="assets/images/ourteam.png" alt=""/>
            <p>Behind every successful MBA application is a systematic</p>
        </div> 
        <div className='flex flex-col gap-y-3 items-start'>
            <img src="assets/images/ourteam.png" alt=""/>
            <p>Behind every successful MBA application is a systematic</p>
        </div>
         <div className='flex flex-col gap-y-3 items-start'>
            <img src="assets/images/ourteam.png" alt=""/>
            <p>Behind every successful MBA application is a systematic</p>
        </div>
</div>
    </div>
    </>
  )
}

export default Services