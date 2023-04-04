import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
// import { styles } from '../theme/styles';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {

    const urlImage  = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
    return (
    <View style={{
        width: 200,
        height: 400
    }}>
        <View style={ styles.imageContainer}>
            <Image 
                source={{ uri: urlImage }}
                style={ styles.image }
            />

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        borderRadius: 17,
        

    },
    imageContainer:{
        flex:1, 
        borderRadius:17,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.29,
        shadowRadius: 15,
        
        elevation: 10,
    }
});