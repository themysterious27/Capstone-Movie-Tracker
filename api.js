import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchData = async (endpoint) => {
  const res = await axios.get(`${BASE_URL}${endpoint}&api_key=${API_KEY}`);
  return res.data;
};