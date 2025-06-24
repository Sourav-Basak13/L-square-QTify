import React, { useEffect } from "react";
import WebWrapper from "../../layout/WebWrapper/WebWrapper";
import Card from "../../components/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { fetchAlbums } from "../../api/functions/home.api";
import Section from "../../components/Section/Section";

export default function Home() {
  const { data, isFetching, isError, error, isSuccess } = useQuery({
    queryKey: ["get-fetch-albums"],
    queryFn: fetchAlbums,
  });

  // console.log(data, "fetchAlbums");

  return (
    <WebWrapper showHero>
      <br />
      <Section allbums={data?.data} isLoading={isFetching} />
      <br />
    </WebWrapper>
  );
}
