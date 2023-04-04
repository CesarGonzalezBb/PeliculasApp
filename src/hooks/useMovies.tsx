import { useEffect, useState } from 'react';
import movieDB from '../api/getMovies';
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface';


export const useMovies  = () => {
   
   const [ isLoading, setIsLoafing ] = useState(true);
   const [ peliculasActuales, setPeliculasActuales ] = useState<Movie[]>();
   
   const getMovies = async() => {
     
      const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
      setPeliculasActuales( resp.data.results );

      setIsLoafing(false);
   }

   useEffect(() => {
      getMovies();
   }, []);

   return {
      peliculasActuales,
      isLoading
   }
}
