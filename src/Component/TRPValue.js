import React from 'react'

function TRPValue() {

    const Data = [
        {
            title: 'Ethics',
            content: 'We encourage you to build your application with honesty and uphold the highest ethical standards as we help you reflect on and refine your narrative. ',
            image: '/assets/svg/ethics.svg',

        },
        {
            title: 'Quality',
            content: 'We Pride ourselves on our process-driven approach, our team of experienced MBA consultants and our multi-level essay reviews.',
            image: '/assets/svg/quality.svg',

        },
        {
            title: 'Empowerment',
            content: 'We empower you with updated MBA admission trends and insider information to help you submit an impactful application to your dream business school.',
            image: '/assets/svg/empowerment.svg',

        },
        {
            title: 'Collaboration',
            content: 'Our team-based approach pairs you with alumni from leading business schools, experienced content specialists and resume building experts.',
            image: '/assets/svg/collaboration.svg',

        },
    ]


    return (
        <>
            <div className='py-10 px-10 mt-10 bg-[#F3F5f5] Container-wrapper '>
                <div className='flex flex-col items-center'>
                    <p className='text-2xl md:text-4xl mb-3 lg:text-4xl xl:text-4xl font-bold text-center  text-brnd-dark-blue'>TRP Values</p>
                    <p className='text-md leading-7 text-center'>We uphold international principles as a global MBA education consultancy</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 w-full  gap-y-10  mt-20  px-8 md:px-10 lg:px-20 xl:px-20'>

                    {
                        Data.map((item, index)=>
                        <Card key={index}  title={item.title} image={item.image} content={item.content} opacity={(index+1) % 2 === 0 ? 'opacity-40':'opcity-50'} />
                        )
                    }



                </div>




            </div>
        </>
    )
}

export default TRPValue


const Card = (props) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-5 cursor-pointer'>
                <div className='group'>
                    <img className='group-hover:hidden' src={props.image} alt="" />
                        <p  className={`text-brnd-white bg-brnd-dark-blue p-5 text-sm hidden group-hover:block ${props.opacity}`}>{props.content}</p>
                </div>
                <p className='font-normal text-xl'>{props.title}</p>
            </div>
        </>
    )
}