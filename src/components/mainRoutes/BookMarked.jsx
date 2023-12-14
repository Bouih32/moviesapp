import { useOutletContext } from "react-router-dom";
import Movie from "../Movie";

export default function BookMarked() {
  const {
    bookMarkedMovies,
    setMovie,
    bookMarkedSeries,
    setSerie,
    bookMarkedSearch,
    setSearchResults,
  } = useOutletContext();

  return (
    <>
      <h1>Your bookmarked movies and TV series :</h1>

      <div className="movies">
        {bookMarkedSearch &&
          bookMarkedSearch.map((movie) => {
            return movie.type === "movie" ? (
              <Movie
                key={movie.id}
                name={movie.name}
                poster={movie.poster}
                date={movie.date}
                id={movie.id}
                marked={movie.marked}
                setMovie={setSearchResults}
                full
              />
            ) : null;
          })}

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

      {bookMarkedSearch &&
        bookMarkedSearch.map((movie) => {
          return movie.type !== "movie" ? (
            <Movie
              key={movie.id}
              name={movie.name}
              poster={movie.poster}
              date={movie.date}
              id={movie.id}
              marked={movie.marked}
              setMovie={setSearchResults}
              full
              serie
            />
          ) : null;
        })}

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
