const Card = (props: any) => {
  return (
    <div className='card'>
      <div className='carditem'>
        <div className='cardname'>{props.task.taskName}</div>
        <div className='priority'>{props.task.priority}</div>
        <div className='category'>{props.task.category}</div>
        <div className='checked'>{props.task.checked}</div>
      </div>
    </div>
  );
};

export default Card;
