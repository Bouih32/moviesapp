import { PiTelevisionBold, PiSquaresFourFill } from "react-icons/pi";
import { FaBookmark, FaUserCircle } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { MdMovie } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <MdMovie className="logo" />
      <nav>
        <PiSquaresFourFill />
        <TbMovie />
        <PiTelevisionBold />
        <FaBookmark />
      </nav>
      <FaUserCircle className="user" />
    </header>
  );
}
