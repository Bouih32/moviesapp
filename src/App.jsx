// import { PiTelevisionDuotone, PiSquaresFourFill } from "react-icons/pi";
// import { FaRegBookmark, FaBookmark ,FaBookOpen,FaUserCircle,FaSearch} from "react-icons/fa";
// import { TbMovie } from "react-icons/tb";
// import { MdMovie } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PopularBanner from "./components/PopularBanner";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";

function App() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Header />
      <main>
        <Search />
        <h1>Trending</h1>
        <div className="popularMovies">
          <Slider {...settings}>
            <PopularBanner />
            <PopularBanner />
            <PopularBanner />
            <PopularBanner />
            <PopularBanner />
          </Slider>
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
