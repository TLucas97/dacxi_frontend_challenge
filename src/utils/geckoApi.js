import axios from 'axios'

const geckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
})

export default geckoApi
