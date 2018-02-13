import { SAVE_TODO } from '../actionTypes'

export const saveToDo = (editedUserInputObject) => ({
  type: SAVE_TODO,
  payload: editedUserInputObject
})