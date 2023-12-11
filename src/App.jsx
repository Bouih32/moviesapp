// import { PiTelevisionDuotone, PiSquaresFourFill } from "react-icons/pi";
// import { FaRegBookmark, FaBookmark ,FaBookOpen,FaUserCircle,FaSearch} from "react-icons/fa";
// import { TbMovie } from "react-icons/tb";
// import { MdMovie } from "react-icons/md";

import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
