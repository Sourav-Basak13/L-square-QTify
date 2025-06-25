import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { styled } from "@mui/material";
import Card from "../Card/Card";
import PrevButton from "./PrevButton/PrevButton";
import NextButton from "./NextButton/NextButton";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

const StyledSwiperSlide = styled(SwiperSlide)`
  &.swiper-slide {
    width: fit-content !important;
  }
`;

function Carousel({ allbums = [], isLoading }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    setInitial(true);

    return () => setInitial(false);
  }, []);
  return (
    <>
      <Swiper
        className={styles.swiper}
        init={initial}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={40}
        slidesPerView={7}
        effect="flip"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <PrevButton ref={prevRef} />
        <NextButton ref={nextRef} />
        {allbums.map((allbum) => (
          <StyledSwiperSlide>
            <Card
              id={allbum?.id}
              imgUrl={allbum?.image}
              follows={allbum?.follows}
              title={allbum?.title}
            />
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
