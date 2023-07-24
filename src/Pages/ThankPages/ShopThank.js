import React from "react";

const ShopThank =() =>{
    return(
        <>
          <section className="pb-80">
            <div className="flex max-md:flex-col max-md:space-y-8 items-center justify-center md:justify-around py-10 px-8 md:px-20">
                <div className="space-y-4 max-md:text-center">
                   <p className="font-bold text-2xl md:text-3xl text-[#1A1757]">Thank you for choosing our services!</p>
                   <p className="text-sm lg:text-md">We are thrilled to be part of your MBA application journey.</p>
                   <p className="text-sm lg:text-md">Kickstart the process by exploring our insider information on MBA <span className='md:justify-start md:flex'>  application essays, interviews, LORs and more. </span></p>
                </div>
                <div>
                    <img src="/assets/images/shopthank.png" className="" alt="" />
                </div>

            </div>
          </section>
        
        </>
    )
}

export default ShopThank;