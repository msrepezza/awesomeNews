import React, { useContext } from 'react'
import { DataContext } from '../../contexts/dataContext';
import { createArray } from '../../utils/createArray';

export const Category = () => {
  
  const newsData = useContext(DataContext);
  const news = createArray(newsData);

  console.log(news)

  return (
      <div>
        <p>
          Categorias
        </p>

        <div>
          
        </div>
      </div>

  )

}
