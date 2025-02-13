import dayjs from 'dayjs';

import { useTodo } from 'utils';

import styles from './Card.module.scss';

interface CardProps {
  todos: Todos;
}

const Card: React.FC<CardProps> = ({ todos }) => {
  const { checkTodo, deleteTodo, selectTodoIdForEdit } = useTodo();

  const time = dayjs().format('DD/MM/YYYY');

  return (
    <div
      style={{
        opacity: todos.checked ? 0.5 : 1,
        background: todos.checked ? 'green' : 'white',
        textDecoration: todos.checked ? 'line-through' : 'none',
      }}
      className={styles.card}
    >
      <div className={styles.cardItem}>
        <div className={todos.checked ? styles.cardNameDone : styles.cardName}>
          Task: {todos.name}
        </div>
        <div className={styles.priority}>Priority: {todos.priority}</div>
        <div className={styles.cardItemButtons}>
          <div className={styles.editCard}>
            <button
              onClick={() => selectTodoIdForEdit(todos.id)}
              className={styles.edit}
            >
              EDIT
            </button>
            <div className={styles.addedAt}>added at:{time}</div>
          </div>
          <div className={styles.deleteCard}>
            <button
              onClick={() => deleteTodo(todos.id)}
              className={styles.delete}
            >
              DELETE
            </button>
          </div>
          <div className={styles.checkButton}>
            <button onClick={() => checkTodo(todos.id)}>DONE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
