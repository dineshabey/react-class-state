import React, { Component } from 'react'
import NewTaskAddInput from '../components/NewTaskAddInput'
import TaskList from './homeLayouts/TaskList'

const taskList = ['Task1', 'Task2', 'Task3'];


export default class HomeLayouts extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <div>
                    <NewTaskAddInput />
                    <div style={{ marginTop: '50px' }}>
                        <TaskList taskListData={taskList} />
                    </div>
                </div>
            </div>
        )
    }
}
