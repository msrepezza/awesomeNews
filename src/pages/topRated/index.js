import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../../contexts/dataContext';
import { createArray } from '../../utils/createArray';
import { CardArticle } from '../../components/CardArticle';

export const TopRated = () => {

    const newsData = useContext(DataContext);
    const news = createArray(newsData);
    const topRatedNews = news.sort( (a,b) => (new Date(b.views) - new Date(a.views)) );
    const top10News = topRatedNews.slice(0, 20)

    return (
      <div>
        <div className='container'>
          <div className='grid grid-cols-3'>
            {
              top10News.map(article => (
                <CardArticle key={article.id} data={article}></CardArticle>
              ))
            }
          </div>
        </div>
      </div>
    )
}
