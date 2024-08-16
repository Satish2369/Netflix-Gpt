
import useNowPLayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies"

import Bg from "./Bg";
import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";




const Browse = () => {

useNowPLayingMovies();
usePopularMovies();

return (
  <div className="">

<Header/>
<MainContainer/>

<SecondaryContainer/>

  </div>
)



}
export default Browse;