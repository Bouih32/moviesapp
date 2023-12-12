// import { PiTelevisionDuotone, PiSquaresFourFill } from "react-icons/pi";
// import { FaRegBookmark, FaBookmark ,FaBookOpen,FaUserCircle,FaSearch} from "react-icons/fa";
// import { TbMovie } from "react-icons/tb";
// import { MdMovie } from "react-icons/md";

import PopularBanner from "./components/PopularBanner";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Search />
        <h1>Trending</h1>
        <div className="popularMovies">
          <PopularBanner />
          <PopularBanner />
          <PopularBanner />
          <PopularBanner />
          <PopularBanner />
        </div>
        <h1>Recommended for you</h1>
        <div className="movies">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </main>
    </div>
  );
}

export default App;
