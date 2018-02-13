//how can i editToDo using a string and keeping it immutable?

import { ADD_TODO, DELETE_TODO, TODO_EDITED } from '../actionTypes/index'

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
        toDo: state.toDo.concat({
          toDo: action.payload,
          index: state.toDo.length,
          isEdited: false
        })
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
    state.toDo[action.payload].isEdited = true
      return {
        ...state,
        toDo: state.toDo.map(
          (toDo,index) => toDo.index === action.payload ? {...toDo, isEdited: true} : toDo 
        )
      }
    default:
      return state

  }

}