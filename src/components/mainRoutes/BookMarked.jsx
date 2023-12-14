import { useOutletContext } from "react-router-dom";
import Movie from "../Movie";

export default function BookMarked() {
  const { bookMarkedMovies, setMovie, bookMarkedSeries, setSerie } =
    useOutletContext();
  return (
    <>
      <h1>Bookmarked Movies</h1>
      <div className="movies">
        {bookMarkedMovies &&
          bookMarkedMovies.map((movie) => {
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
      </div>

      <h1>BookMarked Series</h1>
      <div className="movies">
        {bookMarkedSeries &&
          bookMarkedSeries.map((movie) => {
            return (
              <Movie
                key={movie.id}
                name={movie.name}
                poster={movie.poster}
                date={movie.date}
                id={movie.id}
                marked={movie.marked}
                setMovie={setSerie}
              />
            );
          })}
      </div>
    </>
  );
}
