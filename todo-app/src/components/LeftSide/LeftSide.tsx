import styles from './LeftSide.module.scss';
import { useTodo } from '../../utils';

const LeftSide: React.FC = () => {
  const { category, selectedCategory, setSelectedCategory } = useTodo();

  const onClickCategory = (i: number) => {};

  return (
    <div className={styles.leftBar}>
      <div className={styles.categoryList}>
        {category.map((el, i) => (
          <div
            onClick={() => onClickCategory(i)}
            key={i}
            className={styles.active}
          >
            <div>{el.title}</div>
          </div>
        ))}
      </div>
      <button className={styles.addCategory}>Add Button</button>
    </div>
  );
};

export default LeftSide;
