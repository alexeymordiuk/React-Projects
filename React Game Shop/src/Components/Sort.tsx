import React from 'react'
import styles from '../scss/shipspage/Sort.module.scss';

type CategoriesProps = {
	value: number;
	onChangeCategory: (i: number) => void;
};

const Sort: React.FC<CategoriesProps> = ({value, onChangeCategory}) => {
  const categories = ['All', 'Fighter', 'Explorer', 'Shuttle', 'Hauler', 'Rifle', 'Pistol', 'Freighters'];

  return (
    <div className={styles.sort}
    >
        {
          categories.map((categoryName, index) => (
            <button onClick={() => onChangeCategory(index)}
            key={index}
            className={value === index ? styles.active : ''}
            >{categoryName}</button>
          ))
        }
    </div>
  )
}

export default Sort;