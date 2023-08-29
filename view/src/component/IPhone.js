import React, { useEffect, useRef } from "react";
import "../assests/Iphone.css";
import Swiper from "swiper";

import "swiper/swiper-bundle.css";
import AllProduct from "./AllProduct";

export default function IPhone() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper when the component mounts
    swiperRef.current = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 1,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: false,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      initialSlide: 0,
      on: {
        click(event) {
          swiperRef.current.slideTo(event.clickedIndex);
        },
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
      },
    });
  }, []);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="col">
            <div className="legend-container">
              <img
                src={require("../images/iPhone14Backgroundedit.png")}
                alt=""
                className="background_slider"
              />
            </div>{" "}
          </div>
        </div>
        <AllProduct/>
      </div>
    </div>
  );
}
