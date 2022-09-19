import React from 'react';
import styles from './SortCard.module.scss';
import { useTodo } from '../../utils';

const SortCard = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const list: string[] = ['priority', 'asc priority', 'desc priority'];

  const { setSelected, selected } = useTodo();

  const onClickList = (i: number) => {
    setSelected(i);
    setOpen(false);
  };

  return (
    <div className={styles.sortCard}>
      <div className={styles.sort}>
        <b>sort by :</b>
        <span onClick={() => setOpen(!open)}>{list[selected]}</span>
        {open && (
          <div className={styles.sortPopupActive}>
            <ul>
              {list.map((el: string, i: number) => (
                <li
                  onClick={() => onClickList(i)}
                  className={selected === i ? styles.active : ''}
                  key={i}
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortCard;
