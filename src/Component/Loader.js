import React from 'react'
import Lottie from "lottie-react";
import loadingLottie from "./loading.json";


function Loader() {
  return (
    <>
    <div className='fixed inset-0 bg-brnd-black/20 backdrop-blur-sm z-20 flex justify-center items-center'>
        <div className=''>
         <Lottie animationData={loadingLottie} />
        </div>
    </div>
    </>
  )
}

export default Loader