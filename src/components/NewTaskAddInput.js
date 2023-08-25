import React, { Component } from 'react'

export default class NewTaskAddInput extends Component {

  state = {
    inputValue: '',
    isError: false,
  }

  handleInputValueChange = (e) => {
    // console.log(e.target.value); 
    const { value } = e.target;
    if (value.trim()) {
      this.setState({ isError: false });
    } else {
    }
    this.setState({ inputValue: e.target.value });
  };

  //Error handling ------------
  handdleAddNewTask = () => {
    const { inputValue } = this.state;
    if (inputValue.trim()) {
      this.props.addNewTask(this.state.inputValue)
      this.setState({ inputValue: '' });

    } else {
      this.setState({
        isError: true
      });
    }
  }

  render() {

    return (
      <div>
        <input onChange={this.handleInputValueChange} value={this.state.inputValue} type='text' style={{ fontSize: '20px' }}></input>
        <button onClick={this.handdleAddNewTask} style={{ fontSize: '20px' }}>
          {''}
          Add</button>
        {this.state.isError ?

          <p style={{ color: 'red', fontSize: '18px' }}>Please enter Task name.</p> : ""

        }
      </div>
    )
  }
}
