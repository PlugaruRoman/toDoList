import { useContext } from 'react';
import AddTodo from './AddTodo';
import Card from './Card';
import LeftSide from './LeftSide';
import SortCard from './SortCard';
import appContext from '../context';

const Content = () => {
  const { store }: any = useContext(appContext);
  return (
    <div className='content'>
      <LeftSide />
      <div className='overflow'>
        <div className='display'>
          {store.map((el: any) => (
            <Card task={el} />
          ))}
        </div>
        <SortCard />
        <AddTodo />
      </div>
    </div>
  );
};

export default Content;
