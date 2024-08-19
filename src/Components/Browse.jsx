
import useNowPLayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies"
import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";



const Browse = () => {


  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)


useNowPLayingMovies();
usePopularMovies();

return (
  <div className="">

<Header/>


{ showGptSearch  ?( <GPTSearchPage/>  ): (<> <MainContainer/>
<SecondaryContainer/>  </>        
)
 } 


  </div>
)



}
export default Browse;