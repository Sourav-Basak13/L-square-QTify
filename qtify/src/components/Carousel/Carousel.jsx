import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import { Skeleton, styled } from "@mui/material";
import Card from "../Card/Card";
import PrevButton from "./PrevButton/PrevButton";
import NextButton from "./NextButton/NextButton";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import CardSkeleton from "../Card/CardSkeleton";
import useDimension from "../../hooks/general/useDimension";

const StyledSwiperSlide = styled(SwiperSlide)`
  &.swiper-slide {
    width: fit-content !important;
  }
`;

function Carousel({ allbums = [], isLoading, isSong }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [initial, setInitial] = useState(false);
  const { width } = useDimension();

  useEffect(() => {
    setInitial(true);

    return () => {
      setInitial(false);
    };
  }, [allbums]);

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
        // slidesPerView={7}
        effect="flip"
        // loop={true}
        breakpoints={{
          920: {
            slidesPerView: 6,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {width > 768 && (
          <>
            <PrevButton ref={prevRef} />
            <NextButton ref={nextRef} />
          </>
        )}

        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((allbum, index) => (
            <StyledSwiperSlide className={!index ? "active" : ""}>
              {isLoading && <CardSkeleton />}
            </StyledSwiperSlide>
          ))}
        {!isLoading &&
          allbums.map((allbum, index) => (
            <StyledSwiperSlide className={!index ? "active" : ""}>
              <Card
                id={allbum?.id}
                imgUrl={allbum?.image}
                count={allbum?.follows ?? allbum?.likes}
                title={allbum?.title}
                isSong={isSong}
              />
            </StyledSwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Carousel;
