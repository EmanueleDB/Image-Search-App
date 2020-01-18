import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID bc1cd1a59beadc97d5fefcd120a8ce43b7a64fd6ea34ddabf24bbbc0001887d9"
  }
});
