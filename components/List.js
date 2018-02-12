import React, { Component } from 'react'
import { editToDo } from '../actions/editToDo';

export default class List extends Component {
  constructor (props) {
    super(props)

    this.editToDo = this.editToDo.bind(this)

    this.state = {
      hi: false
    }
  }

  editToDo (toDo) {

    console.log('hi frst time',toDo)
    
  }

  render () {

    // let input = null
    // if (this.props.editClicked) {input = <input/>} 

    // let listElement = null
    // this.props.editClicked ? listElement = <input/> :listElement = <li >{index}.  {toDo}</li>

setTimeout(()=>{ this.setState({hi:true}) }, 3000)
const listItemEdit = this.state.hi ? <input  /> : <button onClick={ () => this.editToDo(toDo) }>Edit</button> ;

    const toDosListArr = this.props.value
    const toDos = toDosListArr.map( 
      (toDo, index) => {
    
        return (
          <div id={`hi${index}`} key={index}>
            <li >{index}.  {toDo}</li>
            <button onClick={ () => {console.log('this', this); this.props.delete({toDo, index})} }>Delete</button>
            {listItemEdit}
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