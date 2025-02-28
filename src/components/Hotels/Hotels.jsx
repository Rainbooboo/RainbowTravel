import React , { useState, useEffect }  from 'react'
// import hotel from '../../assets/hotel.jpg'
import hotel2 from '../../assets/hotel2.jpg'
import styles from './Hotels.module.scss'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import StarRatings from './StarRatings/StarRatings';
import HotelItem from './HotelItem/HotelItem';
import axios from 'axios'

const countries = [
    { value: 'NG', label: 'Nigeria' },
    { value: 'US', label: 'United States' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'GH', label: 'Ghana' },
    { value: 'KE', label: 'Kenya' },
    { value: 'SA', label: 'South Africa' },
];


const Hotels = () => {
    
    const [query, setQuery] = useState([]);
    const [geoId, setGeoId] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchHotels = async () => {
        try {
          const options = {
            method: 'GET',
            url: process.env.TRAVEL_API_URL,
            params: {
              query: query,
            },
            headers: {
              'x-rapidapi-key': process.env.RAPIDAPI_KEY,
              'x-rapidapi-host': process.env.RAPIDAPI_HOST,
            },
          };
  
          const response = await axios.request(options);
          setGeoId(response.data);
          console.log(response.data[0].geoId);
        } catch (err) {
          console.error(err);
          setError('Error fetching hotel data.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchHotels();
    }, [query]);

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
                        <TextField id="name" label="Hotel Name" variant="outlined" fullWidth />
                        <TextField id="outlined-basic" label="Destination, City" variant="outlined" fullWidth />
                        <TextField id="outlined-select-currency" select label="Select Location" defaultValue="NGN" fullWidth >
                            {countries.map((option) => (
                                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Date from" type="date" fullWidth slotProps={{ inputLabel: { shrink: true }, }} />
                        <TextField label="Date to" type="date" fullWidth slotProps={{ inputLabel: { shrink: true }, }} />
                        <div>
                            <div className={styles.range}>
                                <input type="text" className={styles.rightAlign} placeHolder="10000" /> - <input type="text" placeholder='500000' />
                            </div>
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" min={10000} max={500000} color='primary' />
                        </div>
                        <button className="btn" style={{ borderRadius: '5px', color: 'white' }}>Search</button>
                    </div>
                    <div className={styles.ratingsDiv}>
                        <StarRatings/>
                    </div>
                </div>
                <div className={styles.hotelsDiv}>
                    <HotelItem/>
                </div>
            </section>


        </>
    )
}

export default Hotels