import { useTodo } from '../../utils';

import { CategeryStor } from '../../store';

import styles from './LeftSide.module.scss';

const LeftSide: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useTodo();

  const onClickCategory = (i: string) => {
    setSelectedCategory(i);
  };

  return (
    <div className={styles.leftBar}>
      <div className={styles.category}>Category</div>
      <div className={styles.categoryList}>
        {Object.keys(CategeryStor).map((el, i) => (
          <div
            onClick={() => onClickCategory(CategeryStor[el])}
            key={i}
            className={
              selectedCategory === CategeryStor[el]
                ? styles.active
                : styles.card
            }
          >
            <div>{CategeryStor[el]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
