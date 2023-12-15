import { useOutletContext } from "react-router-dom";
import Movie from "../Movie";

export default function AnimePage() {
  const { anime, setAnime } = useOutletContext();
  return (
    <>
      {anime &&
        anime.map((movie) => {
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
              anime
            />
          ) : null;
        })}
    </>
  );
}
