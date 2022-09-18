import styles from './App.module.scss';
import TodoPanel from './components/TodoPanel/TodoPanel';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { TodoProvider } from './utils';

const App = () => {
  return (
    <TodoProvider>
      <div className={styles.wrapper}>
        <div className={styles.app}>
          <Header />
          <TodoPanel mode='add' />
          <Content />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
