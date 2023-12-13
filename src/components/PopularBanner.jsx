import Popular from "./Popular";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useOutletContext } from "react-router-dom";

export default function PopularBanner() {
  const { info, setInfo } = useOutletContext();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 1,
  };

  return (
    <>
      <h1>Trending</h1>
      <Slider {...settings}>
        {info &&
          info.map((thing) => {
            return (
              <Popular
                key={thing.id}
                name={thing.name}
                poster={thing.poster}
                date={thing.date}
                id={thing.id}
                setInfo={setInfo}
                marked={thing.marked}
              />
            );
          })}
      </Slider>
    </>
  );
}
