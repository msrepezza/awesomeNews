import React, { useContext } from 'react'
import { CardArticle } from '../../components/CardArticle';
import { DataContext } from '../../contexts/dataContext';
import { createArray } from '../../utils/createArray'

export const MostRecent = () => {

  const newsData = useContext(DataContext);
  const news = createArray(newsData);

  console.log(Array.isArray(news))
  console.log(news)

  //const mostRecentNews = [];
  //console.log(newsData.data)
  //var mostRecentNews = Object.keys(newsData.data);
  //console.log(mostRecentNews);

  return (
    <div>
      <div className='container'>
        <p>
          Mas recientes
        </p>

        <div className='grid grid-cols-3'>
          {
            news.map(article => (
              <CardArticle key={article.id} data={article}></CardArticle>
            ))
          }
        </div>
      </div>
    </div>
  )
}
