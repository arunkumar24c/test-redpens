import React from "react";

const TestimonalCard = (props) => {
  const TextLimiter = (text) => {
    const string_val = text.substring(0, 500);
    return string_val + "...";
  };

  return (
    <>
      <div className="m-2  bg-brnd-gray py-5 px-5 flex flex-col gap-y-2 items-start rounded-[12px]">
        {/* <img src="assets/images/testi.png" alt="" />
         */}
        {/* <div className='w-14 h-14 bg-[#D9D9D9]'> </div> */}
        {/* <img className='h-16 w-auto' src={process.env.REACT_APP_SERVER_IMAGE_URL + props.img} alt="" /> */}
        <div className="flex flex-col">
          <p className="text-xl font-bold capitalize">{props.name}</p>
          <div className="flex gap-x-1">
            <p className="capitalize text-brnd-black text-sm">
              {props.university}
            </p>
            {/* <p className='capitalize text-brnd-black text-sm'>
                         |
                    </p>
                    <p className='text-brnd-black text-sm capitalize'>{
                    props.additionalText}</p> */}
          </div>
        </div>
        {/* <p className='font-bold text-xl'>Smriti Rani</p> */}
        <p className="text-sm mt-4">{TextLimiter(props.content)}</p>
      </div>
    </>
  );
};
export default TestimonalCard;
