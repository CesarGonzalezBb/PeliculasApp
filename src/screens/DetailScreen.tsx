import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View, Text } from 'react-native';
import { styles } from '../theme/styles';

export const DetailScreen = () => {

   const navigation = useNavigation();

   return (
      <View>
         <Text style={ styles.txtNormal}>Details</Text>
         <Button 
            title='Ir a Home'
            onPress={ () => navigation.navigate('HomeScreen' as never)}
         />
      </View>
   )
}