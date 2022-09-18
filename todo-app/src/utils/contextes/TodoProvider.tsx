import React from 'react';
import { TodoContext } from './TodoContext';

export const STORE: Todos[] = [
  {
    id: 1,
    name: 'buy bread',
    priority: 1,
    checked: false,
  },
  {
    id: 2,
    name: 'buy meal',
    priority: 2,
    checked: false,
  },
  {
    id: 3,
    name: 'buy water',
    priority: 3,
    checked: false,
  },
];

export const DEFAULT_STORE: Todo = {
  name: '',
  priority: Number(''),
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

  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const addTodo = ({ name, priority }: Omit<Todos, 'checked' | 'id'>) => {
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

  const deleteTodo = (id: Todos['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const selectTodoIdForEdit = (id: Todos['id']) => {
    setTodoIdForEdit(id);
  };

  const changeTodo = ({ name, priority }: Omit<Todos, 'checked' | 'id'>) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdIT) {
          return { ...todo, name, priority };
        }
        return todo;
      })
    );

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
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
