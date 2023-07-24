import React from "react";

const SemAbout = () =>{

    const ourServiceData = [
        {
            title: 'Our Story',
            subtitle: 'TRP MBA is an 11-year-old global education consultancy firm',
            content: 'Founded by education experts with roots in the US and the UK, we aim to bridge the knowledge gap in the MBA education systems, empower you with information about international MBA education opportunities, and guide you through the complex admissions process.',
            image: 'assets/svg/semabout1.svg',
        },
        {
            title: 'Our Philosophy',
            subtitle: 'We go beyond rankings to find programs best suited for you',
            content: 'Our MBA consultants provide tailored guidance throughout the college search and application process to help you find business schools and MBA programs that align with your background, finances, aspirations, academic achievements, and strengths. ',
            image: 'assets/svg/semabout2.svg',
        },
        {
            title: 'Our Team',
            subtitle: 'A collaborative and applicant-centered approach is our strength',
            content: 'Led by Dr. Kimberly Wright Dixit and Namita Mehta, our team of 100+ members carries hail from diverse backgrounds. Our experts have graduated from the world’s top 20 business schools, like Wharton, Columbia, INSEAD and others. We combine our expertise to meet your every requirement. ',
            image: 'assets/svg/semabout3.svg',
        },

       

    ]

    return(
        <>
         <div className='py-10  mt-10  Container-wrapper relative flex justify-center flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <p className='text-2xl md:text-3xl  font-bold text-center uppercase tracking-wide text-brnd-dark-blue'>About Us</p>
                    <p className='text-md md:text-xl lg:text-xl xl:text-xl font-sm text-center hidden'>Offered by experts to meet your MBA application goals</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full gap-12 mt-10  px-8 md:px-12 '>

                    {ourServiceData.map((item, index) =>
                        <ServiceCard key={index}  trp_title={item.title} trp_subtitle={item.subtitle} trp_content={item.content} trp_img={item.image} />
                    )}

                </div>

                
               <p className="font-semibold text-xl md:text-2xl lg:text-3xl text-center pt-16">Explore your MBA options today and get expert guidance</p>
               <button  className='py-3 px-5  absolute -bottom-16 animated-red-hover-button bg-brnd-red text-brnd-white font-bold whitespace-nowrap rounded-md capitalize' type="button">Book a free consultation</button>

            </div>
        
        
        
        </>
    )
}

export default SemAbout

const ServiceCard = (props) => {
    return (
        <>
            <div className='flex justify-center items-center  flex-col gap-y-3 w-full '>
                <img className=' w-auto' src={props.trp_img} alt="" />
                <p className='text-xl font-bold text-center'>{props.trp_title}</p>
                <p className="text-center text-[#0EA7AF]">{props.trp_subtitle}</p>
                <p className=' text-[#1A1757] text-base text-center '>{props.trp_content}</p>
            </div>
        </>
    )
}