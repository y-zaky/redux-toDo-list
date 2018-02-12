import { TODO_EDITED } from '../actionTypes/index'

export const toDoEdited = (index) => ({
  type: TODO_EDITED,
  payload: index
})
