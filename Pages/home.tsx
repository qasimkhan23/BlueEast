import React, { Component } from 'react';
import { View,StyleSheet, Text } from 'react-native';
import Header from '../Components/header';
import {Content} from '../Components/content';
import Buttons from '../Components/buttons';
export const Home = () => {
  
    return (
      <View style={styles.container}>
        <Header title = 'BILL MANAGER' page = 'home' />
        <Content/>
        <Buttons/>
        
      </View>
     
    );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:360,
  
    marginTop: 20,
    backgroundColor: 'white',
   
  }
});