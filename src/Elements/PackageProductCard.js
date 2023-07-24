import React, {useState, useEffect} from 'react'

const PackageProductCard = (props) => {
  const [regionName, setregionName] = useState('UA')

    // const product_price_inr = 15000;
    // const product_price_usd = 32

  
  
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
  const region = regionName && regionName
     console.log(props)
    const {payment_link_inr,payment_link_usd, product_image, product_name, product_price_inr, product_price_usd} = props
  return (
   <>

{/* onClick={()=>{navigate(`/shopdetail/${product_url}`,{state:props})}}  */}
   <div className=' cursor-pointer border-brnd-border rounded-xl flex  flex-col shrink-0 justify-between shadow-md hover:shadow-2xl'>
                   
                    
                  
                    <div className='p-5 flex  flex-col gap-y-5'>
                     {/* <p style={{background: `${bg_color}`, color: `${text_color}`}} className={`py-2 px-3 w-fit rounded-md text-xs `}>{props.shop_categories.category_name}</p> */}
                        
                   <img className='h-20 w-20' src={process.env.REACT_APP_SERVER_IMAGE_URL + product_image} alt="image" />
                   <p className='font-bold text-xl'>{product_name}</p>
                   <p className='font-regular text-xl'>{region && region === 'India'  ? `₹${product_price_inr.toLocaleString("en-US")}` : `$${product_price_usd.toLocaleString("en-US")}` }</p> 

                   {/* <p className=' text-[14px]'>{product_short_description}</p> */}
                   </div>
                   <a href={regionName && regionName === 'India'  ? `${payment_link_inr}` : `${payment_link_usd}`} target='_blank' ><div className=' rounded-b-xl bg-brnd-gray p-5 flex justify-between shrink-0 items-center  '>

                   {/* { region && region === 'India'  ?  */}
                   <div>
                   {/* <p className='text-xs'>{region && region === 'India'  ? "(Exclusive of GST)": "(Inclusive of taxes)"}</p> */}
                   </div>
                   {/* // <p className='font-regular'>$ {usd_product_price.toLocaleString()}</p> */}

                   {/* // } */}

                   <p  className='font-bold cursor-pointer'>Buy Now</p>
               </div></a>

           </div>
   
   </>
  )
}

export default PackageProductCard