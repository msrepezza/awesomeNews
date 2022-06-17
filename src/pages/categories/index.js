import React, { useContext } from 'react'
import { CardCategory } from '../../components/CardCategory';
import { DataContext } from '../../contexts/dataContext';
import { createArray } from '../../utils/createArray';

export const Category = () => {
  
  const newsData = useContext(DataContext);
  const news = createArray(newsData);

  const categories = news.reduce( (acc,item, i) => {
    if( !acc.some( a => a.category === item.category )){
      let newItem = {
        'id': i,
        'category': item.category,
        'imageUrl': item.imageUrl
      }

      acc.push(newItem);
    }
    return acc;
    },[])

  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-3'>
          {
            categories.map(category => (
              <CardCategory key={category.id} data={category}></CardCategory>
            ))
          }
        </div>
      </div>
    </div>
  )

}
