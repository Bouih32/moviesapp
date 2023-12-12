import Popu from "./Popu";
import { useEffect, useState } from "react";
export default function PopularBanner() {
  const [info, setInfo] = useState("");
  useEffect(() => {
    function getPopular() {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=e655686855d1eedc52815665de6de7f6"
      )
        .then((res) => res.json())
        .then((data) => {
          let popularFive = [];
          for (let i = 0; i < 5; i++) {
            popularFive.push(data.results[i]);
          }

          setInfo(
            popularFive.map((movie) => {
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

    getPopular();
  }, []);

  console.log(info);

  return info.map((movie) => {
    return (
      <Popu
        key={movie.id}
        name={movie.name}
        date={movie.date}
        poster={movie.poster}
        id={movie.id}
      />
    );
  });
}
