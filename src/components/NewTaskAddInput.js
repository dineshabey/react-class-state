import React, { Component } from 'react'

export default class NewTaskAddInput extends Component {
  render() {
    return (
      <div>
        <input type='text' style={{ fontSize: '20px' }}></input>
        <button style={{ fontSize: '20px' }}>Add</button>
      </div>
    )
  }
}
