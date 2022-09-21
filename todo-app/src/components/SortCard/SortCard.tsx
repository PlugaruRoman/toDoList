import React from 'react';

import { useTodo } from '../../utils';

import styles from './SortCard.module.scss';

const SortCard: React.FC = () => {
  const { setSelectedPriority, selectedPriority } = useTodo();

  const onClickListPriority = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedPriority(value);
  };

  return (
    <div className={styles.sortCard}>
      <div className={styles.sort}>
        <label htmlFor='priority'>
          priority:
          <select
            className={styles.textTodo}
            name='priority'
            id='priority'
            onChange={onClickListPriority}
            value={selectedPriority}
          >
            <option value='1'>→ Default ←</option>
            <option value='2'>↑ Ascending ↑</option>
            <option value='3'>↓ Descending ↓</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SortCard;
