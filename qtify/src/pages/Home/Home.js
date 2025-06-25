import React from "react";
import WebWrapper from "../../layout/WebWrapper/WebWrapper";
import { useQuery } from "@tanstack/react-query";
import { fetchNewAlbums, fetchTopAlbums } from "../../api/functions/home.api";
import Section from "../../components/Section/Section";
import Carousel from "../../components/Carousel/Carousel";
import { Divider } from "@mui/material";

export default function Home() {
  const { data: topAlbumsData, isFetching: isTopAlbumsFetching } = useQuery({
    queryKey: ["get-fetch-top-albums"],
    queryFn: fetchTopAlbums,
  });
  const { data: newAlbumsData, isFetching: isNewAlbumsFetching } = useQuery({
    queryKey: ["get-fetch-new-albums"],
    queryFn: fetchNewAlbums,
  });

  // console.log(data, "fetchAlbums");

  return (
    <WebWrapper showHero>
      <Section
        sectionTitle="Top Albums"
        allbums={topAlbumsData?.data}
        isLoading={isTopAlbumsFetching}
      />
      <Divider
        sx={(theme) => ({
          borderColor: theme.palette.primary.main,
        })}
      />
      <Section
        sectionTitle="New Albums"
        allbums={newAlbumsData?.data}
        isLoading={isNewAlbumsFetching}
      />
      <br />
    </WebWrapper>
  );
}
