import { ADD_TODO } from '../actionTypes/index'

const initialState = {
  toDo: []
}

export default (state = initialState, action) => {

  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
        toDo: state.toDo.concat(action.payload)
      }
    default:
    return state

  }

}