import React, { Component } from 'react'

export default class SingaleTaskList extends Component {
  render() {
    const {title} = this.props;
    return (
      <div>
        <p>
          {title}
        </p>
      </div>
    )
  }
}
