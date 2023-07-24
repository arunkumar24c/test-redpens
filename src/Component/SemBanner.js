import React from 'react'
import Slider from "react-slick";
import { motion } from "framer-motion"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";
import bannerOneLottie from "../Lottie/bnr1.json"


import { useDispatch } from "react-redux"
import { Trigger } from '../StateManagement/Store';


function SemBanner() {


    const SemBannerData = [
        {
            'title': 'Leading International    MBA Consultants',
            'content': 'For Admissions to dream business schools in the US, UK, Canada, Europe & Asia',
            'image': 'assets/Banner/sembnr1.png',
            // 'lottie': bannerOneLottie,

        }
       



    ]

    const StatData = [
        {
            id: 1,
            title: '55+',
            content: 'years of experience',
        },
        {
            id: 2,
            title: '95%',
            content: 'of our applicants received offers',
        },
        {
            id: 3,
            title: '100%',
            content: 'of our applicants invited for interviews',
        },
        {
            id: 4,
            title: '1.5M+',
            content: 'in scholarships',
        },
        {
            id: 5,
            title: '58+',
            content: 'unique MBA programs',
        },
    ]


    const settings = {
        dots: true,
        dotsClass: ' line-indicator banner-dot',
        fade: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: "linear",

    };
    return (
        <>


            <div className='bg-brnd-dark-blue py-5 mt-[18rem]'>

                <div className='relative Container-wrapper-Dummy -mt-[17rem] my-3 sm:mb-10 md:mb-10  lg:mb-10 xl:mb-10  bg-brnd-gray border border-brnd-border rounded-md  shadow-md'>

                    <Slider customPaging={(i) => <div className='absolute  opacity-0'>{i}</div>} {...settings}>
                        {SemBannerData.map((bannerItem, index) =>
                            <BannerCard LottieData={bannerItem.lottie} key={index} banner_title={bannerItem.title} banner_content={bannerItem.content} banner_image={bannerItem.image} />
                        )}

                    </Slider>
                    <div className='absolute bottom-5 right-5 hidden'>
                        <div className='flex flex-row gap-x-1'>
                            <div className='w-3 h-3 cursor-pointer bg-brnd-red border border-brnd-red  rounded-full'></div>
                            <div className='w-3 h-3 cursor-pointer bg-brnd-white border border-brnd-red rounded-full'></div>
                            <div className='w-3 h-3 cursor-pointer bg-brnd-white border border-brnd-red  rounded-full'></div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between gap-5 Container-wrapper-Dummy flex-wrap px-[20px] py-5'>
                    {StatData.map((item, index) =>
                        <StatSection key={index} title={item.title} content={item.content} />
                    )}

                </div>


            </div>

        </>
    )
}

export default SemBanner


const BannerCard = (props) => {

    const dispatch = useDispatch();

    // const lefttoRight = {}
    console.log(props.banner_image)

    return (
        <div className='mt-5  h-2/3  '>
            <div className='flex justify-center  gap-y-3  items-center mx-5 sm:mx-12 md:mx-12 lg:mx-12 xl:mx-12 xl:flex-row lg:flex-row sm:flex-col-reverse flex-col-reverse my-5 '>

                <motion.div initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 500, opacity: 0 }} className='flex flex-col gap-y-5   items-center md:items-start lg:items-start xl:items-start w-full sm:w-2/3 md:w-full lg:w-2/3 xl:w-2/3'>
                    <p className='text-2xl md:text-4xl font-bold text-center sm:text-start md:text-start lg:text-start xl:text-start text-brnd-dark-blue'>{props.banner_title}</p>
                <p dangerouslySetInnerHTML={{ __html: props.banner_content }} className='text-center sm:text-start md:text-start lg:text-start xl:text-start text-md md:text-xl  lg:text-xl xl:text-xl font-medium text-brnd-dark-blue lg:w-4/5'></p>
                    <motion.button onClick={() => dispatch(Trigger({ ModalState: true }))} whileHover={{ scale: 1.1, transition: { duration: 0 }, }} className='py-3 px-5 capitalize animated-red-hover-button cursor-pointer bg-brnd-red text-brnd-white font-bold whitespace-nowrap rounded-md' type="button">Get Started Now</ motion.button>
                </ motion.div>

                {props.LottieData ?
                        <Lottie className='h-auto  md:h-[400px] lg:h-[350px] xl:h-[350px]' animationData={props.LottieData} />
                   

                    :
                    <motion.img initial={{ x: 500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -500, opacity: 0 }}
                        className='h-auto  md:h-[400px] lg:h-[350px] xl:h-[350px] w-auto py-5' src={props.banner_image} alt="" />
                      
                }
            </div>


        </div>
    )
}

const StatSection = (props) => {
    return (
        <>
            <div className='p-4 flex flex-col gap-5 w-fit'>
                <p className='text-brnd-white font-bold text-3xl'>
                    {props.title}
                </p>
                <p className='text-brnd-gray font-light w-[120px] md:w-[140px]  lg:w-[160px] xl:w-[160px]'>{props.content}</p>
            </div>
        </>
    )
}