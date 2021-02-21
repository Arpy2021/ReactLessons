import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
// import styles from './task.module.css';
import idGenerator from '../id/idGenerator';
import { Container, Row, Col,Button } from 'react-bootstrap';


class ToDo extends React.Component {
    state = {
        tasks: [
            {
                _id: idGenerator(),
                text: ``
            },
            {
                _id: idGenerator(),
                text: ``
            },
            {
                _id: idGenerator(),
                text: ``
            }
        ],
        removeTasks: [],
        test:true
    }

    handleSubmit = (value) => {
        if (!value) return;
        const tasks = [...this.state.tasks];
        tasks.push({
            _id: idGenerator(),
            text: value
        });

        this.setState({
            tasks
        });
    }

    handleDeleteOneTask = (id) => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(item => item._id !== id)
        this.setState({
            tasks
        })
    }
    toggleSetRemoveTaskIds = (_id) => {
        let removeTasks = [...this.state.removeTasks];
        if (removeTasks.includes(_id)) {
            removeTasks = removeTasks.filter(id => id !== _id);
        } else {
            removeTasks.push(_id);
        }
        this.setState({
            removeTasks
        });
    }
    removeSelectedTasks = () => {
        let tasks = [...this.state.tasks];
        const removeTasks = [...this.state.removeTasks];
            tasks = tasks.filter(item => !removeTasks.includes(item._id));
        this.setState({
            tasks,
            removeTasks: []
        });
    }
    render() {

        const { tasks, removeTasks } = this.state;
        const Array = this.state.tasks.map(task => {
            return (
                <Col
                    key={task._id}
                    className="d-flex justify-content-center mt-3"
                    xs={12}
                    md={6}
                    xl={4}
                >

                    <Task
                        task={task}
                        handleDeleteOneTask={this.handleDeleteOneTask}
                        toggleSetRemoveTaskIds={this.toggleSetRemoveTaskIds}
                        disabled={!!removeTasks.length}
                    />
                </Col>


            )
        })

        return (
            <Container>
                <Row className="mt-4">
                    <Col>
                        <h1>ToDo</h1>
                        <AddTask
                            handleSubmit={this.handleSubmit}
                            disabled={!!removeTasks.length}
                            test ={this.state.test}
                        />
                    </Col>
                </Row>
                <Row className="mt-4" >
                    {!tasks.length && <div>Task is Empty</div>}
                    {Array}
                </Row>
                <Row className="mt-5">
                    <Col>
                       <Button
                           variant="danger"
                           onClick={this.removeSelectedTasks}
                           disabled={!!!removeTasks.length}
                       >
                           Remove
                        </Button>
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default ToDo;