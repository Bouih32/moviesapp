import { useState, useEffect } from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";

export default function MovieBanner({ full }) {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    function getMovie() {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=e655686855d1eedc52815665de6de7f6"
      )
        .then((res) => res.json())
        .then((data) => {
          setMovie(
            data.results.map((movie) => {
              let dateArr = movie.release_date.split("-");
              return {
                id: movie.id,
                name: movie.original_title,
                poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                date: dateArr[0],
                marked: false,
              };
            })
          );
        });
    }

    getMovie();
  }, []);

  let allmovies = [];
  if (movie) {
    if (full) {
      allmovies = movie;
    } else {
      for (let i = 0; i < 12; i++) {
        allmovies.push(movie[i]);
      }
    }
  }

  console.log(allmovies);
  return (
    <>
      {allmovies &&
        allmovies.map((movie) => {
          return (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <Movie
                name={movie.name}
                poster={movie.poster}
                date={movie.date}
                id={movie.id}
              />
            </Link>
          );
        })}
    </>
  );
}
