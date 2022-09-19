import styles from './Category.module.scss';

interface CategoryCardProps {
  title: string;
}
const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  return (
    <div className={styles.categoryCard}>
      <div>
        <div className='title'>{props.title}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
