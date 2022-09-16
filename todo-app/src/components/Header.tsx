interface HeaderProps {
  todoCount: number;
}

const Header: React.FC<HeaderProps> = ({ todoCount }) => {
  return (
    <div className='header'>
      <h1 className='title'>Todo-App</h1>
      <h2 className='categoryname'>Category Name</h2>
      <div className='todocount'>Todo List: {todoCount} task's</div>
    </div>
  );
};

export default Header;
