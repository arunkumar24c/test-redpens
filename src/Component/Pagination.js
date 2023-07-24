import React from 'react'

function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    console.log(pageNumbers)
  return (
   <>
     <ul className='flex gap-5'>
        {pageNumbers.map((number)=>{
            return(
            <>
           <li className='' key={number}>
              <a onClick={()=>paginate(number)} href="">
                {number}
                
              </a>
           </li>
           </>
           )
        })}
     </ul>
   </>
  )
}

export default Pagination