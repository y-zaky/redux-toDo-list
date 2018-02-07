import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from '../components/List'

import { addToDo as addToDoAction } from '../actions/addToDo'
import { editToDo as editToDoAction } from '../actions/editToDo'
import { deleteToDo as deleteToDoAction } from '../actions/deleteToDo'

class App extends Component {

  constructor (props) {

    super(props)

    this.handleEditNewToDo = this.handleEditNewToDo.bind(this)
    this.createTodo = this.createTodo.bind(this)
    this.deleteToDo = this.deleteToDo.bind(this)

  }

  handleEditNewToDo (evt) {

    this.props.editToDo(evt.target.value)

  }

  createTodo () {

    this.props.addToDo(this.props.currentToDo)

  }

  // TODO
  deleteToDo (toDo) {
console.log('toDo to Delete', toDo)
    this.props.deleteToDo(toDo)
console.log('deleted')
  }


 // Javascript evaluation /expression practise. onChange =this.handleEditNewToDo() 
  render () {



    return (
      <div>

        <input value={this.props.currentToDo} onChange={this.handleEditNewToDo}></input>
        <button onClick={this.createTodo}>Add To Do</button>
        <List value={this.props.toDo} delete={this.deleteToDo}></List>
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
  editToDo: editToDoAction,
  deleteToDo: deleteToDoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)