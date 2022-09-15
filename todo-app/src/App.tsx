import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import appContext from './context';
import Content from './components/Content';
import Header from './components/Header';
import { ITask } from './Interface';
const App = () => {
  const [task, setTask] = useState<string>('');
  const [priority, setPriority] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
      console.log(event.target.value);
    } else {
      setPriority(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, priority: priority };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
  };

  return (
    <appContext.Provider
      value={{ task, priority, todoList, onChange, addTask }}
    >
      <div className='wrapper'>
        <div className='app'>
          <Header />
          <Content />
        </div>
      </div>
    </appContext.Provider>
  );
};

export default App;
