import React, { Component } from 'react'

export default class List extends Component {
  render () {

    const toDosListArr = this.props.value
    const toDos = toDosListArr.map( (toDo, index) => <li key={index}>{toDo}</li> )

    return (
      <div> {toDos} </div>
    )

  }

}

// export default function List (props) {
//   const toDos = props.value 
//   console.log(toDos)
//   const list = toDos.map(
//     (toDo, index) => <li key={index}>{toDo}</li>
//   )
//   return (
//     <h1>{list}</h1>
//   )
// }