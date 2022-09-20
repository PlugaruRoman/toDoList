import React from 'react';
import { TodoContext } from './TodoContext';

export const STORE: Todos[] = [];

export const CATEGORY_STORE: Category[] = [
  {
    id: 7,
    title: 'All',
  },
  {
    id: 1,
    title: 'Not important',
  },
  {
    id: 2,
    title: 'Little important',
  },
  {
    id: 3,
    title: 'Important',
  },
  {
    id: 4,
    title: 'Very important',
  },
  {
    id: 5,
    title: 'Completed',
  },
  {
    id: 6,
    title: 'Uncompleted',
  },
];
export const DEFAULT_STORE: Todo = {
  name: '',
  priority: '1',
};

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todo, setTodo] = React.useState(DEFAULT_STORE);
  const [todos, setTodos] = React.useState(STORE);

  const [todoIdForEdIT, setTodoIdForEdit] = React.useState<Todos['id'] | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = React.useState<number>(0);
  const [selected, setSelected] = React.useState<number>(0);

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
    setTodos([
      ...todos,
      {
        id: Date.now(),
        name,
        priority,
        checked: false,
      },
    ]);

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
      setSelected,
      selected,
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
      setSelected,
      selected,
      selectedCategory,
      setSelectedCategory,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
