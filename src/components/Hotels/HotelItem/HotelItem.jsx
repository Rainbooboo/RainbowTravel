import React from 'react';
import styles from './HotelItem.module.scss'
import img from '../../../assets/hotel.jpg';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker, } from "react-icons/hi";
import { Rating, Button, Pagination } from '@mui/material';

// const Data = [
//   {
//     id: 1,
//     imgSrc: img,
//     destTitle: "Hotel de Paris",
//     rating: 4,
//     location: "Paris",
//     grade: "CULTURAL RELAX",
//     fees: "$700",
//     description:
//       "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
//   },
//   {
//     id: 1,
//     imgSrc: img,
//     destTitle: "Rainbow Hotel",
//     rating: 3,
//     location: "New Zealand",
//     grade: "CULTURAL RELAX",
//     fees: "$700",
//     description:
//       "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
//   },
//   {
//     id: 1,
//     imgSrc: img,
//     destTitle: "Jacously Home",
//     rating: 2.5,
//     location: "Australia",
//     grade: "CULTURAL RELAX",
//     fees: "$700",
//     description:
//       "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.",
//   },
// ]

const HotelItem = ({ hotelList, totalPages, currentPage, setCurrentPage }) => {

  // useEffect(() => {
  //   const fetchHotels = async () => {
  //     try {
  //       const options = {
  //         method: 'GET',
  //         url: process.env.TRAVEL_API_URL,
  //         params: {
  //           query: query,
  //         },
  //         headers: {
  //           'x-rapidapi-key': process.env.RAPIDAPI_KEY,
  //           'x-rapidapi-host': process.env.RAPIDAPI_HOST,
  //         },
  //       };

  //       const response = await axios.request(options);
  //       setHotels(response.data);
  //       console.log(response.data);
  //     } catch (err) {
  //       console.error(err);
  //       setError('Error fetching hotel data.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchHotels();
  // }, []);

  // if (loading) return <p>Loading hotels...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <>
      {hotelList && hotelList.length > 0 ? ( // Check if hotels exists and has items  
        <div> 
          <div className={`${styles.secContent} ${styles.grid}`}>
            {hotelList.map(
              ({ name, locationId, id, city, price, image, rating, grade, description }) => {
                return (
                  <div key={id}>
                    <div className={styles.singleDestination}>
                      <div className={styles.imageDiv}>
                        <img src={image || img} alt={id} srcSet="" />
                      </div>
                      <div className={styles.cardInfo}>
                        <div className={styles.basicInfo}>
                          <div className="">
                            <p className={styles.descTitle}>{name}</p>
                            <Rating defaultValue={rating} precision={0.5} readOnly size="small" />
                          </div>
                          <div className={styles.priceDiv}>
                            <h5 className={styles.price}>${price}</h5>
                            <small>/night</small>
                          </div>
                        </div>
                        <span className={styles.continent + " flex"}>
                          <HiOutlineLocationMarker className={styles.icon} />
                          <span className={styles.name}>{city}</span>
                        </span>
                        <div className={styles.fees + " flex"}>
                          <div className={styles.grade}>
                            <span>{grade} <small>+1</small></span>
                          </div>
                        </div>
                        <div className={styles.desc}>
                          <p>{description.length > 64 ? `${description.substring(0, 64)}...` : description}</p>
                        </div>
                        <Button className="btn flex" sx={{ color: 'white', borderRadius: 10, fontSize: 11, padding: '5px 18px', marginTop: 1 }}>
                          DETAILS <HiOutlineClipboardCheck className={styles.icon} />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className={styles.pagination}>
            <Pagination variant="outlined" color="primary"  count={totalPages} page={currentPage} onChange={(event, value) => setCurrentPage(value)}  />
          </div>
        </div>
      ) : (
        <p>No available hotels.</p>
      )}
    </>
  )
}

export default HotelItem
