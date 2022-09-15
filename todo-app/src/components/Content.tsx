import { useContext } from 'react';
import appContext from '../context';
import AddTodo from './AddTodo';
import Card from './Card';
import LeftSide from './LeftSide';
import SortCard from './SortCard';

const Content = () => {
  const {} = useContext(appContext);
  return (
    <div className='content'>
      <LeftSide />
      <div className='overflow'>
        <div className='display'>
          <Card />
        </div>
        <SortCard />
        <AddTodo />
      </div>
    </div>
  );
};

export default Content;
