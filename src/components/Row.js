import React, { useState, useEffect } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerurl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleclick = (movie) => {
    if (trailerUrl) {
      setTrailerurl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(
            "akjsbdajhsdb asdhua gdiuuiashdiuasyh diuhasiud hi",
            urlParams.get("v")
          );
          setTrailerurl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="rowposters">
        {movies.map((movie) => (
          <img
            onClick={() => handleclick(movie)}
            key={movie.id}
            className={`rowposter ${isLargeRow && "rowposterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
