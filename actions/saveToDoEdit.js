import { SAVETODO_EDIT } from '../actionTypes'

export const saveToDoEdit = (editedUserInput) => ({
  type: SAVETODO_EDIT,
  payload: editedUserInput
})