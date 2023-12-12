// import Popu from "./Popu";
// import { useEffect, useState } from "react";
import { PiTelevisionDuotone } from "react-icons/pi";
import { FaRegBookmark, FaBookOpen } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import image from "../../public/popular.png";

import { BsDot } from "react-icons/bs";

export default function PopularBanner() {
  // const [info, setInfo] = useState("");
  // useEffect(() => {
  //   function getPopular() {
  //     fetch(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=e655686855d1eedc52815665de6de7f6"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         let popularFive = [];
  //         for (let i = 0; i < 5; i++) {
  //           popularFive.push(data.results[i]);
  //         }

  //         setInfo(
  //           popularFive.map((movie) => {
  //             let dateArr = movie.release_date.split("-");
  //             return {
  //               id: movie.id,
  //               name: movie.original_title,
  //               poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  //               date: dateArr[0],
  //               marked: false,
  //             };
  //           })
  //         );
  //       });
  //   }

  //   getPopular();
  // }, []);

  // console.log(info);

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };
  return (
    <div className="banner" style={styles}>
      <div className="bookMark">
        <FaRegBookmark />
      </div>

      <div className="details">
        <div className="info">
          <p>2019</p>
          <BsDot />
          <div className="type">
            <TbMovie />
            <p>Movie</p>
          </div>
          <BsDot />
          <p>PG</p>
        </div>
        <h2 className="title">The Movie </h2>
      </div>
    </div>
  );
  //info.map((movie) => {
  //   return (
  //     <Popu
  //       key={movie.id}
  //       name={movie.name}
  //       date={movie.date}
  //       poster={movie.poster}
  //       id={movie.id}
  //     />
  //   );
  // });
}
