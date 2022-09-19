import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './LeftSide.module.scss';
import { useTodo } from '../../utils';
const LeftSide: React.FC = () => {
  const { category } = useTodo();
  return (
    <div className={styles.leftBar}>
      <div className={styles.categoryList}>
        {category.map((el, i) => (
          <CategoryCard title={el.title} key={i} />
        ))}
      </div>
      <button className={styles.addCategory}>Add Button</button>
    </div>
  );
};

export default LeftSide;
