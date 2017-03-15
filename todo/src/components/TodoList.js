import React, { PropTypes } from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  componentWillMount(){
    this.props.fetchTodos();
  }
  render(){
    return (<ul>
      {this.props.todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => this.props.onTodoClick(todo.id, todo.completed)}
          deleteTodo={() => this.props.onDeleteTodo(todo.id)}
        />
      )}
    </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired
}

export default TodoList
