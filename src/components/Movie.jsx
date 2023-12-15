import { FaRegBookmark, FaBookOpen, FaBookmark } from "react-icons/fa";
import { PiTelevisionDuotone } from "react-icons/pi";
import { TbMovie } from "react-icons/tb";

import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Movie({
  name,
  date,
  poster,
  id,
  setMovie,
  marked,
  serie,
  anime,
}) {
  function toggleSelected(id) {
    setMovie((prev) =>
      prev.map((thing) => {
        return thing.id === id ? { ...thing, marked: !thing.marked } : thing;
      })
    );
  }
  return (
    <div className="movieBanner">
      <div className="movieImage">
        <div className="movieBookMark" onClick={() => toggleSelected(id)}>
          {marked ? <FaBookmark /> : <FaRegBookmark />}
        </div>
        <img src={poster} alt="somthing" />
        <Link
          to={serie ? `/serie/${id}` : anime ? `/anime/${id}` : `/movie/${id}`}
        >
          <div className="moreInfo">
            <FaBookOpen />

            <h6>More</h6>
          </div>
        </Link>
      </div>

      <div className="movieDetails">
        <div className="movieInfo">
          <p>{date}</p>
          <BsDot />
          <div className="type">
            {serie ? <PiTelevisionDuotone /> : <TbMovie />}

            <p>{serie ? "TV Series" : "Movie"}</p>
          </div>
        </div>

        <h2 className="title">{name}</h2>
      </div>
    </div>
  );
}
