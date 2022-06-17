import React, { useContext } from 'react'
import { CardArticle } from '../../components/CardArticle';
import { DataContext } from '../../contexts/dataContext';
import { createArray } from '../../utils/createArray'

export const MostRecent = () => {

  const newsData = useContext(DataContext);
  const news = createArray(newsData);
  const mostRecentNews = news.sort( (a,b) => (new Date(b.createdAt) - new Date(a.createdAt)) );

  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-3'>
          {
            mostRecentNews.map(article => (
              <CardArticle key={article.id} data={article}></CardArticle>
            ))
          }
        </div>
      </div>
    </div>
  )
}
