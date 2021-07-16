import axios from "axios";

const ApiMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=47baac08bd0da53c84230fe07a911cf7"

})
export default ApiMovies;
