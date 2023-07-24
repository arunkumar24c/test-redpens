import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Trigger } from '../StateManagement/Store'

const SubscribeNowModal = (props) => {

    const dispatch = useDispatch()

    const OverlayHandler = (e) => {

        // if (e.target.id === 'overlay') props.Handler()
        if (e.target.id === 'overlay') dispatch(Trigger({ModalState: false}))

    }
  return (
   <>
      <div id="overlay" onClick={props.Handler} className={props.active ? 'fixed z-50 inset-0 bg-brnd-dark-blue/30 flex justify-center items-center' : 'invisible'}>
                <div className={props.active ? 'w-full h-full sm:w-2/3  md:w-2/2  lg:w-1/2 xl:w-1/2 sm:h-1/2 md:h-3/4 lg:h-3/4 xl:h-3/4 bg-brnd-white relative' : 'hidden'}>

                    <img onClick={()=> dispatch(Trigger({ModalState: false}))}  className='right-1 top-1 absolute m-1 w-4 h-4 cursor-pointer' src="/assets/svg/close.svg" alt=""/>
                    <iframe className='w-full h-full p-8' src={props.active ? "https://gi8tm80s20c.typeform.com/to/gmtRAWiX?utm_source=Direct&utm_medium=MBA_Website&utm_campaign=Subscribe_Button" : ''}>
                    </iframe>
                </div>
            </div>
   </>
  )
}

export default SubscribeNowModal