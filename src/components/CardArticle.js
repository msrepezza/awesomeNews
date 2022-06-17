import React from 'react'
import { formatDate } from '../utils/formatDate'

export const CardArticle = ({ data }) => {

  return (
    <div className='max-w-sm bg-white m-2 box-content h-128 w-128'>

      <div>
        <img src={ data.imageUrl } className='box-border h-128 w-128' ></img>
      </div>

      <div>
        <div>
          <p className='body'>{ data.title }</p>
        </div>
        
        <div className='flex items-center justify-between'>
          <p className='bodyDescription'> {data.category} </p>
          <p className='bodyDescription'> {data.views} </p>
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between' >
          <p className='bodyDescription'> { formatDate(data.createdAt) } </p>
          <button className='bg-purple rounded px-2 bodyDescription'>Read More</button>
        </div>
      </div>

    </div>
  )

}
