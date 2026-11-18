import React, { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, updateTodo }) {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.text);

    const handleUpdate = (e) => {

        e.preventDefault();

        if (text.trim() !== '') {
            updateTodo(todo.id, text);
            setEditing(false);
        }
    };

    return (

        <div className="todo-item">

            {editing ? (

                <form onSubmit={handleUpdate}>

                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <button type="submit">Save</button>

                </form>

            ) : (

                <>

                    <span
                        className={todo.completed ? 'completed' : ''}
                    >
                        {todo.text}
                    </span>

                    <div className="actions">

                        <button onClick={() => toggleTodo(todo.id)}>
                            {todo.completed ? 'Undo' : 'Done'}
                        </button>

                        <button onClick={() => setEditing(true)}>
                            Edit
                        </button>

                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>

                    </div>

                </>

            )}

        </div>
    );
}

export default TodoItem;