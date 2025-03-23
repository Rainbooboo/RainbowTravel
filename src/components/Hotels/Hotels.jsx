import React, { useState, useEffect, } from 'react'
// import hotel from '../../assets/hotel.jpg'
import hotel2 from '../../assets/hotel2.jpg'
import styles from './Hotels.module.scss'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import StarRatings from './StarRatings/StarRatings';
import HotelItem from './HotelItem/HotelItem';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';





const Hotels = () => {
  const [locations, setLocations] = useState([]); //for list of locations
  const [allHotels, setAllHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [filteredHotels, setFilteredHotels] = useState([]);


  // Search criteria state
  // const [checkIn, setCheckIn] = useState('');
  // const [checkOut, setCheckOut] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [city, setCity] = useState('');
  const [title, setTitle] = useState('');


  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 6;
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = filteredHotels.slice(indexOfFirstHotel, indexOfLastHotel);




  useEffect(() => {
    const fetchHotelsAndLocations = async () => {
      try {
        const response = await axios.get('https://travel-backend-nine-alpha.vercel.app/');

        setLocations(response.data.locations);
        setAllHotels(response.data.hotels);
        setFilteredHotels(response.data.hotels);
      } catch (err) {
        console.error('Error fetching data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelsAndLocations();
  }, []);
  

  // Function to handle search
  const handleSearch = async (newRatings) => {
    setLoading(true);
    try {
      // Filter hotels
      const filtered = allHotels.filter(hotel => {
        const titleMatch = title ? hotel.name.toLowerCase().includes(title.toLowerCase()) : true;
        // Check location
        const locationMatch = selectedLocation ? hotel.locationId === parseInt(selectedLocation) : true;
        // Check city 
        const cityMatch = city ? hotel.city.toLowerCase().includes(city.toLowerCase()) : true;
        // Check price range
        const minMatch = minPrice ? hotel.price >= parseFloat(minPrice) : true;
        const maxMatch = maxPrice ? hotel.price <= parseFloat(maxPrice) : true;

        console.log(newRatings);
        const ratings = newRatings.length > 0 ? newRatings.includes(Math.round(hotel.rating)) : [];

        return titleMatch && locationMatch && cityMatch && minMatch && maxMatch && ratings;
      });
      console.log(filtered);


      setFilteredHotels(filtered);
      setCurrentPage(1);
    } catch (err) {
      console.error('Error fetching hotels', err);
    } finally {
      setLoading(false);
    }
  };

  const resetFilters = () => {
    setTitle("");
    setSelectedLocation("");
    setCity("");
    setMinPrice("");
    setMaxPrice("");
    setFilteredHotels(allHotels); // Reset to all hotels
  };
  

  return (
    <>
      <section className="home">
        <div className={styles.overlay}></div>
        <img src={hotel2} alt="" className={styles.img} />
        <div className="homeContent container">
          <div className={styles.pageTitle}>
            <h1 data-aos="fade-up" className={styles.hotel}>HOTELS</h1>
          </div>
        </div>
      </section>
      {/* Hotel list */}
      <section className={styles.hotelSection}>
        <div className={styles.cont}>
          <div className={styles.searchDiv}>
            <p className={styles.title}>FIND HOTEL</p>
            <TextField id="name" label="Hotel Name" variant="outlined" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField id="outlined-basic" label="Destination, City" variant="outlined" fullWidth value={city} onChange={(e) => setCity(e.target.value)} />
            <TextField id="outlined-select-currency" select label="Select Location" fullWidth value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
              {locations.map((option) => ( //iterate over location array, create a new one with modified data
                <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
              ))}
            </TextField>
            <TextField label="Date from" type="date" fullWidth slotProps={{ inputLabel: { shrink: true }, }} />
            <TextField label="Date to" type="date" fullWidth slotProps={{ inputLabel: { shrink: true }, }} />
            <div>
              <div className={styles.range}>
                <input type="text" className={styles.rightAlign} placeholder="10000" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} /> - <input type="text" placeholder='500000' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
              </div>
              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" min={10000} max={500000} color='primary' />
            </div>
            <button className="btn" style={{ borderRadius: '5px', color: 'white' }} onClick={handleSearch}>Search</button>
            <button className="btn-outline" style={{ borderRadius: '5px' }} onClick={resetFilters}>Reset</button>
          </div>
          <div className={styles.ratingsDiv}>
            {/* // handle search when rating is changed */}
            <StarRatings onRatingChange={handleSearch} /> 
          </div>
        </div>
        <div className={styles.hotelsDiv}>
          {loading ? (<CircularProgress size="3rem" />) : (<HotelItem hotelList={currentHotels} totalPages={Math.ceil(filteredHotels.length / hotelsPerPage)} currentPage={currentPage} setCurrentPage={setCurrentPage} />)}
        </div>
      </section>


    </>
  )
}

export default Hotels