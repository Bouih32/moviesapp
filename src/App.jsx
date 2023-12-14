import Layout from "./components/mainRoutes/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/mainRoutes/Home";
import MovieBanner from "./components/MovieBanner";
import SeriesBanner from "./components/SeriesBanner";
import SearchPage from "./components/mainRoutes/SearchPage";
import BookMarked from "./components/mainRoutes/BookMarked";
import AnimePage from "./components/mainRoutes/AnimePage";
import Error from "./components/mainRoutes/Error";
import MovieDetails from "./components/mainRoutes/MovieDetails";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route
              path="movies"
              element={
                <>
                  <h1>Movies</h1>
                  <div className="movies">
                    <MovieBanner full />
                  </div>
                </>
              }
            ></Route>
            <Route
              path="series"
              element={
                <>
                  <h1>Series</h1>
                  <div className="movies">
                    <SeriesBanner full />
                  </div>
                </>
              }
            ></Route>
            <Route path="search" element={<SearchPage />}></Route>
            <Route
              path="bookmarked"
              element={
                <>
                  <BookMarked />
                </>
              }
            ></Route>
            <Route path="anime" element={<AnimePage />}></Route>
            <Route path="movie/:id" element={<MovieDetails />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
