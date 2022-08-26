import React, { useState, useEffect } from 'react'
import Post from './Post';
import "./showmovie.css"
import Paginations from './Pagination';

const Showmovies = () => {

  const [movies, setMovies] = useState({});
  const [base, setBase] = useState("")
  const [loading,setLoading] = useState(false);
  const [currentpage,setCurrentpage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(5);
  
  
  // const base64String = btoa(String.fromCharCode(...new Uint8Array(movies.img)));
  // console.log("base64String",base64String)

  useEffect(() => {
    try {
      fetch("http://localhost:2345/getrecords")
        .then(res => res.json())
        .then(data => setMovies(data))

    }
    catch (err) {
      console.log(err)
    }

  }, [])
  // console.log("movies",movies[0].img.data.data)
  // const base64String = btoa(String.fromCharCode(...new Uint8Array(movies[0].img.data.data)));
  // console.log("base64String",base64String)

console.log("Movies",movies)
  // console.log("base",base)
  //get current post
  if (Array.isArray(movies)){
    const indexOfLastPost = currentpage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost  = movies.slice(indexOfFirstPost,indexOfLastPost)
  
    //change page
    const paginate = (pageNumber) =>{
      setCurrentpage(pageNumber)
    }


 return (
  <>
<h1>Movie Detail page</h1>

<Post movies={currentPost}/>
<Paginations postPerPage={postPerPage} totalPost={movies.length} paginate={paginate}/>
</>
 )
 }
}

export default Showmovies