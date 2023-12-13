import Popular from "./Popular";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
          for (let i = 0; i < 7; i++) {
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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 1,
  };

  console.log(info);

  return (
    <>
      <h1>Trending</h1>
      <Slider {...settings}>
        {info &&
          info.map((thing) => {
            return (
              <Link to={`/movies/${thing.id}`} key={thing.id}>
                <Popular
                  name={thing.name}
                  poster={thing.poster}
                  date={thing.date}
                  id={thing.id}
                />
              </Link>
            );
          })}
      </Slider>
    </>
  );
}
