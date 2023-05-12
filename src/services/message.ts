import axios from 'axios'

const BASE_URL = 'http://13.125.165.237'

export interface MessageBody {
  name: string
  password: string
  description: string
}

export interface MessageDTO extends MessageBody {
  id: number
  created_at: string
}

interface MessageRes {
  boards: MessageDTO[]
}

export const getMessages = () => axios.get<MessageRes>(`${BASE_URL}/boards/`).then((res) => res.data.boards)

export const postMessage = (message: MessageBody) =>
  axios.post<MessageDTO>(`${BASE_URL}/boards/`, message).then((res) => res.data)

export const deleteMessage = (id: number, password: string) =>
  axios.delete(`${BASE_URL}/boards/${id}/?password=${password}`)
