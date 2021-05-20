import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogoPresentacion from './src/components/LogoPresentacion';
import Home from './src/pages/Home';
import Itineraries from './src/pages/Itineraries';

//<LogoPresentacion /> <Home />
export default function App() {
  return (
    <>
      <Itineraries/>
    </>
  );
}

