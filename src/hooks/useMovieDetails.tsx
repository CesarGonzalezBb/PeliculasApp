import { useState, useEffect } from 'react';
import movieDB from '../api/getMovies';
import { Cast, CreditsResponse, MovieDetailsInterface } from '../interfaces/movieInterface';

interface _MovieDetails {
   isLoading: boolean;
   movieFull?: MovieDetailsInterface;
   cast: Cast[];
};

export const useMovieDetails = ( movieId: number)  => {

   const [state, setState] = useState<_MovieDetails>({
      isLoading: true,
      movieFull: undefined,
      cast: []
   });

   const getMovieDetails = async() => {
      const detailsPromise = await movieDB.get<MovieDetailsInterface>(`/${ movieId }`);
      const castPromise = await movieDB.get<CreditsResponse>(`/${ movieId }/credits`);

      const [ movieDetailsResp, mocieCastResp ] = await Promise.all([
         detailsPromise,
         castPromise,
      ]);
      setState({
         isLoading: false,
         movieFull: movieDetailsResp.data,
         cast: castPromise.data.cast
      });
   }


   useEffect(() => {
      getMovieDetails();
   }, [])
   
   return {
      ...state
   }
}