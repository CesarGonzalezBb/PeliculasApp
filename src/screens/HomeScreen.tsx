import React from 'react';
import { ActivityIndicator, View, Text, } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Movie } from '../interfaces/movieInterface';
import Carousel from 'react-native-snap-carousel';

export const HomeScreen = () => {
   
   const { peliculasActuales, isLoading } = useMovies();
   const { top } = useSafeAreaInsets();
   if( isLoading ){
      return (
         <View
            style={{
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <ActivityIndicator color='red' size={50} />
         </View>
      )
   }
   return (
      <View style={{ margin: top + 20 }}>
         

         <Carousel 
            data={ peliculasActuales }
            renderItem={ () => <MoviePoster movie={ peliculasActuales[0] }/> }
            sliderWidth={ 350 }
            itemWidth={ 300}
         />
      </View>
   )
}

