import React, {useEffect} from "react";
import "./main.scss";
import img from "../../assets/Bora Bora.jpg";
import img2 from "../../assets/Machu Picchu.webp";
import img3 from "../../assets/Great Barrier Reef.jpg";
import img4 from "../../assets/santorini.jpeg";
import img5 from "../../assets/Tokyo.jpg";
import img6 from "../../assets/rome.jpeg";
import img7 from "../../assets/paris.jpeg";
import img8 from "../../assets/capetown.jpeg";
import img9 from "../../assets/dubai.jpeg";
import img10 from "../../assets/Banff National Park.jpeg";

import Aos from 'aos';
import 'aos/dist/aos.css'

import { HiOutlineClipboardCheck, HiOutlineLocationMarker,} from "react-icons/hi";

const Data = [
  {
    id: 1,
    imgSrc: img, // Ensure 'img' is declared or imported
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2, // Ensure 'img2' is declared or imported
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Machu Picchu is a stunning ancient city located in the Andes mountains of Peru. It is a UNESCO World Heritage site and offers breathtaking views and cultural significance.",
  },
  {
    id: 3,
    imgSrc: img3, // Ensure 'img3' is declared or imported
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'NATURAL WONDER',
    fees: '$850',
    description: 'The Great Barrier Reef is the world’s largest coral reef system. This beautiful natural wonder is perfect for scuba diving and exploring marine life.'
  },
  {
    id: 4,
    imgSrc: img4, // Ensure 'img4' is declared or imported
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'ROMANTIC ESCAPE',
    fees: '$900',
    description: 'Santorini is famous for its whitewashed buildings with blue domes, beautiful sunsets, and luxurious resorts. It’s a must-visit for couples and romantics.'
  },
  {
    id: 5,
    imgSrc: img5, // Ensure 'img5' is declared or imported
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'MODERN CULTURE',
    fees: '$750',
    description: 'Tokyo, the capital of Japan, offers a unique mix of traditional temples and modern skyscrapers, with endless opportunities for shopping, dining, and sightseeing.'
  },
  {
    id: 6,
    imgSrc: img6, // Ensure 'img6' is declared or imported
    destTitle: 'Rome',
    location: 'Italy',
    grade: 'HISTORICAL LANDMARKS',
    fees: '$650',
    description: 'Rome is home to some of the most iconic ancient landmarks, including the Colosseum and the Vatican. It’s a history lover’s dream destination.'
  },
  {
    id: 7,
    imgSrc: img7, // Ensure 'img7' is declared or imported
    destTitle: 'Paris',
    location: 'France',
    grade: 'CULTURAL & ARTISTIC',
    fees: '$800',
    description: 'Paris, the city of love and lights, is known for its artistic heritage, iconic landmarks like the Eiffel Tower, and world-class museums like the Louvre.'
  },
  {
    id: 8,
    imgSrc: img8, // Ensure 'img8' is declared or imported
    destTitle: 'Cape Town',
    location: 'South Africa',
    grade: 'NATURAL & URBAN MIX',
    fees: '$700',
    description: 'Cape Town is a stunning destination offering a mix of mountains, beaches, and vibrant city life. Table Mountain and the Cape of Good Hope are must-sees.'
  },
  {
    id: 9,
    imgSrc: img9, // Ensure 'img9' is declared or imported
    destTitle: 'Dubai',
    location: 'United Arab Emirates',
    grade: 'LUXURY SHOPPING',
    fees: '$1,000',
    description: 'Dubai is known for its ultramodern architecture, luxurious shopping experiences, and vibrant nightlife. It’s a global hub for business and tourism.'
  },
  {
    id: 10,
    imgSrc: img10, // Ensure 'img10' is declared or imported
    destTitle: 'Banff National Park',
    location: 'Canada',
    grade: 'NATURAL WONDER',
    fees: '$600',
    description: 'Banff National Park is one of Canada’s most breathtaking destinations, offering scenic landscapes, stunning lakes, and opportunities for outdoor adventures.'
  }
];

const Main = () => {
  //  use useState to add animations
  useEffect(() => {
    Aos.init({duration: 2000})
    }, [])
    
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} srcset="" />
                </div>
                <div className="cardInfo">
                  <h4 className="descTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span> {grade} <small>+1</small></span>
                    </div>
                    <div className="price"> <h5>{fees}</h5></div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
