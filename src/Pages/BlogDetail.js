import React, {useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../Elements/ProductCard'
import { ScrolltoTop } from '../Utility'
import axios from 'axios';
import useFetchData from '../CustomHooks/useFetchData';
import { useDispatch } from "react-redux"
import { Trigger } from '../StateManagement/Store';
import SubscribeNowModal from '../Modal/SubscribeNowModal';
import {
    FacebookMessengerShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
  } from "react-share";





function BlogDetail() {
    const [blog_detail, setdatadetails] = useState(null)
    const [myArray, setMyArray] = useState([]);
    const [shopdata, setShopdata] = useState([]);
    const[subscribeNow, setSubscribeNow ] = useState(false);
   
    const SubscribeNowToggler = () =>{
        setSubscribeNow(!subscribeNow);
      }

    const { blog_url } = useParams();
    const linkData = window.location.href;
    

    const dispatch = useDispatch();

    // Document title
    document.title = 'The Red Pen - Blog Detail'

    useEffect(() => {
        ScrolltoTop()
        getDetails();
        getShopData([])
    }, [])


    // Related post cards - post method
    const getShopData = async (id) => {
        const payload = {
          categories_id: id,
        };
    
        axios
          .post(`${process.env.REACT_APP_SERVER_BASE_URL}/get-blog-data`, payload)
          .then((response) => {
            setShopdata(response.data.data);
            console.log(response.data.data, " Filtes");
          });
      };

      
      // blog-details data - get method 
    const getDetails = async()=>{

        const result = await axios.get(`${ process.env.REACT_APP_SERVER_BASE_URL}/get-blog-data/${blog_url}`);
        setdatadetails(result.data.data)
        console.log(result.data.data, "")
       }
       
       
       const blog_tags = JSON.parse(blog_detail && blog_detail.blog_tags)
        // const blog_tag = JSON.parse(blog_tags)
       const desktop_banner =   blog_detail && blog_detail.desktop_banner
        const mobile_banner =  blog_detail && blog_detail.mobile_banner
    //    console.log(blog_tags)

    const date = new Date(blog_detail && blog_detail.date)
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric" ,
     
    })
    const formattedMonth = date.toLocaleDateString("en-GB", {
       
        month: "long", 
        
      })
      const formattedYear = date.toLocaleDateString("en-GB", {
        year: "numeric" ,
            
       })
       

    return (
        <>
            <div style={{textAlign: "center"}} class="flex flex-col sm:flex-col md:flex-row  justify-between Container-wrapper">
                <div class=" w-full  sm:w-full md:w-5/6  md:mr-5 sm:mr-5 lg:mr-5">
                    <div class="flex flex-col justify-start items-start gap-y-[10px]">
                        <p class="font-normal text-[#404040] text-sm">{blog_detail && blog_detail.categories.category_name} • {blog_detail && blog_detail.post_type}</p>
                        <p class="font-bold text-left text-3xl">{blog_detail && blog_detail.blog_title} </p>
                        <p className='text-[#404040]  text-left'> Posted On <span className='' >  {formattedMonth}</span> {formattedDate}, {formattedYear} By {blog_detail && blog_detail.post_by} </p>
                    </div>
                    <div class=" rounded-[15px] mt-[10px] w-full">
                        <div className='max-md:hidden'>
                        <img src={process.env.REACT_APP_SERVER_IMAGE_URL + desktop_banner } className='w-full object-left object-contain rounded-md h-[350px]' alt="banner" />
                         </div> 
                         <div className='md:hidden'>
                        <img src={ process.env.REACT_APP_SERVER_IMAGE_URL + mobile_banner } className='w-full' alt="" />
                         </div>

                    </div><br />

                    {/* <div  dangerouslySetInnerHTML={{ __html: blog_detail && blog_detail.blog_describtion }} ></div> */}
                                    
                                  
                     <div 
                                      dangerouslySetInnerHTML={{ __html: blog_detail &&  blog_detail.blog_describtion }}
                                    />
                                 

                   


                      <div className='flex flex-col items-center gap-y-5'>
                        <div className='flex items-center   gap-x-6'>
                        <FacebookShareButton url={linkData} >
                            <img src="/assets/svg/facebook.svg" alt="" />
                          </FacebookShareButton>  
                          <TwitterShareButton url={linkData}>

                            <img src="/assets/svg/twitter.svg" alt="" />
                            </TwitterShareButton>
                            <LinkedinShareButton url={linkData} >

                            <img src="/assets/svg/linkedin.svg" alt="" />
                            </LinkedinShareButton>
                            {/* <img src="/assets/svg/youtube.svg" alt="" />
                            <img src="/assets/svg/gmail.svg" alt="" /> */}

                            {/* <div className='w-10 h-10 bg-brnd-dark-blue/20 rounded-full'></div>
                            <div className='w-10 h-10 bg-brnd-dark-blue/20 rounded-full'></div>
                            <div className='w-10 h-10 bg-brnd-dark-blue/20 rounded-full'></div>
                            <div className='w-10 h-10 bg-brnd-dark-blue/20 rounded-full'></div>
                            <div className='w-10 h-10 bg-brnd-dark-blue/20 rounded-full'></div> */}
                        </div>
                        <p className='text-sm text-brnd-dark-blue/50'>Share this vlog on social platforms</p>

                      </div>
                   
                      <p className='font-bold text-2xl my-5'>Related Posts</p>
        <div class="grid my-5 sm:grid-cols-1 md:grid-col-1 lg:grid-cols-3 gap-4">
                       {shopdata && shopdata.map((values)=>{
                             return(
                               <>
                              
                        <p onClick={()=>{window.location.reload()}} ><BlogCard onClick={ScrolltoTop()}  {...values} key={values.id} /></p>
                              </> 
                              )    
                        })}
       
        </div>
       

                </div>

                <div class=" w-full sm:w-full md:w-72 md:ml-5 sm:ml-5 lg:ml-5 xl:ml-5">
                  <p class="capitalize text-left font-bold text-xl py-5 ">stay in touch</p>

                    <div class="border border-brnd-black/5 mb-5 py-5 rounded-[10px] shadow-lg bg-brnd-gray flex  flex-col gap-y-3">

                        <p className='text-sm text-[#1A1757] mr-2 whitespace-nowrap'>Fill the form  for regular update</p>
                        <div class="flex flex-row gap-x-5 justify-center items-center px-5">

                            <button onClick={()=>setSubscribeNow(!subscribeNow)} className='text-sm border-b  border-brnd-red font-bold text-brnd-red'>Subscribe Now</button>
                            {/* <button onClick={() => dispatch(Trigger({ModalState: true}))} class="rounded-[10px] text-xs whitespace-nowrap font-bold text-brnd-white bg-brnd-red py-3 px-3">Consult Now</button> */}
                            {/* <img src="clock.png" width="10" height="10"> */}
                            <div className='flex items-center justify-center gap-2'>
                             <img src="/assets/svg/clock.svg" className='h-3' alt="" />   
                            <p class="text-brnd-black/50 text-xs whitespace-nowrap">takes 45 sec</p>
                            </div>
                        </div>
                    </div>

                    <div class="capitalize text-left font-bold text-xl mb-3">Tags</div>
                    <div className='flex flex-row  sm:flex-col md:flex-col h-full lg:flex-col xl:flex-col gap-x-5 gap-y-2 overflow-x-auto w-full mb-3 scrollbar-hide'>   
                    {blog_tags && blog_tags.map((values)=>{
                        return(

                      
                        <>

                                <div class="border w-fit h-fit rounded-[10px] p-3 text-brnd-white text-sm  bg-brnd-dark-blue">{values}</div>
                                </>
                                  )
                    })} 
                    {/* <div class="border w-fit h-fit  rounded-[10px]  p-5 text-brnd-white text-sm  bg-brnd-dark-blue    ">Application Deadlines & Results</div>
                    <div class="border w-fit h-fit rounded-[10px]  p-5 text-brnd-white text-sm  bg-brnd-dark-blue   ">Application Tips & Info</div>
                    <div class="border w-fit h-fit rounded-[10px]  p-5 text-brnd-white text-sm  bg-brnd-dark-blue   ">Coronavirus Update</div>
                    <div class="border w-fit h-fit rounded-[10px]  p-5 text-brnd-white text-sm  bg-brnd-dark-blue   ">Curriculum Choice</div>
                    <div class="border w-fit h-fit rounded-[10px]  p-5 text-brnd-white text-sm  bg-brnd-dark-blue   ">Essay Writing Tips & Info</div>
                    <div class="border w-fit h-fit rounded-[10px]  p-5 text-brnd-white text-sm  bg-brnd-dark-blue   ">Extracurricular Activities</div> */}
                    </div>
                </div>
            </div>
            
          
            <SubscribeNowModal  active={subscribeNow} Handler={SubscribeNowToggler} /> 
        </>
    )
}

export default BlogDetail





const BlogCard = (props) =>{
    const {blog_image, blog_title, blog_short_description, blog_url , id, categories , post_type , date } = props

    const navigate = useNavigate()

    // let dateFormat1 = date.format('D-MM-YYYY');
//    console.log(dateFormat1, "date")
    let objectDate = new Date(date);
   console.log(objectDate)

let day = objectDate.getDate();

let month = objectDate.getMonth();
let year = objectDate.getFullYear();

if (day < 10) {
    day = '0' + day;
}

if (month < 10) {
    month = `0${month}`;
}

let format1 = `${month}/${day}/${year}`;

    // const time = new Date(date)
    // const formattedDate = time.toLocaleDateString("en-GB", {
    //   day: "numeric" ,
     
    // })
    // const formattedMonth = time.toLocaleDateString("en-GB", {
       
    //     month: "numeric", 
        
    //   })
    // const formattedYear = time.toLocaleDateString("en-GB", {
    //    year: "numeric" ,
           
    //   })

    return(
        <>
        <div onClick={()=>{navigate(`/mba-admissions-strategies/${categories.category_name}/${blog_url}`) ; ScrolltoTop()} } className='flex flex-col justify-between   border border-brnd-gray rounded-xl overflow-hidden relative shadow-md cursor-pointer'>
            <img className='rounded-t-xl  w-screen object-contain' src={process.env.REACT_APP_SERVER_IMAGE_URL + blog_image} alt=""/>
            <div className='flex flex-col justify-start items-start gap-y-3 p-4'>
                <p className='text-sm text-[#404040]'>{categories.category_name} • {post_type}</p>
                <p className='text-md text-left font-bold'>{blog_title}</p>
                <p className=' text-md text-[#404040] text-left'>{blog_short_description}</p>
                <p className='text-[#404040] text-sm'>{format1}/</p>

                {/* <div className='flex'>
                <p className='text-black text-sm'>{formattedMonth}/</p>
                <p className='text-black text-sm'>{formattedDate}/</p>
                <p className='text-black text-sm'>{formattedYear}</p>

                </div> */}

                {/* <div dangerouslySetInnerHTML={{ __html: blog_describtion }}>
                </div> */}
                {/* <p className='text-xs text-brnd-black/50'>{blog_describtion}</p> */}
            </div>
            <div className='flex justify-end py-5 px-4 bg-brnd-gray'>
                <button className='capitalize font-bold text-brnd-black' type="button">read more</button>
            </div>
        </div>

        
        </>
    )
}