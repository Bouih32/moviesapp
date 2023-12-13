import PopularBanner from "../PopularBanner";
import Movie from "../Movie";

export default function Home() {
  return (
    <>
      <PopularBanner />
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
    </>
  );
}
