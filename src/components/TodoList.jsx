import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo, updateTodo }) {

    return (

        <div className="todo-list">

            {todos.length === 0 ? (

                <p className="empty">
                    No tasks available. Add a new task!
                </p>

            ) : (

                todos.map((todo) => (

                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                    />

                ))

            )}

        </div>
    );
}

export default TodoList;