import React, { useEffect, useState } from 'react'
import VideoModal from '../Modal/VideoModal';
import { ScrolltoTop } from '../Utility';
import useFetchData from '../CustomHooks/useFetchData';
import axios from 'axios';



function Vlogs() {
    const[slectedFilter, setFilter] = useState(1);
    const [ seeMore, setSeeMore ] = useState(false)
    const [featureSeeMore, setFeatureSeeMore] = useState(false)
    const [featuredata, setFeaturedata] = useState([]);
    const [recentdata, setRecentdata] = useState([]);
    const [loader, setLoader] = useState(false);




    // Document Title
    document.title = ' The Red Pen - Vlogs';

    useEffect(() => {
        ScrolltoTop()
        getShopData([])
    }, [])

    // const {
    //     data: details,
    //     loading,
    //     error,
    //     refetch,
    // } = useFetchData("/get-video-data", "get", []);

    const getShopData = async (id) => {
        const payload = {
          category_id: 0,
        };
    
        axios
          .post(`${process.env.REACT_APP_SERVER_BASE_URL}/get-video-data`, payload)
          .then((response) => {
            setFeaturedata(response.data.data.feature);
            setRecentdata(response.data.data.recent);


            console.log(response.data.data.feature, " Filtes");
            console.log(response.data.data.recent, " Filtes");

          });
      };
     
    const {
        data: videocatdetails,
        loading
       
      } = useFetchData("/get-videocategory-data", "get", []);

    if (loading) return <p className='p-5'>Loading...</p>
    // console.log(details)
    // const feature_video_data = details && details.data.feature
    // const recent_video_data =  details && details.data.recent
    const video_category_data = videocatdetails && videocatdetails.data
     const recent_array =  recentdata && recentdata.slice(0,3)
     const feature_array =  featuredata && featuredata.slice(0,3)
    

     // for filter data

     const BlogList = async (id) => {
        setLoader(true);
        // setUpcomingActive(id);
        const payload = {
            category_id: id,
        };
        axios
            .post(`${process.env.REACT_APP_SERVER_BASE_URL}/get-video-data`, payload)
            .then((response) => {
                const feature_data = response.data.data.feature;
                const recent_data = response.data.data.recent;

                setFeaturedata(feature_data);
                setRecentdata(recent_data);

            });
        setLoader(false);
        
    
    };
   

    const FitlerData = [
        {
            id:1,
            content:'All',
        },
        {
            id:2,
            content:'Postgraduate',
        },
        {
            id:3,
            content:'Undergraduate',
        },
        {
            id:4,
            content:'MBA',
        },
       
    ]

    

    return (
        <>
            <div className='Container-wrapper'>

                <p className='text-2xl font-bold'>Videos</p>
                <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row '>
                    <div className='w-full md:w-fit lg:w-fit  mx-2 md:mr-5 lg:mr-5'>
                    <p className="capitalize font-bold mt-5">Filters</p>


                        <ul className='mt-5  flex flex-row md:flex-col h-full lg:flex-col xl:flex-col gap-x-5 space-y-5 overflow-x-auto w-full md:w-48 mb-3 scrollbar-hide'>
                            <div className='cursor-pointer max-md:mt-5'>
                        <p onClick={()=>{setFilter(1); BlogList([]) } } className={slectedFilter === 1 ? 'text-brnd-red whitespace-nowrap ' : 'hover:text-brnd-red text-[#404040] whitespace-nowrap'}>All Videos</p>
                                    <div className= { slectedFilter === 1 ? 'visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' : 'invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' }></div>
                       
                                    </div>
                        { video_category_data && video_category_data.map((list)=>
                              <li className=''>

                                <div onClick={()=>{setFilter(list.id); BlogList(list.id) } } className='flex flex-col justify-start items-start w-full md:w-48 group cursor-pointer'>
                                    <p className={slectedFilter === list.id ? 'text-brnd-red whitespace-nowrap' : 'hover:text-brnd-red text-[#404040] whitespace-nowrap'}>{list.category_name}</p>
                                    <div className= { slectedFilter === list.id ? 'visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' : 'invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' }></div>
                                </div>

                              </li>
                            )}
                        </ul>
                    </div>
                    <div>
                      

                    <div className='flex justify-between items-center'>
                         <div><CustomTitle title={'feature videos'} /></div>
                         <div onClick={()=>setFeatureSeeMore(!featureSeeMore)} className='flex cursor-pointer items-center gap-2 '>
                             <p className='capitalize text-md font-bold text-brnd-dark-blue'>{featureSeeMore ? 'show less' : '  see more'}</p>
                             <img src="/assets/svg/arrow.png" className={featureSeeMore? "rotate-180" : ""} alt="" />
                             </div>
                        </div>
                    {/* <CustomTitle title={'featured video'} footer_title={'see more'} /> */}
                    <div class="grid sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-4">
                    {featureSeeMore ?
                         featuredata && featuredata.map((values)=>{
                            return(
                                <>
                                  <BlogCard  {...values} key={values.id}  />
                                </>
                            ) 
                          }) 
                        : feature_array && feature_array.map((values)=>{
                           
                           console.log(values)
                             return(
                               <>
                             <BlogCard  {...values} key={values.id}  />

                             
                              </> 
                              )    
                        })}

                        </div>
                        <div className='flex justify-between items-center'>
                         <div><CustomTitle title={'recently uploaded'} /></div>
                         <div onClick={()=>setSeeMore(!seeMore)} className='flex cursor-pointer items-center gap-2 '>
                             <p className='capitalize text-md font-bold text-brnd-dark-blue'>{seeMore ? 'show less' : '  see more'}</p>
                             <img src="/assets/svg/arrow.png" className={seeMore? "rotate-180" : ""} alt="" />
                             </div>
                        </div>
                        <div class="grid sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-4">

                        {seeMore ?
                         recentdata && recentdata.map((values)=>{
                            
                            return(
                                <>

                                  <BlogCard  {...values} key={values.id}  />
                                </>
                            ) 
                          }) 
                        : recent_array && recent_array.map((values)=>{
                           
                          
                             return(
                               <>
                             <BlogCard  {...values} key={values.id}  />

                             
                              </> 
                              )    
                        })}

                          

                        </div>
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



        </>
    )
}

export default Vlogs




const BlogCard = (props) => {
    const [ShowVideoModal, setVideoModal] = useState(false)


    const VideoModalHandler = () => {
        setVideoModal(!ShowVideoModal);
    }

    console.log(props, "props")

    const {title, youtube_url, post_by, duration , category , thumbnail_image   } = props;
    // console.log(youtube_url)
    return (
        <>
            <div onClick={()=>setVideoModal(true)}  className='flex flex-col border border-brnd-gray rounded-xl overflow-hidden relative shadow-md cursor-pointer'>
                <img className='rounded-t-xl w-screen' src={process.env.REACT_APP_SERVER_IMAGE_URL + thumbnail_image} alt="image" />
                <div className='flex flex-col gap-y-3 p-4'>
                    <p className='text-sm text-[#404040] font-normal'> {category && category.category_name}  • { post_by}</p>
               {/*  <p className='text-md font-bold'>A Day in the Life of a Charterhouse Online Student</p> */}
                    <p className='text-md font-bold text-brnd-dark-blue'>{title}</p>
                    <p className='text-sm'>{duration}  </p>
                </div>
                <div className='hidden  justify-end py-5 px-4 bg-brnd-gray'>
                    <button className='capitalize font-bold text-brnd-black' type="button">read more</button>
                </div>
            </div>

            <VideoModal url={youtube_url} show={ShowVideoModal} Handler={VideoModalHandler} />


        </>

    )
}

const CustomTitle = (props) => {
    return (
        <>
            <div className='flex justify-between my-5'>
                <p className='capitalize text-md font-bold'>{props.title}</p>
                <p className='capitalize text-md font-bold text-brnd-red'>{props.footer_title}</p>
            </div>
        </>
    )
}

