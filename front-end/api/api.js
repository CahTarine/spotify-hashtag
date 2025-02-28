// Fetch ou Axios

import axios from "axios";

// const NODE_ENV = process.env.NODE_ENV;
const URL = "https://spotify-hashtag.onrender.com";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
