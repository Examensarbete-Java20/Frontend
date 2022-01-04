import React from 'react';
import "../styles/topTen.css";

const TopTen = ({title, plot, image_url}) => {

  return (
    <div className='card'>
        <h1 className='title'>{title}</h1>
        <div className='imageWrapper'>
          <img className='image' src={image_url} alt="" />
        </div>
        <p className='plot'>{plot}</p>
    </div>
  )};

export default TopTen;
