import React from 'react';

export interface TodoContextProps {
  todos: Todos[];
  todoIdForEdIT: Todos['id'] | null;
  todo: Todo | null;
  selectedPriority: string;
  selectedCategory: string;
  checkTodo: (id: Todos['id']) => void;
  deleteTodo: (id: Todos['id']) => void;
  selectTodoIdForEdit: (id: Todos['id']) => void;
  addTodo: ({ name, priority }: Omit<Todo, 'checked' | 'id'>) => void;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  changeTodo: ({ name, priority }: Omit<Todo, 'checked' | 'id'>) => void;
  setSelectedPriority: (it: Category['title']) => void;
  setSelectedCategory: (title: Category['title']) => void;
  onClickCategory: (i: string) => void;
  onClickListPriority: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  filterCategory: (value: Todos) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  todo: null,
  todoIdForEdIT: null,
  selectedCategory: '',
  selectedPriority: '',
  checkTodo: () => {},
  deleteTodo: () => {},
  selectTodoIdForEdit: () => {},
  addTodo: () => {},
  onChange: () => {},
  changeTodo: () => {},
  setSelectedPriority: () => {},
  setSelectedCategory: () => {},
  onClickCategory: () => {},
  onClickListPriority: () => {},
  filterCategory: () => {},
});
