import { CircularProgress, Stack, styled } from "@mui/material";
import React from "react";

const StyledLoader = styled(Stack, [
  {
    shouldForwardProp: true,
  },
])(({ theme }) => ({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

function Loader({ configLoader, ...restProps }) {
  return (
    <StyledLoader {...restProps}>
      <CircularProgress {...configLoader} />
    </StyledLoader>
  );
}

export default Loader;
