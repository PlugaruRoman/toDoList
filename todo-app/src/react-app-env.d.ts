/// <reference types="react-scripts" />
type Todos = {
  id: number;
  name: string;
  priority: number;
  checked: boolean;
};

type Todo = {
  name: string;
  priority: number;
};

type Category = {
  id: number;
  title: string;
};
