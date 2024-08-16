import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {




  return (
    <div className='pr-3  flex-shrink-0'>
        
        <img 
        className='h-82 w-60 aspect-6/10  bg-color-burn'
        src={IMG_CDN + posterPath}
         alt="Movie Card"
          />
       </div>
  )
}

export default MovieCard