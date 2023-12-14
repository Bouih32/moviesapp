import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Search({ searchedMovie, setSearchedMovie }) {
  function handleChange(event) {
    const { value, name } = event.target;
    setSearchedMovie((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <div className="search">
      <Link to="/search">
        <FaSearch className="searchIcon" />
      </Link>
      <input
        type="text"
        placeholder="Search for movies or TV series"
        value={searchedMovie.title}
        name="title"
        onChange={handleChange}
      />
    </div>
  );
}
