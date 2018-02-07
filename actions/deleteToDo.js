import { DELETE_TODO } from '../actionTypes'

export const deleteToDo = (toDo) => ({
  type: DELETE_TODO,
  payload: toDo
})