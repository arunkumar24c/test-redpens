import React from 'react'



function SemServiceComponent() {

    const trpServiceData = [
        {
            title: 'Profile Analysis',
            content: 'We leverage your academic strengths to identify a compelling application story.',
            image: 'assets/svg/trp-service-4.svg',
        },
        {
            title: 'Shortlisting Business Schools',
            content: 'Our experts help you select MBA programs and business schools that meet your goals and sort them into dream, target and safety categories.',
            image: 'assets/svg/trp-service-5.svg',
        },
        {
            title: 'Application Strategy',
            content: 'We help you build a winning application by streamlining components such as early submission strategies, deadlines, scholarship requirements, and other key elements.',
            image: 'assets/svg/trp-service-6.svg',
        },

        {
            title: 'Essay Support & Resume Building',
            content: 'Get comprehensive essay assistance with brainstorming, structuring and editing essays so that it effectively showcases your narrative. We also offer guidance in building an impactful resume.',
            image: 'assets/svg/trp-service-7.svg',
        },
        {
            title: 'Dynamic interview preparation',
            content: 'Elevating your performance through mock interview sessions and video essay coaching with personalized feedback',
            image: 'assets/svg/trp-service-8.svg',
        },
        {
            title: 'Navigating Multiple Acceptances',
            content: 'A comprehensive guide to assessing your offers and expert advice on making the right choice.',
            image: 'assets/svg/trp-service-9.svg',
        },

    ]

    return (
        <>
            <div className='py-20 px-10   bg-[#F3F5f5] Container-wrapper'>
                <div className='flex flex-col items-center'>
                    <p className='text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-center  text-brnd-dark-blue mb-3'>TRP Services</p>
                    <p className='text-md md:text-xl lg:text-xl xl:text-xl font-sm text-center'>Offered by experts to meet your MBA application goals</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full gap-20 sm:gap-20  md:gap-x-[211px] lg:gap-x-[211px] xl:gap-x-[211px] mt-20  px-8 md:px-10 lg:px-20 xl:px-20'>

                    {trpServiceData.map((item, index) =>
                        <ServiceCard key={index} trp_title={item.title} trp_content={item.content} trp_img={item.image} />
                    )}

                </div>

                


            </div>
           
        </>
    )
}

export default SemServiceComponent


const ServiceCard = (props) => {
    return (
        <>
            <div className='flex  items-center sm:items-start md:items-start lg:items-start xl:items-start flex-col gap-y-5 w-full '>
                <img className='h-14 w-auto' src={props.trp_img} alt="" />
                <p className='text-2xl font-bold text-center sm:text-start md:text-start lg:text-start xl:text-start'>{props.trp_title}</p>
                <p className=' text-[#404040] text-center sm:text-start md:text-start lg:text-start xl:text-start'>{props.trp_content}</p>
            </div>
        </>
    )
}