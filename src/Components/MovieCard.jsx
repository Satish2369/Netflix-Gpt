import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {




  return (
    <div className='pr-3  flex-shrink-0 bg-blend-color-burn '>
        
        <img 
        className='h-82 w-52 aspect-6/10  '
        src={IMG_CDN + posterPath}
         alt="Movie Card"
          />
       </div>
  )
}

export default MovieCard