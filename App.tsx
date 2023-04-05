import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';

export default function App() {
   return (
      <NavigationContainer>
         <Navigation />
         {/* <FadeScreen /> */}
      </NavigationContainer>
   );
}