import React, { Component } from 'react'

export default class NewTaskAddInput extends Component {

  state = {
    inputValue: '',
  }

  handleInputValueChange = (e) => {
    // console.log(e.target.value); 
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { addNewTask } = this.props;

    return (
      <div>
        <input onChange={this.handleInputValueChange} type='text' style={{ fontSize: '20px' }}></input>
        <button onClick={() => addNewTask(this.state.inputValue)} style={{ fontSize: '20px' }}>
          {''}
          Add</button>
      </div>
    )
  }
}
