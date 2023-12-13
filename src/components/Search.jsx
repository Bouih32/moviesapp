import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Search() {
  return (
    <div className="search">
      <Link to="/search">
        <FaSearch className="searchIcon" />
      </Link>
      <input type="text" placeholder="Search for movies or TV series" />
    </div>
  );
}
