import { useState, useEffect } from "react";

export default function useFetchAnime() {
  const [anime, setAnime] = useState("");
  useEffect(() => {
    function getMovie() {
      fetch("https://api.jikan.moe/v4/top/anime")
        .then((res) => res.json())
        .then((data) => {
          setAnime(
            data.data.map((movie) => {
              let dateArr = movie.aired.from.split("-");
              return {
                id: movie.mal_id,
                name: movie.title,
                poster: movie.images.jpg.image_url,
                date: dateArr[0],
                marked: false,
                type: "anime",
              };
            })
          );
        });
    }

    getMovie();
  }, []);

  return [anime, setAnime];
}
