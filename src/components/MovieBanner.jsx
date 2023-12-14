import Movie from "./Movie";
import { useOutletContext } from "react-router-dom";

export default function MovieBanner({ full }) {
  const { movie, setMovie } = useOutletContext();

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

  return (
    <>
      {allmovies &&
        allmovies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              name={movie.name}
              poster={movie.poster}
              date={movie.date}
              id={movie.id}
              marked={movie.marked}
              setMovie={setMovie}
            />
          );
        })}
    </>
  );
}
