import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import { AiFillHome, AiFillMessage } from 'react-icons/ai'
import { FaPeopleGroup } from 'react-icons/fa6'
import { useGlobalContext } from '../Context'



const Sidebar = () => {
   

    const {isSidebarOpen, setSidebarOpen} = useGlobalContext()
    

  return (
    <aside className={ isSidebarOpen ? 'sidebar' : 'sidebar_closed'}>
        <div className='sidebar-title-container'>
            <h1>Drink Team</h1>
            <div className='sidebar-openClose-btn' onClick={setSidebarOpen}>
                <AiOutlineArrowUp/>
            </div>
        </div>
        <div className='sidebar-menu'>
            <ul>
                <li onClick={() => setSidebarOpen(false)} ><Link to='/'><div><AiFillHome/></div><p>home</p></Link></li>
                <li onClick={() => setSidebarOpen(false)} ><Link to='/about'><div><FaPeopleGroup/></div> <p>chi siamo</p></Link></li>
                <li onClick={() => setSidebarOpen(false)} ><Link to='/contattaci'><div><AiFillMessage/></div><p>contattaci</p></Link></li>
            </ul>
        </div>
        <div className='sidebar-icons'>
            <ul>
                <li><FaFacebookSquare/></li>
                <li><FaTwitterSquare/></li>
                <li><FaYoutubeSquare/></li>
            </ul>
         </div>
       
    </aside>
  )
}

export default Sidebar