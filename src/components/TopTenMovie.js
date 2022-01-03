import React, { useEffect, useState } from "react";
import { getTopTen } from "./helpers/contentHelper";
import TopTen from "./TopTen";

const TopTenMovie = () => {

    const [result, setResult] = useState([]);

    const genTopTen = async () => {
      const data = await getTopTen("movie");
      setResult(data);
    }
  
    useEffect (() => {  
      genTopTen();
    },[]) 
  
    return (
        <div>
        <h2>Top 10</h2>
        {result && result.map(movie => (
        <TopTen
          key={movie.title}
          title={movie.title}
          image_url={movie.image_url}
          plot={movie.plot}
        />
      ))}
        </div>
    );
}

export default TopTenMovie;