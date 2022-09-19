import SortCard from '../SortCard/SortCard';
import styles from './Header.module.scss';
import { useTodo } from '../../utils';

const Header: React.FC = () => {
  const { todos, selectedCategory } = useTodo();
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Todo-App</h1>
      <h2 className={styles.categoryName}>Category Name:{}</h2>
      <div className={styles.todoCount}>
        Todo List: {todos && todos.length} task's
      </div>
      <SortCard />
    </div>
  );
};

export default Header;
