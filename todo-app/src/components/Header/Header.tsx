import SortCard from '../SortCard/SortCard';
import styles from './Header.module.scss';

interface HeaderProps {
  todoCount: number;
}

const Header: React.FC<HeaderProps> = ({ todoCount }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Todo-App</h1>
      <h2 className={styles.categoryName}>Category Name</h2>
      <div className={styles.todoCount}>Todo List: {todoCount} task's</div>
      <SortCard />
    </div>
  );
};

export default Header;
