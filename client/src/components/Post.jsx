import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Filterlist from './Filterlist';


const Post = ({ movies }) => {
    const [searchTitle, setSearchTitle] = useState("");
    const [filterTextValue,setFilterTextValue] = useState("all")
    let filterMovieList = movies.filter((prod)=>{
        console.log(prod.subcatogory)
if(filterTextValue=="movies"){
    return prod.subcatogory == "movies"
}
else if(filterTextValue=="series"){
return prod.subcatogory == "series"
}
else{
    return movies
}
    })
    const onFilterValueSelected = (filterValue) =>{
        setFilterTextValue(filterValue)
//console.log(filterValue)
    }
    if (Array.isArray(movies)){
        return (
            <div>
                <input type="text" placeholder='enter movies to search' onChange={(e)=>setSearchTitle(e.target.value)} />
               <Filterlist filterValueSelected={onFilterValueSelected} />
                <hr />
                {
                    (Array.isArray(movies))? <>
                    {
                                 filterMovieList.filter((value)=>{
                                    if(searchTitle==""){
                                        return value
                                    }
                                    else if(value.name.toLowerCase().includes(searchTitle.toLowerCase())){
                                        return value
                                    }
                                 }). map((res) => {
                    let base64String = btoa(new Uint8Array(res.img.data.data).reduce(function (data, byte) {
                        return data + String.fromCharCode(byte);
                    }, ''));
                    return <div style={{display:"flex", justifyContent:"center"}}>
                    <div>
                         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`data:image/png;base64,${base64String}`} />
          <Card.Body>
            <Card.Title>{res.name}</Card.Title>
            <Card.Text>
             {res.desc}
            </Card.Text>
            <Card.Title>rating{res.rating}</Card.Title>
            <Card.Title>votes{res.votes}</Card.Title>
          </Card.Body>
        </Card>
        </div>
        </div>
                   
                })
    
                    }
                    </>: <h1>data is loading</h1>
                }
            </div>
        )
    
    }
   else {
    return <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
   }

    // if (Array.isArray(movies)) {

    //     return (
            
    //         movies.map((res) => {
    //             let base64String = btoa(new Uint8Array(res.img.data.data).reduce(function (data, byte) {
    //                 return data + String.fromCharCode(byte);
    //             }, ''));
    //             return <div style={{display:"flex", justifyContent:"center"}}>
    //             <div>
    //                  <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={`data:image/png;base64,${base64String}`} />
    //   <Card.Body>
    //     <Card.Title>{res.name}</Card.Title>
    //     <Card.Text>
    //      {res.desc}
    //     </Card.Text>
    //     <Card.Title>rating{res.rating}</Card.Title>
    //     <Card.Title>votes{res.votes}</Card.Title>
    //   </Card.Body>
    // </Card>
    // </div>
    // </div>
               
    //         })

    //     )
    // }
    // //localStorage.setItem("movies",JSON.stringify(movies))

   

   
}



const Imagetag = ({ res }) => {
   
    return <img style={{ width: "300px" }}  alt="" />

}

export default Post