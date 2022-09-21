import React from 'react';

import { TodoContext } from './TodoContext';

import { DEFAULT_STORE } from '../../store';

const getLocalItems = (): Todos[] => {
  let store = localStorage.getItem('store') || '[]';
  if (store) {
    return JSON.parse(localStorage.getItem('store') || '[]');
  } else {
    return [];
  }
};

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todo, setTodo] = React.useState(DEFAULT_STORE);
  const [todos, setTodos] = React.useState(getLocalItems());
  const [todoIdForEdIT, setTodoIdForEdit] = React.useState<Todos['id'] | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [selectedPriority, setSelectedPriority] = React.useState<string>('');

  //eslint-disable-next-line
  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  //eslint-disable-next-line
  const addTodo = ({ name, priority }: Omit<Todos, 'checked' | 'id'>) => {
    if (todos) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          name,
          priority,
          checked: false,
        },
      ]);
    }
    setTodo(DEFAULT_STORE);
  };

  //eslint-disable-next-line
  const checkTodo = (id: Todos['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  //eslint-disable-next-line
  const deleteTodo = (id: Todos['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //eslint-disable-next-line
  const selectTodoIdForEdit = (id: Todos['id']) => {
    setTodoIdForEdit(id);
  };

  //eslint-disable-next-line
  const changeTodo = ({ name, priority }: Omit<Todos, 'checked' | 'id'>) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdIT) {
          return { ...todo, name, priority };
        }
        return todo;
      })
    );
    setTodo(DEFAULT_STORE);
    setTodoIdForEdit(null);
  };

  React.useEffect(() => {
    if (selectedPriority === '1') {
      todos.sort((a, b) => +a.priority - +b.priority);
    } else {
      todos.sort((a, b) => +b.priority - +a.priority);
    }
  }, [selectedPriority, todos]);

  React.useEffect(() => {
    localStorage.setItem('store', JSON.stringify(todos));
    return () => {};
  }, [todos]);

  const value = React.useMemo(
    () => ({
      todos,
      todoIdForEdIT,
      checkTodo,
      deleteTodo,
      selectTodoIdForEdit,
      addTodo,
      onChange,
      todo,
      changeTodo,
      setSelectedPriority,
      selectedPriority,
      selectedCategory,
      setSelectedCategory,
    }),
    [
      todos,
      todoIdForEdIT,
      checkTodo,
      deleteTodo,
      selectTodoIdForEdit,
      addTodo,
      onChange,
      todo,
      changeTodo,
      setSelectedPriority,
      selectedPriority,
      selectedCategory,
      setSelectedCategory,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
