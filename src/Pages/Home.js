import React, { useEffect } from 'react'
import Banner from '../Component/Banner'
import ServiceComponent from '../Component/Service/ServiceComponent'
import EsteemedCard from '../Component/EsteemedCollege/EsteemedCard'
import Testimonial from '../Component/Testimonial/Testimonial'
import { ScrolltoTop } from '../Utility'
import WeBring from '../Component/WeBring'
// import Authendication from '../_api_/Authendication'


function Home() {
    // Document title
    document.title = 'The Red Pen MBA'

    useEffect(() => {

        // Authendication.GetToken()
        ScrolltoTop()
    }, [])

    const TeamAdvantage = [
        {
            'img': 'assets/images/tie.png',
            'title': 'Unmatched Expertise',
            'list': [
                '55+ years of experience',
                'Access to admission officers',
                'Experts who are alums at top business schools',
                'Knowledge of admission processes across the world',
                'Members of AIGAC (Association of International Graduate Admissions Consultants)',
            ]
        },
        {
            'img': 'assets/images/box.png',
            'title': 'Unrivalled Records',
            'list': [
                '95% of our applicants received offers to their top choices',
                '100% of our applicants received interview invites from at least one programme',
                '$1.5 MILLION+ in scholarships last year',
            ]
        }
    ]


    return (
        <>
            <Banner />
            <WeBring />
            <EsteemedCard />
            


            <div className='Container-wrapper hidden'>
                <div className='mx-auto my-5'>
                    <div className='flex justify-center items-center flex-col'>
                        <p className='text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-brnd-dark-blue'>TRP Advantages </p>
                        <p className='text-md md:text-xl lg:text-xl xl:text-xl text-brnd-dark-blue'>What we bring to your MBA application</p>
                    </div>

                    <div className='flex mt-5 justify-center  gap-5 flex-col sm:flex-row md:flex-row lg:flex-row'>
                        {TeamAdvantage.map((item, index) =>
                            <div key={index} className='p-5 bg-brnd-gray rounded-[10px] w-full sm:w-1/3  md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col  gap-4 items-center sm:items-start md:items-start lg:items-start xl:items-start'>
                                <img className='h-14 w-auto' src={item.img} alt="" />
                                <p className='text-xl font-bold text-brnd-dark-blue'>{item.title}</p>
                                <ul className='list-disc px-5 pt-3 marker:text-brnd-dark-blue flex flex-col '>
                                    {item.list.map((list_item, index) =>
                                        <li key={index} className='text-brnd-dark-blue text-md'>{list_item}</li>
                                    )}


                                </ul>
                            </div>
                        )}

                    </div>


                </div>
            </div>
            <ServiceComponent />

            <div className='flex justify-center -mt-[200px]  Container-wrapper px-8'>     
                <div className='flex justify-center flex-col md:flex-col lg:flex-row sm:flex-col md:mx-24 bg-brnd-dark-blue sm:bg-brnd-dark-blue lg:bg-[#8382A4] xl:bg-[#8382A4] rounded-[15px] overflow-hidden md:w-full w-full lg:w-full  mt-8'>
                    <img className=' -mr-8 rounded-bl-[50px] md:rounded-bl-[50px] lg:rounded-none xl:rounded-none  h-[300px] sm:h-[500px] bg-[#8382A4] object-cover w-full object-top   md:h-full lg:w-auto md:w-auto' src="assets/images/home-sec-head.png" alt="" />
                    <div className='relative lg:bg-brnd-dark-blue  xl:bg-brnd-dark-blue lg:rounded-bl-[20px] xl:rounded-bl-[20px]'>
                        <img className='absolute m-0 p-0  hidden lg:block xl:block  md:hidden sm:hidden lg:-top-[0px] lg:-left-[35px] xl:-top-[0px] xl:-left-[35px] ' src="assets/svg/banner-sec-attachment.svg" alt="" />

                        <div className='p-5 h-full rounded-[15px] bg-brnd-dark-blue sm:px-20 md:px-20 lg:px-20 xl:px-20 flex flex-col justify-center gap-y-5 '>

                            <p className='text-brnd-white font-light text-md '>“Look beyond rankings and select MBA programs that align with your career goals and aspirations. While our experts, who have graduated from the world’s leading business schools, help you identify MBA programs that are right for you, they will support you at every step of your application journey. My team and I look forward to hearing from you.”</p>
                            <div className='flex gap-2 items-center'>
                                <div className='w-10 h-[2px] bg-brnd-secondary-color'></div>
                            <p className='text-brnd-white font-bold text-md sm:text-lg md:text-xl lg:text-xl xl:text-xl'>Dr. Kimberly Dixit, CEO & Co-founder of The Red Pen</p>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            <Testimonial />
        </>
    )
}

export default Home
