import { EDIT_TODO } from '../actionTypes'

export const editToDo = (userInput) => ({
  type: EDIT_TODO,
  payload: userInput
})