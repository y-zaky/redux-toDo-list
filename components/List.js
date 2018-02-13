import React, { Component } from 'react'


export default class ListItem extends Component {
  constructor (props) {
    super(props)
  }

  

  render () {
  console.log('list props',this.props)

const listItemEdit = this.props.editClicked ? <input placeholder={this.props.doDo}/> : <button onClick={ () => this.props.editClickedDispatch(this.props.index) }>Edit</button> ;

    return (

      <div id={`hi${this.props.index}`} >
        <li >{this.props.index}.  {this.props.toDo}</li>
        <button onClick={ () => {console.log('this', this); this.props.delete({toDo: this.props.toDo, index: this.props.index})} }>Delete</button>
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