import React, { Component } from 'react'

export default class List extends Component {

  render () {

    console.log(this.props)
    return (
      <div>
        <p>{this.props.value}</p>
        <h1>hi</h1>
      </div>
    )

  }

}