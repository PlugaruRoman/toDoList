import React, { useState } from 'react';
import { STORE, DEFAULT_STORE } from './store';
import styles from './App.module.scss';
import TodoPanel from './components/TodoPanel/TodoPanel';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App = () => {
  const [todo, setTodo] = useState(DEFAULT_STORE);

  const [todos, setTodos] = useState(STORE);

  const [todoIdForEdIT, setTodoIdForEdit] = useState<Todo['id'] | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const addTodo = ({ name, priority }: Omit<Todo, 'checked' | 'id'>) => {
    setTodos([
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        name,
        priority,
        checked: false,
      },
    ]);
    setTodo(DEFAULT_STORE);
  };

  const checkTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const selectTodoIdForEdit = (id: Todo['id']) => {
    setTodoIdForEdit(id);
    console.log(todoIdForEdIT);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <Header todoCount={todos.length} />
        <TodoPanel addTodo={addTodo} onChange={onChange} todo={todo} />
        <Content
          addTodo={addTodo}
          onChange={onChange}
          todo={todo}
          deleteTodo={deleteTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
          todoIdForEdIT={todoIdForEdIT}
          checkTodo={checkTodo}
          todos={todos}
        />
      </div>
    </div>
  );
};

export default App;
