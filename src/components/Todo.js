import React from 'react';

const Todo = ({
    text,
    completed,
    onTodoClick
}) => (
    <li 
    style={{textDecoration: completed 
        ? 'line-through'
        : 'none' }}
    onClick={onTodoClick}>
        {text}
    </li>
)

export default Todo;