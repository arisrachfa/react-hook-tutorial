import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='App'>
        <h1>Ini Merupakan Halaman Home Tutorial React Hook</h1>
        <p>Pada tutorial kali ini akan mempelejari tentang Hook yang ada di React, seperti:</p>
        <div className='mainPage'>
            <h3>Basic Hook</h3>
            <hr />
            <li>1. useState</li>
            <li>2. useEffect</li>
            <li>3. useContext</li>
            <br/>
            <h3>Aditional Hook</h3>
            <hr />

            <li>1. <Link to='/useCallback'>useCallback</Link></li>
            <li>2. <Link to='/useImperativeHandleSnippet'>useImperativeHandle</Link> </li>
            <li>3. <Link to='/useLayoutEffect'>useLayoutEffect</Link></li>
            <li>4. <Link to='/useMemo'>useMemo</Link></li>
            <li>5. <Link to='/useReducer'>useReducer</Link></li>
            <li>6. <Link to='/useRef'>useRef</Link></li>
        </div>
    </div>
  )
}

export default Home