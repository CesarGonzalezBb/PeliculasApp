import { useRef } from 'react';
import { Animated } from 'react-native';

const opacity = useRef(new Animated.Value(0)).current;

export const useFade = () => {

   const fadeIn = () => {
      Animated.timing(
         opacity,
         {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
         }
      ).start()
   }

   const fadeOut = () => {
      Animated.timing(
         opacity,
         {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
         }
      ).start()
   }
   
   return {
      fadeIn,
      fadeOut,
      opacity,
   }
}
