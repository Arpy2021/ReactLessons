import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
// import styles from './task.module.css';
import idGenerator from '../id/idGenerator';
import { Container,Row,Col  } from 'react-bootstrap';


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
        ]
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
                    />
                </Col>
              </Row>
                <Row className="mt-4" >
                    {!tasks.length && <div>Task is Empty</div>}
                    {Array}
                </Row>

            </Container>
        )
    }
}
export default ToDo;