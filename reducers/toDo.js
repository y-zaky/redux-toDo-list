//how can i editToDo using a string and keeping it immutable?

import { ADD_TODO, DELETE_TODO, TODO_EDITED, EDIT_TODO, SAVETODO_EDIT } from '../actionTypes/index'

const initialState = {
  editToDo: "",
  toDo: [],
  toDoEdited: false,
  saveToDoEdit: ""
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
        toDo: state.toDo.map(
          (toDo,index) => toDo.index === action.payload ? {...toDo, isEdited: true} : toDo 
        )
      }
    case SAVETODO_EDIT:
      return {
        ...state,
        saveToDoEdit: action.payload
      }
      
    default:
      return state

  }

}