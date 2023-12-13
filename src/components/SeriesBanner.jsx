import { useState, useEffect } from "react";
import Movie from "./Movie";

export default function SeriesBanner() {
  const [serie, setSerie] = useState("");
  useEffect(() => {
    function getMovie() {
      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=e655686855d1eedc52815665de6de7f6"
      )
        .then((res) => res.json())
        .then((data) => {
          setSerie(
            data.results.map((movie) => {
              let dateArr = movie.first_air_date.split("-");
              return {
                id: movie.id,
                name: movie.original_name,
                poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                date: dateArr[0],
                marked: false,
                type: "series",
              };
            })
          );
        });
    }

    getMovie();
  }, []);

  console.log(serie);
  return (
    <>
      {serie &&
        serie.map((movie) => {
          return (
            <Movie
              key={movie.id}
              name={movie.name}
              poster={movie.poster}
              date={movie.date}
              id={movie.id}
              marked={movie.marked}
              setMovie={setSerie}
              serie
            />
          );
        })}
    </>
  );
}
