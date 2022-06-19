import React, { useContext } from 'react';
import { DataContext } from '../../contexts/dataContext';
import { createArray } from '../../utils/createArray';
import { CardArticle } from '../../components/CardArticle';
import { useParams } from 'react-router-dom';

export const ByCategory = () => {

    const { category } = useParams();

    const newsData = useContext(DataContext);
    const news = createArray(newsData);
    const newsByCategory = news.filter( n => n.category === category );

    return (
        <div className='container'>
            <div className='p-2'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                {
                    newsByCategory.map(article => (
                        <CardArticle key={article.id} data={article}></CardArticle>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
