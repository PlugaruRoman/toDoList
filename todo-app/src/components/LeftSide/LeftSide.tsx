import styles from './LeftSide.module.scss';
import { useTodo } from '../../utils';
import { CATEGORY_STORE } from '../../utils/contextes/TodoProvider';

const LeftSide: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useTodo();

  const onClickCategory = (i: number) => {
    setSelectedCategory(i);
  };

  return (
    <div className={styles.leftBar}>
      <div className={styles.category}>Category</div>
      <div className={styles.categoryList}>
        {CATEGORY_STORE.map((el, i) => (
          <div
            onClick={() => onClickCategory(i)}
            key={i}
            className={selectedCategory === i ? styles.active : styles.card}
          >
            <div>{el.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
