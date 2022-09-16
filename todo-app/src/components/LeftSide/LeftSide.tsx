import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './LeftSide.module.scss';
const LeftSide = () => {
  return (
    <div className={styles.leftBar}>
      <div className={styles.categoryList}>
        <CategoryCard />
      </div>
      <button className={styles.addCategory}>Add Button</button>
    </div>
  );
};

export default LeftSide;
