import React from 'react'
import { useDispatch, useSelector } from "react-redux"
// import { Trigger } from '../StateManagement/Store'


function PastEventVideoModal(props) {
    // const [RegisterNowModal, setRegisterNowModal] 
    // const dispatch = useDispatch()

    const RegisterNowModalTrigger = () => {

        // if (e.target.id === 'overlay') props.Handler()
        // if (e.target.id === 'overlay') dispatch(Trigger({ModalState: false}))


    }
    console.log(props.video.event_youtube_url)
    return (
        <>
            <div onClick={props.Handler} className={props.active ? 'fixed z-50 inset-0 bg-brnd-dark-blue/30 flex justify-center items-center' : 'hidden'}>
                <div className={props.active ? 'w-full   sm:w-2/3  md:w-2/2  lg:w-1/2 xl:w-1/2 h-full sm:h-1/2 md:h-1/2 lg:h-1/2 xl:1/2 bg-brnd-white relative' : 'hidden'}>

                    <img onClick={() => props.Handler} className='right-3 top-1 absolute m-1 w-4 h-4 cursor-pointer' src="/assets/svg/close.svg" alt="" />


                    {/* <video className='w-full h-full p-8' controls >
      <source src={props.video.event_youtube_url} type="video/mp4"/>
     </video>  */}

                    <iframe className='w-full h-full p-10 mt-2' src={props.active ? props.video.event_youtube_url : ''} >
                    </iframe>





                </div>
            </div>
        </>
    )
}

export default PastEventVideoModal;