import React, { Component } from 'react'
import NewTaskAddInput from '../components/NewTaskAddInput'
import TaskList from './homeLayouts/TaskList'

// const taskList = ['Task1', 'Task2', 'Task3'];


export default class HomeLayouts extends Component {
    state = {
        // taskListData: [],

    }

    constructor() {
        super();
        this.state = {
            taskListData: ['Task1', 'Task2', 'Task3'],
            numberCount: 1, //create number count variyable

        }
    }

    addNewTask = (addNewTask) => {
        this.setState({
            taskListData: [addNewTask, ...this.state.taskListData],
        });
    }

    //number counter function
    addCount = () => {
        this.setState({
            numberCount: this.state.numberCount + 1,
        });
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <div>
                    <p style={{ fontSize: '40px' }}>{this.state.numberCount}</p>
                    <button onClick={this.addCount}>Add One</button>
                    <br />
                    <br />

                    <NewTaskAddInput addNewTask={this.addNewTask} />
                    {/* <button onClick={this.addNewTask}>Add New Task</button> */}
                    <div style={{ marginTop: '50px' }}>
                        <TaskList taskListData={this.state.taskListData} />
                    </div>
                </div>
            </div>
        )
    }
}
