import React, {useEffect} from 'react'
import './home.scss';
import video from "../../assets/travel.mp4" 
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {

//  use useState to add animations
  useEffect(() => {
  Aos.init({duration: 2000})
  }, [])
  

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} className="d" muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDIV">
          <span data-aos="fade-up" className="smallText">Our Packages</span>
          <h1 data-aos="fade-up" className="homeTitle">Search your Holiday</h1>
        </div>
        <div data-aos="fade-up" className="cardDIV grid">
          <div className="destinationInput">
            <label htmlFor="destination">Search your Destination</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here..' />
              <GrLocation className='icon'/>
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your Date</label>
            <div className="input flex">
              <input type="date"/>
            </div>
          </div>
          <div className="destinationInput">
           <div className="label-total flex">
           <label htmlFor="price">Max price</label>
           <h3 className="total">₦500,000</h3>
           </div>
            <div className="input flex">
              <input type="range" min={100000} max={500000} placeholder='Enter name here..' />
            </div>
          
           <div className="searchOptions flex">
            <HiFilter className='icon'/>
            <span>MORE FILTERS</span>
           </div>
          </div>
        </div>
        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram class="icon"/>
            <FaTripadvisor class="icon"/>
          </div>
          <div className="leftIcons">
          <BsListTask class="icon"/>
          <TbApps class="icon"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home