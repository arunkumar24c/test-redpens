import React from 'react'

function ConsultNowThank() {
  return (
    <>
      <section className="">
            <div className="flex max-md:flex-col max-md:space-y-8 items-center justify-center md:justify-around py-10 px-8 md:px-20">
                <div className="space-y-4 max-md:text-center">
                   <p className="font-bold text-3xl text-[#1A1757]">Thank you for reaching out!</p>
                   <p className="text-sm lg:text-md">Book an appointment slot by using the window below.</p>
                   {/* <p className="text-sm lg:text-md">Meanwhile, explore our insider information on MBA <span className='md:justify-start md:flex'> application essays, interviews, LORs, and more. </span></p> */}
                </div>
                <div>
                    <img src="/assets/images/consultthank.png" className="" alt="" />
                </div>

            </div>
            <div className='border flex flex-col justify-between  w-5/6  mx-auto p-1 mt-5  border-brnd-gray shadow-md rounded-lg'>

            <iframe className='min-w-[320px] h-[900px] overflow-y-hidden ' src="https://calendly.com/team-mba/introductory-call-with-the-red-pen?month=2023-05"></iframe>
            </div>
          </section>
    </>
  )
}

export default ConsultNowThank