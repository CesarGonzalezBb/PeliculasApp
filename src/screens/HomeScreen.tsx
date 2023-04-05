import React from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
// import ImageColors from 'react-native-image-colors';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
   
   const {nowPlaying, popular, topRate, upcoming, isLoading } = useMovies();
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

   const getPosterColors = async ( index: number ) => {
      const movie = nowPlaying[index];
      const urlImage  = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

      // const colors = await ImageColors.getColors(urlImage, {});
      // console.log(colors);
   }

   return (
      <GradientBackground>
         <ScrollView>
            <View style={{ margin: top + 20 }}>
               <View style={{
                  height: 440,
                  flexDirection: 'row'
               }}>
                  <Carousel 
                     data={ nowPlaying }
                     renderItem={ ({ item}: any) => <MoviePoster movie={ item }/> }
                     sliderWidth={ windowWidth }
                     itemWidth={ 300 }
                     inactiveSlideOpacity={0.9}
                     onSnapToItem={ index => getPosterColors( index )}
                  />
               </View>

               <HorizontalSlider title='En cartelera' movies={ nowPlaying }/>
               <HorizontalSlider title="Populares" movies={ popular }/>
               <HorizontalSlider title="Top" movies={ topRate }/>
               <HorizontalSlider title="Próximos Estrenos" movies={ upcoming }/>
            </View>

         </ScrollView>
      </GradientBackground>
   )
}

