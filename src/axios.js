import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// https://api.themoviedb.org/3/trending/all/week?api_key=b4274b0e023dc26e1324c7c29a192219&language=en-US
