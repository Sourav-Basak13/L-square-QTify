import React from "react";
import Faqs from "../../components/Faqs/Faqs";
import { Box } from "@mui/material";
import styles from "./Footer.module.css";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

function Footer({ isSongPlayer }) {
  return (
    <Box className={styles.footer}>
      <Faqs />
      <AudioPlayer />
    </Box>
  );
}

export default Footer;
