import Movie from "./Movie";
import { useOutletContext } from "react-router-dom";

export default function SeriesBanner() {
  const { serie, setSerie } = useOutletContext();

  return (
    <>
      {serie &&
        serie.map((movie) => {
          return (
            <Movie
              key={movie.id}
              name={movie.name}
              poster={movie.poster}
              date={movie.date}
              id={movie.id}
              marked={movie.marked}
              setMovie={setSerie}
              serie
            />
          );
        })}
    </>
  );
}
