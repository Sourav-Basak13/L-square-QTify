import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

function WebWrapper({ children, isSongPlayer }) {
  return (
    <Box>
      <Header isSongPlayer={isSongPlayer} />
      {children}
      <Footer isSongPlayer={isSongPlayer} />
    </Box>
  );
}

export default WebWrapper;
