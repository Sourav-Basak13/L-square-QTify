import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

function WebWrapper({ children, showHero }) {
  return (
    <Box>
      <Header showHero={showHero} />
      {children}
      <Footer />
    </Box>
  );
}

export default WebWrapper;
