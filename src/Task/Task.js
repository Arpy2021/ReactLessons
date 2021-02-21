import styles from './task.module.css';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
const Task = ({ task, handleDeleteOneTask,toggleSetRemoveTaskIds,disabled }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body className="cardBody">
                <input type="checkbox" onClick={() => toggleSetRemoveTaskIds(task._id)}/>
                <Card.Title>Title : {task.text.slice(0, 10)}</Card.Title>
                <Card.Text> Description :{task.text}</Card.Text>
                <div>
                    <Button
                        disabled={disabled}
                        variant="danger"
                        onClick={() => handleDeleteOneTask(task._id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    <Button 
                    disabled={disabled}
                    variant="warning" className="ml-2">
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                </div>
            </Card.Body>
        </Card>


    )
}
export default Task;