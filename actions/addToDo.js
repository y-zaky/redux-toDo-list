import { ADD_TODO } from '../actionTypes'

export const addToDo = (toDo) => ({
  payload: [toDo],
  type: ADD_TODO
})