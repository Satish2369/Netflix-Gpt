
import { useDispatch } from 'react-redux';
import { addNOwPlayingMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

 import React, { useEffect } from 'react'



const useNowPLayingMovies = ()=>{
  const dispatch = useDispatch();
    
const getNowPlayingMovies = async ()=>{

const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)

const json = await data.json();
console.log(json.results)

dispatch(addNOwPlayingMovies(json.results))

}

useEffect(()=>{

getNowPlayingMovies();

},[])


  
}


export default useNowPLayingMovies;