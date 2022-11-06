import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={require("../images/carousel-1.png")}
          alt="First slide"
          height="900"

        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={require("../images/carousel-2.png")}
          alt="Second slide"
          height="900"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={require("../images/carousel-3.png")}
          alt="Third slide"
          height="900"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
// render(<HomeCarousel />);