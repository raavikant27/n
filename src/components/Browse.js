import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant";

function Browse() {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/account/21036217/lists?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}

export default Browse;
