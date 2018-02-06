import { EDIT_TODO } from '../actionTypes'

export const editToDo = (toDo) => { console.log('toDo',[toDo]);
return ({
  payload: [toDo],
  type: EDIT_TODO
}) }