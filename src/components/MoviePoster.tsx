import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { CommonActions, useNavigation } from '@react-navigation/native';


interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const urlImage  = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
        onPress={ () => navigation.dispatch(
            CommonActions.navigate('DetailScreen', movie)
        )}
        activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
        >
            <View style={ styles.imageContainer}>
                <Image 
                    source={{ uri: urlImage }}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>
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
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 8,
    }
});