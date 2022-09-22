import React from 'react';

import { TodoContext } from './TodoContext';

import { DEFAULT_STORE } from 'store';

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
  const [selectedPriority, setSelectedPriority] = React.useState<string>('def');

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

  //eslint-disable-next-line
  const onClickCategory = (i: string) => {
    setSelectedCategory(i);
  };

  //eslint-disable-next-line
  const onClickListPriority = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedPriority(value);
  };

  //eslint-disable-next-line
  const filterCategory = (value: Todos) => {
    if (selectedCategory === 'All') return value.priority >= '0';
    else if (selectedCategory === 'Not Important')
      return value.priority === '1';
    else if (selectedCategory === 'Little Important')
      return value.priority === '2';
    else if (selectedCategory === 'Important') return value.priority === '3';
    else if (selectedCategory === 'Very Important')
      return value.priority === '4';
    else if (selectedCategory === 'Completed') return value.checked === true;
    else if (selectedCategory === 'Uncompleted') return value.checked === false;
  };

  React.useEffect(() => {
    localStorage.setItem('store', JSON.stringify(todos));
    return () => {};
  }, [todos]);

  React.useEffect(() => {
    selectedPriority === 'asc' &&
      todos.sort((a, b) => +a.priority - +b.priority);

    selectedPriority === 'desc' &&
      todos.sort((a, b) => +b.priority - +a.priority);
  }, [selectedPriority, todos]);

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
      onClickCategory,
      onClickListPriority,
      filterCategory,
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
      onClickCategory,
      onClickListPriority,
      filterCategory,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
