import React from 'react'
import MovieCard from './MovieCard'






const MovieList = ({title,movies}) => {
    console.log(movies)
  return (
    <div>
       <div className=''>
            <h1 className='text-4xl py-6'>{title}</h1>
          <div className='flex overflow-x-scroll scrollbar-hide'>
             <div className='flex'>


             {movies.map((movie)  =>  <MovieCard  key={movie.id}   posterPath={movie.poster_path}/>)}




             </div>
             </div>
        </div>





    </div>
  )
}

export default MovieList