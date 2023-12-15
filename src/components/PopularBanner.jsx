import Popular from "./Popular";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useOutletContext } from "react-router-dom";

export default function PopularBanner() {
  const { info, setInfo } = useOutletContext();
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1800 },
      items: 3.4,
    },
    tablet: {
      breakpoint: { max: 1800, min: 464 },
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.3,
    },
  };
  return (
    <>
      <h1>Trending</h1>

      {info && (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {info.map((thing) => {
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
        </Carousel>
      )}
    </>
  );
}
