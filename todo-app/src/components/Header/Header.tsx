import SortCard from '../SortCard/SortCard';
import styles from './Header.module.scss';
import { useTodo } from '../../utils';

const Header: React.FC = () => {
  const { todos, selectedCategory } = useTodo();
  const list: string[] = [
    'All',
    'Not important',
    'Little important',
    'Important',
    'Very important',
    'Completed',
    'Uncompleted',
  ];

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Todo-App</h1>
      <h2 className={styles.categoryName}>
        Category Name: <span>{list[selectedCategory]}</span>
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
