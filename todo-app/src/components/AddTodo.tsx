import React from 'react';
import { useContext } from 'react';
import appContext from '../context';

const AddTodo = () => {
  const { onClickButton, addTask }: any = useContext(appContext);
  return (
    <div className='addtodo'>
      <div className='inputcontainer'>
        <input
          onChange={onClickButton}
          placeholder='Task...'
          className='texttodo'
          name='task'
          type='text'
        />
        <input
          onChange={onClickButton}
          placeholder='Priority...'
          className='texttodo'
          name='priority'
          type='number'
        />
      </div>
      <button onClick={() => addTask()} className='addtodobutton'>
        Add Todo
      </button>
    </div>
  );
};
export default AddTodo;
