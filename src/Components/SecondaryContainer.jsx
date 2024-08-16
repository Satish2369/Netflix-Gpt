import React from 'react'

import { useSelector } from 'react-redux'
import MovieList from './MovieList'






const SecondaryContainer = () => {


const movies = useSelector(store => store.movies)


  return (

    movies.nowPlayingMovies && (
    <div className=' bg-black'>   
      
      <div className='-mt-32 relative z-20'>
      <MovieList title={"Now Playing"}  movies={movies?.nowPlayingMovies}  />
      </div>
       {console.log(movies.PopularMovies)
       }
      <MovieList title={"Popular"}  movies={movies?.popularMovies}  />
    <MovieList title={"Horror"}  movies={movies.nowPlayingMovies}  />
    <MovieList title={"Love and Fantasy"}  movies={movies.nowPlayingMovies}  />


     






    </div>
    )
  )
}

export default SecondaryContainer