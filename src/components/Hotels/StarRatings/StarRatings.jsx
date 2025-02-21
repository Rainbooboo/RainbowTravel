import { Checkbox, FormGroup, FormControlLabel, Box } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

const StarRatings = () => {
  const starRatings = [5, 4, 3, 2, 1];

  return (
    <Box sx={{ backgroundColor: '#f9faff', border: 'solid 1px', borderColor: 'rgb(225, 225, 235)', padding: 2, borderRadius: 2 }}>
      <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 500 }}>STAR RATING</p>
      <FormGroup>
        {starRatings.map((stars) => (
          <FormControlLabel key={stars} control={<Checkbox size='small'/>} label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {[...Array(5)].map((_, index) => (
                  index < stars ? (
                    <Star key={index} sx={{ fontSize:16, color: '#f85a59' }} />
                  ) : (
                    <StarBorder key={index} sx={{ fontSize:16, color: '#f85a59' }} />
                  )
                ))}
              </Box>
            }
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default StarRatings;