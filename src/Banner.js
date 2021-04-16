import React, { useState, useEffect } from "react";
import instance from "./Axios.js";
import Request from "./Request";
import "./Banner.css";

const BaseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [backMovie, setbackMovie] = useState([]);
  const fetchDataHere = async () => {
    const resData = await instance.get(Request.fetchNetflixOriginals);
    setbackMovie(
      resData.data.results[
        Math.floor(Math.random() * resData.data.results.length - 1)
      ]
    );
  };

  useEffect(() => {
    fetchDataHere();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${BaseUrl}${backMovie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContainer">
        {/* title here */}
        <h1 className="banner_title">{backMovie?.original_name}</h1>
        {/* two buttons  */}
        <div className="banner_buttons_div">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner_des">{backMovie.overview}</h1>
      </div>
      <div className="banner_bottom"></div>
    </header>
  );
}

export default Banner;
