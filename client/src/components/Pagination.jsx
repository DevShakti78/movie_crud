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
   <ul style={{overflow:"hidden"}}>{
    
pageNumbers.map((pagevalue)=>{
    return (
        <li style={{display:"inline",gap:"3px"}}>
            <span><a onClick={()=>paginate(pagevalue)} href="#!">{pagevalue}</a></span>
            
        </li>
    )
})
   }
   </ul>

    
    </div>

  )
}

export default Paginations