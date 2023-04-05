import React, { useRef} from 'react';
import { Animated, Button, View, Text, StyleSheet } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
   
   const { fadeIn, fadeOut, opacity } = useFade();

   return (
      <View style={ styles.mainContainer}>
         <Animated.View style={{ ... styles.aditionalContainer, opacity: opacity}} />
         <Button
            title="FadeIn"
            onPress={ fadeIn }
         />
         <Button
            title="FadeOut"
            onPress={ fadeOut }
         />
      </View>
   )
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
   },
   aditionalContainer:{
      backgroundColor: '#084F6a',
      width: 150,
      height: 150,
      borderColor: 'white',
      borderWidth: 10,
   }
});