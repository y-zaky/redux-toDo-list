import ADD_TODO from '../actionTypes'

const add = () => ({ type: ADD_TODO })

export const addToDo = () => dispatch => {
  dispatch(add())
}