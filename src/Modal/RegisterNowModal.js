import React from 'react'
import { useDispatch, useSelector } from "react-redux"
// import { Trigger } from '../StateManagement/Store'


function RegisterNowModal(props) {
    // const [RegisterNowModal, setRegisterNowModal] 
    // const dispatch = useDispatch()
     
    const RegisterNowModalTrigger = () => {

        // if (e.target.id === 'overlay') props.Handler()
        // if (e.target.id === 'overlay') dispatch(Trigger({ModalState: false}))


    }

  return (
   <>
   <div id="overlay" onClick={props.Handler} className={props.active ? 'fixed z-50 inset-0 bg-brnd-dark-blue/30 flex justify-center items-center' : 'invisible'}>
                <div className={props.active ? 'w-full h-full sm:w-2/3  md:w-2/2  lg:w-1/2 xl:w-1/2 sm:h-1/2 md:h-3/4 lg:h-3/4 xl:h-3/4 bg-brnd-white relative' : 'hidden'}>

                    <img onClick={()=> props.Handler}  className='right-1 top-1 absolute m-1 w-4 h-4 cursor-pointer' src="/assets/svg/close.svg" alt=""/>
                    <iframe className='w-full h-full p-8' src={props.active ? "https://gi8tm80s20c.typeform.com/to/FvxjIhg6" : ''}>
                    </iframe>
                </div>
            </div>
   </>
  )
}

export default RegisterNowModal