import React, { useEffect } from 'react';

import { useTodo } from '../../utils';

import LeftSide from '../LeftSide/LeftSide';
import Card from '../Card/Card';
import TodoPanel from '../TodoPanel/TodoPanel';

import styles from './Content.module.scss';

const Content: React.FC = () => {
  const { todos, todoIdForEdIT, selectedCategory } = useTodo();

  useEffect(() => {
    todos.filter((todo) => todo.priority === '4');
  }, [todos, selectedCategory]);

  return (
    <div className={styles.content}>
      <LeftSide />
      <div className={styles.overflow}>
        <div className={styles.display}>
          {todos.map((todo) => {
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
        </div>
      </div>
    </div>
  );
};

export default Content;
