import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                text: action.text,
                completed: false,
                id: Date.now()
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
}

export default todo;