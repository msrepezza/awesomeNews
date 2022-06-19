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
        'thumbnailUrl': item.thumbnailUrl
      }

      acc.push(newItem);
    }
    return acc;
  },[])

  return (
    <div className='container'>
      <div className='p-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {
            categories.map(category => (
              <CardCategory 
                key={category.id} 
                data={category}>
              </CardCategory>
            ))
          }
        </div>
      </div>
    </div>
  )

}
