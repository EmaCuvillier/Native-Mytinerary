import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Drawer from './navigation/Drawer';

export default function App(props) {
  return (
    <NavigationContainer>
      <Drawer props={props}/>
    </NavigationContainer>
  );
}

