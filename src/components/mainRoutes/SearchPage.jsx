import { useOutletContext } from "react-router-dom";
import Movie from "../Movie";

export default function SearchPage() {
  const { searchResults, setSearchResults } = useOutletContext();

  console.log(searchResults);

  return (
    <>
      <h1>Movies Found</h1>
      <div className="movies">
        {searchResults &&
          searchResults.map((movie) => {
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
      </div>

      <h1>Series Found</h1>
      <div className="movies">
        {searchResults &&
          searchResults.map((movie) => {
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
      </div>
    </>
  );
}
