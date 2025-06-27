import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import AudioPlayer from "react-h5-audio-player";
import Song from "../../assest/Namo_Namo.mp3";
import SongThumb from "../../assest/song.png";

import "react-h5-audio-player/lib/styles.css";
import styles from "./AudioPlayer.module.css";

const StyledAudioPlayer = styled(AudioPlayer, [
  {
    shouldForwardProp: true,
  },
])(({ theme }) => ({
  backgroundColor: `${theme.palette.dark} !important`,
  width: "70%",
  ".rhap_main-controls-button": {
    color: theme.palette.white,
  },
  ".rhap_time": {
    color: theme.palette.white,
  },
  ".rhap_progress-bar": {
    backgroundColor: theme.palette.white,
    ".rhap_progress-indicator": {
      display: "none",
    },
    ".rhap_progress-filled": {
      backgroundColor: theme.palette.primary.main,
    },
    ".rhap_download-progress": {
      backgroundColor: theme.palette.white,
    },
  },
}));

function CustomAudioPlayer() {
  return (
    <Stack className={styles.audio_player}>
      <Stack
        className={styles.audio_player_thumblin}
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnGap={1}
      >
        <img src={SongThumb} alt="song_thumb" width="75.85px" height="82px" />
        <Box className={styles.audio_player_text}>
          <Typography>Namo Namo</Typography>
          <Typography className={styles.audio_player_subtext}>
            KedarNath
          </Typography>
        </Box>
      </Stack>
      <StyledAudioPlayer
        src={Song}
        showJumpControls={false}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        layout="stacked-reverse"
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </Stack>
  );
}

export default CustomAudioPlayer;
