import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/topTen.css";
import contentHelper, { getTopTen } from "./helpers/contentHelper";
import Rating from "./Rating";

const TopTen = (props) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getTopTen(props.type).then((data) => setResults(data));
  }, []);

  return (
    <div className="contentContainer">
      <h1 className="topTitle">{props.title}</h1>
      {results.map((result) => (
        <div key={result.id} className="card">
          <Link to={`/show/${props.type}/${result.imdb_id}`}>
            <div className="imageWrapper">
              <img src={result.image_url} className="image" />
              <h3 className="title">
                {result.title} ({result.release.substring(0, 4)})
              </h3>
              <p className="ranking">
                <Rating title="IMDB" color="yellow" rating={result.rating} />
                <Rating
                  title="PEDB"
                  color="yellow"
                  rating={result.ownRating}
                  votes={result.totalOfVoters}
                  PEDB
                />
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopTen;
