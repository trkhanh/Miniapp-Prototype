import React from 'react';
import './App.css';

export default function App() {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [input, setInput] = React.useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="mini-app-2">
      <h2>Mini App 2 - Todo List</h2>
      <p>A complete mini-app with its own state and styles.</p>

      <div className="todo-box">
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new todo..."
            className="todo-input"
          />
          <button onClick={addTodo} className="btn-primary">
            Add
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <span>{todo}</span>
              <button onClick={() => removeTodo(index)} className="btn-remove">✕</button>
            </li>
          ))}
        </ul>
        {todos.length === 0 && <p className="empty-message">No todos yet. Add one to get started!</p>}
      </div>

      <div className="info-box">
        <h3>App Capabilities:</h3>
        <ul>
          <li>Independent React instance</li>
          <li>Own state management</li>
          <li>Scoped styling</li>
          <li>Can be deployed separately</li>
        </ul>
      </div>
    </div>
  );
}