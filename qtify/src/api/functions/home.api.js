import { axiosInstance } from "../axiosInstance";
import { endpoints } from "../endpoints";

export const fetchTopAlbums = async () => {
  const response = await axiosInstance.get(endpoints.albums.allTop);

  return response;
};

export const fetchNewAlbums = async () => {
  const response = await axiosInstance.get(endpoints.albums.allNew);

  return response;
};

export const fetchSongs = async () => {
  const response = await axiosInstance.get(endpoints.songs.all);

  return response;
};

export const fetchGenres = async () => {
  const response = await axiosInstance.get(endpoints.genres);

  return response;
};
