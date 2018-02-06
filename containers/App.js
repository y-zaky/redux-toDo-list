import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from '../components/List'

import { addToDo as addToDoAction } from '../actions/addToDo'
import { log } from 'util';

class App extends Component {

  constructor (props) {

    super(props)

    this.state = { newTodo: '' };

    this.handleEditNewToDo = this.handleEditNewToDo.bind(this)
    this.createTodo = this.createTodo.bind(this)

  }

  handleEditNewToDo (evt) {

    this.setState({ newTodo: evt.target.value })

  }

  createTodo () {

    this.props.addToDo(this.state.newTodo)

  }


 // Javascript evaluation /expression practise. onChange =this.handleEditNewToDo() 
  render () {

    console.log(this.props)

    return (
      <div>
        <p>{this.input}</p>
        <input value={this.state.newTodo} onChange={this.handleEditNewToDo}></input>
        <button onClick={this.createTodo}>Add To Do</button>
        <List value={this.props.toDo}> </List>
      </div>
    )  

  } 

}

const mapStateToProps = (state) => ({
  toDo: state.addToDo.toDo
})

const mapDispatchToProps = {
  addToDo: addToDoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)