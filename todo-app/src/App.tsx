import './App.scss';
import appContext from './context';
import Content from './components/Content';
import Header from './components/Header';
import { STORE, DEFAULT_STORE } from './store';
import React, { useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState(DEFAULT_STORE);

  const [todos, setTodos] = useState(STORE);
  console.log(todos);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const addTodo = ({ name, priority, category }: any) => {
    setTodos([
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        name,
        priority,
        category: 'Low Important',
        checked: false,
      },
    ]);
  };

  return (
    <appContext.Provider value={{ STORE, onChange, todo, addTodo, todos }}>
      <div className='wrapper'>
        <div className='app'>
          <Header todoCount={todos.length} />
          <Content />
        </div>
      </div>
    </appContext.Provider>
  );
};

export default App;
