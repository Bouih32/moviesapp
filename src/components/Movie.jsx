import { FaRegBookmark, FaBookOpen, FaBookmark } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";

import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Movie({ name, date, poster, id, setMovie, marked }) {
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
        <div className="movieBookMark">
          {marked ? (
            <FaBookmark onClick={() => toggleSelected(id)} />
          ) : (
            <FaRegBookmark onClick={() => toggleSelected(id)} />
          )}
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
            <p>PG</p>
          </div>
          <BsDot />
          <p>PG</p>
        </div>
        <Link to={`/movie/${id}`}>
          <h2 className="title">{name}</h2>
        </Link>
      </div>
    </div>
  );
}
