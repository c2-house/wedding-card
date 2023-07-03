import axios from 'axios'

export interface MessageBody {
  name: string
  password?: string
  description: string
}

export interface MessageDTO extends MessageBody {
  id: number
  created_at?: string
}

export const getMessages = () => axios.get<MessageDTO[]>('./boards.json').then((res) => res.data)

export const postMessage = (message: MessageBody) =>
  axios.post<MessageDTO>(`${process.env.REACT_APP_SERVER_URL}/boards/`, message).then((res) => res.data)

export const deleteMessage = (id: number, password: string) =>
  axios.delete(`${process.env.REACT_APP_SERVER_URL}/boards/${id}/?password=${password}`)
