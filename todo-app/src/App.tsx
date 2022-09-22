import { TodoProvider } from 'utils';

import Header from 'components/Header/Header';
import Content from 'components/Content/Content';

import styles from './App.module.scss';

const App = () => {
  return (
    <TodoProvider>
      <div className={styles.wrapper}>
        <div className={styles.app}>
          <Header />
          <Content />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
