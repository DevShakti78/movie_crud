import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginations = ({postPerPage,totalPost,paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumbers.push(i)
    }
console.log(pageNumbers)
  return (
   
   <div>
   <ul>{
    
pageNumbers.map((pagevalue)=>{
    return (
        <li>
            <a onClick={()=>paginate(pagevalue)} href="#!">{pagevalue}</a>
        </li>
    )
})
   }
   </ul>

    
    </div>

  )
}

export default Paginations