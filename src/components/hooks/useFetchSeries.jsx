import { useState, useEffect } from "react";

export default function useFetchSeries(url) {
  const [serie, setSerie] = useState("");
  useEffect(() => {
    function getMovie() {
      fetch(url)
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
  }, [url]);
  return [serie, setSerie];
}
