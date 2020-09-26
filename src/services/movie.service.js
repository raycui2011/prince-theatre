import http from "../http-common";
import axios from "axios";
const config = {
      method: "get",
      mode: 'no-cors',
      headers: {
        'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7',       
      }
    };

class MovieService {
  
  // get all the film data from film world
  async getAllFromFilmWorld() {
    return axios("https://challenge.lexicondigital.com.au/api/filmworld/movies", 
      {
      method: "get",
      mode: 'no-cors',
      headers: {
        'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7',       
      }});
  }

  //get all the film data from cinema world
  async getAllCinemaWorld() {
    return axios("https://challenge.lexicondigital.com.au/api/cinemaworld/movies", config);
  }

  getAllMoives() {
    let [m1, m2] = axios.all([
      axios("https://challenge.lexicondigital.com.au/api/filmworld/movies", config),
      axios("https://challenge.lexicondigital.com.au/api/cinemaworld/movies", config)
     ]);

     return [m1, m2];
  }

  //get film data from cinema world by given movie id
  getDataFromCinemaWorld(id) {
    return http.get(`/cinemaworld/movie/${id}`);
  }

  //get film data from film world by given movie id
  getDataFromFilmWorld(id) {
    return http.get(`/filmworld/movie/${id}`);
  }
}

export default new MovieService();