import { useState, useEffect } from "react";

export default function useSearch(fixedString) {
  const [searchResults, setSearchResults] = useState("");
  useEffect(() => {
    function getMovie() {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=e655686855d1eedc52815665de6de7f6&query=${fixedString}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(
            data &&
              data.results.map((movie) => {
                let dateArr =
                  movie.media_type === "movie"
                    ? movie.release_date.split("-")
                    : movie.first_air_date.split("-");
                return movie.media_type === "movie"
                  ? {
                      id: movie.id,
                      name: movie.original_title,
                      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                      date: dateArr[0],
                      marked: false,
                      type: movie.media_type,
                    }
                  : {
                      id: movie.id,
                      name: movie.name,
                      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                      date: dateArr[0],
                      marked: false,
                      type: movie.media_type,
                    };
              })
          );
        });
    }
    setTimeout(getMovie(), 3000);
  }, [fixedString]);
  return [searchResults, setSearchResults];
}
