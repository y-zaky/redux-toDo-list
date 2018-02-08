import React, { Component } from 'react'

export default class List extends Component {
  constructor(props) {
    super(props)

    this.editToDo = this.editToDo.bind(this)
  }

  editToDo (toDoObj) {

     const main =  document.getElementById(`hi${toDoObj.index}`);
     const input = document.createElement('input');
     main.appendChild(input);
  }

  render () {

    const toDosListArr = this.props.value
    const toDos = toDosListArr.map( 
      (toDo, index) => {
    
        return (
          <div id={`hi${index}`} key={index}>
            <li >{index}.  {toDo}</li>
            <button onClick={ () => {console.log('this', this); this.props.delete({toDo, index})} }>Delete</button>
            <button onClick={ () => this.editToDo({toDo, index}) }>Edit</button>
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