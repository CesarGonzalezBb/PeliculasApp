import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';
import { useMovies } from '../hooks/useMovies';

interface Props {
   title?: string,
   movies: Movie[]
}

export const HorizontalSlider = ( { movies, title}: Props) => {

   return (
      <View style={{
         ...styles.listMovies,
         // height: ( title ) ? 260 : 220
      }}>
      {
         title && <Text style={ styles.titulos }>{ title }</Text>
      }
      <FlatList
         data={ movies }
         renderItem={ ({ item }: any) => (
            <MoviePoster movie={ item } width={ 140 } height={ 200 }/>
         )}
         keyExtractor={ (item) => item.id.toString() }
         horizontal={ true }
         showsHorizontalScrollIndicator={ false }
      />
   </View>
  );
}

const styles = StyleSheet.create({
   titulos:{
      color: "#000000",
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 15
   },
   listMovies:{
      marginVertical: 30,
      height: 220
   }
});