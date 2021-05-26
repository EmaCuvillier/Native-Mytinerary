import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Drawer from './navigation/Drawer';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import mainReducer from './src/redux/reducers/mainReducer'
import thunk from 'redux-thunk';

const miStore = createStore(mainReducer, applyMiddleware(thunk))

export default function App(props) {
  return (
    <Provider store={miStore}>
      <NavigationContainer>
        <Drawer props={props}/>
      </NavigationContainer>
    </Provider>
  );
}

