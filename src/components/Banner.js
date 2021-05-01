import React, { useState, useEffect } from "react";
import axios from "../axios";
import Requests from "../requests";
import "./Banner.css";

function Banner({ title, discription }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(Requests.fetchNetflixOriginals);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="bannerButtons">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="bannerDiscrip">{truncate(movie?.overview, 250)}</h1>
      </div>

      <div className="bannerFadeBottom" />
    </header>
  );
}

export default Banner;
