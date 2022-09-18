import styles from './TodoPanel.module.scss';
import { useTodo } from '../../utils';

interface AddTodoPanelProps {
  mode: 'add';
}
interface EditTodoPanelProps {
  mode: 'edit';
  editTodo: Omit<Todo, 'id' | 'checked'>;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === 'edit';

  const { addTodo, onChange, todo, changeTodo } = useTodo();

  const onClick = () => {
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
    <div className={styles.addTodo}>
      <div className='inputcontainer'>
        <input
          className={styles.textTodo}
          name='name'
          type='text'
          id='name'
          onChange={onChange}
          value={todo ? todo.name : ''}
        />
        <div className={styles.priority}>
          <select
            className={styles.textTodo}
            name='priority'
            id='priority'
            value={todo ? todo.priority : ''}
            onChange={onChange}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
      </div>
      {!isEdit && (
        <button onClick={() => onClick()} className={styles.addTodoButton}>
          ADD
        </button>
      )}
      {isEdit && (
        <button onClick={() => onClick()} className={styles.addTodoButton}>
          EDIT
        </button>
      )}
    </div>
  );
};
export default TodoPanel;
