import { useTodo } from '../../utils';

import SortCard from '../SortCard/SortCard';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { todos, selectedCategory } = useTodo();

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Todo-App</h1>
      <h2 className={styles.categoryName}>
        Category Name: <span>{selectedCategory}</span>
      </h2>
      <div className={styles.todoCount}>
        <span>
          Todo List: <b>{todos && todos.length}</b> task's
        </span>
      </div>
      <SortCard />
    </div>
  );
};

export default Header;
