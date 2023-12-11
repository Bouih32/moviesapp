import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="search">
      <FaSearch className="searchIcon" />
      <input type="text" placeholder="Search for movies or TV series" />
    </div>
  );
}
