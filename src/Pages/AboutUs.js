import React, { useEffect } from 'react'
import Testimonial from '../Component/Testimonial/Testimonial';
import { ScrolltoTop } from '../Utility';
import TestimonialNew from '../Component/Testimonial/TestimonialNew';
import TRPValue from '../Component/TRPValue';
import About from "../Lottie/About.json"
import Lottie from "lottie-react";


function AboutUs() {
    // Document Title
    document.title = 'The Red Pen - About';

    useEffect(() => {
        ScrolltoTop()
    }, [])

    return (
        <>
        <div className='Container-wrapper my-5'>
            <div className='flex items-center justify-center flex-col gap-y-4'>
                {/* <p className='text-center uppercase text-brnd-black/60 font-bold'>About Us</p> */}
                <p className='font-bold mb-5 text-center lg:text-3xl md:text-2xl xl:text-3xl text-xl w-full lg:w-2/3 xl:w-2/3  md:w-2/3'>Raise the bar. Let our team of global education consultants help you access your best-fit institution.</p>
            {/* <img src="assets/svg/about.svg" alt="" /> */}
            <Lottie
          className=""
          animationData={About}
        />
            </div>

            <div className='flex flex-col items-center justify-center my-10 gap-y-3 hidden'>
                <p className='text-center lg:text-3xl md:text-2xl xl:text-2xl text-xl uppercase text-brnd-black/60 font-bold'>TRP Affiliations</p>

                <div className='bg-brnd-white shadow-lg rounded-lg p-2 w-fit'>
                    <img src="assets/images/about-affiliation.png" alt="" />
                </div>
            </div>

            {/* ruler */}
            <div className='w-full flex justify-center'>
            <div className='w-[90%] bg-brnd-dark-blue/30 h-[2px] my-10 flex'></div>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-x-10 items-center justify-center gap-y-5  w-full my-10'>
                <img className='about-section-list-image' src="assets/svg/about-section-1.svg" alt="" />
                <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex text-center sm:text-left md:text-left lg:text-left xl:text-left flex-col gap-3'>
                    <p className='font-bold text-xl lg:text-2xl md:text-2xl xl:text-2xl'>TRP Story</p>
                    <p className='font-normal  text-md lg:text-xl md:text-xl xl:text-xl text-[#8382A4]'>Founded by education experts with roots in the US and the UK, we understand the confusion and misconceptions that arise while navigating global MBA programs and aim to bridge the knowledge gap in the MBA education systems. Our goal is to empower you with information about international MBA education opportunities and to guide you through the complex admissions process.</p>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row gap-x-10 items-center justify-center gap-y-5   w-full my-10'>
                <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex text-center sm:text-left md:text-left lg:text-left xl:text-left flex-col gap-3'>
                    <p className='font-bold text-xl lg:text-2xl md:text-2xl xl:text-2xl'>TRP Philosophy</p>
                    <p className='font-normal text-md lg:text-xl md:text-xl xl:text-xl text-[#8382A4] '>TRP MBA consultants and specialists focus on helping you find business schools with MBA programs that perfectly align with your background, financial situation, aspirations, academic achievements, and professional strengths. We work to truly understand our applicants and provide personalized guidance throughout the college search and application process to ensure the best fit.</p>
                </div>
                <img className='about-section-list-image' src="assets/svg/about-section-2.svg" alt="" />
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-x-10 items-center justify-center gap-y-5   w-full my-10'>
                <img className='about-section-list-image' src="assets/svg/about-section-3.svg" alt="" />
                <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex text-center sm:text-left md:text-left lg:text-left xl:text-left flex-col gap-3'>
                    <p className='font-bold text-xl lg:text-2xl md:text-2xl xl:text-2xl'>TRP Team</p>
                    <p className='font-normal text-md lg:text-xl md:text-xl xl:text-xl text-[#8382A4] '>Led by Dr. Kimberly Wright Dixit and Namita Mehta, our talented team of 100+ members carries a combined experience of 70 years. Our consultants hail from diverse backgrounds, including 15 of the top 20 global business schools, including Wharton, Columbia, INSEAD, HEC Paris, NYU Stern, UCLA Anderson, Cornell Johnson, IESE Business School, and others. We combine our expertise and play off each other's competencies to tailor our services to your requirements.</p>
                </div>
            </div>

           
            
        </div>
        <TRPValue />

        {/* <div className='Container-wrapper my-5'>
        <div className='flex flex-col items-center justify-center my-10 gap-y-3 '>
                <p className='text-center  text-xl  font-bold'>Google Reviews</p>
                <p className='text-sm '>Here’s what our applicants have to say</p>

                <div className='bg-brnd-white shadow-lg rounded-lg p-2 w-fit'>
                    <img src="assets/images/google-review.png" alt="" />
                </div>
            </div>
        </div> */}
        <TestimonialNew />
        {/* <Testimonial /> */}
        </>
    )
}

export default AboutUs