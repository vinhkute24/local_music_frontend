import axiosClient from "./axiosClient";

const musicApi = {
  getById: (id) => {
    const subUrl = `/anime/${id}`;
    return axiosClient.get(subUrl);
  },
};

export default animeApi;