import axios from 'axios';

const API_KEY = 'fe853c8d9aa8d1faa153fa897fc2f308';
const BASE_URL = 'https://api.themoviedb.org/3/movie/550';
// axios.defaults.baseURL = BASE_URL;

// https://api.themoviedb.org/3/movie/550?api_key=fe853c8d9aa8d1faa153fa897fc2f308

const fetchMovies = async () => {
  return axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(data => console.log(data))
    .catch(err => console.log(err));

};

export default fetchMovies;