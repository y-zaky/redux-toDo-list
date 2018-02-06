import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from '../components/List'

import { addToDo as addToDoAction } from '../actions/addToDo'
import { editToDo as editToDoAction } from '../actions/editToDo'

class App extends Component {

  constructor (props) {

    super(props)

    this.handleEditNewToDo = this.handleEditNewToDo.bind(this)
    this.createTodo = this.createTodo.bind(this)

  }

  handleEditNewToDo (evt) {

    this.props.editToDo(evt.target.value)

  }

  createTodo () {

    this.props.addToDo(this.props.currentToDo)

  }


 // Javascript evaluation /expression practise. onChange =this.handleEditNewToDo() 
  render () {

    console.log(this.props)

    return (
      <div>

        <input value={this.props.currentToDo} onChange={this.handleEditNewToDo}></input>
        <button onClick={this.createTodo}>Add To Do</button>
        <List value={this.props.toDo}></List>
      </div>
    )  

  } 

}

const mapStateToProps = (state) => ({
  toDo: state.addToDo.toDo,
  currentToDo: state.addToDo.editToDo
})

const mapDispatchToProps = {
  addToDo: addToDoAction,
  editToDo: editToDoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)