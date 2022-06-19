import React from 'react'

export const CardCategory = ({data}) => {

  return (
    <div className='bg-white m-2 box-border border-2 border-neutral'>
      <a href={`category/${data.category}`}>
        <div>
            <div>
              <img src={ data.thumbnailUrl } alt='Imagen de la categoria'/>
            </div>
          
            <div className='p-2'>
              <div>
                <p className='titleCategory capitalize-first'>{ data.category }</p>
              </div>
            </div>
        </div>
      </a>
    </div>

  )
}
