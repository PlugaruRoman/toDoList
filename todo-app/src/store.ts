import { ITask } from './Interface';
export const STORE: ITask[] = [
  {
    id: 1,
    name: 'buy bread',
    priority: 1,

    checked: true,
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

export const DEFAULT_STORE = {
  name: '',
  priority: Number(''),
};
