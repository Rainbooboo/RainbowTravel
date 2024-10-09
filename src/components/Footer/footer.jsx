import React, {useEffect} from "react";
import './footer.scss';
import video from "../../assets/beach.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'
import img from '../../assets/logo.png'

const Footer = () => {
  //  use useState to add animations
  useEffect(() => {
    Aos.init({duration: 2000})
    }, [])
    

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex" type="submit">  SEND <FiSend className="icon"/></button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv flex">
              <img src={img} alt="logo"  style={{ width: '30px', height: '30px' }}/>
              <a href="/#" className="logo flex">Rainbow Travel</a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">Explore the world with Rainbow Travel! We offer unforgettable travel experiences, from hidden gems to must-see destinations. Join us on your next adventure and stay updated with our latest offers by subscribing to our newsletter.</div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>
          <div className="footerLinks grid">
            {/* One */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex"> <FiChevronRight className="icon"/> Services</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> Insurance</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> Agency</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> Tourism</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> Payment</li>
            </div>
            {/* Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex"> <FiChevronRight className="icon"/> Bookings</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> RentCars</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> HostelWorld</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> Trivago</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> TripAdvisor</li>
            </div>
            {/* Three */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex"> <FiChevronRight className="icon"/> London</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> California</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> Indonesia</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> Europe</li>
              <li className="footerList flex"> <FiChevronRight className="icon"/> South Asia</li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHT RESERVED - RAINBOW 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
