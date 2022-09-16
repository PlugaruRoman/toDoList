const Card = (props: any) => {
  return (
    <div
      style={{
        opacity: props.task.checked ? 0.5 : 1,
        background: props.task.checked ? 'green' : 'white',
        textDecoration: props.task.checked ? 'line-through' : 'none',
      }}
      className='card'
    >
      <div className='carditem'>
        <div className='cardname'>Task: {props.task.name}</div>
        <div className='priority'>Priority: {props.task.priority}</div>
        <div className='category'>Category: {props.task.category}</div>
        <div className='checked'>Checked: {props.task.checked}</div>
        <div className='carditembuttons'>
          <div className='editcard'>
            <button className='edit'>EDIT</button>
          </div>
          <div className='deletecard'>
            <button className='delete'>DELETE</button>
          </div>
          <div className='checkbutton'>
            <button>DONE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
