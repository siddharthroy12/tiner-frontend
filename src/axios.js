import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tiner-backend.herokuapp.com/'
})

export default instance