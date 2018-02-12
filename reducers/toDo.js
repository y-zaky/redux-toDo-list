//how can i editToDo using a string and keeping it immutable?

import { ADD_TODO, EDIT_TODO, DELETE_TODO, TODO_EDITED } from '../actionTypes/index'

const initialState = {
  editToDo: "",
  toDo: [],
  toDoEdited: false
}

export default (state = initialState, action) => {

  // console.log('action toDo', action.payload)
  // console.log('action state', state.toDo)
  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
        toDo: state.toDo.concat(action.payload)
      }
    case EDIT_TODO:
      return {
        ...state,
        editToDo: action.payload
      }
    case DELETE_TODO:
      return {
        ...state,
        toDo: state.toDo.filter(
          (toDo, index) => {
            return (
              index !== action.payload.toDo.index
            )
          }
        )
      }
    case TODO_EDITED:
      return {
        ...state,
        toDoEdited: true
      }
    default:
      return state

  }

}