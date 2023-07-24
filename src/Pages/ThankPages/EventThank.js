import React from "react";

const EventThank =() =>{
    return(
        <>
          <section className="pb-80">
            <div className="flex max-md:flex-col max-md:space-y-8 items-center justify-around py-10 px-8 md:px-20">
                <div className="space-y-4 max-md:text-center">
                   <p className="font-bold text-2xl text-[#1A1757]">Thank you for registering!</p>
                   <p className="text-sm lg:text-md">We look forward to seeing you. <br /> To get the most out of the event, explore our blogs, <span className='md:justify-start md:flex'> videos and webinars before you attend</span></p>
                </div>
                <div>
                    <img src="/assets/images/eventthank.png" alt="" />
                </div>

            </div>
          </section>
        
        </>
    )
}

export default EventThank;