import React from 'react'
import rlogo from '../assets/Group 2.jpg'
import piclogo from '../assets/Group 6.jpg'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='head'>
        <nav className='container d-flex justify-content-between align-items-center '>
            <div className='d-flex '>
                <Link to="/"><img src={rlogo} alt="rlogo" /></Link>
                </div>

                <div className='d-flex gap-3 align-items-center'>
                    <Link to="/PageThree" className='text-decoration-none text-dark '>New Task</Link>
                    <Link to="/PageTwo" className='text-decoration-none text-dark '>All Tasks</Link> 
                    <img src={piclogo} alt="" className='w-2'/>
                    

                </div>

            
         
        </nav>
        <hr />
    </div>
  )
}

export default Navbar