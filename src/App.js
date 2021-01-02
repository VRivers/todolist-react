import logo from './logo.svg';
import './App.css';
import TodoItem from './components/todoItem'
import todosData from './todosData'

function App() {
  const todoComponents = todosData.map(todo => <TodoItem todoFullData = {todo} key={todo.id}/>)
  
  return (
    <div className="todo-list">
      {todoComponents}
    </div>
  );
}

export default App;
