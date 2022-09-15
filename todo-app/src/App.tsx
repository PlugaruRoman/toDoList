import './App.scss';
import appContext from './context';
import Content from './components/Content';
import Header from './components/Header';
import store from './store';
import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState(store);
  console.log(setTodos);
  const [todo, setTodo] = useState(store);
  console.log('@todo', todo);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <appContext.Provider value={{ store, onChange, todo }}>
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
