import TodoList from '../components/TodoList';
import { TOGGLE_TODO } from '../actionTypes';
import { connect } from 'react-redux';

const getVisibleTodos = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: id => dispatch({
        type: TOGGLE_TODO,
        id
    })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);