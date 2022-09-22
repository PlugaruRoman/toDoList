import React from 'react';

import { useTodo } from 'utils';

import styles from './SortCard.module.scss';

const SortCard: React.FC = () => {
  const { selectedPriority, onClickListPriority } = useTodo();

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
            <option value='def'>→ Default ←</option>
            <option value='asc'>↑ Ascending ↑</option>
            <option value='desc'>↓ Descending ↓</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SortCard;
