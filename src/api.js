import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const accessKey = "U-ATiodPgiLzn5aNBj-9tc4gufDApU4eIl8N-Pn22tQ";

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: accessKey,
      query: searchQuery,
      page: currentPage,
      orientation: "landscape",
      per_page: 12,
    },
  });

  return response.data.results;
};
