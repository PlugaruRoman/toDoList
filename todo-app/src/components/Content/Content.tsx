import LeftSide from '../LeftSide/LeftSide';
import Card from '../Card/Card';
import styles from './Content.module.scss';
import TodoPanel from '../TodoPanel/TodoPanel';
interface ContentProps {
  todos: Todo[];
  todoIdForEdIT: Todo['id'] | null;
  checkTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
  addTodo: ({ name, priority }: Omit<Todo, 'checked' | 'id'>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: TodoOne;
}

const Content: React.FC<ContentProps> = ({
  todos,
  checkTodo,
  deleteTodo,
  selectTodoIdForEdit,
  todoIdForEdIT,
  addTodo,
  onChange,
  todo,
}) => {
  return (
    <div className={styles.content}>
      <LeftSide />
      <div className={styles.overflow}>
        <div className={styles.display}>
          {todos.map((todo) => {
            if (todo.id === todoIdForEdIT)
              // @ts-ignore
              return (
                <TodoPanel
                  addTodo={addTodo}
                  onChange={onChange}
                  todo={todo}
                  key={todo.id}
                />
              );
            return (
              <Card
                todo={todo}
                key={todo.id}
                deleteTodo={deleteTodo}
                checkTodo={checkTodo}
                selectTodoIdForEdit={selectTodoIdForEdit}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
