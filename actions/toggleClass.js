import { TOGGLE_CLASS } from '../actionTypes'

export const toggleClass = (toDoIndex) => ({
  type: TOGGLE_CLASS,
  payload: toDoIndex
})