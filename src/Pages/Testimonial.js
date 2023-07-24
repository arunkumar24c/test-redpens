import React, { useEffect, useRef, useState } from "react";
import { ScrolltoTop } from "../Utility";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonalCard from "../Elements/TestimonalCard";
import useFetchData from "../CustomHooks/useFetchData";
import ReactPaginate from "react-paginate";

function Testimonial() {
  const slider = useRef(null);
  const [items, setItems] = useState([]);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;

  const {
    data: details,
    loading,
    error,
    refetch,
  } = useFetchData("/get-testimonial", "get", []);

  const testimonialData = details && details.data;
  console.log(details && details);
  setItems(testimonialData && testimonialData);
  console.log(testimonialData && testimonialData, "testimonial");

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items && items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items && items.slice(itemOffset, endOffset);
  console.log(items, "items");
  const pageCount = Math.ceil(items.length / itemsPerPage);

  //   console.log(testimonialData)
  document.title = "The Red Pen - Testimonial";

  useEffect(() => {
    ScrolltoTop();
  }, []);

  const settings = {
    rows: 2,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function Items({ currentItems }) {
    return (
      <>
        {/* {items && items.map((item,index)=>(

                      

<TestimonalCard key={index} img={item.image} name={item.name} university={item.title}  content={item.description} />
))} */}
        {currentItems &&
          currentItems.map((item, index) => {
            return (
              <TestimonalCard
                key={index}
                img={item.image}
                name={item.name}
                university={item.title}
                content={item.description}
              />
            );
          })}
      </>
    );
  }

  return (
    <>
      <div className="Container-wrapper">
        <div className="bg-brnd-gray py-5 px-10 gap-y-5 my-5 rounded-lg shadow flex flex-col md:flex-row lg:flex-row  items-center justify-between gap-x-5">
          <div className="flex flex-col gap-y-5 items-start">
            <p className="text-3xl   text-brnd-black font-bold ">
              98% of our clients gave us 5 star rating
            </p>
            <p className="text-xl w-full md:w-1/2 lg:w-1/2 sm:w-full">
              The Red Pen is committed to finding the ‘best-fit’ institution for
              every applicant. Here’s what they have to say.
            </p>
            <button
              className="py-3 animated-red-hover-button px-5 bg-brnd-red text-brnd-white font-bold whitespace-nowrap rounded-md"
              type="button"
            >
              consult now
            </button>
          </div>
          <img src="assets/images/testimoni.png" alt="" />
        </div>
      </div>
      <div className="my-5 px-10 pb-52  sm:pb-72 md:pb-80 lg:pb-80 xl:pb-80 bg-brnd-dark-blue py-10 relative">
        <p className="text-brnd-white text-2xl font-bold">MBA Admissions</p>
        <p className="text-xs mt-2 text-brnd-white">
          WE CONSISTENTLY SECURE ADMITS TO LEADING GLOBAL PROGRAMMES INCLUDING
          THE M7.
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 relative">
          <div className="flex gap-4 items-center flex-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 py-5">
            <p className="text-brnd-white text-2xl font-bold">92%</p>
            <p className="text-sm text-brnd-white text-center">
              of applicants received offers to their top choices*
            </p>
          </div>
          <div className="flex gap-4 items-center flex-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 py-5">
            <p className="text-brnd-white text-2xl font-bold">100%</p>
            <p className="text-sm text-brnd-white text-center">
              of applicants received interviewinvites from at least 1 programme*
            </p>
          </div>
          <div className="flex gap-4 items-center flex-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 py-5">
            <p className="text-brnd-white text-2xl font-bold">$1.5M+</p>
            <p className="text-sm text-brnd-white text-center">
              in scholarships every year
            </p>
          </div>
        </div>
      </div>
      <div className="Container-wrapper -mt-[30%]   sm:-mt-[25%]  md:-mt-[20%] lg:-mt-[20%] xl:-mt-[20%]">
        <Slider ref={slider} {...settings}>
          <Items currentItems={currentItems} />
        </Slider>
{/* card section */}
        <div className="flex w-full  justify-center items-center gap-x-5 mt-5">
          <div
            onClick={() => {
              slider?.current?.slickNext();
            }}
            className=" cursor-pointer h-8 w-6 flex justify-center items-center bg-brnd-dark-blue  rounded-full"
          >
            
            <img src="assets/svg/left-arrow.svg" alt="right-arrow" />
          </div>
          <ul className="flex gap-x-3">
            <ReactPaginate
              breakLabel="..."
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              containerClassName={
                "shop-pagination font-bold text-[#404040]	space-x-3"
              }
              activeClassName={
                "shop-pagination-active underline underline-offset-4 decoration-2	"
              }
              renderOnZeroPageCount={null}
            />
          </ul>
          <div
            onClick={() => {
              slider?.current?.slickPrev();
            }}
            className="cursor-pointer h-8 w-6 flex justify-center items-center bg-brnd-dark-blue rounded-full"
          >
            <img src="assets/svg/right-arrow.svg" alt="right-arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;

const TestiCard = () => {
  return (
    <>
      <div className="flex flex-col p-10 bg-brnd-gray rounded-md items-start gap-2 m-3">
        <div className="w-10 h-10 bg-brnd-black rounded-sm"></div>
        <p className="text-xl font-bold ">University Name</p>
        <div className="flex flex-row items-center gap-2 ">
          <p className="text-xs">Tushar</p>
          <div className="w-1 h-1 rounded-full bg-brnd-black"></div>
          <p className="text-xs">Year of 97</p>
        </div>
        <p className="">
          Behind every successful MBA application is a systematic and structured
          plan. We begin by analysing your profile, work experience, and
          cultural and financial preferences to create a roadmap with a
          customised action plan for the way forward.
        </p>
      </div>
    </>
  );
};
