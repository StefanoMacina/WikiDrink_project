import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import { AiFillHome, AiFillMessage } from 'react-icons/ai'
import { FaPeopleGroup } from 'react-icons/fa6'
import { useGlobalContext } from '../Context'


const Navbar = () => {

    const {isSidebarOpen , setSidebarOpen} = useGlobalContext()
    console.log(isSidebarOpen, setSidebarOpen);


  return (
    <nav className='navbar'>
        <header className='nav-container'>
            <div className='nav-title'>
                <h1>wiki drink</h1>
            </div>
            <ul className='nav-link'>
                <li><Link to='/'><div><AiFillHome/></div><p>home</p></Link></li>
                <li><Link to='/about'><div><FaPeopleGroup/></div> <p>chi siamo</p></Link></li>
                <li><Link to='/contattaci'><div><AiFillMessage/></div><p>contattaci</p></Link></li>
            </ul>
            <div className='nav-icons-container'>
                <ul>
                    <li><FaFacebookSquare/></li>
                    <li><FaTwitterSquare/></li>
                    <li><FaYoutubeSquare/></li>
                </ul>
            </div>
            <div className='navbar-hamburger' onClick={setSidebarOpen}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    </nav>
  )
}

export default Navbar