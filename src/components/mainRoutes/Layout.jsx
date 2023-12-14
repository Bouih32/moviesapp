import { Outlet } from "react-router-dom";
import Header from "../Header";
import Search from "../Search";
import useFetchData from "../hooks/useFetchData";
import useFetchSeries from "../hooks/useFetchSeries";
import { useState } from "react";
import useMarked from "../hooks/useMarked";
import useSearch from "../hooks/useSearch";
import useFetchAnime from "../hooks/useFetchAnime";

export default function Layout() {
  const [searchedMovie, setSearchedMovie] = useState({ title: "" });
  const fixedString =
    searchedMovie.title && searchedMovie.title.split(" ").join("+");
  let movieUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=e655686855d1eedc52815665de6de7f6";

  let popularUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=e655686855d1eedc52815665de6de7f6";

  let seriesUrl =
    "https://api.themoviedb.org/3/discover/tv?api_key=e655686855d1eedc52815665de6de7f6";
  const [movie, setMovie] = useFetchData(movieUrl);
  const [info, setInfo] = useFetchData(popularUrl);
  const [serie, setSerie] = useFetchSeries(seriesUrl);
  const [searchResults, setSearchResults] = useSearch(searchedMovie.title);
  const [anime, setAnime] = useFetchAnime();
  const bookMarkedMovies = useMarked(movie);
  const bookMarkedSeries = useMarked(serie);
  const bookMarkedSearch = useMarked(searchResults);

  console.log(searchedMovie.title);

  return (
    <>
      <Header />
      <main>
        <Search
          searchedMovie={searchedMovie}
          setSearchedMovie={setSearchedMovie}
        />
        <Outlet
          context={{
            movie,
            setMovie,
            info,
            setInfo,
            serie,
            setSerie,
            bookMarkedMovies,
            bookMarkedSeries,
            fixedString,
            searchResults,
            setSearchResults,
            bookMarkedSearch,
            anime,
            setAnime,
          }}
        />
      </main>
    </>
  );
}
