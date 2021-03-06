import React, { useContext } from 'react';
import { DataContext } from '../../contexts/dataContext';
import { createArray } from '../../utils/createArray';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';

export const Article = () => {

  const { id } = useParams();

  const newsData = useContext(DataContext);
  const article = createArray(newsData).find(n => n.id === id );
  
  return (
    <div className='container'>
      <div className='p-2'>

        <div>
          <h1 className='titleArticle'>
            {article.title}
          </h1>
        </div>
        
        <div className='grid box-content w-600 justify-items-center'>
          <div>
            <div className='grid grid-cols-3 justify-between'>
              <div className='bodyDescription text-center'> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span> { formatDate(article.createdAt) } </span>
              </div>
              <div className='text-center'> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className='bodyDescription' > {article.views} </span>
              </div>
              <div className='bodyDescription text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <span className='bodyDescription'> {article.category} </span>
              </div>
            </div>
          </div>

          <div className='m-2'>
            <img src={article.imageUrl} alt='Imagen del articulo'/>
          </div>
        </div>

        <div>
          <div>
            <h2 className='bodyBold'>{article.subtitle}</h2>
          </div>
          <div>
            <p className='body'>{article.body}</p>
          </div>
        </div>
      </div>
    </div>
  )

}
