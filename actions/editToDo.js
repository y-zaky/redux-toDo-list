import { EDIT_TODO } from '../actionTypes'

export default const editToDo = (toDo) => ({
  payload:[toDo] ,
  type: EDIT_TODO
})