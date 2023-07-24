import React, { useEffect, useState } from 'react'
import RelatedProductCard from '../Elements/RelatedProductCard'
import TestimonalCard from '../Elements/TestimonalCard'
import { ScrolltoTop } from '../Utility'
import useFetchData from '../CustomHooks/useFetchData'
import { useLocation, useParams } from 'react-router-dom'
import FaqShopDetail from '../Component/FaqShopDetail'
import axios from 'axios'
import PassCodeModal from '../Modal/PassCodeModal'


function ShopDetail() {
  const [relatedData, setRelatedData] = useState(null)
  const [regionName, setregionName] = useState('UA')
  const [passcodeModal, setPasscodeModal] = useState(false)

   

    const { product_url } = useParams();
    
    // console.log(state, "detail-data")
  //  const { product_name,product_image, product_price_inr , product_price_usd,payment_link_inr,  payment_link_usd, product_description , key } =  state

  const PasscodeModalHandler = () => {
    setPasscodeModal(!passcodeModal)
  }
  
   
      // Document title
      document.title='The Red Pen - Shop Detail'
      
    
    //   const MyStyle ={
    //     backgroundImage:'/assets/images/blog-detail-background.png'
    //   }



    //   const {
    //     data: shopdetail,    
    // } = useFetchData("/get-shop-data", "get", {
    //     "categories_id":[]
    //     });
        
    //     const shopdata =  shopdetail && shopdetail
    //     console.log(shopdata, "related service")

        // const singledata= shopdetail && shopdetail.data[1]

        // const {produt_name} = singledata
        //  console.log(shopdata)
       
        //  const {product_image ,  product_name , product_price  } =  shopdetail && shopdetail.data;

      useEffect(()=>{
          ScrolltoTop()
          getDetails();
      },[])

      
    useEffect(() => {
      fetch('https://api.ipdata.co/?api-key=19db8459e7c801190bb931122a6c9dbf7ea08caac7a2fb187fe64973')
        .then(function (response) {
          return response.json();
        })
        .then(function (payload) {
          console.log(payload.country_name)
          setregionName( payload.country_name)
        });
      
    },[])

      const getDetails = async()=>{

        const result = await axios.get(`${ process.env.REACT_APP_SERVER_BASE_URL}/get-shop-data/${product_url}` );
        setRelatedData(result.data.data)
        console.log(result.data.data, "related-service-data")
       }

       console.log(relatedData && relatedData.id, 'id')

      //  var region = relatedData && relatedData.key;


      function loadScript(src) {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
          document.body.appendChild(script);
        });
      }


      //PAYMENT ON SUBMIT

      // {relatedData && relatedData.pass_code_protection ?  <>
      
      // ''
      
      // </>   : '' }
  const onSubmit = async (data, e) => {
    // console.log(relatedData && relatedData.payment_link_inr)
    // console.log(payment_link_inr)
    const res = await loadScript(
      
      regionName && regionName === 'India'  ?  relatedData && relatedData.payment_link_inr :  relatedData && relatedData.payment_link_usd
        
      // "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const tot = regionName && regionName === 'India'  ? relatedData&& relatedData.product_price_inr.toLocaleString("en-US") : relatedData && relatedData.product_price_usd  * 100;

    const requestBody = {
      payment: tot,
    };
    const result = await axios.post(`${ process.env.REACT_APP_SERVER_BASE_URL}/payment`, requestBody);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;



    const options = {
      key: "rzp_test_UB0719RxNvpFO1", // Enter the Key ID generated from the Dashboard
      amount: tot.toString(),
      currency: currency,
      name: "The Red Pen",
      description: "Transaction",
      image: "/assets/svg/logo-btm.svg" ,
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
      
        };

        const result = await axios.post(`${ process.env.REACT_APP_SERVER_BASE_URL}/payment`, data);

        const o_id = await result.data.orderc_id;

        if (result.data.msg === "success") {

          alert("Payment Successfull")
          // toast.success("Order Placed!");

          // const requestBody = {
          //   order_id: o_id,
          // };

          e.target.reset();
   
          //  navigate('/');
        }
      },
      prefill: {
        name: "Java",
        email: "mjavahar56@gmail.com",
        contact: "8098629606",
      },
      notes: {
        address: "",
      },
      theme: {
        color: "#d82228",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

    const faq = JSON.parse(relatedData && relatedData.also_receive)
   console.log(faq, "faq")
    
   const product_image = relatedData && relatedData.product_image

   console.log(relatedData && relatedData, "final")
  return (
    <>
       
      
          <div style={{backgroundImage :"url('/assets/images/shopimage.png')" ,  backgroundRepeat: 'no-repeat', width: "100%"}}  className='bg-center object-cover py-10 '>
        <div className='flex flex-col gap-y-5  md:flex-row lg:flex-row xl:flex-row justify-between items-center Container-wrapper'>
          <div className='bg-brnd-white w-fit rounded-lg  py-5 px-4  flex items-center gap-x-5 md:w-1/3 xl:w-1/3 lg:w-1/3'>
            <img className='h-20 w-20 ' src={process.env.REACT_APP_SERVER_IMAGE_URL + product_image} alt="image" />
            <div className='flex flex-col justify-between space-y-2'>
              <p className='font-bold text-xl'> {relatedData && relatedData.product_name}</p>
              <p>  {relatedData && relatedData.pass_code_protection ? '' : regionName && regionName === 'India'  ? `₹${relatedData && relatedData.product_price_inr.toLocaleString()}` : `$${relatedData && relatedData.product_price_usd.toLocaleString()}` }</p> 
             
            </div>
          </div>
          {relatedData && relatedData.pass_code_protection ? 
        <button type="button" onClick={()=>setPasscodeModal(!passcodeModal)} className='py-3 my-4 mt-8 px-[4.5rem] bg-brnd-red text-brnd-white font-bold whitespace-nowrap rounded-md'>Buy Now</button> : <a href={regionName && regionName === 'India'  ? `${relatedData && relatedData.payment_link_inr}` : `${relatedData && relatedData.payment_link_usd}`} target='_blank' ><button type="button" className='py-3 my-4 mt-8 px-[4.5rem] bg-brnd-red text-brnd-white font-bold whitespace-nowrap rounded-md' > Buy Now</button></a>
      }               </div>
      </div> 
      <div className='Container-wrapper'>
        <div className='flex flex-col gap-y-5 my-5'>
          <p className='font-bold text-xl'>{relatedData && relatedData.product_name}</p>
          <p className='text-sm'>{relatedData && relatedData.product_description}</p>
        </div>
      </div>
       
      {/* {faq && "You will also receive:"  }  */}
      <div className='Container-wrapper  '>
        <p className='text-sm'>{faq && faq.length > 1 ? "You will also receive :" : "" }</p>
      
        <div className='flex mt-3 overflow-x-scroll scrollbar-hide'>
          {faq && faq.map((values=>{
            return(
              <>
              {values.also_content === "" ? "" :  <div className='py-5 bg-[#DCE2E2] px-3 mr-4 flex justify-center items-center'>
             <p className='w-52 px-5 pl-4 text-center  text-sm'>{values.also_content}</p>
              </div>
              }
                </>
            )
          }))}
       

        </div>
        {relatedData && relatedData.pass_code_protection ? 
        <button type="button" onClick={()=>setPasscodeModal(!passcodeModal)} className='py-3 my-4 mt-8 px-[4.5rem] bg-brnd-red text-brnd-white font-bold whitespace-nowrap rounded-md'>Buy Now</button> : <a href={regionName && regionName === 'India'  ? `${relatedData && relatedData.payment_link_inr}` : `${relatedData && relatedData.payment_link_usd}`} target='_blank' ><button type="button" className='py-3 my-4 mt-8 px-[4.5rem] bg-brnd-red text-brnd-white font-bold whitespace-nowrap rounded-md' > Buy Now</button></a>
      } 

      </div>

      <div  className='Container-wrapper '>
        {relatedData && relatedData.faqs.map((values)=>{
          return(
               <>
         
                <FaqShopDetail {...values} />
                </>
                ) })}
        
          
      </div> 

      <div className='Container-wrapper'>
        <p className='font-bold text-2xl my-5'>Related Services</p>
        <div class="max-md:flex-col   my-5 md:px-5 flex w-[100%]  scroll-m-0 scrollbar-hide overflow-x-scroll gap-4">
        {relatedData && relatedData.related_products.map((item)=>{
                 return(
                  <RelatedProductCard onClick={()=>ScrolltoTop()} {...item}  key={item.id} />
               )
           })}
        </div>
        {/* onClick={()=>ScrolltoTop()} */}
      </div>

      
      <PassCodeModal active={passcodeModal} Handler={(PasscodeModalHandler)} value={relatedData && relatedData.id} />
    </>
  )
}

export default ShopDetail

  
// const EventDetailsPage = (props) =>{
   
//   console.log(props)
  

//   return(
//     <>
    
    
//     </>
//   )
// }