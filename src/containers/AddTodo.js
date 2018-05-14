import React from 'react';
import { connect } from 'react-redux';
import { ADD_TODO } from '../actionTypes';

const AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <span>Add Todo:</span>
            <input type="text" ref={ node => input = node }/>
            <button onClick={ (e) => {
                e.preventDefault();
                dispatch({
                    type: ADD_TODO,
                    text: input.value
                });
                input.value = '';
            } }>Add Todo</button>
        </div>
    )
}

export default connect()(AddTodo);