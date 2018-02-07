//how can i editToDo using a string and keeping it immutable?

import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../actionTypes/index'

const initialState = {
  editToDo: "",
  toDo: []
}

export default (state = initialState, action) => {

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
        toDo: ["hi"]
      }
    default:
    return state

  }

}