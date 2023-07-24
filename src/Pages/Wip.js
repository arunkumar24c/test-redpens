import React, { useEffect } from 'react'
import { ScrolltoTop } from '../Utility'

function Wip() {
    // Document title
    document.title = 'The Red Pen'

    useEffect(() => {
        ScrolltoTop()
    }, [])

    const ContactDetails = {
        email:"team.mba@theredpen.in",
        phoneNo:"+91 77807 69732",
        address:"Prasad Chambers #309, Tata Road, No-2, Opera House, Mumbai – 400004",
    }

    return (
        <>
            <div className='Container-wrapper'>
                <div className='flex gap-4 flex-col lg:flex-row md:flex-col xl:flex-row'>
                    <div className='w-full lg:w-1/2 xl:w-1/2 md:w-full'>
                        <div className='flex flex-col gap-y-4 items-start '>
                            <p className='text-3xl font-bold '>Want to pursue an MBA abroad?</p>
                            <p className='text-md  text-[#404040] w-full'>Got questions? We have the answers. Please complete and submit this form, and the right team member will contact you within 48 hours.</p>
                            {/* <img src="assets/images/wip.png" alt="" /> */}
                        <div className='border flex flex-col justify-between h-[31rem] w-full p-1 mt-5  border-brnd-gray shadow-md rounded-lg'>

                        <iframe className='w-full h-full p-2' src="https://gi8tm80s20c.typeform.com/to/oMzP3FIa?utm_source=Direct&utm_medium=MBA_Website&utm_campaign=BNA_Form"></iframe>
                        </div>

                        </div>
                        
                    </div>

                    <div className='w-full md:full   lg:w-1/2'>
                        <p className='text-3xl font-bold'>Reach out to us now!</p>
                        <p className='text-sm mt-5 hidden'>Book an appointment and we’ll get in touch with you</p>
                        <img className='h-auto w-full mt-10' src="assets/svg/wip.svg" alt="" />
                        <div className='mt-5 flex flex-col gap-y-5 xl:flex-row lg:flex-row md:flex-row gap-x-6 p-5 justify-between bg-brnd-gray'>
                            <div>
                                <div className='flex gap-x-2'>    
                                <div className='bg-brnd-red w-1.5 h-4'></div>
                                <p className='capitalize font-bold text-sm'>email us</p>
                                </div>
                                <p className='text-md whitespace-nowrap ml-3'>{ContactDetails.email}</p>
                            </div>
                            <div>
                                <div className='flex gap-x-2'>    
                                <div className='bg-brnd-red w-1.5 h-4'></div>
                                <p className='capitalize font-bold text-sm'>call us</p>
                                </div>
                                <p className='text-md whitespace-nowrap ml-3'>{ContactDetails.phoneNo}</p>
                            </div> <div>
                            <div className='flex gap-x-2'>    
                                <div className='bg-brnd-red w-1.5 h-4'></div>
                                <p className='capitalize font-bold text-sm'>meet us</p>
                                </div>
                                <p className='w-42 text-md ml-3'>{ContactDetails.address}</p>
                            </div>
                        </div>
                        <div className='border hidden flex flex-col justify-between h-5/6 w-full p-5 mt-5  border-brnd-gray shadow-md rounded-lg'>

                        {/* <iframe className='w-full h-full p-5' src="https://gi8tm80s20c.typeform.com/to/oMzP3FIa?utm_source=Direct&utm_medium=MBA_Website&utm_campaign=BNA_Form"></iframe> */}

                            <div className='hidden'>     
                            <p className='text-xl font-bold'>How can we help you?</p>
                            <p className='text-sm'>Tell us what you'd like to talk about</p>
                            <div className='mt-5'>
                                <input className='text-black w-full px-5 py-2 border-b-2   focus:outline-none border-brnd-dark-blue/20' type="text" name="" placeholder='Type or Select an option' />
                                <div className='w-full mt-5 h-0.5 bg-gray-200'></div>
                            </div>
                            </div>

                            <div className='flex gap-x-[2px] justify-end mt-5 cursor-pointer hidden'>
                                <div className='p-4 bg-brnd-red w-fit rounded-l-[7px] '>
                                    <img className='h-3 w-3 rotate-180 opacity-40' src="assets/svg/arrow-up.svg" alt="arrow-up" />
                                </div>
                                <div className='p-4 bg-brnd-red w-fit rounded-r-[7px] cursor-pointer'>
                                    <img className='h-3 w-3' src="assets/svg/arrow-up.svg" alt="arrow-up" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wip