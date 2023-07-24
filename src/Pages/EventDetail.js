import React, {useState, useEffect } from 'react'
import { ScrolltoTop } from '../Utility';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Trigger } from '../StateManagement/Store';
import RegisterNowModal from '../Modal/RegisterNowModal';
import useFetchData from '../CustomHooks/useFetchData';
import axios from 'axios';
import ShareModal from '../Modal/ShareModal';




function EventDetail() {
    const [registerNowModal, setregisterNowModal] = useState(false)
    const [shareModal, setShareModal] = useState(false)
    const [upcoming_events, setdatadetails] = useState(null)
    const { event_url } = useParams();
    console.log(event_url)
    // const {
    //     data: details,
    //     loading,
    //     error,
    //     refetch,
    // } = useFetchData("/get-events-data", "get", []);
    // console.log(loading)

    // const {state} = useLocation();

    // console.log(state, "fetch state successful")

        // const upcoming_events = state;
    //  console.log(upcoming_events)
    // const navigate = useNavigate();
    // Document Title
    document.title = 'Event - The Red Pen';

   

    

    const RegisterNowModalTrigger = () => {
        setregisterNowModal(!registerNowModal)
      }

      const ShareNowModalHandler = () => {
        setShareModal(!shareModal)
      }
      

    // const dispatch = useDispatch();

    useEffect(() => {
        ScrolltoTop();
        getDetails();
    }, [])

  const getDetails = async()=>{

   const result = await axios.get(`${ process.env.REACT_APP_SERVER_BASE_URL}/get-events-details-upcoming/${event_url}` );
   setdatadetails(result.data.data)
   console.log(result.data.data, "event-detail-data")
  }
    //  if (loading) return <p className='p-5'>Loading...</p>
    
    const date = new Date(upcoming_events && upcoming_events.event_date)
    const formattedDate = date.toLocaleDateString("en-GB", {
      
      day: "numeric" ,
      month: "long", 
      year: "numeric" ,
     
    })

    // const time = new Date(upcoming_events && upcoming_events.event_time)
    // const formattedTime = time.toLocaleTimeString("en-GB", {
      
    //     timeZone:'',hour:'numeric',minute:'numeric'
     
    // })
    const image_desktop = upcoming_events  && upcoming_events.desktop_banner
    const image_mobile = upcoming_events && upcoming_events.mobile_banner 
    const timeString = upcoming_events && upcoming_events.event_time;
// Prepend any date. Use your birthday.
const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
  .toLocaleTimeString('en-US',
    {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
  );
       console.log(timeString12hr)
    return (
        <>
            <div className='Container-wrapper'>
                {/* <div className='bg-brnd-gray relative w-full gap-x-16 justify-between rounded-md my-5 py-5 px-16 flex items-center flex-col gap-y-5 md:flex-col lg:flex-row xl:flex-row shadow-md'>
                    <div className='relative space-y-2'>
                        <p className='text-5xl font-extrabold mb-3'>{upcoming_events && upcoming_events.event_categories.sub_category_name.split(" ")[0]}</p>
                        <p className='text-brnd-white w-fit px-11 py-2 whitespace-nowrap uppercase  bg-brnd-dark-blue'>{upcoming_events && upcoming_events.event_categories.sub_category_name.split(" ")[1] + " "}{upcoming_events && upcoming_events.event_categories.sub_category_name.split(" ")[2]}</p>
                        <img src="/assets/svg/diamondgreen.svg" className='absolute -top-20 left-10' alt="" />

                    </div>
                    <div className='flex flex-col relative items-center sm:items-start md:items-center lg:items-start xl:items-start gap-y-2 '>
                        <p className='font-light text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-center sm:text-start md:text-center lg:text-start xl:text-start '>Wondering how to approach the new { upcoming_events && upcoming_events.event_categories.sub_category_name}?  </p>
                        <p className='text-brnd-secondary-color text-sm sm:text-lg md:text-lg lg:text-2xl  xl:text-2xl'>Join the webinar!</p>
                        <button onClick={()=>setregisterNowModal(true)} className='font-bold hidden animated-red-hover-button capitalize whitespace-nowrap bg-brnd-red text-brnd-white px-4 py-2 rounded-md' type="button">register now</button>
                        <img src="/assets/svg/diamondblue.svg" className='absolute -top-2 md:top-0 lg:-top-8 left-3 md:left-12 h-2' alt="" />
                        <img src="/assets/svg/diamondred.svg" className='absolute right-10 md:right-28 -bottom-3 md:bottom-0 lg:-bottom-6' alt="" />
                    </div>
                    <img src="/assets/svg/diamondblue.svg" className='absolute max-md:hidden bottom-10 left-10' alt="" />

                    <img className='h-64 object-cover py-4' src={ upcoming_events &&  process.env.REACT_APP_SERVER_IMAGE_URL+  upcoming_events.event_thumbnail_image } alt="event-header" />
                     <img src="/assets/Banner/eventbanner.png" alt="" />
                </div> */}

                {/* <div className='bg-brnd-gray relative w-full  justify-around rounded-md my-5 py-5 px-16 flex items-center flex-col gap-y-5 md:flex-col lg:flex-row xl:flex-row shadow-md'>
           
           <img src="/assets/Banner/eventbanner.png" alt="" />
        </div> */}

                  <div className='bg-brnd-gray relative w-full  justify-around rounded-md my-5   flex items-center flex-col gap-y-5 md:flex-col lg:flex-row xl:flex-row shadow-md' >
                       
                       <div className='max-md:hidden'>  <img src={process.env.REACT_APP_SERVER_IMAGE_URL + image_desktop } className='px-16 ' alt="desktop_banner" /> </div>
                        <div className=' md:hidden'>   <img src={process.env.REACT_APP_SERVER_IMAGE_URL + image_mobile } className='' alt="" />  </div> 

                        

                        

                    </div>



                <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 justify-between md:px-10 lg:px-10 xl:px-10 items-start md:items-center lg:items-center xl:items-center md:my-8'>

                    <div className='flex gap-5 items-center'>
                        <img src="/assets/svg/calendar.svg" alt="" />
                        <p className='text-sm lg:text-md xl:text-lg whitespace-nowrap '>{formattedDate}</p>
                    </div>
                    {/* Friday, April 21, 2023 */}
                    <div className='flex gap-5 items-center'>
                        <img src="/assets/svg/time.svg" alt="" />
                        <p className='text-sm lg:text-md xl:text-lg whitespace-nowrap '>{timeString12hr}</p>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <img src="/assets/svg/location.svg" alt="" />
                        <p className='text-sm lg:text-md xl:text-lg whitespace-nowrap '>{upcoming_events && upcoming_events.event_location}</p>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <button onClick={()=>setregisterNowModal(true)} className='capitalize px-5 py-3 rounded-[10px] bg-brnd-red text-brnd-white active:opacity-50 outline-none select-none whitespace-nowrap font-bold'>register now</button>
                        <button onClick={()=>setShareModal(true)} className='capitalize px-5 py-3 rounded-[10px] bg-brnd-red text-brnd-white active:opacity-50 outline-none select-none'>
                            <img className='w-6 h-auto aspect-square' src="/assets/svg/share.svg" alt="" />
                        </button>

                    </div>

                </div>
                <hr className='mt-5 opacity-40 md:mx-10 lg:mx-10 xl:mx-10' />

                <div className='md:px-10 lg:px-10 xl:px-10'>
                <div className='my-5'>
                    <Title>About the event</Title>
                    <Paragraph>{upcoming_events && upcoming_events.event_about}</Paragraph>
                </div>
                
                <div className='mt-10'></div>
                <Title> { upcoming_events && upcoming_events.event_sub_title}</Title>
                <div className='bg-[#F5F7F7] p-10 flex flex-col gap-5 mt-5'>
                    {upcoming_events && upcoming_events.event_steps.map((item, index) =>
                        <ListItem key={index}  heading={item.steps_heading} content={item.steps_description} Sno={index + 1} Line={upcoming_events && upcoming_events.event_steps.length === index + 1 ? false : true} />
                    )}

                </div>
                </div>

            </div>
            <div className='bg-brnd-dark-blue p-5'>
                <div className='Container-wrapper flex flex-col items-center justify-center gap-5'>
                    <p  className='text-brnd-white text-center md:text-xl lg:text-2xl'>Exclusive: Stay for the Q&A session and seek answers from the expert</p>
                    <button onClick={()=>setregisterNowModal(true)} className='capitalize px-5 py-3 rounded-[10px] bg-brnd-red text-brnd-white active:opacity-50 outline-none select-none whitespace-nowrap font-bold'>register now</button>

                </div>
            </div>
            
            <div className='flex gap-x-10 gap-y-5 flex-col md:flex-row lg:flex-row xl:flex-row justify-center Container-wrapper '>
                <img src="/assets/svg/about-team.svg" alt="" />
                <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
                    <Title>
                        About The Red Pen MBA Team
                    </Title>
                    <Paragraph PaddingVertical={'py-2'}>The Red Pen MBA team is dedicated to helping you identify and apply to international business schools that align with your academic and career goals.</Paragraph>
                    <Paragraph PaddingVertical={'py-2'}>Our consultants are graduates from the top 20 global business schools, and we have country specialists with in-depth knowledge of leading business schools worldwide. </Paragraph>
                    <Paragraph PaddingVertical={'py-2'}>Our expert team of writers brainstorms and edits 500+ essays and resumes each year. We work with applicants from diverse professional backgrounds, including finance, technology, retail, advertising, marketing, consulting, family business, sustainability, social impact, and armed forces.</Paragraph>

                </div>

                <RegisterNowModal  active={registerNowModal} Handler={(RegisterNowModalTrigger)} />
                <ShareModal active={shareModal} Handler={(ShareNowModalHandler)} />
            </div>
        </>
    )
}

export default EventDetail


const Title = (props) => {
    return (
        <>
            <h4 className='font-bold first-letter:capitalize text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl my-5'>{props.children}</h4>
        </>
    )

}

const Paragraph = (props) => {
    return (
        <>
            <p className={`font-normal md:tracking-wider text-sm md:text-md leading-[1.5rem] ${props.PaddingVertical}`}>{props.children}</p>
        </>
    )

}

const SubTitle = (props) => {
    return (
        <>
            <h6 className='font-semibold first-letter:capitalize text-md sm:text-lg md:text-lg lg:text-lg xl:text-[1.5rem]'>{props.children}</h6>
        </>
    )
}

const ListItem = (props) => {
    return (
        <div>
            <div className='flex items-center gap-10'>
                  <p className='text-5xl font-bold text-brnd-secondary-color w-10'>{props.Sno}</p>
                <div className='flex flex-col gap-1'>
                    <p className='font-bold'>{props.heading}</p>
                    <Paragraph className=''>{props.content}</Paragraph>
                </div>
            </div>
            <hr className={props.Line ? 'h-[1px] mx-auto mt-4 bg-brnd-black border-0 rounded ' : 'hidden'} />
        </div>
    )
}