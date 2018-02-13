import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListItem from '../components/List'

import { addToDo as addToDoAction } from '../actions/addToDo'
import { deleteToDo as deleteToDoAction } from '../actions/deleteToDo'
import { toDoEdited as toDoEditedAction } from '../actions/toDoEdited'
import { editToDo as editToDoAction } from '../actions/editToDo'
import { saveToDoEdit as saveToDoEditAction } from '../actions/saveToDoEdit'
import { saveToDo as saveToDoAction } from '../actions/saveToDo'

class App extends Component {

  constructor (props) {

    super(props)

    this.createTodo = this.createTodo.bind(this)
    this.deleteToDo = this.deleteToDo.bind(this)
    this.editToDoClicked = this.editToDoClicked.bind(this)
    this.handleEditNewToDo = this.handleEditNewToDo.bind(this)
    this.saveToDoEdit = this.saveToDoEdit.bind(this)
    this.saveToDo = this.saveToDo.bind(this)
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

  saveToDoEdit (e) {
   
    this.props.saveToDoEdit(e.target.value)
  }

  saveToDo (editedUserInput) {

    this.props.saveToDo(editedUserInput)

  }

 // Javascript evaluation /expression practise. onChange =this.handleEditNewToDo() 
  render () {

    console.log('App Props',this.props)
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
             saveToDoEdit={this.saveToDoEdit}
             editedSaveToDo={this.props.editedSaveToDo}
             saveToDo={this.saveToDo}
             value={this.props.toDo}
             delete={this.deleteToDo}
          >
          </ListItem>
        )
      }
    )

    return (
      <div className='main__container'>
        <h1 className='main-title'>Get Shit Done.</h1>
        <div className='input-button-container'>
          <input id='main-todo-input' defaultValue={this.props.currentToDo} onChange={this.handleEditNewToDo}></input>
          <button className='button-addToDo' onClick={this.createTodo}>Add To Do</button>
        </div>
        {toDos}
      </div>
    )  

  } 

}

const mapStateToProps = (state) => ({
  toDo: state.toDo.toDo,
  currentToDo: state.toDo.editToDo,
  editedSaveToDo: state.toDo.saveToDoEdit
})

const mapDispatchToProps = {
  addToDo: addToDoAction,
  deleteToDo: deleteToDoAction,
  editToDoClicked: toDoEditedAction,
  editToDo: editToDoAction,
  saveToDoEdit: saveToDoEditAction,
  saveToDo: saveToDoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)