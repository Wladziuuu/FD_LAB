import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);

    // Funkcja dodawania zadania
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    // Funkcja usuwania zadania
    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">To-Do List</h1>
            <TodoForm addTask={addTask} />
            <TodoList tasks={tasks} removeTask={removeTask} />
        </div>
    );
};

export default TodoApp;
