
import './App.css';
import TodoItem from './components/todoItem'
import todosData from './todosData'
import React from 'react'

class App extends React.Component {

  constructor () {

    super()
    this.state = {
      todos: todosData
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
          if(todo.id === id){

            todo.completed = !todo.completed

          }
          return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render () {

    const todoComponents = this.state.todos.map(todo => <TodoItem todoFullData = {todo}  key = {todo.id}  handleChange = {this.handleChange}/>)

    return (
      <div className="todo-list">
        {todoComponents}
      </div>
    );

  }
}

export default App;
