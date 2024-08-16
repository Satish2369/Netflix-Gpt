
import {useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackGround = ({movieId}) => {
  
const trailerVideo = useSelector(store=> store.movies?.trailerVideo)

useMovieTrailer(movieId);

//fetching trailer video

  return (
    <div className='w-full h-[95vh] relative flex items-center justify-center overflow-hidden'>
       <iframe 
         className='aspect-square w-full max-w-[100vh   '
        
         src={"https://www.youtube.com/embed/" + trailerVideo?.key   +"?&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"    }
         title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe> 
    </div>
  )
}

export default VideoBackGround;


