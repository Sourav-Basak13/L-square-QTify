import React, { forwardRef } from "react";
import { StyledNavButton } from "../StyledComponent/StyledNavButton";
import PrevIcon from "../../../ui/icons/PrevIcon";

const PrevButton = forwardRef((props, ref) => {
  return (
    <StyledNavButton className="swiper-button-prev" ref={ref}>
      <PrevIcon />
    </StyledNavButton>
  );
});

export default PrevButton;
