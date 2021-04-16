import React, { useEffect, useState } from "react";
import instance from "./Axios.js";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const posterBaseURL = "https://image.tmdb.org/t/p/original";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

function Row({ title, dataURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [youTubeTra, setYouTubeTra] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const responce = await instance.get(dataURL);
      setMovies(responce.data.results);
      return responce;
    };
    fetchData();
  }, [dataURL]);

  const handleClick = (data) => {
    if (youTubeTra) {
      setYouTubeTra("");
    } else {
      movieTrailer(data?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setYouTubeTra(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
    console.log(data);
  };

  return (
    <div className="main_container">
      {/* title */}
      <h2>{title}</h2>
      {/* all row data */}
      <div className="data_row">
        {movies.map((data) => {
          return (
            <img
              key={data.id}
              onClick={() => handleClick(data)}
              className={`poster_row_image ${
                isLargeRow && "poster_row_image_large"
              } `}
              src={`${posterBaseURL}${
                isLargeRow ? data.poster_path : data.backdrop_path
              }`}
              alt="moviePoster"
            />
          );
        })}
      </div>
      {youTubeTra && <YouTube videoId={youTubeTra} opts={opts} />}
    </div>
  );
}

export default Row;
