import React, { forwardRef } from "react";
import { StyledNavButton } from "../StyledComponent/StyledNavButton";
import NextIcon from "../../../ui/icons/NextIcon";

const NextButton = forwardRef((props, ref) => {
  return (
    <StyledNavButton className="swiper-button-next" ref={ref}>
      <NextIcon />
    </StyledNavButton>
  );
});

export default NextButton;
