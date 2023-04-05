import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import currencyFormatter from 'currency-formatter';
import { Cast, MovieDetailsInterface } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from '../components/CastItem';

interface Props {
    movieFull: MovieDetailsInterface;
    cast: Cast[];
}

export const MovieDetails = ( {movieFull, cast}: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20}}>

        <View style={{flexDirection: 'row'}}>
            <Icon
                name="star-outline"
                color="grey"
                size={20}
            />
            <Text style={{...styles.texto, marginLeft: 5}}>{ movieFull.vote_average}</Text>
            <Text style={{...styles.texto, marginLeft: 5}}>
                - { movieFull.genres.map( g => g.name).join(', ') }
            </Text>
        </View>
        
        <Text style={{...styles.texto, ...styles.titleCategory}}>
            Historia
        </Text>
        <Text style={{ ...styles.texto, fontSize:14, textAlign: 'justify'}}>{ movieFull.overview }</Text>

        <Text style={{...styles.texto, ...styles.titleCategory}}>
            Presupuesto
        </Text>
        <Text style={{ ...styles.texto, fontSize:14, textAlign: 'justify'}}>
            { currencyFormatter.format(movieFull.budget, { code: 'USD'}) }
        </Text>

        <View style={{ paddingBottom: 15}}>
            <Text style={{ ...styles.titleCategory, ...styles.texto }}>Casting</Text>
            <FlatList
                data={ cast }
                keyExtractor={ ( item ) => item.id.toString() }
                renderItem={ ({ item }) => <CastItem actor={ item } /> }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                style={{ ...styles.carouselProfil }}
            />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    texto:{
      color: 'black'
    },
    titleCategory:{
        fontSize:20,
        fontWeight:'bold',
        marginTop: 15
    },
    carouselProfil:{
        marginTop: 10,
        height: 70,
    }
});