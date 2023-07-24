import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScrolltoTop } from '../Utility'
import useFetchData from '../CustomHooks/useFetchData';
import axios from 'axios';
import Blog from "../Lottie/Blog_V1.json"
import Lottie from "lottie-react";



function Blogs() {
    const[slectedFilter, setFilter] = useState(1);
    const [myArray, setMyArray] = useState([]);
    const [loader, setLoader] = useState(false);

    const [shopdata, setShopdata] = useState([]);




     // Document title
     document.title='The Red Pen - Blog'

     useEffect(()=>{
         ScrolltoTop()
         getShopData([]);
     },[])
     

    //  const {
    //     data: details,
       
    // } = useFetchData("/get-blog-data", "get", []);

    // console.log(details && details)
    
    // const { data: details, loading } = useFetchData("/get-blog-data", "post", {
    //     categories_id: myArray,
    //   });

    const {
        data: blogcatdetails,
        loading
      } = useFetchData("/get-blogcategory-data", "get", []);

    if (loading) return <p className='p-5'>Loading...</p>
    // console.log(details)
    // const blog_data = details && details.data
    const blog_category_data = blogcatdetails && blogcatdetails.data

    // console.log(blog_category_data)
//    console.log(blog_data)

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
   


  const BlogList = async (id) => {
    setLoader(true);
    // setUpcomingActive(id);
    const payload = {
        categories_id: id,
    };
    axios
        .post(`${process.env.REACT_APP_SERVER_BASE_URL}/get-blog-data`, payload)
        .then((response) => {
            const upcoming_events = response.data.data;
            setShopdata(upcoming_events);
        });
    setLoader(false);
    

};

    return (
        <div className='Container-wrapper'>
            <div className='bg-brnd-gray py-5  px-5 gap-y-5 my-5 flex flex-col md:flex-row lg:flex-row  items-center justify-center gap-x-5'>
                <p className='text-5xl md:text-7xl lg:text-7xl  text-brnd-black/50 '>Blogs</p>
                {/* <img src="assets/images/blogbnr.png" alt="" /> */}
                <Lottie
          className=""
          animationData={Blog}
        />

            </div>

            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row '>
                    <div className='w-full md:w-fit lg:w-fit  mx-2 md:mr-5 lg:mr-5'>
                       
                        <ul className='mt-5 flex flex-row md:flex-col h-full lg:flex-col xl:flex-col gap-x-5 gap-y-5 overflow-x-auto w-full mb-3 scrollbar-hide'>
                        <div onClick={()=>{setFilter(1); BlogList([])}} className='flex flex-col justify-start items-start w-fit group cursor-pointer'>
                        <p className={slectedFilter === 1 ? 'text-brnd-red whitespace-nowrap' : 'hover:text-brnd-red text-[#404040] whitespace-nowrap'}>All</p>
                        <div className= { slectedFilter === 1 ? 'visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' : 'invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' }></div>
                        </div>
                        { blog_category_data && blog_category_data.map((list)=>
                              <li className=''>
                                    
                                <div onClick={()=>{setFilter(list.id); BlogList(list.id)}} className='flex flex-col justify-start items-start w-fit group cursor-pointer'>
                                    <p className={slectedFilter === list.id ? 'text-brnd-red whitespace-nowrap' : 'hover:text-brnd-red text-[#404040] whitespace-nowrap'}>{list.category_name}</p>
                                    <div className= { slectedFilter === list.id ? 'visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' : 'invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' }></div>
                                </div>

                              </li>
                            )}
                        </ul>
                    </div>
                    <div class="grid sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-4">
                        {shopdata && shopdata.map((values)=>{
                             return(
                               <>
                              
                              <BlogCard  {...values} key={values.id} />
                              </> 
                              )    
                        })}

                       
                        

                    </div>
                </div>

                {/* <div className='flex justify-end w-full my-5'>
                    <ul className='flex flex-row gap-x-4'>
                        <li className='hover:text-brnd-red text-md cursor-pointer text-brnd-red'>1</li>
                        <li className='hover:text-brnd-red text-md cursor-pointer'>2</li>
                        <li className='hover:text-brnd-red text-md cursor-pointer'>3</li>
                        <li className='hover:text-brnd-red text-md cursor-pointer'>4</li>


                    </ul>
                </div> */}

        </div>
    )
}

export default Blogs


const BlogCard = (props) =>{
   const {blog_image, blog_title, blog_short_description, blog_url, date , id, categories , post_type } = props
    const navigate = useNavigate();

   
    
    // if (month < 10) {
    //     month = `0${month}`;
    // }


    let objectDate = new Date(date);


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
    // const formattedDate = time.toLocaleDateString("en-GB", {
        
    //   day: "numeric" ,
     
    // })
    // const formattedMonth = time.toLocaleDateString("en-GB", {
       
    //     month: "numeric", 
        
    //   })
    // const formattedYear = time.toLocaleDateString("en-GB", {
    //    year: "numeric" ,
           
    //   })
     
    console.log(props)
    return(
        <>
        <div onClick={()=>{navigate(`/mba-admissions-strategies/${categories.category_name}/${blog_url}`)}} className='flex flex-col justify-between border border-brnd-gray rounded-xl overflow-hidden relative shadow-md cursor-pointer'>
            <img className='rounded-t-xl w-screen ' src={process.env.REACT_APP_SERVER_IMAGE_URL + blog_image} alt=""/>
            <div className='flex flex-col gap-y-3 p-4'>
                <p className='text-sm text-[#404040] '>{categories.category_name} • {post_type}</p>
                <p className='text-md font-bold'>{blog_title}</p>
                <p className=' text-md text-[#404040]'>{blog_short_description}</p>
                <p className='text-[#404040] text-sm'>{format1}</p>

                {/* <div className='flex'>
                <p className='text-black text-sm'>{formattedMonth}/</p>
                <p className='text-black text-sm'>{formattedDate}/</p>
                <p className='text-black text-sm'>{formattedYear}</p>

                </div> */}
                {/* <div dangerouslySetInnerHTML={{ __html: blog_describtion }}>
                </div> */}
                {/* <p className='text-xs text-brnd-black'>{blog_describtion}</p> */}
            </div>
            <div className='flex justify-end py-5 px-4 bg-brnd-gray'>
                <button  className='capitalize font-bold text-brnd-black' type="button">read more</button>
            </div>
        </div>

        
        </>
    )
}