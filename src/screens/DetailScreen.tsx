import React from 'react';
import { Image, View, StyleSheet, ScrollView, Dimensions, Text, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';


const screenHight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ( { navigation, route }: Props ) => {

   const movie = route.params;
   const urlImage  = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

   const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

   return (
      <ScrollView>
         <View style={ styles.container}>
            <View style={ styles.imageBorder}>
               <Image
                  source={{ uri: urlImage }}
                  style={ styles.posterImage}
               />
            </View>
         </View>

         <View style={ styles.marginContainer}>
            <Text style={ styles.subtitle }>{ movie.original_title}</Text>
            <Text style={ styles.title }>{ movie.title}</Text>
         </View>
         {/* 
         <View style={ styles.marginContainer}>
            <Icon 
               name="star-outline"
               color="grey"
               size={20}
            />
         </View> */}

         <View>
            {
               isLoading
                  ? <ActivityIndicator size={ 35 } color='bluew' style={{ marginTop: 20 }} />
                  : <MovieDetails movieFull={ movieFull! } cast={ cast} />
            }
         </View>
         
         <View style={ styles.backButton }>
            <TouchableOpacity
               onPress={ () => navigation.pop()}
            >
               <Icon
                  name="arrow-back-circle-outline"
                  color="white"
                  size={ 40 }
               />
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container:{
      width: '100%',
      height: screenHight * 0.7,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 10,
   },
   imageBorder:{
      flex: 1,
      overflow: 'hidden',
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20
   },
   posterImage: {
      flex: 1,
   },
   marginContainer:{
      marginHorizontal: 20,
      marginTop: 20,
   },
   title:{
      color: '#000000',
      fontSize: 20,
      fontWeight: 'bold'
   },
   subtitle:{
      color: '#595959',
      opacity: 0.8,
      fontSize: 16
   },
   backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      top: 30,
      left: 20,
   }
});