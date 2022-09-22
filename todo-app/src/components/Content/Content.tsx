import React from 'react';

import { useTodo } from 'utils';

import LeftSide from 'components/LeftSide/LeftSide';
import Card from 'components/Card/Card';
import TodoPanel from 'components/TodoPanel/TodoPanel';

import styles from './Content.module.scss';

const Content: React.FC = () => {
  const { todos, todoIdForEdIT, filterCategory } = useTodo();

  return (
    <div className={styles.content}>
      <LeftSide />
      <div className={styles.overflow}>
        <div className={styles.display}>
          {todos.filter(filterCategory).map((todo) => {
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
        <TodoPanel mode='add' />
      </div>
    </div>
  );
};

export default Content;
