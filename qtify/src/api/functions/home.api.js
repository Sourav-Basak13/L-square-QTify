import { axiosInstance } from "../axiosInstance";
import { endpoints } from "../endpoints";

export const fetchAlbums = async () => {
  const response = await axiosInstance.get(endpoints.albums.all);

  return response;
};
