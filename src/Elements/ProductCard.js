import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetchData from '../CustomHooks/useFetchData';
import LocalStorage from '../Storage/LocalStorage';



function ProductCard(props) {

    const {product_name,product_image ,product_price_inr ,region, product_price_usd, product_short_description   , product_url, key,pass_code_protection  } = props

    console.log(props, 'props')
    // const {
    //     data: details,
    //     loading,
    //     error,
    //     refetch,
    // } = useFetchData("/get-shop-data", "post", []);
    
//    console.log(props, "card data")
    const navigate = useNavigate();
    const bg_color =props && props.shop_categories.chip_background_colors.color_code
    const text_color =props && props.shop_categories.chip_text_colors.color_code

    // api key
    

      

  return (
    <div onClick={()=>{navigate(`/shopdetail/${product_url}`,{state:props})}} className=' cursor-pointer border-brnd-border rounded-xl flex  flex-col shrink-0 justify-between shadow-md hover:shadow-2xl'>
                   
                    
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="80" height="71" viewBox="0 0 80 71" fill="none">
                        <path d="M16.7542 46.8728C23.0077 46.8728 28.0771 41.8498 28.0771 35.6537C28.0771 29.4575 23.0077 24.4346 16.7542 24.4346C10.5008 24.4346 5.4314 29.4575 5.4314 35.6537C5.4314 41.8498 10.5008 46.8728 16.7542 46.8728Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
                        <path d="M31.5509 68.7998C31.5509 67.3975 31.3364 58.6432 30.9504 57.3683C29.1919 51.2912 23.5305 46.8291 16.7969 46.8291C10.0632 46.8291 4.10159 51.4612 2.47178 57.7932C2.17156 58.9406 2 67.5674 2 68.7998H31.5509Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
                        <path d="M63.2463 24.6911C69.4997 24.6911 74.5691 19.6682 74.5691 13.472C74.5691 7.27589 69.4997 2.25293 63.2463 2.25293C56.9929 2.25293 51.9235 7.27589 51.9235 13.472C51.9235 19.6682 56.9929 24.6911 63.2463 24.6911Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
                        <path d="M78 46.6182C78 45.2158 77.7855 36.4615 77.3995 35.1866C75.641 29.1096 69.9796 24.6475 63.246 24.6475C56.5123 24.6475 50.5936 29.3221 48.9209 35.6541C48.6207 36.8015 48.4491 45.4283 48.4491 46.6607H78V46.6182Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
                        <path d="M46.4333 67.1014H63.246V50.8252" stroke="#D82129" stroke-width="4" stroke-miterlimit="10" />
                        <path d="M32.6229 3.56836H16.7538V19.2496" stroke="#D82129" stroke-width="4" stroke-miterlimit="10" />
                    </svg> */}
                     <div className='p-5 flex  flex-col gap-y-5'>
                      <p style={{background: `${bg_color}`, color: `${text_color}`}} className={`py-2 px-3 w-fit rounded-md text-xs `}>{props.shop_categories.category_name}</p>
                         
                    <img className='h-20 w-20' src={process.env.REACT_APP_SERVER_IMAGE_URL + product_image} alt="image" />
                    <p className='font-bold text-xl'>{product_name}</p>
                    <p className=' text-[14px]'>{product_short_description}</p>
                    </div>


                <div className=' rounded-b-xl bg-brnd-gray p-5 flex justify-between shrink-0 items-center  '>

                    {/* { region && region === 'India'  ?  */}
                    {/* .toLocaleString("en-US") */}

                     {pass_code_protection  ?  <>
                        <div>
                      <p className='font-regular '> {region && region === 'India'  ? `₹${new Intl.NumberFormat().format(170000)}` : `$${new Intl.NumberFormat().format(27000)}` }</p>
                      <p className='text-xs '>onwards</p>
                      {/* {region && region === 'India'  ? "(Exclusive of GST)": "(Inclusive of taxes)"} */}
                      </div>
                     <p  className='font-bold cursor-pointer'>Learn More</p>
                       
                     </> : 
                     <>
                       <div>
                    <p className='font-regular'> {region && region === 'India'  ? `₹${new Intl.NumberFormat().format(product_price_inr)}` : `$${product_price_usd}` }</p>
                    <p className='text-xs'>{region && region === 'India'  ? "(Exclusive of GST)": "(Inclusive of taxes)"}</p>
                    </div>
                   <p  className='font-bold cursor-pointer'>Buy Now</p>
                     </>
                     }
                   
                </div>

            </div>
  )
}

export default ProductCard