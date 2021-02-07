import React from 'react';
import Tasks from "./Tasks"


class ToDo extends React.Component {
    state = {
        tasks: ['Task 1', 'Task 2', 'Task 3']
    }

    render() {
        const Array = this.state.tasks.map((task, index) => {
            return (
                <p key={index} className="task" >

                    <Tasks task={task} />
                </p>
            )
        })

        return (
            <div>
                <h1>ToDo</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Add Task"
                    />
                    <button>Add</button>
                </div>
                <div className="task_wrapper" >
                    {Array}
                </div >
            </div>

        )
    }
}
export default ToDo;

