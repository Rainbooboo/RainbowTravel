import React, { useState, useEffect } from 'react'
// import hotel from '../../assets/hotel.jpg'
import hotel2 from '../../assets/hotel2.jpg'
import styles from './Hotels.module.scss'
import TextField from '@mui/material/TextField';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import StarRatings from './StarRatings/StarRatings';
import HotelItem from './HotelItem/HotelItem';
import axios from 'axios'
import { Autocomplete, CircularProgress, List, ListItem, ListItemText } from '@mui/material';

const countries = [
  { value: 'NG', label: 'Nigeria' },
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'GH', label: 'Ghana' },
  { value: 'KE', label: 'Kenya' },
  { value: 'SA', label: 'South Africa' },

];



const Hotels = () => {

  const [query, setQuery] = useState('');
  const [geoId, setGeoId] = useState('');
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const searchLocation = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation',
          params: {
            pageNumber: '1',
            currencyCode: 'USD',
            query: query,
          },
          headers: {
            'x-rapidapi-key': 'aba35ada13msh5e0d4084368a7fep1891bfjsn4ef74038cdab',
            'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
          },
        };

        const response = await axios.request(options);
        setLocations(response.data.data)
        // console.log(response.data[0].geoId);
        console.log(response);
        console.log(response.data);
        console.log(response.data.data);
      } catch (err) {
        console.error(err);
        setError('Error fetching hotel data.');
      } finally {
        setLoading(false);
      }
    };

    // Set up a debounced search with a 500ms delay
    const delayDebounceFn = setTimeout(() => {
      if (query.trim()) {
        searchLocation();
      }
    }, 700);

    // Cleanup function to cancel the debounce if the query changes
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <>
      <section className="home">
        <div className={styles.overlay}></div>
        <img src={hotel2} alt="" className={styles.img} />
        <div className="homeContent container">
          <div className="textDIV">
            <span data-aos="fade-up" className="smallText">HOTELS</span>
            <h1 data-aos="fade-up" className="homeTitle">Search your preferred hotel</h1>
          </div>
          <div data-aos="fade-up" className="cardDIV grid">
            <div className="destinationInput">
              <label htmlFor="destination">Search your Destination</label>
              <div className="input flex">
                <input type="text" placeHolder='Enter name here..' onChange={handleInputChange} />
                {/* <Autocomplete
                  options={locations}
                  getOptionLabel={(option) => option.secondaryText} // Display the location name in the dropdown
                  loading={loading} // Show loading indicator when fetching data
                  onInputChange={(event, newValue) => {
                    setQuery(newValue); // Update query state when the user types
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      // label="Search for a location"
                      // variant="outlined"
                      fullWidth
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      }}
                    />
                  )}
                /> */}
                {/* {loading && <CircularProgress sx={{ mt: 2 }} />}
      {!loading && locations.length > 0 && (
        <List sx={{ mt: 2, border: '1px solid #ccc', borderRadius: 1 }}>
          {locations.map((loc) => (
            <ListItem key={loc.place_id || loc.id} button>
              <ListItemText primary={loc.display_name || loc.name} />
            </ListItem>
          ))}
        </List>
      )}
      {error && <p>{error}</p>} */}

                <GrLocation className='icon' />
              </div>
            </div>
            <div className="dateInput">
              <label htmlFor="date">Check in</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>
            <div className="destinationInput">
              <label htmlFor="price">Check Out</label>
              <div className="input flex">
                <input type="date" />
              </div>

              <div className="searchOptions flex">
                <HiFilter className='icon' />
                <span>MORE FILTERS</span>
              </div>
            </div>
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
            <TextField id="outlined-select-currency" select label="Select Location" fullWidth >
              {countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
              ))}
            </TextField>
            <TextField label="Date from" type="date" fullWidth slotProps={{ inputLabel: { shrink: true }, }} />
            <TextField label="Date to" type="date" fullWidth slotProps={{ inputLabel: { shrink: true }, }} />
            <div>
              <div className={styles.range}>
                <input type="text" className={styles.rightAlign} placeHolder="10000" /> - <input type="text" placeHolder='500000' />
              </div>
              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" min={10000} max={500000} color='primary' />
            </div>
            <button className="btn" style={{ borderRadius: '5px', color: 'white' }}>Search</button>
          </div>
          <div className={styles.ratingsDiv}>
            <StarRatings />
          </div>
        </div>
        <div className={styles.hotelsDiv}>
          <HotelItem />
        </div>
      </section>


    </>
  )
}

export default Hotels