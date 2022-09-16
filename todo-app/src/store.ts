import { ITask } from './Interface';
export const STORE: ITask[] = [
  {
    id: 1,
    name: 'buy bread',
    priority: 1,
    category: 'Important',
    checked: true,
  },
  {
    id: 2,
    name: 'buy meal',
    priority: 2,
    category: 'Low Important',
    checked: false,
  },
  {
    id: 3,
    name: 'buy water',
    priority: 3,
    category: 'Very Important',
    checked: false,
  },
];

export const DEFAULT_STORE = {
  name: '',
  priority: '',
};
