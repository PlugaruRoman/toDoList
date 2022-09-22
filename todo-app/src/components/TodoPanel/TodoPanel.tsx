import { useTodo } from 'utils';

import styles from './TodoPanel.module.scss';

interface AddTodoPanelProps {
  mode: 'add';
}
interface EditTodoPanelProps {
  mode: 'edit';
  editTodo: Omit<Todo, 'id' | 'checked'>;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const { addTodo, onChange, changeTodo, todo } = useTodo();

  const isEdit = props.mode === 'edit';

  const onClickAddButton = () => {
    if (todo) {
      const todoItem = {
        name: todo.name,
        priority: todo.priority,
      };
      if (isEdit) {
        return changeTodo(todoItem);
      }
      addTodo(todoItem);
    }
  };

  return (
    <div className={isEdit ? styles.editTodo : styles.addTodo}>
      <div className='inputcontainer'>
        <input
          className={styles.textTodo}
          placeholder='Task...'
          name='name'
          type='text'
          id='name'
          onChange={onChange}
          value={todo ? todo.name : ''}
        />

        <div className={styles.priority}>
          <label htmlFor='priority'>
            priority:
            <select
              className={styles.textTodo}
              name='priority'
              id='priority'
              value={todo ? todo.priority : 0}
              onChange={onChange}
            >
              <option value='1'>Not important</option>
              <option value='2'>Little important</option>
              <option value='3'>Important</option>
              <option value='4'>Very important</option>
            </select>
          </label>
        </div>
      </div>

      {!isEdit && (
        <button onClick={onClickAddButton} className={styles.addTodoButton}>
          ADD
        </button>
      )}

      {isEdit && (
        <button onClick={onClickAddButton} className={styles.addTodoButton}>
          EDIT
        </button>
      )}
    </div>
  );
};
export default TodoPanel;
