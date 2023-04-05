import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Cast } from '../interfaces/movieInterface';

interface Props {
   actor: Cast
}

export const CastItem = ({ actor }: Props) => {

   const urlImage  = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;

   return (
      <View style={{ ...styles.container}}>
         {
            actor.profile_path && (
               <Image
                  source={{ uri: urlImage}}
                  style={{ ...styles.imgProfile }}
               />
            )
         }
         <View style={{ marginLeft: 10, paddingTop: 5,}}>
            <Text style={{ ...styles.actorName }}>
               { actor.name }
            </Text>
            <Text style={{ ...styles.character }}>
               { actor.character }
            </Text>
         </View>
      </View>
  );
}

const styles = StyleSheet.create({
   container:{
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 10,
      height: 50,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 7,
      marginRight: 20,
      paddingLeft: 5,
   },
    actorName:{
      color: '#000000',
      fontSize: 15,
      fontWeight: 'bold'
    },
    character: {
      color: '#595959',
      fontSize: 13,
      opacity: 0.7
    },
    imgProfile: {
      width: 50,
      height: 50,
      borderRadius: 10,
    },
});
