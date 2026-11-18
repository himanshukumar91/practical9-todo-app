import React, { useState, useEffect } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

function App() {

    // Store Tasks
    const [todos, setTodos] = useState(() => {

        try {
            return JSON.parse(localStorage.getItem('todos')) || [];
        } catch {
            return [];
        }

    });

    const [filter, setFilter] = useState('all');

    // Save Tasks in Local Storage
    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);


    // Add Task
    const addTodo = (text) => {

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTodos([...todos, newTodo]);

    };


    // Complete Task
    const toggleTodo = (id) => {

        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        ));

    };


    // Delete Task
    const deleteTodo = (id) => {

        setTodos(todos.filter(todo => todo.id !== id));

    };


    // Update Task
    const updateTodo = (id, newText) => {

        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, text: newText }
                : todo
        ));

    };


    // Filter Tasks
    const filteredTodos = todos.filter(todo => {

        if (filter === 'active') {
            return !todo.completed;
        }

        if (filter === 'completed') {
            return todo.completed;
        }

        return true;

    });

    const remaining = todos.filter(todo => !todo.completed).length;


    return (

        <div className="container">

            <h1>My TODO Application</h1>

            <p className="subtitle">
                Organize your daily tasks
            </p>

            <TodoForm addTodo={addTodo} />

            <div className="filter-buttons">

                <button onClick={() => setFilter('all')}>
                    All
                </button>

                <button onClick={() => setFilter('active')}>
                    Active
                </button>

                <button onClick={() => setFilter('completed')}>
                    Completed
                </button>

            </div>

            <TodoList
                todos={filteredTodos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
            />

            <div className="footer">

                <p>
                    {remaining} tasks remaining
                </p>

                <button onClick={() =>
                    setTodos(todos.filter(todo => !todo.completed))
                }>
                    Clear Completed
                </button>

            </div>

        </div>

    );

}

export default App;