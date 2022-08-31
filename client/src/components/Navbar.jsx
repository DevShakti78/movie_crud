import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", backgroundColor:"yellowgreen"}}>
        <div> <h3>Movie app</h3> </div>
        <div>About</div>
        <div>Login</div>
        <div>Logout</div>
    </div>
  )
}

export default Navbar