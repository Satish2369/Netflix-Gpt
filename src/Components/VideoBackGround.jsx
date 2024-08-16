
import {useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackGround = ({movieId}) => {
  
const trailerVideo = useSelector(store=> store.movies?.trailerVideo)

useMovieTrailer(movieId);

//fetching trailer video

  return (
    <div className='w-full  h-[100vh]  absolute -translate-y-[12%] z-0'>
       <iframe 
         className='w-full aspect-video '
        
         src={"https://www.youtube.com/embed/" + trailerVideo?.key   +"?&autoplay=1&mute=1"    }
         title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe> 
    </div>
  )
}

export default VideoBackGround;


