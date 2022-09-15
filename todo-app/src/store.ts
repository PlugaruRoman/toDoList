import { ITask } from './Interface';
const store: ITask[] = [
  { taskName: 'buy bread', priority: 1, category: 'Important', checked: true },
  {
    taskName: 'buy meal',
    priority: 2,
    category: 'Low Important',
    checked: false,
  },
  {
    taskName: 'buy water',
    priority: 3,
    category: 'Very Important',
    checked: false,
  },
];

export default store;
