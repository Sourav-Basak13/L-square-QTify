import React, { useCallback, useMemo, useState } from "react";
import { Box, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import Loader from "../../ui/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "../../api/functions/home.api";

function Section({ sectionTitle, allbums = [], isLoading, isSong }) {
  const [showAll, setShowAll] = useState(false);
  const [value, setValue] = useState("all");

  const { data: genresData, isFetching: isGenresFetching } = useQuery({
    queryKey: ["get-fetch-genres"],
    queryFn: fetchGenres,
  });

  const filteredData = useMemo(() => {
    if (!!allbums?.length)
      return allbums.filter(
        (allbum) => allbum?.genre?.key === value || value === "all"
      );
    return allbums;
  }, [value, allbums]);

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  return (
    <Box className={styles.section}>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        mb={1}
      >
        <Typography
          className={styles.section_title}
          sx={isSong ? { mb: 1.5 } : {}}
        >
          {sectionTitle}
        </Typography>

        {!isSong && (
          <Button
            className={styles.section_collapse_btn}
            onClick={() => setShowAll((prev) => !prev)}
            disabled={isLoading}
          >
            {showAll ? "Collapse" : "Show all"}
          </Button>
        )}
      </Stack>
      {isSong && (
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            marginBottom: "23px",
            ".MuiTab-root": {
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0px",
              width: "68px",
              color: (theme) => theme.palette.white,
            },
          }}
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="all" label="All" />
          {genresData?.data?.data?.map((genre) => (
            <Tab key={genre?.key} value={genre?.key} label={genre?.label} />
          ))}
        </Tabs>
      )}
      {(isLoading || isGenresFetching) && (
        <Loader
          sx={{
            height: "236px",
          }}
          configLoader={{
            size: 20,
          }}
        />
      )}
      {!isLoading && showAll && (
        <Grid container rowSpacing={3} columnSpacing={5}>
          {allbums.map((allbum) => (
            <Grid lg={1.5} key={allbum?.id}>
              <Card
                id={allbum?.id}
                imgUrl={allbum?.image}
                count={allbum?.follows ?? allbum?.likes}
                title={allbum?.title}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {!isLoading && !showAll && (
        <Carousel
          key={value}
          allbums={filteredData}
          isLoading={isLoading}
          isSong={isSong}
        />
      )}
    </Box>
  );
}

export default Section;
