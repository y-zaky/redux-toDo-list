import { EDIT_TODO } from '../actionTypes'

export const editToDo = (toDo) => ({
  payload: [toDo],
  type: EDIT_TODO
}) 