import React, { Component } from 'react'


export default class ListItem extends Component {
  constructor (props) {
    super(props)
  }

  

  render () {
  

const listItemEdit = this.props.editClicked ? 
  <div>
    <input defaultValue={this.props.toDo} onChange={this.props.saveToDoEdit}/>
    <button onClick ={ () => { this.props.editClickedDispatch(this.props.index); this.props.saveToDo({toDo: this.props.editedSaveToDo, index: this.props.index}) }}>Save</button>
    <button onClick={ () => {console.log('this', this); this.props.delete({toDo: this.props.toDo, index: this.props.index})} }>Delete</button>
  </div> : 
  <div>
    <li >{this.props.index}.  {this.props.toDo}</li>
    <button onClick={ () => this.props.editClickedDispatch(this.props.index) }>Edit</button>
    <button onClick={ () => {console.log('this', this); this.props.delete({toDo: this.props.toDo, index: this.props.index})} }>Delete</button>
  </div>
    return (

      <div id={`hi${this.props.index}`} >
        {listItemEdit}
     </div>
 
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