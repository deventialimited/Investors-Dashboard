import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vipclubpartner.com/',
});


export { instance as api }