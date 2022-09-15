import CategoryCard from './CategoryCard';

const LeftSide = () => {
  return (
    <div className='leftbar'>
      <div className='categorylist'>
        <CategoryCard />
      </div>
      <button className='addcategory'>Add Button</button>
    </div>
  );
};

export default LeftSide;
