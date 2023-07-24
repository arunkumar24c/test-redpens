import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SemEsteemedCard() {

    const schoolData = [
        '/assets/mba-logos/1.png',
        '/assets/mba-logos/2.png',

        '/assets/mba-logos/3.png',
        '/assets/mba-logos/4.png',
        '/assets/mba-logos/5.png',
        '/assets/mba-logos/6.png',
        '/assets/mba-logos/7.png',
        '/assets/mba-logos/8.png',
        '/assets/mba-logos/9.png',
        '/assets/mba-logos/10.png',
        '/assets/mba-logos/11.png',
        '/assets/mba-logos/12.png',
        '/assets/mba-logos/13.png',
        '/assets/mba-logos/14.png',
        '/assets/mba-logos/15.png',
        '/assets/mba-logos/16.png',
        '/assets/mba-logos/17.png',
        '/assets/mba-logos/18.png',
        '/assets/mba-logos/19.png',
        '/assets/mba-logos/20.png',
        '/assets/mba-logos/21.png',
        '/assets/mba-logos/22.png',
        '/assets/mba-logos/23.png',
        '/assets/mba-logos/24.png',
        '/assets/mba-logos/25.png',
        '/assets/mba-logos/26.png',
        '/assets/mba-logos/27.png',
        '/assets/mba-logos/28.png',
        '/assets/mba-logos/29.png',

    ]

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 3000,
        centerMode: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        

    };

    return (
        <>
            <div className=' mt-5 py-4'>
                {/* <p className='text-center mb-2 font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-brnd-dark-blue'>TRP Admissions</p> */}
                <p className='text-center text-md md:text-xl lg:text-xl xl:text-2xl font-bold'>Our Applicants have been admitted to:</p>


                <Slider   {...settings}>
                    {schoolData.map((data, index) =>
                    <div key={index}>  
                    <div className='flex justify-center items-center  h-44 '>
                        <img className='object-contain aspect-square h-[120px] outline-none selection:outline-none' src={data} alt='' />
                    </div>
                    </div>
                    )}
                </Slider>




            </div>
        </>
    )
}

export default SemEsteemedCard


