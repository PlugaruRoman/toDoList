export enum CategeryStore {
  All = 'All',
  NotImportant = 'Not important',
  LittleImportant = 'Little Important',
  Important = 'Important',
  VeryImportant = 'Very Important',
  Completed = 'Completed',
  Uncompleted = 'Uncompleted',
}

export const CategeryStor: { [key: string]: string } = {
  all: 'All',
  notImportant: 'Not Important',
  littleImportant: 'Little Important',
  important: 'Important',
  veryImportant: 'Very Important',
  completed: 'Completed',
  uncompleted: 'Uncompleted',
};

export const DEFAULT_STORE: Todo = {
  name: '',
  priority: '1',
};
