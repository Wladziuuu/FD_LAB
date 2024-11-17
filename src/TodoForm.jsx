import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoForm = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-4">
            <Form.Group controlId="taskInput">
                <Form.Control
                    type="text"
                    placeholder="Wprowadź zadanie"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
                Dodaj
            </Button>
        </Form>
    );
};

export default TodoForm;
