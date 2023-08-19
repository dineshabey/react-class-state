import React, { Component } from 'react'

export default class NewTaskAddInput extends Component {

  state = {
    inputValue: '',
  }

  handleInputValueChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleInputValueChange} type='text' style={{ fontSize: '20px' }}></input>
        <button style={{ fontSize: '20px' }}>Add</button>
      </div>
    )
  }
}
