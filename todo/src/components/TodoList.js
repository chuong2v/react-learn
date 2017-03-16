import React, { PropTypes } from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  componentDidMount(){
    console.log("this.props", this.props)
    this.props.fetchTodos();
  }

  render(){
    return (<ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.toggleTodo(todo.id, todo.completed)}
            deleteTodo={() => this.props.deleteTodo(todo.id)}
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
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired
}

export default TodoList
