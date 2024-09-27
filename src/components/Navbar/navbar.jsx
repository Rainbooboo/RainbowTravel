import React from 'react'
import { useState } from 'react';
import './navbar.css';
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

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
                    <h1 className="/#"> <MdTravelExplore className="icon"/>Travel.</h1>
                </a>
            </div>
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="/#" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="/#" className="navLink">Packages</a>
                    </li>
                    <li className="navItem">
                        <a href="/#" className="navLink">Shop</a>
                    </li>
                    <li className="navItem">
                        <a href="/#" className="navLink">Amount</a>
                    </li>
                    <li className="navItem">
                        <a href="/#" className="navLink">Pages</a>
                    </li>
                    <li className="navItem">
                        <a href="/#" className="navLink">News</a>
                    </li>
                    <li className="navItem">
                        <a href="//#" className="navLink">Contact</a>
                    </li>
                    <button className="btn">
                        <a href="/#">BOOK NOW</a>
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