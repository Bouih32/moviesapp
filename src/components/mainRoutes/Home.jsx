import PopularBanner from "../PopularBanner";

import MovieBanner from "../MovieBanner";

export default function Home() {
  return (
    <>
      <PopularBanner />
      <h1>Recommended for you</h1>
      <div className="movies">
        <MovieBanner />
      </div>
    </>
  );
}
