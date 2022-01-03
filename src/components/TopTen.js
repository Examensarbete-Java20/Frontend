import React from 'react';
import style from "../styles/topTen.module.css";

const TopTen = ({title, plot, image_url}) => {

  return (
    <div className={style.card}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.imageWrapper}>
          <img className={style.image} src={image_url} alt="" />
        </div>
        <p className={style.plot}>{plot}</p>
    </div>
  )};

export default TopTen;
