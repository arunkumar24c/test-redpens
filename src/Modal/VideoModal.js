import React from 'react'

function VideoModal(props) {
    

    const OverlayHandler = (e) => {

        if (e.target.id === 'overlay') props.Handler()
    }
      
    const {url} = props
     console.log(url)
    return (
        <>
            <div id="overlay" onClick={OverlayHandler} className={props.show ? 'fixed z-10 inset-0 bg-brnd-dark-blue/30 flex justify-center items-center' : 'hidden'}>
                <div className={props.show ? 'w-full  sm:w-2/3  md:w-2/2  lg:w-1/2 xl:w-1/2 h-full  sm:h-1/2 md:h-1/2 lg:h-1/2 xl:1/2 bg-brnd-white relative' : 'hidden'}>

                    <img onClick={props.Handler}  className='right-3 top-2 absolute m-2 w-4 h-4 cursor-pointer' src="assets/svg/close.svg" alt=""/>
                    <iframe className='w-full h-full p-7 py-12' src={props.show ? url : ''}>
                    </iframe>
                </div>
            </div>



        </>
    )
}

export default VideoModal