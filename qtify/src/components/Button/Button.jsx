import React from "react";
import { Button as MuiButton, styled, Typography } from "@mui/material";
import styles from "./Button.module.css";

const StyledButton = styled(MuiButton, [
  {
    shouldForwardProp: true,
  },
])(({ theme }) => ({
  //   width: 170,
  //   height: 47,
  //   borderWidth: "1px",
  //   borderRadius: "12px",
  //   paddingTop: "10px",
  //   paddingRight: "16px",
  //   paddingBottom: "10px",
  //   paddingLeft: "16px",
  //   cursor: "pointer",
}));

function Button({ children, ...restProps }) {
  return (
    <StyledButton
      className={styles.btn}
      //   sx={(theme) => ({
      //     background: theme.palette.dark,
      //     color: theme.palette.primary,
      //   })}
      {...restProps}
    >
      <Typography className={styles.btn_text}>{children}</Typography>
    </StyledButton>
  );
}

export default Button;
