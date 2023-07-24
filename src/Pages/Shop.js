import React, { useEffect, useState } from "react";
import ProductCard from "../Elements/ProductCard";
import { ScrolltoTop } from "../Utility";
import useFetchData from "../CustomHooks/useFetchData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../Component/Pagination";
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom'


function Shop() {
  const itemsPerPage = 9;



  const location = useLocation();
  const category_id = location.state;




  const navigate = useNavigate();

  const [slectedFilter, setFilter] = useState(1);
  const [myArray, setMyArray] = useState([]);
  const [items, setItems] = useState([]);
  const [regionName, setregionName] = useState('UA')
    const [slectedFilters, setFilters] = useState(null);


  // const [checked, setChecked] = useState(false)
  // const [colors, setColors] = useState(filter_data1);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

 
  // Document title
  document.title = "The Red Pen - Shop";


  useEffect(() => {
    fetch('https://api.ipdata.co/?api-key=19db8459e7c801190bb931122a6c9dbf7ea08caac7a2fb187fe64973')
      .then(function (response) {
        return response.json();
      })
      .then(function (payload) {
        console.log(payload.country_name)
        setregionName(payload.country_name)
      });

  }, [])


  useEffect(() => {
    ScrolltoTop();
    getShopData([]);


  }, []);

  const getShopData = async (id) => {
    const payload = {
      categories_id: id,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_BASE_URL}/get-shop-data`, payload)
      .then((response) => {
        setItems(response.data.data);
        // setMyArray(response.data)
        // console.log(response.data.data, " Filtes");
        // console.log(location.state);
      });
  };

  const {
    data: details,
    loading,
    error,
    refetch,
  } = useFetchData("/get-shop-category-data", "get", []);



  // const { data: shopdetail } = useFetchData("/get-shop-data", "post", {
  //   categories_id: myArray,
  // });

  const CheckboxHandler = (event) => {
    const arr = myArray; //example array               //new id
    const id = event.target.id;

    if (event.target.checked) {
      arr.push(id);
    } else if (!event.target.checked) {
      arr.splice(arr.indexOf(id), 1);
    }

    setMyArray(arr);
    getShopData(arr)


  }

  useEffect(() => {

    // const arr = myArray;
    // console.log(category_id)

    // if(!arr.includes(category_id)){
    //   arr.push(category_id)
    // }else{
    //   arr.splice(arr.indexOf(category_id), 1);
    // }

    // setMyArray(arr)
    // getShopData(arr);
    setTimeout(() => {
      console.log(category_id)

      if (category_id !== null) {
        const element = document.getElementById(category_id);
        console.log(element);
        element.checked = true;

        const arr = myArray; //example array               //new id
        if (element.checked) {
          arr.push(category_id);
        } else if (!element.checked) {
          arr.splice(arr.indexOf(category_id), 1);
        }
        setMyArray(arr);
        getShopData(arr)
      }
    }, 2000);
  }, [category_id])

  const filterResult = (catItem) => {
    console.log('hai')
    // const arr = myArray; //example array               //new id
    // // console.log(arr);

    // if (!arr.includes(catItem)) {
    //   //checking weather array contain the id
    //   arr.push(catItem); //adding to array because value doesnt exists
    //   setMyArray(arr);
    // } else if(arr.includes(catItem)) {
    //   arr.splice(arr.indexOf(catItem), 1); //deleting
    //   setMyArray(arr);
    // }
    // // console.log(arr);

    // getShopData(arr)

  };

  const filter_data1 = details && details.data.level1;
  //  console.log(filter_data1)
  const filter_data2 = details && details.data.level2;
  //   console.log(shopdetail)
  //   const shopdata =  shopdetail && shopdetail.data
  //      console.log(shopdata)

  if (loading) return <p className="p-5">Loading...</p>;

  
  

  

  function Items({ currentItems }) {
    return <>
      {currentItems &&
        currentItems.map((item) => {
          return <ProductCard {...item} region={regionName} key={item.id} />;
        })}
    </>
  }




  return (
    <>
      <p className="capitalize font-bold text-2xl pt-5 md:py-5 px-4 md:px-12">Shop</p>

      <div className="Container-wrapper my-5">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
          <div className="md:w-60 w-full mx-2">
            <div className="flex flex-col gap-y-2">
              <p className="capitalize font-bold">Filters</p>

              {/* <div  className='flex gap-3 cursor-pointer my-2' >
                                <input type="checkbox" name="" id="" className='border-brnd-gray  accent-brnd-red' />
                                <p className=' shrink-0 text-sm '></p>
                                </div> */}
              <ul className="mt-5 flex flex-col text-[#404040]  w-60   gap-y-5 overflow-x-auto  mb-3 scrollbar-hide ">
                {filter_data1 &&
                  filter_data1.map((list) => (
                    <li className="">
                      <div
                        className="flex text-sm  justify-start items-center gap-3  group cursor-pointer"
                      >

                        <input onChange={CheckboxHandler}
                          type="checkbox"
                          id={list.id}
                          className="rounded  border-slate-500  accent-brnd-red hidden xl:block lg:block" />

                        <label
                          className={
                            slectedFilter === list.id
                              ? "text-brnd-red whitespace-nowrap"
                              : "cursor-pointer hover:text-brnd-red  whitespace-nowrap"
                          }
                          htmlFor={list.id}
                        >
                          {list.category_name}
                        </label>
                        {/* <div className= { slectedFilter === list.id ? 'visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' : 'invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-3 xl:w-3 bg-brnd-red rounded-full' }></div> */}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            {/* <hr className="border-brnd-border mt-3 w-60 " /> */}

            <ul className="mt-2 flex flex-col text-[#404040] w-60 lg:flex-col xl:flex-col  gap-y-5 overflow-x-auto  mb-3 scrollbar-hide ">
              {filter_data2 &&
                filter_data2.map((list) => (
                  <li className="">
                    <div

                      id="select"
                      className="flex text-sm  justify-start items-center gap-3  group cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name=""
                        onChange={CheckboxHandler}
                        className="rounded-none border-slate-500 accent-brnd-red hidden xl:block lg:block"
                        id={list.id}
                      />
                      <label
                        className={
                          slectedFilter === list.id
                            ? " whitespace-nowrap"
                            : "cursor-pointer hover:text-brnd-red whitespace-nowrap"
                        }
                        htmlFor={list.id}
                      >
                        {list.category_name}
                      </label>
                      {/* <div className= { slectedFilter === list.id ? 'visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' : 'invisible group-hover:visible  h-1 w-full sm:w-3 md:w-3 lg:w-e xl:w-3 bg-brnd-red rounded-full' }></div> */}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div class="grid sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 gap-4 md:pl-5">
            <Items currentItems={currentItems} />
          </div>
        </div>




        <div onClick={ScrolltoTop()} className="flex justify-center  w-full my-7">
          <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            containerClassName={"shop-pagination font-bold text-[#404040]	space-x-3"}
            activeClassName={"shop-pagination-active underline underline-offset-4 decoration-2	"}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
}


export default Shop;

// const ProductCard = () => {
//     return (
//         <div className='border border-brnd-border rounded-xl shadow-md hover:shadow-xl'>
//             <div className='p-5 flex flex-col gap-y-5 '>
//                 <p className='py-2 px-3 bg-brnd-title-clr-1 text-brnd-white w-fit rounded-xl text-sm'>Pre-College Advising </p>
//                 {/* <img src="" alt="" />
//              */}
//                 <svg xmlns="http://www.w3.org/2000/svg" width="80" height="71" viewBox="0 0 80 71" fill="none">
//                     <path d="M16.7542 46.8728C23.0077 46.8728 28.0771 41.8498 28.0771 35.6537C28.0771 29.4575 23.0077 24.4346 16.7542 24.4346C10.5008 24.4346 5.4314 29.4575 5.4314 35.6537C5.4314 41.8498 10.5008 46.8728 16.7542 46.8728Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
//                     <path d="M31.5509 68.7998C31.5509 67.3975 31.3364 58.6432 30.9504 57.3683C29.1919 51.2912 23.5305 46.8291 16.7969 46.8291C10.0632 46.8291 4.10159 51.4612 2.47178 57.7932C2.17156 58.9406 2 67.5674 2 68.7998H31.5509Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
//                     <path d="M63.2463 24.6911C69.4997 24.6911 74.5691 19.6682 74.5691 13.472C74.5691 7.27589 69.4997 2.25293 63.2463 2.25293C56.9929 2.25293 51.9235 7.27589 51.9235 13.472C51.9235 19.6682 56.9929 24.6911 63.2463 24.6911Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
//                     <path d="M78 46.6182C78 45.2158 77.7855 36.4615 77.3995 35.1866C75.641 29.1096 69.9796 24.6475 63.246 24.6475C56.5123 24.6475 50.5936 29.3221 48.9209 35.6541C48.6207 36.8015 48.4491 45.4283 48.4491 46.6607H78V46.6182Z" stroke="black" stroke-width="4" stroke-miterlimit="10" />
//                     <path d="M46.4333 67.1014H63.246V50.8252" stroke="#D82129" stroke-width="4" stroke-miterlimit="10" />
//                     <path d="M32.6229 3.56836H16.7538V19.2496" stroke="#D82129" stroke-width="4" stroke-miterlimit="10" />
//                 </svg>
//                 <p className='font-bold text-xl'>Mentorship Programme for Middle and High School Students</p>
//                 <p className='mt-2 '>To prepare you for a confident and successful interview experience, our interview specialists conduct a 30-minute team discussion, similar to Wharton’s unique interview style. </p>
//             </div>
//             <div className=' rounded-b-xl bg-brnd-gray p-5 flex justify-between'>
//                 <p className='font-regular'>Rs.35,000/-</p>
//                 <p className='font-bold cursor-pointer'>Buy Now</p>
//             </div>
//         </div>
//     )
// }
