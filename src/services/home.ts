import axios from 'axios'

export const postCount = () => axios.post(`${process.env.REACT_APP_SERVER_URL}/c/`)
