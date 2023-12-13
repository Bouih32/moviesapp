import { Outlet } from "react-router-dom";
import Header from "../Header";
import Search from "../Search";
import useFetchData from "../hooks/useFetchData";

export default function Layout() {
  let movieUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=e655686855d1eedc52815665de6de7f6";

  let popularUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=e655686855d1eedc52815665de6de7f6";
  const [movie, setMovie] = useFetchData(movieUrl);
  const [info, setInfo] = useFetchData(popularUrl);

  return (
    <>
      <Header />
      <main>
        <Search />
        <Outlet context={{ movie, setMovie, info, setInfo }} />
      </main>
    </>
  );
}
