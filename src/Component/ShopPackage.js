import React, { useEffect, useState } from 'react'
import PackageProductCard from '../Elements/PackageProductCard'
import { useNavigate } from 'react-router-dom';
import { ScrolltoTop } from "../Utility";
import axios from 'axios';
import { useLocation } from 'react-router-dom';



const ShopPackage = (props) => {
  const [items, setItems]= useState([])
  // console.log(props && props.state, 'shoppackage id')
    
  let location = useLocation();
  console.log(location.state, 'location')
  // console.log(props.location.state, 'packge id' )  
  useEffect(()=>{
      ScrolltoTop()
      getShopData([]);
     

  },[])


  const getShopData = async (id) => {
    const payload = {
      "shop_product_id": location.state
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_BASE_URL}/get-pass-code-products`, payload)
      .then((response) => {
        setItems(response.data.data);
        // setMyArray(response.data)
        // console.log(response.data.data, " Filtes");
        // console.log(location.state);

      });
  };
  console.log(items)
  const navigate = useNavigate()

  return (
   <>
     <div className='px-3 sm:px-5 md:px-12 lg:px-20 flex justify-center flex-col items-center'>
        <p className='text-xl md:tet-2xl lg:text-3xl text-brnd-dark-blue my-8 font-bold'>Comprehensive MBA Package</p>
        <div class="grid sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-4 md:pl-5 ">
          {items && items.map((values)=>{
            return  <PackageProductCard {...values} />

          })}
        
        </div>

        <div onClick={()=>navigate('/shop')} className='flex gap-3 my-8 items-center cursor-pointer'>
          <img src="/assets/svg/back.png" className='h-4' alt="" />
          <p className='font-bold text-lg'>Back</p>
        </div>
     </div>
   
   </>
  )
}

export default ShopPackage