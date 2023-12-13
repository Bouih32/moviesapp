import { FaRegBookmark, FaBookOpen, FaBookmark } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { Link } from "react-router-dom";

import { BsDot } from "react-icons/bs";

export default function Popular({ name, date, poster, id, setInfo, marked }) {
  function toggleSelectedPopular(id) {
    setInfo((prev) =>
      prev.map((thing) => {
        return thing.id === id ? { ...thing, marked: !thing.marked } : thing;
      })
    );
  }
  const styles = {
    backgroundImage: `url(${poster})`,
    backgroundSize: "cover",
  };
  return (
    <div className="banner" style={styles}>
      <div className="movieBookMark" onClick={() => toggleSelectedPopular(id)}>
        {marked ? <FaBookmark /> : <FaRegBookmark />}
      </div>
      <Link to={`/movie/${id}`}>
        <div className="moreInfo">
          <FaBookOpen />

          <h6>More</h6>
        </div>
      </Link>

      <div className="details">
        <div className="info">
          <p>{date}</p>
          <BsDot />
          <div className="type">
            <TbMovie />
            <p>Movie</p>
          </div>
        </div>
        <h2 className="title">{name}</h2>
      </div>
    </div>
  );
}
