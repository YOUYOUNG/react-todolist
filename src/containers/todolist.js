
import { delTodos } from '../redux/action/actionCreators';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>  ({ 
    todos: state
});
const mapDispatchToProps = dispatch => ({
    delTodo: id => dispatch(delTodos(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);