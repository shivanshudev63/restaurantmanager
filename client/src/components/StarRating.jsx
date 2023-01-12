import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

const StarRating = ({ rating }) => {
  //rating =4
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon key={i} style={{color:'#FFA300'}} />
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<StarHalfOutlinedIcon key={i} style={{color:'#FFA300'}} />);
    } else {
      stars.push(<StarOutlineOutlinedIcon key={i} style={{color:'#FFA300'}}  />);
    }
  }
  return <>{stars}</>;
};

export default StarRating;