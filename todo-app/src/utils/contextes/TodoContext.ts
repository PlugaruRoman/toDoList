import React from 'react';

export interface TodoContextProps {
  todos: Todos[];
  todoIdForEdIT: Todos['id'] | null;
  checkTodo: (id: Todos['id']) => void;
  deleteTodo: (id: Todos['id']) => void;
  selectTodoIdForEdit: (id: Todos['id']) => void;
  addTodo: ({ name, priority }: Omit<Todo, 'checked' | 'id'>) => void;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  todo: Todo | null;
  changeTodo: ({ name, priority }: Omit<Todo, 'checked' | 'id'>) => void;
  selected: number;
  setSelected: (id: Todos['id']) => void;
  selectedCategory: number;
  setSelectedCategory: (id: Category['id']) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  todoIdForEdIT: null,
  checkTodo: () => {},
  deleteTodo: () => {},
  selectTodoIdForEdit: () => {},
  addTodo: () => {},
  onChange: () => {},
  todo: null,
  changeTodo: () => {},
  selected: 0,
  setSelected: () => {},
  selectedCategory: 0,
  setSelectedCategory: () => {},
});
