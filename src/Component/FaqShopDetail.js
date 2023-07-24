import React, {useState} from "react";

const FaqShopDetail = (props) =>{
    const [faq, setFaq] = useState(false)

    return(
        <>
         <div onClick={()=>{setFaq(!faq)}} className='flex justify-between items-center'>
              <p className='text-lg font-bold'>{props.question}</p>
              {
                faq ? 
                <FaqLess  />   :
                 <img src="/assets/svg/plus.svg" className='' alt="" /> 
              }
             
                 
         </div>
              {faq && <p>{props.answer}</p>  }
                   
                
             
      <p className='my-3 border-b border-[#D9D9D9]' ></p>
        </>
    )
}

export default FaqShopDetail


const FaqLess = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM14.25 9.25C14.6642 9.25 15 9.58579 15 10C15 10.4142 14.6642 10.75 14.25 10.75C9.25295 10.75 11.211 10.75 5.75 10.75C5.33579 10.75 5 10.4142 5 10C5 9.58579 5.33579 9.25 5.75 9.25C11.211 9.25 9.25295 9.25 14.25 9.25Z" fill="#212121" />
            </svg>
        </>
    )
}