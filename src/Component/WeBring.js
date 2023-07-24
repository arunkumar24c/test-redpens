import React from 'react'



function WeBring() {
    const Data = [
        {
            id:1,
            content:'Our experts have graduated from the top 20 global business schools, including Wharton, Columbia, INSEAD, HEC Paris, NYU Stern, UCLA Anderson, Cornell Johnson, IESE Business School and more. ',
        },
        {
            id:2,
            content:'We have in-depth knowledge of admission processes in the UK, US, Canada, Europe and Asia with admits to every single competitive MBA program in the world.',
        },
        {
            id:3,
            content:'As members of AIGAC (Association of International Graduate Admissions Consultants), we have access to admissions offers and updated information on university trends.',
        },
        
    ]
    return (
        <>
            <div className='Container-wrapper'>
                <p className='text-center mb-2 font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-brnd-dark-blue'>What we bring to your MBA application</p>

                <div className='grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 my-10 mx-10'>
                    {Data.map((item, index)=>
                    <CardCompo key={index} sno={index+1} content={item.content} /> 
                    )}
                    

                </div>
            </div>
        </>
    )
}

export default WeBring

const CardCompo = (props) => {
    return (
        <>
            <div className='flex gap-10 relative'>
                <div className='w-[1px]  bg-brnd-secondary-color relative'>
                    <div className='absolute flex justify-center items-center inset-0'>
                     {/* <p className='border-[2px] bg-brnd-white border-brnd-secondary-color w-7 h-7  rounded-full flex justify-center items-center  text-sm text-brnd-red'>{props.sno}</p> */}
                    </div>
                     <p className='border-[2px] bg-brnd-white border-brnd-secondary-color inset-y-1/3 -left-3 w-6 h-6  rounded-full flex justify-center items-center absolute text-xs text-brnd-red'>{props.sno}</p>
                </div>
                <p className=" text-md text-[#404040] leading-7">{props.content}</p>
            </div>
        </>
    )
}