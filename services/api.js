import axios from 'axios';
const BASE_URL = 'https://v2.jokeapi.dev/';
axios.defaults.baseURL = `${BASE_URL}`;

const getJoke = async () => {
  try {
    const {data} = await axios.get('joke/Programming?type=single');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getJoke;