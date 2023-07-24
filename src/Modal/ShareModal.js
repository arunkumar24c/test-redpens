import React, { useState } from 'react'
import {
    FacebookMessengerShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    InstapaperShareButton,
  } from "react-share";



function ShareModal(props) {
     const [copyData, setCopyData] = useState(true)
    const linkData = window.location.href; //live url
    const copyLink = ()=>{
        return navigator.clipboard.writeText(linkData)
    } 
     
    console.log(linkData)

  return (
    <>
      <div className={props.active ? 'fixed z-50 inset-0 bg-brnd-dark-blue/30 flex justify-center items-center' : 'hidden'}>
                <div className={props.active ? 'w-5/6 sm:w-2/3 md:w-3/5 lg:w-2/5 h-2/6 md:h-2/6 flex justify-center flex-col bg-brnd-white relative rounded-md' : 'hidden'}>

                    <img onClick={ props.Handler}  className='right-3 top-3 absolute m-1 w-4 h-4 cursor-pointer' src="/assets/images/cross.png" alt=""/>
                    
                   
                    <p className='text-[#1A1757] font-bold pb-5 pl-16 tracking-wide text-lg'>Share</p>
                    <div className='flex px-8 justify-around  mt-2 items-center  gap-5'>
                    <WhatsappShareButton url={linkData} >
                        <img src="/assets/svg/whatsappshare.svg" className='h-6' alt="" />
                    </WhatsappShareButton>
                    <FacebookShareButton url={linkData} >
                       <img src="/assets/svg/facebookshare.svg" className='h-6' alt="" />

                    </FacebookShareButton >
                   
                     <LinkedinShareButton url={linkData} >
                     <img src="/assets/svg/linkedinshare.svg" className='h-6' alt="" />

                     </LinkedinShareButton>

                     <TwitterShareButton url={linkData}>
                     <img src="/assets/svg/twittershare.svg" className='h-6' alt="" />

                     </TwitterShareButton>
                     

                     <a url={linkData} href="https://www.instagram.com/" target='_blank'><img src="/assets/svg/instashare.svg" className='h-6' alt="insta" /></a>

                   

                     

                    </div>
                    <div onClick={copyLink} className='mt-8 mx-4 md:mx-8 lg:mx-12 rounded-sm border  border-gray-200  p-1 text-[6px] md:text-xs flex items-center justify-between'>
                       <p className='underline  pl-2 text-[#9C9C9C]'> {linkData}</p>
                       <button  className='text-white bg-brnd-red py-1 px-3 '>{copyData ? "Copy": "Copied"}</button>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default ShareModal