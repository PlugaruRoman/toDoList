import styles from './Card.module.scss';

interface CardProps {
  todo: Todo;
  checkTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
}

const Card: React.FC<CardProps> = ({
  todo,
  checkTodo,
  deleteTodo,
  selectTodoIdForEdit,
}) => {
  return (
    <div
      style={{
        opacity: todo.checked ? 0.5 : 1,
        background: todo.checked ? 'green' : 'white',
        textDecoration: todo.checked ? 'line-through' : 'none',
      }}
      className={styles.card}
    >
      <div className={styles.cardItem}>
        <div className='cardname'>Task: {todo.name}</div>
        <div className='priority'>Priority: {todo.priority}</div>
        <div className='checked'>
          Checked: {todo.checked ? 'yes' : 'not Checked'}
        </div>
        <div className={styles.cardItemButtons}>
          <div className={styles.editCard}>
            <button
              onClick={() => selectTodoIdForEdit(todo.id)}
              className={styles.edit}
            >
              EDIT
            </button>
          </div>
          <div className={styles.deleteCard}>
            <button
              onClick={() => deleteTodo(todo.id)}
              className={styles.delete}
            >
              DELETE
            </button>
          </div>
          <div className={styles.checkButton}>
            <button onClick={() => checkTodo(todo.id)}>DONE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
