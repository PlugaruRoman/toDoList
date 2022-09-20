import React from 'react';
import LeftSide from '../LeftSide/LeftSide';
import Card from '../Card/Card';
import styles from './Content.module.scss';
import TodoPanel from '../TodoPanel/TodoPanel';
import { useTodo } from '../../utils';

const Content: React.FC = () => {
  const { todos, todoIdForEdIT, selected, selectedCategory } = useTodo();

  return (
    <div className={styles.content}>
      <LeftSide />
      <div className={styles.overflow}>
        <div className={styles.display}>
          {selected === 0 &&
            selectedCategory === 0 &&
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
            selectedCategory === 0 &&
            todos &&
            todos
              .sort((a, b) => +a.priority - +b.priority)
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
            selectedCategory === 0 &&
            todos &&
            todos
              .sort((a, b) => +a.priority - +b.priority)
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

          {/*category Not Important*/}

          {selectedCategory === 1 &&
            todos &&
            todos
              .filter((item) => item.priority === '1')
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
          {/*category Little Important*/}

          {selectedCategory === 2 &&
            todos &&
            todos
              .filter((item) => item.priority === '2')
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

          {/*category Important*/}

          {selectedCategory === 3 &&
            todos &&
            todos
              .filter((item) => item.priority === '3')
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

          {/*category Very Important*/}

          {selectedCategory === 4 &&
            todos &&
            todos
              .filter((item) => item.priority === '4')
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

          {/*category Completed*/}

          {selected === 0 &&
            selectedCategory === 5 &&
            todos &&
            todos
              .filter((item) => item.checked === true)
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

          {selected === 1 &&
            selectedCategory === 5 &&
            todos &&
            todos
              .filter((item) => item.checked === true)
              .sort((a, b) => +a.priority - +b.priority)
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
            selectedCategory === 5 &&
            todos &&
            todos
              .filter((item) => item.checked === true)
              .sort((a, b) => +a.priority - +b.priority)
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

          {/*category Uncompleted */}

          {selected === 0 &&
            selectedCategory === 6 &&
            todos &&
            todos
              .filter((item) => item.checked === false)
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

          {selected === 1 &&
            selectedCategory === 6 &&
            todos &&
            todos
              .filter((item) => item.checked === false)
              .sort((a, b) => +a.priority - +b.priority)
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
            selectedCategory === 6 &&
            todos &&
            todos
              .filter((item) => item.checked === false)
              .sort((a, b) => +a.priority - +b.priority)
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
