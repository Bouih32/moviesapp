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
    bookMarkedAnime,
    setAnime,
  } = useOutletContext();

  const onlyMarkedMoviesSearch =
    bookMarkedSearch &&
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
    });

  const onlyMakedSeriesSearch =
    bookMarkedSearch &&
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
    });

  return (
    <div>
      {(bookMarkedMovies.length !== 0 ||
        onlyMarkedMoviesSearch.length !== 0) && <h1>Bookmarked movies </h1>}

      <div className="movies">
        {onlyMarkedMoviesSearch}

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

      {(bookMarkedSeries.length !== 0 ||
        onlyMarkedMoviesSearch.length !== 0) && <h1>Bookmarked TV series</h1>}

      <div className="movies">
        {onlyMakedSeriesSearch}

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
      {bookMarkedAnime.length !== 0 && <h1>Bookmarked Anime</h1>}
      <div className="movies">
        {bookMarkedAnime &&
          bookMarkedAnime.map((movie) => {
            return movie.type !== "movie" ? (
              <Movie
                key={movie.id}
                name={movie.name}
                poster={movie.poster}
                date={movie.date}
                id={movie.id}
                marked={movie.marked}
                setMovie={setAnime}
                full
                serie
              />
            ) : null;
          })}
      </div>
    </div>
  );
}
