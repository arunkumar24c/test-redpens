import React, {useEffect} from 'react'
import SemBanner from '../Component/SemBanner'
import SemEsteemedCard from '../Component/EsteemedCollege/SemEsteemedCard'
import Testimonial from '../Component/Testimonial/Testimonial'
import { ScrolltoTop } from '../Utility'
import WeBring from '../Component/WeBring'
import SemAbout from '../Component/SemAbout'
import SemServiceComponent from '../Component/Service/SemServiceComponent'


function Sem() {
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
            <SemBanner />
            {/* <WeBring /> */}
            <SemEsteemedCard />
            
            <div className='flex justify-center items-center flex-col space-y-3 bg-[#F5F7F7] py-12 relative'>
                <p className='text-3xl md:text-4xl lg:text-6xl font-medium text-[64px]'>98% </p>
                <p className='lowercase text-lg md:text-xl lg:text-3xl font-semibold '>OF OUR CLIENTS GIVE US A 5-STAR RATING</p>
                <img src="/assets/svg/rating.svg" className='h-10' alt="" />
                <button  className='py-3 px-5  absolute -bottom-6  animated-red-hover-button bg-brnd-red text-brnd-white font-bold whitespace-nowrap rounded-md capitalize' type="button">Inquire now</button>

            </div>

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
            <SemAbout />
            
            <SemServiceComponent />
            <Testimonial />

            <div className='flex justify-center items-center flex-col space-y-5 py-8'>
            <p className="font-semibold text-xl md:text-2xl lg:text-3xl text-center  ">Get into your dream university. Speak to an expert today.</p>
               <button  className='py-3 px-5  animated-red-hover-button bg-brnd-red text-brnd-white font-bold whitespace-nowrap rounded-md capitalize' type="button">Inquire now</button>
               </div>
        </>
    )
}

export default Sem