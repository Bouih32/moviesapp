import { useParams } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { nanoid } from "nanoid";

export default function AnimeDetails() {
  const param = useParams().id;
  const [singleAnimeDetails, setSingleAnimeDetails] = useState("");
  useEffect(() => {
    function getMovie() {
      fetch(`https://api.jikan.moe/v4/anime/${param}/full`)
        .then((res) => res.json())
        .then((data) => {
          data &&
            setSingleAnimeDetails(() => {
              let genre = [];

              data.data.genres.map((thing) => {
                genre.push(thing.name);
              });

              return {
                name: data.data.title,
                poster: data.data.images.jpg.image_url,
                date: data.data.year,
                overview: data.data.synopsis,
                runtime: data.data.duration,
                score: data.data.score,
                episodes: data.data.episodes,
                moviegenre: genre,
              };
            });
        });
    }

    getMovie();
  }, [param]);

  console.log(singleAnimeDetails);

  const { name, date, score, poster, overview, runtime, episodes, moviegenre } =
    singleAnimeDetails;
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
          <p>{episodes} ep</p>
          <BsDot />
          <p>{runtime}</p>
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
                <p key={nanoid()}>{thing} </p> <BsDot />
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
