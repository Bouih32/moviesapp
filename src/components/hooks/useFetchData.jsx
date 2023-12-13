import { useState, useEffect } from "react";

export default function useFetchData(url) {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    function getMovie() {
      fetch(url)
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
                type: "movie",
              };
            })
          );
        });
    }

    getMovie();
  }, [url]);

  return [movie, setMovie];
}
