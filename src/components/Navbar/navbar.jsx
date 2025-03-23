import React from 'react'
import { useState } from 'react';
import './navbar.scss';
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import img from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const  [active, setaActive] = useState('navBar');

    //Toggle navbar function
    const showNavbar = ()=>{
        setaActive('navBar activeNavbar')
    }
    //Close navbar function
    const closeNavbar = ()=>{
        setaActive('navBar')
    }

  return (
    <section className="navBarSection">
        <header className="header flex">
            <div className="logoDiv">
                <a href="/#" className="logo flex">
                    <img src={img} alt="logo"  style={{ width: '30px', height: '30px' }}  /> 
                    <h1 className="/#">  Rainbow Travel</h1>
                </a>
            </div>
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
                    <li className="navItem"><Link to="/hotels" className="navLink">Hotels</Link></li>
                    <li className="navItem"><Link to="/packages" className="navLink">Packages</Link></li>
                    <li className="navItem"><Link to="/shop" className="navLink">Shop</Link></li>
                    <li className="navItem"><Link to="/pages" className="navLink">Pages</Link></li>
                    <li className="navItem"><Link to="/news" className="navLink">News</Link></li>
                    <li className="navItem"><Link to="/contact" className="navLink">Contact</Link></li>
                    <button className="btn">
                        <Link to="/packages">BOOK NOW</Link>
                    </button>
                </ul>
                <div onClick={closeNavbar} className="closeNavbar">
                    <IoIosCloseCircle className="icon"/>
                </div>
            </div>
            <div onClick={showNavbar} className="toggleNavbar">
                <TbGridDots className='icon'/>
            </div>
        </header>
    </section>
  )
}

export default Navbar