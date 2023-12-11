import { PiTelevisionDuotone } from "react-icons/pi";
import { FaRegBookmark, FaBookOpen } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import popular from "../../public/popular.png";
import { BsDot } from "react-icons/bs";
// import rect from "../../public/Rectangle.png";

export default function PopularBanner() {
  const styles = {
    backgroundImage: `url(${popular})`,
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
        <h2 className="title">Beyond Earth</h2>
      </div>
    </div>
  );
}
