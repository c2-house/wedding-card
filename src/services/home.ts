import axios from 'axios'

const BASE_URL = 'http://13.125.165.237'

export const postCount = () => axios.post(`${BASE_URL}/c/`)
