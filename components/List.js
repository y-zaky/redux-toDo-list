import React, { Component } from 'react'

export default class List extends Component {
  render () {

    console.log('list props', this.props)

    const toDosListArr = this.props.value
    const toDos = toDosListArr.map( 
      (toDo, index) => {
        return (
          <div key={index}>
            <li >{toDo}</li>
            <button onClick={this.props.delete}>Delete</button>
          </div>
        )
      }
    )

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