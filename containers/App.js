import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from '../components/List'

import { addToDo as addToDoAction } from '../actions/addToDo'
import { deleteToDo as deleteToDoAction } from '../actions/deleteToDo'
import { toDoEdited as toDoEditedAction } from '../actions/toDoEdited'
import { editToDo as editToDoAction } from '../actions/editToDo'

class App extends Component {

  constructor (props) {

    super(props)

    this.createTodo = this.createTodo.bind(this)
    this.deleteToDo = this.deleteToDo.bind(this)
    this.editToDoClicked = this.editToDoClicked.bind(this)
    this.handleEditNewToDo = this.handleEditNewToDo.bind(this)
  }

  handleEditNewToDo (e) {

    this.props.editToDo(e.target.value)
  }

  createTodo () {

    this.props.addToDo(this.props.currentToDo)

  }

  // TODO
  deleteToDo (toDo) {

    this.props.deleteToDo(toDo)

  }

  editToDoClicked (index) {

    this.props.editToDoClicked(index)

  }

 // Javascript evaluation /expression practise. onChange =this.handleEditNewToDo() 
  render () {

    console.log('toDo',this.props)
    const toDosListArr = this.props.toDo
    
    const toDos = toDosListArr.map( 
      (toDo, index) => {
    
        return (
          <ListItem
             key={index}
             index={index} 
             toDo={toDo.toDo}
             editClicked={toDo.isEdited}
             editClickedDispatch={this.editToDoClicked}
             value={this.props.toDo}
             delete={this.deleteToDo}
          >
          </ListItem>
        )
      }
    )

    return (
      <div>
        <input defaultValue={this.props.currentToDo} onChange={this.handleEditNewToDo}></input>
        <button onClick={this.createTodo}>Add To Do</button>
        {toDos}
      </div>
    )  

  } 

}

const mapStateToProps = (state) => ({
  toDo: state.toDo.toDo,
  currentToDo: state.toDo.editToDo
})

const mapDispatchToProps = {
  addToDo: addToDoAction,
  deleteToDo: deleteToDoAction,
  editToDoClicked: toDoEditedAction,
  editToDo: editToDoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)