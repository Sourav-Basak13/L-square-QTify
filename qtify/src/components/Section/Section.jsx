import React, { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";

function Section({ sectionTitle, allbums = [], isLoading }) {
  const [showAll, setShowAll] = useState(false);
  return (
    <Box className={styles.section}>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        mb={1}
      >
        <Typography className={styles.section_title}>{sectionTitle}</Typography>
        <Button
          className={styles.section_collapse_btn}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Collapse" : "Show all"}
        </Button>
      </Stack>
      {showAll && (
        <Grid container rowSpacing={3} columnSpacing={5}>
          {allbums.map((allbum) => (
            <Grid lg={1.5} key={allbum?.id}>
              <Card
                id={allbum?.id}
                imgUrl={allbum?.image}
                follows={allbum?.follows}
                title={allbum?.title}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {!showAll && <Carousel allbums={allbums} isLoading={isLoading} />}
    </Box>
  );
}

export default Section;
