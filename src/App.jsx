// import { PiTelevisionDuotone, PiSquaresFourFill } from "react-icons/pi";
// import { FaRegBookmark, FaBookmark ,FaBookOpen,FaUserCircle,FaSearch} from "react-icons/fa";
// import { TbMovie } from "react-icons/tb";
// import { MdMovie } from "react-icons/md";

import Layout from "./components/mainRoutes/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/mainRoutes/Home";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/movies" element={<Movie />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
