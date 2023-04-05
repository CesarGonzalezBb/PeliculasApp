import { useEffect, useState } from 'react';
import movieDB from '../api/getMovies';
import { MoviesResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
   nowPlaying: Movie[];
   popular: Movie[];
   topRate: Movie[];
   upcoming: Movie[];
}

export const useMovies  = () => {
   
   const [ isLoading, setIsLoafing ] = useState(true);
   const [ moviesState, setMoviesState ] = useState<MoviesState>({
      nowPlaying: [],
      popular: [],
      topRate: [],
      upcoming: [],
   });

   
   const getMovies = async() => {
     
      const nowPlayingPromise = movieDB.get<MoviesResponse>('/now_playing');
      const popularPromise    = movieDB.get<MoviesResponse>('/popular');
      const topRatePromise    = movieDB.get<MoviesResponse>('/top_rated');
      const upcomingPromise   = movieDB.get<MoviesResponse>('/upcoming');

      const response = await Promise.all([
         nowPlayingPromise,
         popularPromise,
         topRatePromise,
         upcomingPromise,
      ]);

      setMoviesState({
         nowPlaying: response[0].data.results,
         popular: response[1].data.results,
         topRate: response[2].data.results,
         upcoming: response[3].data.results,
      })


      setIsLoafing(false);
   }

   useEffect(() => {
      getMovies();
   }, []);

   return {
      ...moviesState,
      isLoading,
   }
}
