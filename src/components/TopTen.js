import React, {useState, useEffect} from 'react';
import "../styles/topTen.css";
import contentHelper, { getTopTen } from './helpers/contentHelper';

const TopTen = (props) => {
  
  const [results, setResults] = useState([]);

  const genTopTen = async () => {
    const data = await getTopTen(props.type);
    setResults(data);
  }

  useEffect(() => {
    genTopTen()
  }, [])

  return (
    <div>
      {results.map(result => (
          <div key={result.id} className="card">
            <div className="imageWrapper">
              <img src={result.image_url} className="image"/>
              <h3 className="title">{result.title}</h3>
            </div>
          </div>
      ))}
    </div>
  );
}

export default TopTen;
