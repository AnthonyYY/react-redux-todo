import React from 'react';
import Todo from './Todo';

const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo => (
            <Todo 
            key={todo.id}
            {...todo}
            onTodoClick={ () => onTodoClick(todo.id) }/>    
        ))}
    </ul>
)

export default TodoList;