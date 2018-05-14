import Link from '../components/Link';
import { SET_VISIBILITY_FILTER } from '../actionTypes'
import { connect } from 'react-redux';


const mapStateToProps = ({visibilityFilter}, {filter}) => ({
    active: visibilityFilter === filter
})

const mapDispatchToProps = (dispatch, {filter}) => ({
    onFilterClick: () => {
        dispatch({
            type: SET_VISIBILITY_FILTER,
            filter: filter
        });
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);