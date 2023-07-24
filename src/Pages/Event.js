import React, { useEffect, useState } from "react";
import { ScrolltoTop } from "../Utility";
import { useNavigate } from "react-router-dom";
import useFetchData from "../CustomHooks/useFetchData";
import Loader from "../Component/Loader";
import Slider from "react-slick";
import axios from "axios";
import bannerOneLottie from "../Lottie/bnr1.json";
import Lottie from "lottie-react";
import EventLottie from "../Lottie/Event.json";
import PastEventVideoModal from "../Modal/PastEventVideoModal";
import EventDetail from "./EventDetail";
import Event_V1 from "../Lottie/Event_V1.json";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

function Event() {
  const [pastUpcomingEvent, setpastUpcomingEvent] = useState(1);
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState([]);
  const [slectedFilter, setFilter] = useState(1);
  const [menuActive, setMenuActive] = useState(1);
  const [subActive, setSubActive] = useState(1);
  const [myArray, setMyArray] = useState([]);
  const [pastEvent, setPastEvent] = useState([]);
  const [upcomingEvent, setUpcomingEvent] = useState([]);
  const [pastActive, setPastActive] = useState(0);
  const [upcomingActive, setUpcomingActive] = useState(0);

  // Document Title
  document.title = "Event - The Red Pen";

  const getEventList = async () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/get-events-data`)
      .then((response) => {
        const past_events = response && response.data.data.past_events;
        const upcoming_events = response && response.data.data.upcoming_events;
        setUpcomingEvent(upcoming_events);
        setPastEvent(past_events);
        console.log(past_events && past_events, "past-data");
      });
    setLoading(false);
  };

  const getUpcomingEventSubList = async (id) => {
    setLoading(true);
    setUpcomingActive(id);
    const payload = {
      event_category: id,
    };
    axios
      .post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/get-events-upcoming`,
        payload
      )
      .then((response) => {
        const upcoming_events = response.data.data;
        setUpcomingEvent(upcoming_events);
      });
    setLoading(false);
  };

  const getPastEventSubList = async (id) => {
    setLoading(true);
    setPastActive(id);
    const payload = {
      event_category: id,
    };
    axios
      .post(`${process.env.REACT_APP_SERVER_BASE_URL}/get-events-past`, payload)
      .then((response) => {
        const past_event = response.data.data;
        setPastEvent(past_event);
      });
    setLoading(false);
  };
  // const {
  //     data: details,
  //     loading,
  //     error,
  //     refetch,
  // } = useFetchData("/get-events-data", "get", []);

  const { data: bannerdata } = useFetchData("/get-events-banner", "get", []);

  const { data: upcoming_categorydata } = useFetchData(
    "/get-event-sub-category",
    "post",
    {
      main_category: 1,
    }
  );

  const { data: past_categorydata } = useFetchData(
    "/get-event-sub-category",
    "post",
    {
      main_category: 2,
    }
  );

  const past_category_data = past_categorydata && past_categorydata.data;

  const upcoming_category_data =
    upcoming_categorydata && upcoming_categorydata.data;
  const banner_data = bannerdata && bannerdata.data;

  //   const filter = response.data.data;

  useEffect(() => {
    ScrolltoTop();
    getEventList();
    getUpcomingEventSubList("");
    // getEventData([]);
  }, []);

  const settings = {
    // dots: true,
    dotsClass: " line-indicator banner-dot",
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

  // if (loading) return <Loader />
  if (loading) return <p className="p-5">Loading...</p>;

  // const filterResult = (catItem) => {
  //     const arr = myArray; //example array

  //     if(!arr.includes(catItem)){
  //         arr.push(catItem);
  //     }
  //     else{

  //         arr.splice(arr.indexOf(catItem), 1);
  //         setMyArray([])
  //     }

  //              //new id
  //     //  console.log(catItem)
  //     // if (!arr.includes(catItem)) {
  //       //checking weather array contain the id
  //     //   arr.push(catItem);
  //        //adding to array because value doesnt exists
  //        console.log(arr)
  //     // } else {
  //     //   arr.splice(arr.indexOf(catItem), 1); //deleting
  //     // }

  //     getEventData(arr)

  //   };

  //   const getShopData = async (id) => {
  //     const payload = {
  //       categories_id: id,
  //     };

  //     axios
  //       .post(`${process.env.REACT_APP_SERVER_BASE_URL}/get-events-upcoming`, payload)
  //       .then((response) => {
  //         setEventData(response.data.data);
  //         console.log(response.data.data, " Filtes");
  //       });
  //   };

  return (
    <div className="Container-wrapper">
      {/* <div className='bg-brnd-gray relative w-full gap-x-16 justify-between rounded-md my-5 py-5 px-16 flex items-center flex-col gap-y-5 md:flex-col lg:flex-row xl:flex-row shadow-md'>
            <div className='relative space-y-2'>
                        <p className='text-5xl font-extrabold'>{upcoming_events && upcoming_events[0].event_categories.sub_category_name.split(" ")[0]}</p>
                        <p className='text-brnd-white w-fit px-11 py-2 whitespace-nowrap uppercase  bg-brnd-dark-blue'>{upcoming_events && upcoming_events[0].event_categories.sub_category_name.split(" ")[1] + " "}{upcoming_events && upcoming_events[0].event_categories.sub_category_name.split(" ")[2]}</p>
                        <img src="/assets/svg/diamondgreen.svg" className='absolute -top-20 left-10' alt="" />

                    </div>
                <div className='flex relative flex-col items-center sm:items-start md:items-center lg:items-start xl:items-start gap-y-2 '>
                    <p className='font-light text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-center sm:text-start md:text-center lg:text-start xl:text-start '>Wondering how to approach the new GMAT Focus Edition? </p>
                    <p className='text-brnd-secondary-color text-sm sm:text-lg md:text-lg lg:text-2xl  xl:text-2xl'>Join the webinar!</p>
                    <button className='font-bold hidden animated-red-hover-button capitalize whitespace-nowrap bg-brnd-red text-brnd-white px-4 py-2 rounded-md' type="button">register now</button>
                    <img src="assets/svg/diamondblue.svg" className='absolute -top-8 left-12 h-2' alt="" />
                    <img src="assets/svg/diamondred.svg" className='absolute right-28 -bottom-6' alt="" />

                </div>
                <img src="assets/svg/diamondblue.svg" className='absolute bottom-10 left-10' alt="" />
                <img src="assets/svg/eventdetail-banner.svg" alt="event-header" />

            </div> */}

      <Slider
        className="bg-brnd-gray  md:h-3/4   rounded-md   shadow-md"
        {...settings}
      >
        <div className="flex justify-center relative items-center md:justify-between max-md:pt-8 sm:px-12 md:px-16 lg:px-20">
          <div className="bg-brnd-gray py-5 px-5 gap-y-5  my-5 flex flex-col md:flex-row lg:flex-row  items-center justify-center md:justify-around gap-x-5">
            <p className="text-5xl md:text-5xl lg:text-6xl  text-brnd-black/50 max-md:text-center">
              Events
            </p>

            {/* <div className=" md:absolute inset-1/4  sm:top-20 md:top-24 lg:top-28 flex flex-col justify-center md:justify-between  space-y-4"> */}
            {/* <p className="font-bold max-md:text-center text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl capitalize">
              Meet Representatives from leading British Boarding Schools
            </p>
            <p className=" max-md:text-center text-sm sm:text-md md:text-md lg:text-lg text-[#404040]">
            Our experts have insider knowledge of how to get accepted in top MBA schools through <span className="font-semibold"> consulting.</span>
            </p> */}
            {/* <p className="text-5xl md:text-5xl lg:text-6xl  text-brnd-black/50">
              {" "}
              Events
            </p>
          </div> */}
            <div className="w-full flex justify-end ">
              <Lottie className="h-auto" animationData={Event_V1} />
            </div>
          </div>
        </div>

        {banner_data &&
          banner_data.map((values) => {
            return (
              <>
                <a href={values.banner_url} target="_blank">
                  <div className="max-md:hidden  ">
                    {" "}
                    <img
                      src={
                        process.env.REACT_APP_SERVER_IMAGE_URL +
                        values.desktop_banner
                      }
                      className="w-screen "
                      alt="dsktop-banner"
                    />
                  </div>
                  <div className="md:hidden">
                    <img
                      src={
                        process.env.REACT_APP_SERVER_IMAGE_URL +
                        values.mobile_banner
                      }
                      className="px-3"
                      alt="mobile-banner"
                    />{" "}
                  </div>
                </a>
              </>
            );
          })}
      </Slider>
      {/* <div className='bg-brnd-gray relative w-full  justify-around rounded-md my-5 py-5 px-16 flex items-center flex-col gap-y-5 md:flex-col lg:flex-row xl:flex-row shadow-md'>
            
             <img src="/assets/Banner/eventbanner.png" alt="" />
        </div> */}

      <div className="bg-brnd-gray hidden w-full gap-x-16 justify-between rounded-md my-5 p-5 flex items-center flex-col-reverse gap-y-5 md:flex-row lg:flex-row xl:flex-row shadow-md">
        <div className="flex flex-col items-start gap-y-5 ">
          <p className="font-bold text-2xl ">
            MEET REPRESENTATIVES FROM LEADING BRITISH BOARDING SCHOOLS
          </p>
          <p className="text-brnd-black/20">
            Our experts have insider knowledge of how to get accepted in top MBA
            schools through consulting.
          </p>
          <button
            className="font-bold animated-red-hover-button capitalize whitespace-nowrap bg-brnd-red text-brnd-white px-4 py-2 rounded-md"
            type="button"
          >
            register now
          </button>
        </div>
        <img src="assets/images/event-header.png" alt="event-header" />
      </div>

      <div className="hidden flex justify-between my-5">
        <p className="text-xl font-bold">Events</p>

        <div className="flex gap-x-3">
          <div className="py-2 px-2 border border-brnd-black/20 w-fit rounded-[5px] relative group cursor-pointer">
            <p className="capitalize text-brnd-red text-sm">Newest</p>
            <ul className="group-hover:block hidden  p-5 bg-brnd-white rounded-[10px] absolute left-0 top-10  z-10 whitespace-nowrap border border-brnd-black/30">
              <li>
                <p>Filter set 1</p>
              </li>
              <li>
                <p>Filter set 1</p>
              </li>
              <li>
                <p>Filter set 1</p>
              </li>
              <li>
                <p>Filter set 1</p>
              </li>
            </ul>
          </div>
          <div className="py-2 px-2 border border-brnd-black/20 w-fit rounded-[5px] relative cursor-pointer group">
            <p className="capitalize text-brnd-red text-sm">filter</p>
            <ul className="hidden group-hover:block p-5 bg-brnd-white rounded-[10px] absolute right-0 top-10 z-10 whitespace-nowrap border border-brnd-black/30">
              <li>
                <p>Filter set 1</p>
              </li>
              <li>
                <p>Filter set 1</p>
              </li>
              <li>
                <p>Filter set 1</p>
              </li>
              <li>
                <p>Filter set 1</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-10 md:flex-row lg:flex-row xl:flex-row ">
        <div className="w-full md:w-fit lg:w-fit  mx-2 md:mr-5 lg:mr-5">
          <ul className="mt-5 flex flex-row md:flex-col h-full lg:flex-col xl:flex-col gap-x-5 gap-y-5 overflow-x-auto w-full mb-3 scrollbar-hide">
            {/* { FilterData.map((list)=>
                              <li className=''>

                                <div onClick={()=>{setFilter(list.id)}} className='flex flex-col justify-start items-start w-fit group cursor-pointer'>
                                    <p className={slectedFilter === list.id ? 'text-brnd-red whitespace-nowrap' : 'hover:text-brnd-red whitespace-nowrap'}>{list.content}</p>
                                    <div className= { slectedFilter === list.id ? 'visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' : 'invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' }></div>
                                </div>

                              </li>
                            )} */}

            <li className="">
              <div
                onClick={() => {
                  setMenuActive((prevMenuActive) =>
                    prevMenuActive === 1 ? 0 : 1
                  );
                  setpastUpcomingEvent((prevEvent) =>
                    prevEvent === 1 ? 0 : 1
                  );
                }}
                className="flex flex-col justify-start items-start w-48 group cursor-pointer"
              >
                {/* up and down arrow */}
                <div className="flex gap-2">
                  <p
                    className={
                      menuActive === 1
                        ? "text-brnd-red  whitespace-nowrap capitalize"
                        : "hover:text-brnd-red text-[#404040] whitespace-nowrap capitalize"
                    }
                  >
                    upcoming events
                  </p>
                  <div
                    className={
                      menuActive === 1
                        ? "visible   h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 rounded-full"
                        : "invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3  rounded-full"
                    }
                  >
                    {menuActive === 1 ? (
                      <BiDownArrow className="mt-1" />
                    ) : (
                      <BiUpArrow className="mt-1" />
                    )}
                  </div>
                </div>

                <div
                  className={
                    menuActive === 1
                      ? "visible   h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full"
                      : "invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full"
                  }
                ></div>
              </div>
              <ul
                className={`${menuActive === 1 ? "space-y-2 mt-3" : "hidden"} `}
              >
                <li>
                  <div
                    onClick={() => {
                      setSubActive(1);
                    }}
                    className="flex flex-col justify-start space-y-3  items-start  group cursor-pointer"
                  >
                    {upcoming_category_data &&
                      upcoming_category_data.map((item, index) => (
                        <li
                          onClick={() => {
                            getUpcomingEventSubList(item.id);
                          }}
                          className={`${
                            upcomingActive === item.id
                              ? "text-sm text-brnd-red"
                              : "text-[#404040] text-sm"
                          }`}
                        >
                          {item.sub_category_name}
                        </li>
                      ))}
                  </div>
                </li>
                <li>
                  {/* <div onClick={() => { setSubActive(2) }} className='flex flex-col justify-start items-start w-fit group cursor-pointer'>
                                           
                                        </div> */}
                </li>
              </ul>
            </li>
            {/* <div className={subActive === 2 ? 'visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' : 'invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full'}></div> */}

            {/* <div className={subActive === 1 ? 'visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' : 'invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full'}></div> */}
            {/* {subActive === 2 ? 'text-brnd-red whitespace-nowrap capitalize' : 'hover:text-brnd-red whitespace-nowrap capitalize'} */}
            <li className="">
              <div
                onClick={() => {
                  setMenuActive((prevMenuActive) =>
                    prevMenuActive === 2 ? 0 : 2
                  );
                  setpastUpcomingEvent((prevEvent) =>
                    prevEvent === 2 ? 0 : 2
                  );
                }}
                className="flex flex-col justify-start items-start w-fit group cursor-pointer"
              >
                <div className="flex gap-2">
                  <p
                    className={
                      menuActive === 2
                        ? "text-brnd-red whitespace-nowrap capitalize"
                        : "hover:text-brnd-red text-[#404040] whitespace-nowrap capitalize"
                    }
                  >
                    past events
                  </p>
                  <div
                    className={
                      menuActive === 2
                        ? "visible   h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 rounded-full"
                        : "invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3  rounded-full"
                    }
                  >
                    {menuActive === 2 ? (
                      <BiDownArrow className="mt-1" />
                    ) : (
                      <BiUpArrow className="mt-1" />
                    )}
                  </div>
                </div>

                <div
                  className={
                    menuActive === 2
                      ? "visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full"
                      : "invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full"
                  }
                ></div>
                <ul
                  className={`${
                    menuActive === 2 ? "space-y-3 mt-3" : "hidden"
                  }`}
                >
                  {past_category_data &&
                    past_category_data.map((item, index) => (
                      <li
                        onClick={() => {
                          getPastEventSubList(item.id);
                        }}
                        className={`${
                          pastActive === item.id
                            ? "text-sm text-brnd-red"
                            : "text-[#404040] text-sm"
                        }`}
                      >
                        {item.sub_category_name}
                      </li>
                    ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {pastUpcomingEvent === 1 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-4">
            {upcomingEvent &&
              upcomingEvent.map((item) => {
                return <UpcommingEventCard key={item.id} data={item} />;
              })}
          </div>
        ) : (
          <>
            <div className="grid  sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-4">
              {pastEvent &&
                pastEvent.map((item) => {
                  return <PastEvent data={item} />;
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Event;

const EventCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate("/events/gmat-focus-edition");
        }}
        className="flex flex-col border border-brnd-gray rounded-xl overflow-hidden relative cursor-pointer"
      >
        <img
          className="rounded-t-xl"
          src="assets/images/event-img.png"
          alt=""
        />
        <div className="flex flex-col gap-y-3 p-4">
          <p className="text-sm font-thin">Boarding School Series</p>
          <p className="text-md font-bold">
            MEET REPRESENTATIVES FROM LEADING BRITISH BOARDING SCHOOLS
          </p>
          <p className="texd-md">
            Exclusive one-on-one interactions in Mumbai and New Delhi by
            appointment only. Meet representatives from Bromsgrove School,
            Brighton College and Cheltenham College and explore their unique
            programmes. Get all your questions answered before deciding whether
            a boarding school education is right for your family.
          </p>
        </div>
        <div className="flex justify-end py-5 px-4 bg-brnd-gray">
          <button
            className="capitalize font-bold text-brnd-black"
            type="button"
          >
            register now
          </button>
        </div>

        <img
          className="absolute top-5 left-5"
          src="assets/images/frame.png"
          alt=""
        />
        <div className="absolute top-6 left-6 text-brnd-white">
          <p className="font-bold">
            14 <sup>th</sup>
          </p>
          <p>SEP</p>
        </div>
      </div>
    </>
  );
};

const UpcommingEventCard = (props) => {
  const navigate = useNavigate();
  // const event_short_description = props && props.data.event_short_description.slice(0,100)
  // console.log(event_short_description , 'short ')
  const date = new Date(props.data.event_date);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
  });
  const formattedMonth = date.toLocaleDateString("en-GB", {
    month: "long",
  });

  const nth = function (formattedDate) {
    if (formattedDate > 3 && formattedDate < 21) return "th";
    switch (formattedDate % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  console.log(props.data, "card data");
  return (
    <>
      {/* {process.env.REACT_APP_SERVER_IMAGE_URL+props.data.event_thumbnail_image} */}
      <div
        onClick={() => {
          navigate(`/events_details/${props.data.event_url}`, {
            state: props.data,
          });
        }}
        className="relative cursor-pointer shadow-lg flex flex-col  justify-between items-center   border border-b-2 border-brnd-black/10  rounded-[10px] overflow-hidden"
      >
        <div className=" ">
          <p className="object-cover ">
            <img
              className="w-screen "
              src={
                process.env.REACT_APP_SERVER_IMAGE_URL +
                props.data.event_thumbnail_image
              }
              alt="event-header"
            />
          </p>
          <img
            className="absolute top-5 left-5"
            src="/assets/images/frame.png"
            alt=""
          />
          <div className="absolute top-6 left-8 text-brnd-white">
            <p className="font-bold">
              {formattedDate}
              <sup>{nth()}</sup>
            </p>
            <p>{formattedMonth}</p>
          </div>
        </div>
        <div className=" border-brnd-black/20 w-full  flex flex-col justify-between "></div>
        <div className="p-4 flex flex-col gap-2">
          <p className="text-[#404040] text-sm">
            {props.data.event_categories &&
              props.data.event_categories.sub_category_name}
          </p>
          <p className="text-lg font-bold">{props.data.event_title}</p>
          <p className="text-[#404040] text-sm">
            {props && props.data.event_short_description}
          </p>
        </div>
        <div className="w-full flex justify-end bg-brnd-gray py-5 px-4 ">
          <p className="capitalize text-xl  font-bold ">Register now</p>
        </div>
      </div>
    </>
  );
};

const PastEvent = (props) => {
  const [pastEventVideoModal, setpastEventVideoModal] = useState(false);

  const PastEventVideoModalTrigger = () => {
    setpastEventVideoModal(!pastEventVideoModal);
  };

  console.log(
    process.env.REACT_APP_SERVER_IMAGE_URL + props.data.event_thumbnail_image,
    "past"
  );

  const date = new Date(props.data.event_date);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
  });
  const formattedMonth = date.toLocaleDateString("en-GB", {
    month: "long",
  });
  const formattedYear = date.toLocaleDateString("en-GB", {
    year: "numeric",
  });

  const nth = function (formattedDate) {
    if (formattedDate > 3 && formattedDate < 21) return "th";
    if (formattedDate === 1 || 21) return "st";
    if (formattedDate === 3 || 23) return "rd";
    if (formattedDate === 2 || 22) return "nd";

    // switch (formattedDate <= 3) {
    //   case 1:  return "st";
    //   case 2:  return "nd";
    //   case 3:  return "rd";
    //   default: return "th";
    // }
  };

  return (
    <>
      <div className=" cursor-pointer   shadow-lg flex flex-col justify-start items-start border border-b-2 border-brnd-black/10  rounded-[10px] ">
        {/* <div className='relative'>
                    <img  className='' src={props.data.event_thumbnail_image} alt="event-header" />
                    <img className='absolute top-3 left-3 w-32 h-10' src="assets/images/frame.png" alt="" />
                    <div className='absolute top-3 left-3 text-brnd-white'>
                        
                        <p className='font-bold ml-3 mt-2 '>{formattedDate}</p>
                    </div>
                </div> */}
        <div className="relative ">
          <img
            className="rounded-t-lg w-screen "
            src={
              props &&
              process.env.REACT_APP_SERVER_IMAGE_URL +
                props.data.event_thumbnail_image
            }
            alt="event-header"
          />
          {/* <img className='absolute top-5 left-5 w-28 h-14 ' src="/assets/images/frame.png"  alt="" /> */}
          <img
            className="absolute top-5 left-5 h-20"
            src="/assets/images/frame.png"
            alt=""
          />

          <div className="absolute top-5 left-9 space-y-0 text-brnd-white">
            <p className="font-bold text-center">
              {formattedDate}
              <sup>{nth()}</sup>
            </p>
            <p>{formattedMonth}</p>
            <p>{formattedYear}</p>
          </div>
          {/* <div className='absolute top-6 left-10 flex flex-col justify-start items-center  text-brnd-white'>
                        <p className='font-bold'>{formattedDate}<sup className='mr-1'>th</sup>{formattedMonth}</p>
                       <p className='font-bold' >{formattedYear}</p>
                    </div> */}
        </div>
        <div className="border-b border-brnd-black/20 w-full h-1"></div>
        <div className="p-4 flex flex-col gap-2 justify-start items-start">
          <p className="text-brnd-black/50 text-md">
            {props.data.event_categories &&
              props.data.event_categories.sub_category_name}
          </p>
          <p className="text-lg text-left capitalize font-semibold">
            {props.data.event_title}
          </p>
        </div>
        <div
          onClick={() => setpastEventVideoModal(true)}
          className="w-full h-full flex justify-end items-end bg-brnd-gray py-5 px-4 "
        >
          <p className="capitalize text-xl   font-bold ">Watch Now</p>
        </div>
      </div>
      <PastEventVideoModal
        video={props.data}
        active={pastEventVideoModal}
        Handler={PastEventVideoModalTrigger}
      />
    </>
  );
};
