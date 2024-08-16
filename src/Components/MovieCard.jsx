import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {




  return (
    <div className='pr-4  flex-shrink-0'>
        
        <img 
        className='h-72 w-60 aspect-6/10'
        src={IMG_CDN + posterPath}
         alt="Movie Card"
          />
       </div>
  )
}

export default MovieCard