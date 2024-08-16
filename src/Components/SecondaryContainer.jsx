import React from 'react'
// import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'






const SecondaryContainer = () => {


const movies = useSelector(store => store.movies)


  return (
    <div className='pt-[105vh]'>   
      
    <MovieList title={"Now Playing"}  movies={movies.nowPlayingMovies}  />





    </div>
  )
}

export default SecondaryContainer