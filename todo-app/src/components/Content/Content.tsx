import React from 'react';
import LeftSide from '../LeftSide/LeftSide';
import Card from '../Card/Card';
import styles from './Content.module.scss';
import TodoPanel from '../TodoPanel/TodoPanel';
import { useTodo } from '../../utils';

const Content: React.FC = () => {
  const { todos, todoIdForEdIT, selected } = useTodo();

  return (
    <div className={styles.content}>
      <LeftSide />
      <div className={styles.overflow}>
        <div className={styles.display}>
          {selected === 0 &&
            todos &&
            todos.map((todo) => {
              if (todo.id === todoIdForEdIT)
                return (
                  <TodoPanel
                    mode='edit'
                    key={todo.id}
                    editTodo={{ name: todo.name, priority: todo.priority }}
                  />
                );
              return <Card todos={todo} key={todo.id} />;
            })}
          {selected === 1 &&
            todos &&
            todos
              .sort((a, b) => a.priority - b.priority)
              .map((todo) => {
                if (todo.id === todoIdForEdIT)
                  return (
                    <TodoPanel
                      mode='edit'
                      key={todo.id}
                      editTodo={{ name: todo.name, priority: todo.priority }}
                    />
                  );
                return <Card todos={todo} key={todo.id} />;
              })}
          {selected === 2 &&
            todos &&
            todos
              .sort((a, b) => a.priority - b.priority)
              .map((todo) => {
                if (todo.id === todoIdForEdIT)
                  return (
                    <TodoPanel
                      mode='edit'
                      key={todo.id}
                      editTodo={{ name: todo.name, priority: todo.priority }}
                    />
                  );
                return <Card todos={todo} key={todo.id} />;
              })
              .reverse()}
        </div>
      </div>
    </div>
  );
};

export default Content;
