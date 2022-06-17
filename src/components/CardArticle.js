import React from 'react'
import { formatDate } from '../utils/formatDate'

export const CardArticle = ({ data }) => {

  return (
    <div className='max-w-sm bg-white m-2 box-content h-246 w-246 box-border border-2 border-neutral'>
      <div>
          <div>
            <img src={ data.imageUrl }></img>
          </div>
        
          <div className='p-2'>
            <div>
              <p className='body'>{ data.title }</p>
            </div>
          </div>

          <div className='p-2 divide-y divide-neutral'>
            <div className='flex items-center justify-between h-12'>
              <p className='bodyDescription'> {data.category} </p>
              <p className='bodyDescription'> {data.views} </p>
            </div>

            <div>
              <div className='flex items-center justify-between h-12' >
                <p className='bodyDescription'> { formatDate(data.createdAt) } </p>
                <button className='bg-purple rounded px-2 text-xs text-white h-8 w-18'>Read More</button>
              </div>
            </div>

          </div>
      </div>
    </div>
  )

}
