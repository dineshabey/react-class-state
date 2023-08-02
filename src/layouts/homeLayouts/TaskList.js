import React, { Component } from 'react'
import SingaleTaskList from '../../components/taskList/SingaleTaskList'

export default class TaskList extends Component {
    render() {
        const { taskListData } = this.props;
        console.log(taskListData)
        return (
            <div>
                <SingaleTaskList />
            </div>
        )
    }
}
