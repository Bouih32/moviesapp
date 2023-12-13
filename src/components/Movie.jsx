import { FaRegBookmark, FaBookOpen } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";

import { BsDot } from "react-icons/bs";

export default function Movie({ name, date, poster }) {
  return (
    <div className="movieBanner">
      <div className="movieImage">
        <div className="movieBookMark">
          <FaRegBookmark />
        </div>
        <img src={poster} alt="somthing" />
        <div className="moreInfo">
          <FaBookOpen />
          <h6>More</h6>
        </div>
      </div>

      <div className="movieDetails">
        <div className="movieInfo">
          <p>{date}</p>
          <BsDot />
          <div className="type">
            <TbMovie />
            <p>{name}</p>
          </div>
          <BsDot />
          <p>PG</p>
        </div>
        <h2 className="title">Beyond Earth</h2>
      </div>
    </div>
  );
}
