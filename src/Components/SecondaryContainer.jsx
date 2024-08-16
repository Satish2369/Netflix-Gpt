import React from 'react'
// import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'






const SecondaryContainer = () => {


const movies = useSelector(store => store.movies)


  return (

    movies.nowPlayingMovies && (
    <div className='absolute top-[88vh]   z-50 '>   
      
    <MovieList title={"Now Playing"}  movies={movies.nowPlayingMovies}  />
    <MovieList title={"Trending"}  movies={movies.nowPlayingMovies}  />
    <MovieList title={"Upcoming"}  movies={movies.nowPlayingMovies}  />
    <MovieList title={"Horror"}  movies={movies.nowPlayingMovies}  />
    <MovieList title={"Love and Fantasy"}  movies={movies.nowPlayingMovies}  />






    </div>
    )
  )
}

export default SecondaryContainer