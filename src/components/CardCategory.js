import React from 'react'

export const CardCategory = ({data}) => {

  return (
    <div className='bg-white m-2 box-border border-2 border-neutral'>
      <div>
          <div>
            <img src={ data.imageUrl }></img>
          </div>
        
          <div className='p-2'>
            <div>
              <p className='titleCategory'>{ data.category }</p>
            </div>
          </div>
      </div>
    </div>

  )
}
