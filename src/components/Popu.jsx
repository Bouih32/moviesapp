import { PiTelevisionDuotone } from "react-icons/pi";
import { FaRegBookmark, FaBookOpen } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";

import { BsDot } from "react-icons/bs";

export default function Popu({ name, date, poster }) {
  const styles = {
    backgroundImage: `url(${poster})`,
    backgroundSize: "cover",
  };
  return (
    <div className="banner" style={styles}>
      <div className="bookMark">
        <FaRegBookmark />
      </div>
      <div className="moreInfo">
        <FaBookOpen />
        <h6>More</h6>
      </div>

      <div className="details">
        <div className="info">
          <p>{date}</p>
          <BsDot />
          <div className="type">
            <TbMovie />
            <p>Movie</p>
          </div>
          <BsDot />
          <p>PG</p>
        </div>
        <h2 className="title">{name}</h2>
      </div>
    </div>
  );
}
