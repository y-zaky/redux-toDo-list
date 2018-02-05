import ADD_TODO from '../actionTypes'

const add = (toDo) => ({
  type: ADD_TODO,
  payload: [toDo]
})

export const addToDo = () => dispatch => {
  dispatch(add())
}