import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
    <>
        <Link to='/'>Home</Link>
        <Link to='/useState'>useState</Link>
        <Link to='/useEffect'>useEffect</Link>
        <Link to='/useContext'>useContext</Link>
    </>
  )
}

export default Navbar