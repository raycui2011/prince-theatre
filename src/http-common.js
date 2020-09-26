import axios from "axios";

export default axios.create({
  baseURL: "https://challenge.lexicondigital.com.au/api/",
  mode: 'no-cors',
});