import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
import styles from './task.module.css';


class ToDo extends React.Component {
    state = {
        tasks: ['Yerevan', 'Ejmiacin', 'Gyumri'],
    }

    handleSubmit = (value) => {
        if (!value) return;
        const tasks = [...this.state.tasks];
        tasks.push(value);
        this.setState({
            tasks
        });
    }

    render() {

        const { tasks } = this.state;
        const Array = this.state.tasks.map((task, index) => {
            return (

                <Task
                    task={task}
                    key={index}
                    active={index === 1}
                    active2={index === 2}
                />
            )
        })

        return (
            <div>
                <div>
                    <h1>ToDo</h1>
                    <AddTask
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                <div className="task_wrapper" >
                    {!tasks.length && <div>Task is Empty</div>}
                    {Array}
                </div>

            </div>
        )
    }
}
export default ToDo;