import { useContext } from 'react';
import appContext from '../context';

const AddTodo = () => {
  const { onChange, todo }: any = useContext(appContext);
  return (
    <div className='addtodo'>
      <div className='inputcontainer'>
        <input
          placeholder='Task...'
          className='texttodo'
          name='name'
          type='text'
          id='name'
          onChange={onChange}
          value={todo.value}
        />
        <input
          placeholder='Priority...'
          className='texttodo'
          name='priority'
          type='number'
          id='priority'
          onChange={onChange}
          value={todo.description}
        />
      </div>
      <button className='addtodobutton'>Add Todo</button>
    </div>
  );
};
export default AddTodo;
