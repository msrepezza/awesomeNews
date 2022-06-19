import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/formatDate'

export const CardArticle = ({ data }) => {

  return (
    <div className='max-w-sm bg-white m-2 box-content h-246 w-246 box-border border-2 border-neutral'>
          <div>
            <img src={ data.thumbnailUrl} alt='Imagen'/>
          </div>
        
          <div className='p-2'>
            <div>
              <p className='body'>{ data.title }</p>
            </div>
          </div>

          <div className='p-2 divide-y divide-neutral'>
            <div className='flex items-center justify-between h-12'>
              <div className='bodyDescription'> {data.category} </div>
              <div>
                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg> </span>
                <span className='bodyDescription'> {data.views} </span>
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between h-12' >
                <p className='bodyDescription'> { formatDate(data.createdAt) } </p>
                <Link to={`/article/${data.id}`}><button className='bg-purple rounded px-2 text-xs text-white h-8 w-18'>Read More</button></Link>
              </div>
            </div>

          </div>
    </div>
  )

}
