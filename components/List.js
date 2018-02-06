import React, { Component } from 'react'

// export default class List extends Component {
//   render() {
//     const renderList = (this.props.value) => {

//       const listItems = this.props.value
//       console.log('listItems', listItems)
//       return listItems.map (
//         (toDo, index) => {
//           console.log('toDooo', toDo)
//           return <li key={index}>{toDo}</li>  
//       })

//     }

//     return (
//       <div> {renderList} </div>
//     )

//   }

// }

export default function List (props) {
  const toDos = props.value 
  console.log(toDos)
  const list = toDos.map(
    (toDo, index) => <li key={index}>{toDo}</li>
  )
  return (
    <h1>{list}</h1>
  )
}