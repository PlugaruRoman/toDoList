import styles from './AddTodoPanel.module.scss';

interface AddTodoPanelProps {
  addTodo: ({ name, priority }: Omit<Todo, 'checked' | 'id'>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: TodoOne;
  mode: 'add';
}
interface EditTodoPanelProps {
  changeTodo: ({ name, priority }: Omit<Todo, 'checked' | 'id'>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: TodoOne;
  mode: 'add';
  editTodo:Omit<Todo,"id"|"checked"
}

type TodoPanelProps = AddTodoPanelProps|EditTodoPanelProps



const AddTodoPanel: React.FC<AddTodoPanelProps> = (props) => {

  const isEdit = props.todo.mode==="edit" 

  const onClick = () => {
    const todoItem ={
      name: props.todo.name,
      priority: props.todo.priority,
    }
    if(isEdit){
      return props.changeTodo(todoItem)
    }
    props.addTodo({
      name: props.todo.name,
      priority: props.todo.priority,
    });
    props.setTodo()
  };

  return (
    <div className={styles.addTodo}>
      <div className='inputcontainer'>
        <input
          placeholder='Task...'
          className={styles.textTodo}
          name='name'
          type='text'
          id='name'
          onChange={props.onChange}
          value={props.todo.name}
        />
        <div className={styles.priority}>
          <div>Priority</div>
          <input
            placeholder='Priority...'
            className={styles.textTodo}
            name='priority'
            type='number'
            min={1}
            max={5}
            id='priority'
            onChange={props.onChange}
            value={props.todo.priority}
          />
        </div>
      </div>
      <button onClick={onClick} className={styles.addTodoButton}>
        Add Todo
      </button>
    </div>
  );
};
export default AddTodoPanel;
