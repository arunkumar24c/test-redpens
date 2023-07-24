import React, { useEffect, useRef } from 'react'
import TestimonalCard from '../../Elements/TestimonalCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchData from '../../CustomHooks/useFetchData';




function Testimonial() {

   const {
      data: testimonialdetails,
      
  } = useFetchData("/get-home-testimonial", "get", []);

    const testimonialData = testimonialdetails && testimonialdetails.data
 

    console.log(testimonialData)

  const TestimonialData = [
    {
      name: "Nandita",
      university: "London Business School",
      img:"/assets/testimonial/london.png",
      aditional_text: "Class of 2024",
      content: "The entire team at The Red Pen was extremely professional since the day I signed up with them. Their professionalism was matched only by their willingness to go above and beyond when it came to helping aspiring candidates put their best foot forward. They were able to make sense of the jumbled thoughts and ideas I shared with them and helped me craft applications that I was proud of. I received multiple MBA admits (with sizeable scholarships) in the programs I applied for. Signing up with The Red Pen early in my application journey is probably one of the smartest things I did. Thank you so much to the team for their endless support! ",

    },
    {
      name: "Saurabh",
      university: "Harvard Business School",
      img:"/assets/testimonial/Harvard.png",
      aditional_text: "Class of 2024",
      content: "The Red Pen has a fantastic leadership team. They are as dedicated and committed to the application process as you are. They will push you to deliver exceptional results and support you every step of the way. Their team of experts work around the clock, answering all queries and providing application support. They helped me greatly with storyboarding, essay writing and interview preparation. I got admitted to HBS and Kellogg and would strongly recommend their services. ",

    },
    {
      name: "Dhruv",
      university: "Rotman School of Management",
      img:"/assets/testimonial/Rotman.png",
      aditional_text: "Class of 2024",
      content: "I had a great experience working with The Red Pen for my MBA applications! Initially, I was quite confused about what I wanted from the MBA. However, the team provided immense guidance and structure to my journey - to the point where I could clearly articulate my goals and career progression. Their meticulous essay edits forced me to narrow my focus and bring out the best insights from my professional and academic experience. Refining my career goals and going through multiple rounds of feedback was certainly challenging, but The Red Pen really knows what they're doing. Having secured offers from 2 top MBA programs, I strongly recommend their services to anyone looking to start or improve their applications. Thank you again to the team for their amazing support during the whole process!",

    },
    {
      name: "Siddharth",
      university: "Darden School of Business",
      img:"/assets/testimonial/Darden.png",
      aditional_text: "Class of 2024",
      content: "My experience with the Red Pen for US MBA applications was great! I used their comprehensive services for Round 1 of the 21-22 cycle and received an admit offer from my dream school (with a full-tuition scholarship), plus other admits and interview invites. They have a well-structured process, spending a lot of time getting to know you and your story and then helping you structure those according to each school's essay prompts. They use an online system that's easy to navigate and saves a lot of confusion between draft versions. Coming from a non-traditional background in an over-represented demographic and targeting top US B-Schools, I was quite anxious about how this would turn out. But, The Red Pen provided me with immense support throughout the process and helped me with countless edits on the most abstract essays, even going over each detail of the online application forms. I highly recommend their MBA services.",

    },
    {
      name: "Abhishek ",
      university: "The Wharton School",
      img:"/assets/testimonial/Wharton.png",
      aditional_text: "Class of 2021",
      content: "The Red Pen had a very structured approach, with a specialist for each part of the application. Penning down my goals and how a business school fit in those was not an easy task for me. My lead consultant took the time to understand my story, reviews and refined the essays and helped me portray my story in a compelling manner. The practice Wharton Team-Based Discussion was also something I benefited from. I was quite anxious as group discussion was not really my forte. The Red Pen arranged a mock session with the shortlisted students and provided a flavour of the actual session, which helped soothe my nerves, and give my best shot at the actual TBD. I would definitely recommend The Red Pen’s services to all students applying to business schools..",

    },
    {
      name: "Nikita",
      university: "Columbia Business School",
      img:"/assets/testimonial/Columbia.png",
      aditional_text: "class of 2021",
      content: "As someone who has been brought up in a traditional environment, going to college was a great experience which allowed me to develop an entrepreneurial spirit. After my undergraduate degree, I planned to start an e-commerce platform to sell groceries but had several troubles along the way, including a lack of market research and competitor awareness. This led us to shift to the B2B market, where we provided groceries to restaurants and were relatively successful. However, this experience drove me to pursue a formal business education, since I realised a strong industry network and quality work experience is important for an entrepreneur. Since I come from an unconventional background, several people suggested against applying to top business schools in the US, but I was determined to share my story with the best in the world. The team-based approach, as well as my elder brother’s admission to an M7 business with The Red Pen, was why I chose to work with them. From building an impressive resume and self-reflecting for essays to identifying the right people for recommendations and preparing for interviews, I worked with experts from The Red Pen team and finally was able to present a strong case to the admission committee. Finally, I got into Columbia Business School, which was my first choice, and received two scholarships from the school that cover over 85% of my tuition fee. I cannot thank the team enough for being extremely supportive and patient and for helping me present my story well. ",

    },
    {
      name: "Sulabh ",
      university: "Kelley School of Business",
      img:"/assets/testimonial/Kelley.png",
      aditional_text: "Class of 2021",
      content: "I started my MBA application process with The Red Pen in October. Since I was slightly late in the application process, there were troubles in the beginning but the process turned out to be extremely smooth in the end. I thank the team for their professional services and for giving me an exceptional lead consultant. The team helped me carve our my story well, gave me great insights on my letters of recommendation and worked with me on my resume. Thank you for all your services The Red Pen and all the best for your future endeavours!",

    },
    {
      name: "Prasad",
      university: "New York University",
      img:"/assets/testimonial/nyu.png",
      aditional_text: "class of 2022",
      content: "During my time working with The Red Pen, what stood out to me was the team-based approach. I received inputs from multiple people which helped me fine-tune my application. My lead consultant guided me throughout the process and inspired me to think big. Through the brainstorming session, my consultant helped me reflect on my experiences, bring out my personality and the unique elements of my story, enabling me to dramatically improve my essays. Overall, the process was methodical and streamlined",

    },
    {
      name: "Prashant",
      university: "HEC Paris",
      img:"/assets/testimonial/HEC.png",
      aditional_text: "class of 2022",
      content: "I would like to extend my heartfelt thanks to The Red Pen team for enlightening me during my MBA application process. Confirming a consultant was a big decision for me, since a lot of time, effort and money were at stake. After speaking to multiple consultants, my goal and ambition were rightly captured by The Red Pen. Due to their experience, I was encouraged to aim for the best schools and not settle. My lead consultant diligently streamlined various steps of MBA applications process. Their detailed GTKY session, where they uncovered every minute detail of my personal and professional career so far, was a unique experience for me. All these details were later aptly used in my MBA applications. The Red Pen also took me through several mock interviews before going for the final interview. I have learned a lifelong lesson on how to best present myself, not just as an MBA applicant, but for the entirety of my career.",

    },
    {
      name: "Venkatraghavan",
      university: "Stern School of Business",
      img:"/assets/testimonial/Stern.png",
      aditional_text: "class of 2022",
      content: "Navigating the MBA application process can be very intimidating and exhausting. Working with The Red Pen provided me with the support I needed to get through it. Right from helping me shortlist my target schools, to crafting my application strategy and answering my numerous questions, The Red Pen was extremely proactive and gave me candid feedback at every step of the process. I would not have been able to produce an application of such quality without their guidance, and I am certain that my admission to Stern would not have been possible without them. I owe The Red Pen a big thank you for all their help in getting me here.",

    },
  ]

  const slider = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 8000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='Container-wrapper mt-5 '>
        <p className='font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-center mb-3'>TRP Testimonials</p>
        <p className='text-md  text-center'>Here’s what our applicants have to say</p>

        <div className='mt-5  relative'>
          <Slider ref={slider} {...settings}>
            {testimonialData && testimonialData.map((item, index) => (

              <TestimonalCard key={index}  name={item.name} university={item.title}  content={item.description} />
            ))}

          </Slider>


          <ArrowNext  Handler={() => { slider?.current?.slickNext() }} />
          <ArrowPrev Handler={() => { slider?.current?.slickPrev() }} />

        </div>

      </div>
    </>
  )
}

export default Testimonial



const ArrowNext = (props) => {
  return (
    <>
      <div onClick={props.Handler} className='cursor-pointer absolute inset-y-1/2  -right-4 w-8 h-8 bg-brnd-dark-blue rounded-full flex justify-center items-center'>
        <img src="assets/svg/right-arrow.svg" alt="arrow" />

      </div>
    </>
  )
}

const ArrowPrev = (props) => {
  return (
    <>
      <div onClick={props.Handler} className='cursor-pointer absolute inset-y-1/2  -left-4 w-8 h-8 bg-brnd-dark-blue rounded-full flex justify-center items-center'>
        <img src="assets/svg/left-arrow.svg" alt="arrow" />
      </div>
    </>
  )
}