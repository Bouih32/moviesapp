import { PiTelevisionBold, PiSquaresFourFill } from "react-icons/pi";
import { FaBookmark, FaUserCircle } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
import { MdMovie } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Header() {
  const headerStyle = {
    color: "white",
    width: "36px",
    height: "36px",
  };
  return (
    <header>
      <nav>
        <MdMovie className="logo" />
        <NavLink to="/">
          {({ isActive }) => (
            <PiSquaresFourFill style={isActive ? headerStyle : null} />
          )}
        </NavLink>
        <NavLink to="/movies">
          {({ isActive }) => <TbMovie style={isActive ? headerStyle : null} />}
        </NavLink>
        <NavLink to="/series">
          {({ isActive }) => (
            <PiTelevisionBold style={isActive ? headerStyle : null} />
          )}
        </NavLink>
        <NavLink to="/bookmarked">
          {({ isActive }) => (
            <FaBookmark
              className="marker"
              style={isActive ? headerStyle : null}
            />
          )}
        </NavLink>
      </nav>
      <FaUserCircle className="user" />
    </header>
  );
}
