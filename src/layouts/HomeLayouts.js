import React, { Component } from 'react'
import NewTaskAddInput from '../components/NewTaskAddInput'
import TaskList from './homeLayouts/TaskList'

// const taskList = ['Task1', 'Task2', 'Task3'];


export default class HomeLayouts extends Component {
    state = {
        taskListData: [],
    }

    constructor() {
        super();
        this.state = {
            taskListData: ['Task1', 'Task2', 'Task3']
        }
    }

    addNewTask = () => {
        this.setState({
             taskListData:[this.state.taskListData],
        });
    }


    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <div>
                    {/* <NewTaskAddInput /> */}
                    <button onClick={this.addNewTask}>Add New Task</button>
                    <div style={{ marginTop: '50px' }}>
                        <TaskList taskListData={this.state.taskListData} />
                    </div>
                </div>
            </div>
        )
    }
}
