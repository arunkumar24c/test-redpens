import React, { useEffect, useState } from 'react'
import { ScrolltoTop } from '../Utility';

function Faq() {

    // Document Title
    document.title = 'FAQs - The Red Pen';

    useEffect(() => {
        ScrolltoTop()
    }, [])

    const FaqContent =[
        {
            title:"How does The Red Pen assign a lead consultant?",
            content:"Assignment of a lead consultant is done based on if the consultant has:",
            point1: '1. Previously worked with a similar profile, which could mean a similar company or  industry.',
            point2: '2. Graduated from a business school to which the applicant is interested in applying.',
            point3: '3. Sent previous applicants to the business school of their choice. ',
            point4: '4. Capacity at the time while taking on an applicant. '
        },  
        {
            title:"How many applicants are assigned to a lead consultant? ",
            content:"Each lead consultant works with five applicants per application round and cycle. The Red Pen believes in a personalized approach and allocates time to each applicant. We believe in quality over quantity so that lead consultants can give sufficient time to each applicant. We ensure our lead consultants are comfortable with the workload.",
        },
        {
            title:"I am considering an MBA in the next few years. Can The Red Pen help me at this stage?",
            content:"Of course! It is great that you are planning ahead. We offer a service called the Application Roadmap Meeting, where our team meets with you and evaluates your profile in terms of your academic strength, work experience, post-MBA goals, leadership potential and extracurricular activities. We will also suggest the steps you can take to improve your profile leading up to the time when you will submit your application.",
        },
        {
            title:"Will you help me decide between an MBA and a postgraduate degree?",
            content:"Yes, our team will understand your goals, your profile and will help guide your decision.",
        },
        {
            title:"I have two years of work experience. Should I apply for my MBA now?",
            content:"Depends! Two years is the bare minimum for many business schools. Although, given the right profile and work experience, this could be taken into consideration. We recommend aspiring applicants come in for the Application Roadmap Meeting with one of our consultants. This allows us to understand your profile, gauge your aspirations and will eventually enable us to provide a customised recommendation.",
        },
        {
            title:"Will The Red Pen help me select (between) business schools?",
            content:"Yes. The lead consultant assigned to the applicant will review their academic strength (GMAT and undergraduate performance), work experience, post-MBA goals and leadership potential to suggest best-fit programmes. With a global team across three continents that have graduated from top business schools across the world and have helped applicants to secure admits to the top 25 MBA programmes globally, their experience and advice play a vital role in this process.",
        },
        {
            title:"Does The Red Pen help reapplicants?",
            content:"We do! Reapplicants have a specific competitive advantage. We begin the reapplication process with a Ding Analysis, which analyzes their previously rejected applications to understand what worked and what needs to be improved before starting the application process again.",
        },
        {
            title:"How long does the application take?",
            content:"While the time varies with each applicant, we have seen that a typical application takes around four weeks. The time per application decreases with subsequent schools to two weeks per business school as stories, resumes, and letters of recommendation are already in place.",
        },
    ]

    return (
        <>
            <div className='Container-wrapper'>
                <div className='bg-brnd-gray py-5 px-5 gap-y-5  my-5 flex flex-col md:flex-row lg:flex-row  items-center justify-center md:justify-around gap-x-5'>
                    <p className='text-5xl md:text-5xl lg:text-6xl  text-brnd-black/50 max-md:text-center'>Frequently <br /> Asked Questions</p>
                    <img src="assets/svg/faqimg.svg" className='h-60' alt="" />

                </div>

                <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-x-5 my-5 w-full'>
                    <div className='flex gap-y-2 flex-col w-full'>
                        {FaqContent.map((list)=>(
                          <FaqElement {...list} title={list.title} content={list.content} />
                        ))}
                       
                    </div>
                    <div className='w-full md:w-2/6 lg:w-1/6 xl:w-1/6 hidden '>
                        <ul className='mt-5 flex flex-row md:flex-col h-full lg:flex-col xl:flex-col gap-x-5 gap-y-5 overflow-x-auto mb-3 scrollbar-hide  hidden'>
                            <li className=' hover:text-brnd-red cursor-pointer relative whitespace-nowrap hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-3 hover:after:h-1 hover:after:bg-brnd-red hover:after:rounded-full hover:after:content-[""]'>General</li>
                            <li className=' hover:text-brnd-red cursor-pointer relative whitespace-nowrap hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-3 hover:after:h-1 hover:after:bg-brnd-red hover:after:rounded-full hover:after:content-[""]'>Boarding School Admissions</li>
                            <li className=' hover:text-brnd-red cursor-pointer relative whitespace-nowrap hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-3 hover:after:h-1 hover:after:bg-brnd-red hover:after:rounded-full hover:after:content-[""]'>Undergraduate Admissions</li>
                            <li className=' hover:text-brnd-red cursor-pointer relative whitespace-nowrap hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-3 hover:after:h-1 hover:after:bg-brnd-red hover:after:rounded-full hover:after:content-[""]'>Postgraduate Admissions</li>
                            <li className=' hover:text-brnd-red cursor-pointer relative whitespace-nowrap hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-3 hover:after:h-1 hover:after:bg-brnd-red hover:after:rounded-full hover:after:content-[""]'>MBA Admissions</li>
                            <li className=' hover:text-brnd-red cursor-pointer relative whitespace-nowrap hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-3 hover:after:h-1 hover:after:bg-brnd-red hover:after:rounded-full hover:after:content-[""]'>Pre-college Advising</li>
                            <li className=' hover:text-brnd-red cursor-pointer relative whitespace-nowrap hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-3 hover:after:h-1 hover:after:bg-brnd-red hover:after:rounded-full hover:after:content-[""]'>Educational Counnselling</li>
                        </ul>
                    </div>
                    <div className='flex items-start z-0 justify-start flex-col gap-y-2 w-full hidden'>
                        <FaqElement />
                        <FaqElement />
                        <FaqElement />
                        <FaqElement />


                    </div>

                </div>

            </div>

        </>
    )
}

export default Faq

const FaqElement = (props) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div onClick={() => { setShow(!show) }} className='flex flex-col gap-y-2 overflow-hidden w-full px-2 cursor-pointer z-0'>
                <div  className='flex justify-between gap-x-5 w-full bg-brnd-white z-50 py-2'>
                    <p  className='font-bold text-xl cursor-pointer'>{props.title}</p>
                    <div className='cursor-pointer'>
                        {show ? 
                        <div>
                            <FaqLess  /> 
                        </div>
                            :
                            <div>
                                <FaqMore />
                            </div>
                         }
                    </div>
                </div>
                <p className={show ? ' md:duration-300 md:transition-all text-md text-[#404040] after:w-full after:h-[1px]  ' : ' text-sm   opacity-0  h-0'}>{props.content} <p className='flex flex-col ml-10 space-y-1 mt-4'><span >{props.point1}</span><span>{props.point2}</span><span>{props.point3}</span><span>{props.point4}</span></p> </p>

                <div className='border-[0.5px] border-brnd-dark-blue/20 ' />
            </div>
        </>
    )
}

const FaqMore = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM10 5C10.4142 5 10.75 5.33579 10.75 5.75V9.25H14.25C14.6642 9.25 15 9.58579 15 10C15 10.4142 14.6642 10.75 14.25 10.75H10.75V14.25C10.75 14.6642 10.4142 15 10 15C9.58579 15 9.25 14.6642 9.25 14.25V10.75H5.75C5.33579 10.75 5 10.4142 5 10C5 9.58579 5.33579 9.25 5.75 9.25H9.25V5.75C9.25 5.33579 9.58579 5 10 5Z" fill="#212121" />
            </svg>
        </>
    )
}

const FaqLess = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM14.25 9.25C14.6642 9.25 15 9.58579 15 10C15 10.4142 14.6642 10.75 14.25 10.75C9.25295 10.75 11.211 10.75 5.75 10.75C5.33579 10.75 5 10.4142 5 10C5 9.58579 5.33579 9.25 5.75 9.25C11.211 9.25 9.25295 9.25 14.25 9.25Z" fill="#212121" />
            </svg>
        </>
    )
}