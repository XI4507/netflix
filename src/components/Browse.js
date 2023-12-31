import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {
        /*
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList
            - MovieCard

         */
      }
    </div>
  )
}

export default Browse