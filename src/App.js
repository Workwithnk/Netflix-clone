import React from "react";
import "./App.css";
import Request from "./Request";
import Row from "./Row.js";
import Banner from "./Banner.js";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="app">
      {/* Netflix nav */}
      <Nav />
      {/*  netflix banner */}
      <Banner />
      {/*netflix Rows  */}
      <Row
        title="NetflixOriginals"
        dataURL={`${Request.fetchNetflixOriginals}`}
        isLargeRow
      />
      <Row title="Trending" dataURL={`${Request.fetchTrending}`} />
      <Row title="TopRated" dataURL={`${Request.fetchTopRated}`} />
      <Row title="ActionMovies" dataURL={`${Request.fetchActionMovies}`} />
      <Row title="ComedyMovies" dataURL={`${Request.fetchComedyMovies}`} />
      <Row title="HorrorMovies" dataURL={`${Request.fetchHorrorMovies}`} />
      <Row title="RomanceMovies" dataURL={`${Request.fetchRomanceMovies}`} />
      <Row title="Documentaries" dataURL={`${Request.fetchDocumentaries}`} />
    </div>
  );
}

export default App;
