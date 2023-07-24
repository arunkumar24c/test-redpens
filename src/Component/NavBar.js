import React, { useState } from 'react'
import BurgurIcon from '../Elements/IconElement/BurgurIcon'
import SearchIcon from '../Elements/IconElement/SearchIcon'
import { useNavigate } from "react-router-dom";
import ConsultNowModal from '../Modal/ConsultNowModal';

import { useDispatch } from "react-redux"
import { Trigger } from '../StateManagement/Store';



function NavBar() {
  const[MobileNav, setMobileNav] = useState(false);
  const[ShowSearchBar, setSearchbarshow] = useState(false);
  const[ConsultNowShow, setConsultNow ] = useState(false);
  const navigate = useNavigate();

  const ToggleSearchBar = () =>{
    setSearchbarshow(!ShowSearchBar)
  }
 
  const MobileMenuHandler = () => {
    setMobileNav(!MobileNav);
  }

  const ConsultNowToggler = () =>{
    setConsultNow(!ConsultNowShow);
  }

  const dispatch = useDispatch();

  return (
    <>
      <header className='shadow sticky top-0 backdrop-blur-sm bg-brnd-white/80 z-10'>
        <div className='flex items-center justify-between py-5 sm:py-8 md:py-8 lg:py-8 xl:py-8 Container-wrapper my-0 '>
        <div onClick={MobileMenuHandler} className='cursor-pointer  sm:flex md:hidden xl:hidden lg:hidden'>
            <BurgurIcon />
          </div>
          <div className='flex '>
          <img onClick={()=>{navigate('/')}} className='cursor-pointer w-[120px]' src="/assets/svg/logo.svg" alt="" />
          
         {/* <a href="https://www.theredpenmba.com/" target='_blank' ><p className='hidden md:hidden lg:block xl:block  font-bold tracking-[0.2rem] text-sm ml-10 mr-2'>MBA</p></a>  
         <a href="https://theredpen.in/higher-education-consulting/services/postgraduate-admissions/" target='_blank' ><span className='font-normal hidden md:hidden lg:block xl:block  tracking-[0.2rem] text-sm'>| MASTERS </span></a> */}
          </div>
          <div className='hidden md:flex xl:flex items-center gap-x-5  '>
            <ul className={ShowSearchBar? '-translate-x-full opacity-0  flex gap-x-10 transition-all duration-300 invisible':'flex gap-x-10 items-center transition-all duration-300'}>
              <li onClick={()=>{navigate('/about')}} className='capitalize text-sm whitespace-nowrap cursor-pointer'>about</li>
              <li onClick={()=>{navigate('/shop')}} className='capitalize text-sm whitespace-nowrap cursor-pointer '>shop</li>
              <li onClick={()=>{navigate('/service')}} className='capitalize text-sm whitespace-nowrap cursor-pointer hidden'>service</li>

              <li className='capitalize text-sm whitespace-nowrap cursor-pointer relative group '>resources
              
                  <div className='absolute top-5 hidden group-hover:block'>
                    <ul className='bg-brnd-dark-blue p-2 w-28'>
                      <li onClick={()=>{navigate('/mba-admissions-strategies')}}><p className=' text-brnd-white capitalize text-left border-b border-brnd-white/20 py-1  text-sm'>blogs</p></li>
                      <li onClick={()=>{navigate('/vlog')}}><p className=' text-brnd-white capitalize text-left border-b border-brnd-white/20 py-1  text-sm'>videos</p></li>
                      <li onClick={()=>{navigate('/event')}}><p className=' text-brnd-white capitalize text-left py-1  text-sm'>events</p></li>


                    </ul>
                  </div>
              </li>
              <li onClick={()=>{navigate('/wip')}} className='capitalize text-sm whitespace-nowrap cursor-pointer'>contact us</li>
              <li onClick={()=>{navigate('/faq')}} className='capitalize text-sm whitespace-nowrap cursor-pointer '>FAQs</li>
              <li onClick={ToggleSearchBar} className='cursor-pointer after:w-0.5 after:h-10 relative after:content-[""] after:absolute after:-right-3 after:-top-2 after:bg-brnd-gray-1 hidden'> <SearchIcon /> </li>
            </ul>
            <div className={ShowSearchBar? ' p-3 px-4 transition-all duration-1000 bg-brnd-gray rounded-full flex justify-center' : 'hidden'}>
              <SearchIcon />
              <input className='outline-none text-brnd-dark-blue bg-brnd-gray px-2 mx-2' type="" name="" placeholder='Heritage Institute' />
              <img onClick={ToggleSearchBar} className= 'cursor-pointer' src="assets/svg/close.svg" alt="" />
            </div>
            <button onClick={() => dispatch(Trigger({ModalState: true}))} className='py-3 px-5 z-10 ml-5 animated-red-hover-button bg-brnd-red text-brnd-white font-bold whitespace-nowrap rounded-md capitalize' type="button">consult now</button>
          </div>

          <div className='cursor-pointer invisible sm:invisible md:hidden xl:hidden lg:hidden'>
            <SearchIcon />
          </div>
        </div>
      </header>
      <MobileNavBar Handler={ConsultNowToggler} display={MobileNav} handler={MobileMenuHandler}  />

    </>
  )
}

export default NavBar



const MobileNavBar = (props) => {
  const [openEvent, setOpenEvent] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div onClick={props.handler} className={props.display ? 'fixed z-50 transition-all duration-500 inset-0 bg-brnd-black/50': 'hidden' }></div>
      <div className={props.display ? 'Nav-bar' : 'Nav-bar -translate-x-full'}>

        <ul className='flex flex-col gap-y-5 items-start my-5'>
         
          <li onClick={()=>{navigate('/about'); props.handler()}} className='capitalize text-md whitespace-nowrap cursor-pointer'>about</li>
          <li onClick={()=>{navigate('/shop'); props.handler()}} className='capitalize text-md whitespace-nowrap cursor-pointer '>shop</li>
          <li onClick={()=>{navigate('/service'); props.handler()}} className='capitalize text-md whitespace-nowrap cursor-pointer hidden'>service</li>

          <li className='capitalize text-sm whitespace-nowrap cursor-pointer hidden'>resources</li>
          <li  onClick={()=>{navigate('/wip'); props.handler()}} className='capitalize text-md whitespace-nowrap cursor-pointer'>contact us</li>
          
          {/* <li onClick={()=>setOpenEvent(!openEvent)} className='capitalize text-md whitespace-nowrap cursor-pointer relative group '>resources </li> */}
          <li onClick={()=>{navigate('/mba-admissions-strategies');  props.handler()}}><p className=' capitalize text-left whitespace-nowrap cursor-pointer  text-md'>blogs</p></li>
          <li onClick={()=>{navigate('/vlog');  props.handler()}}><p className=' capitalize text-left  whitespace-nowrap cursor-pointer text-md'>Videos</p></li>

           <li onClick={()=>{navigate('/event');  props.handler()}}><p className='  capitalize text-left whitespace-nowrap cursor-pointer  text-md'>events</p></li>
         
          {/* {openEvent ?  <div  className=' '>
                    <ul className='bg-brnd-dark-blue p-2  w-28'>
                     
                     


                    </ul>
                  </div> : "" } */}
                 
             
          <li onClick={()=>{navigate('/faq'); props.handler()}} className='capitalize text-sm whitespace-nowrap cursor-pointer mt-1'>FAQs</li>
          <li className='hidden'> <SearchIcon /> </li>

        </ul>
        <button onClick={() => dispatch(Trigger({ModalState: true}))} className='py-3 pt-4 px-5 bg-brnd-red text-brnd-white font-bold whitespace-nowrap rounded-md capitalize' type="button">consult now</button>

      </div>

    </>
  )
}