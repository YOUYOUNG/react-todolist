import AddTodo from '../components/AddTodo'
import { addTodos } from '../redux/action/actionCreators'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    todos: state
});
const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodos(text))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);