import { PiTelevisionDuotone } from "react-icons/pi";
import { FaRegBookmark, FaBookOpen } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";

import { BsDot } from "react-icons/bs";
import rect from "../../public/Rectangle.png";

export default function Movie() {
  return (
    <div className="movieBanner">
      <div className="movieBookMark">
        <FaRegBookmark />
      </div>
      <img src={rect} alt="somthing" />

      <div className="movieDetails">
        <div className="movieInfo">
          <p>2019</p>
          <BsDot />
          <div className="type">
            <TbMovie />
            <p>Movie</p>
          </div>
          <BsDot />
          <p>PG</p>
        </div>
        <h2 className="title">Beyond Earth</h2>
      </div>
    </div>
  );
}
