import { useParams } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function MovieDetails() {
  const param = useParams().id;
  const [singleDetails, setSingleDetails] = useState("");
  useEffect(() => {
    function getMovie() {
      fetch(
        `https://api.themoviedb.org/3/movie/${param}?api_key=e655686855d1eedc52815665de6de7f6`
      )
        .then((res) => res.json())
        .then((data) => {
          data &&
            setSingleDetails(() => {
              let dateArr = data.release_date.split("-");
              let genre = [];

              data.genres.map((thing) => {
                genre.push(thing.name);
              });

              return {
                name: data.original_title,
                poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                date: dateArr[0],
                overview: data.overview,
                runtime: data.runtime,
                score: data.vote_average,
                moviegenre: genre,
              };
            });
        });
    }

    getMovie();
  }, [param]);

  const { name, date, score, moviegenre, poster, overview, runtime } =
    singleDetails;
  return (
    <div className="singleMovieDetails">
      <img src={poster} alt="poster" />
      <div className="singleInfo">
        <div className="singleTitle">
          <h1>{name}</h1>
          <BsDot />
          <p>{date}</p>
        </div>
        <div className="score">
          <p>{runtime} min</p>
          <BsDot />
          <div>
            <p>{score}</p>
            <FaStar className="star" />
          </div>
        </div>

        <div className="genre">
          {moviegenre &&
            moviegenre.map((thing) => (
              <>
                <p key={thing.id}>{thing} </p> <BsDot />
              </>
            ))}
        </div>
        <div className="overview">
          <RiDoubleQuotesL /> <p>{overview}</p>{" "}
          <RiDoubleQuotesR className="end" />
        </div>
      </div>
    </div>
  );
}
