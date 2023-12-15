import Popular from "./Popular";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useOutletContext } from "react-router-dom";

export default function PopularBanner() {
  const { info, setInfo } = useOutletContext();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 2.4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
        </Carousel>
      )}
    </>
  );
}
