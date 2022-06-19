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
              <div className='bodyDescription'> 
                <span className='bodyDescription'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                  {data.category} 
                </span>
              </div>
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
                <span className='bodyDescription'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  { formatDate(data.createdAt) } 
                </span>
                <Link to={`/article/${data.id}`}><button className='bg-purple rounded px-2 text-xs text-white h-8 w-18'>Read More</button></Link>
              </div>
            </div>

          </div>
    </div>
  )

}
