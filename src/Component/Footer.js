import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ContactFormModal from '../Modal/ContactFormModal';
import useFetchData from '../CustomHooks/useFetchData';




function Footer() {
  const navigate = useNavigate();

  const[showContactForm, setContactForm ] = useState(false);



  const {
    data: details,
    loading,
    error,
    refetch,
  } = useFetchData("/get-shop-category-data", "get", []);



  const handleClickShop = (value)=>{
    const category_id = value;
    navigate('/shop', {state: category_id });
}

  const filter_data1 = details && details.data.level1
  const filter1_slice =filter_data1 && filter_data1.slice(0,3);
  //  console.log(filter_data1)
  const filter_data2 = details && details.data.level2
  const filter2_slice =filter_data2 && filter_data2.slice(0,4);


  const ConsultNowToggler = () =>{
    setContactForm(!showContactForm);
  }

  const ExternalLink = {
    privacy:'https://theredpen.in/school-and-college-consulting/privacy-policy/',
    return:'https://theredpen.in/school-and-college-consulting/refunds-terms/',
  }
  const SocialLinks ={
    linkedin:'https://www.linkedin.com/company/theredpen/',
    youtube:'https://www.youtube.com/@TheRedPenMBA/streams',
    whatsapp:"https://wa.me/919372746310?text=Hello%2C%20I'd%20like%20to%20contact%20someone%20regarding%20an%20MBA%20query!",
    call:' +919004305262'
  }

  const LocationRedirect = (url) =>{
    window.open(url, '_blank')
  }

    return (
        <>
            <div className='w-full bg-brnd-dark-blue Container-wrapper mx-auto mb-0 pt-16'>
                <div className='flex flex-wrap gap-x-5 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-start gap-y-5 items-center sm:items-start md:items-start lg:items-start xl:items-start pb-5'>
                    <div className='flex  items-center sm:items-start md:items-start lg:items-start xl:items-start flex-col gap-y-4 w-full md:w-1/4 lg:1/4 xl:w-1/4 after:w-[1px] after:h-[0%] md:after:h-[128.5%] lg:after:h-[144.5%] xl:after:h-[156.5%] relative after:content-[""] after:absolute after:-right-10 after:-bottom-16 after:-top-16 after:bg-brnd-gray-1/50'>
                        <p className='text-brnd-white font-bold text-xl'>MBA Bulletin</p>
                        <p className='text-brnd-white text-center sm:text-left md:text-left lg:text-left xl:text-left font-light text-sm'>Want updates on the latest news and activities from the MBA world? Subscribe to our bulletin</p>
                        <div onClick={ConsultNowToggler} className='cursor-pointer py-3 px-5 flex bg-brnd-white justify-between rounded-md'>
                                <p className='text-black capitalize font-bold whitespace-nowrap'>Subscribe Now</p>
                        </div>

                        <div className='flex items-center sm:items-start md:items-start lg:items-start xl:items-start flex-col gap-y-5'>
                            <p className='font-bold text-brnd-white  text-xl'>Follow us on</p>
                            <div className='flex flex-row  gap-x-3 items-center'>
                                <img onClick={()=>{LocationRedirect(SocialLinks.linkedin)}} className='w-5 cursor-pointer' src="/assets/svg/linkd.svg" alt="" />
                                <img onClick={()=>{LocationRedirect(SocialLinks.youtube)}} className='w-5 cursor-pointer' src="/assets/svg/yt.svg" alt="" />
                                <img onClick={()=>{LocationRedirect(SocialLinks.whatsapp)}} className='cursor-pointer w-5' src="/assets/svg/whatsapp.svg" alt="" />
                                <img onClick={()=>{window.open('tel:'+SocialLinks.call)}} className='cursor-pointer w-5 h-auto' src="/assets/svg/phone.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='ml-0 sm:ml-0 md:ml-10 lg:ml-14 xl:ml-14 flex justify-between flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center sm:items-start md:items-start lg:items-start xl:items-start w-full sm:w-full md:w-[66%] lg:w-[66%] xl:w-[68%] gap-y-5'>
                    <ul className='flex  flex-col text-center sm:text-left  md:text-left lg:text-left xl:text-left gap-y-[8px] md:gap-y-3'>
                        <li className=' capitalize text-brnd-white max-md:text-[#FFFFFF]/30 text-lg font-bold'>Menu</li>
                        <li onClick={()=>{navigate('/')}} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>Home</li>
                        <li onClick={()=>{navigate('/about')}} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>about us</li>
                        <li onClick={()=>{navigate('/wip')}} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>contact us</li>
                        <li onClick={()=>{navigate('/faq')}} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>FAQs</li>
                        {/* <li className='capitalize text-brnd-white text-sm font-light cursor-pointer'>acing admissions</li>
                        <li onClick={()=>{LocationRedirect(ExternalLink.privacy)}} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>privacy policy</li>
                        <li onClick={()=>{LocationRedirect(ExternalLink.return)}} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>refund & terms</li> */}
                    </ul>
                    <ul className='flex  text-center sm:text-left  md:text-left lg:text-left xl:text-left flex-col justify-items-start gap-y-[8px] md:gap-y-3'>
                         <li className=' capitalize max-md:text-[#FFFFFF]/30 text-brnd-white text-lg font-bold'>services</li> 

                        {filter1_slice && filter1_slice.map((values)=>{
                            return(
                                <>
                                <p  onClick={()=>handleClickShop(values.id)} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>{values.category_name}</p>

                                </>
                            )
                        })}
                          {filter2_slice && filter2_slice.map((values)=>{
                            return(
                                <>
                                <p  onClick={()=>handleClickShop(values.id)} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>{values.category_name}</p>

                                </>
                            )
                        })} 


                        {/* <li className='capitalize text-brnd-white text-sm font-light cursor-pointer'>Complete MBA Package</li>
                        <li className='capitalize text-brnd-white text-sm font-light cursor-pointer'>Scholarship Support</li>
                        <li className='capitalize text-brnd-white text-sm font-light cursor-pointer'>Profile/Resume Evaluation</li>
                        <li className='capitalize text-brnd-white text-sm font-light cursor-pointer'>Essay Editing </li>
                        <li className='capitalize text-brnd-white text-sm font-light cursor-pointer'>Letter of Recommendation Service</li>
                        <li className='capitalize text-brnd-white text-sm font-light cursor-pointer'>Interview Preparation</li>
                        <li className='capitalize text-brnd-white text-sm font-light cursor-pointer'>Other services</li> */}

                    </ul>
                    <ul className='flex    text-center sm:text-left  md:text-left lg:text-left xl:text-left flex-col justify-items-start gap-y-[8px] md:gap-y-3'>
                        <li className=' max-md:text-[#FFFFFF]/30 capitalize text-brnd-white text-lg font-bold'>resources</li>
                        <li onClick={()=>{navigate('/mba-admissions-strategies')}} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>blog</li>
                        <li onClick={()=>{navigate('/vlog')}} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>videos</li>
                        <li onClick={()=>{navigate('/event')}} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>events</li>
                        {/* <li onClick={()=>{navigate('/testimonial')}} className='capitalize text-brnd-white text-sm font-light cursor-pointer'>testimonials</li> */}
                        <a href="https://gi8tm80s20c.typeform.com/to/ai4YdRUz?utm_source=Direct&utm_medium=TRP_MBA&utm_campaign=Career_Form" target='_blank' ><li className='capitalize text-brnd-white text-sm font-light cursor-pointer'>work with us</li></a> 
                    </ul>
                    {/* <img draggable='false' className=' h-60 hidden sm:block md:block lg:block xl:block  mr-24' src="/assets/svg/logo-btm.svg" alt=""/> */}
                    </div>
    
                </div>

               <hr className='mt-8 border-x  border-brnd-gray-1/50 ' />

                <div className='flex flex-col items-center pb-5 mt-5 gap-y-3'>
                    <img src="/assets/logo/logo-white.png" alt="" />
                    <p className='text-brnd-white text-center text-xs'>Bay Education Partners LLP | ©TheRedPen | 2023 <br/><br/>
                        Corporate Office: 309, Prasad Chambers, Tata Rd No 2, Charni Road East, Opera House, Girgaon,<br />  Mumbai, Maharashtra 400004 | Number: +91 98204 91179</p>
                </div>

            </div>
            {/* Floating Section */}
            {/* <div className='cursor-pointer hidden fixed z-50 right-10 bottom-10 bg-brnd-red py-5 px-5 rounded-full flex justify-center items-center'>
                <img src="/assets/images/questionmark.png" alt="" />
            </div> */}

            <ContactFormModal show={showContactForm} Handler={ConsultNowToggler} />
        </>
    )
}

export default Footer