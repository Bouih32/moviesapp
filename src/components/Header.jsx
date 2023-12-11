import { PiTelevisionBold, PiSquaresFourFill } from "react-icons/pi";
import { FaBookmark, FaUserCircle } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { MdMovie } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <nav>
        <MdMovie className="logo" />
        <PiSquaresFourFill />
        <TbMovie />
        <PiTelevisionBold />
        <FaBookmark />
      </nav>
      <FaUserCircle className="user" />
    </header>
  );
}
