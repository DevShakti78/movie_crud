import React,{useState,useEffect} from 'react'

const Showmovies = () => {

    const [value,setValue] = useState({});
     
    useEffect(() => {
        try{
            fetch("http://localhost:3000/")
            .then(res=>res.json())
            .then(data=>console.log(data)) 
        }
        catch(err){
console.log(err)
        }
       
     }, [])
     

  return (
    <div>Showmovies</div>
  )
}

export default Showmovies