import React, { Component } from 'react'
import SingaleTaskList from '../../components/taskList/SingaleTaskList'

export default class TaskList extends Component {
    render() {
        const { taskListData } = this.props;
        return (
            <div>

                {taskListData.map((val, key) => {
                    return (<SingaleTaskList key={key} title={val} />)
                })}

            </div>
        )
    }
}
