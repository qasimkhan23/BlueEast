import React, { Component } from 'react';
import { View,StyleSheet, Text } from 'react-native';
import Header from '../components/header';
import Content from '../components/content';
import Buttons from '../components/buttons';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title = 'BILL MANAGER' page = 'home' />
        <Content/>
        <Buttons/>
      </View>
     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:360,
  
    marginTop: 20,
    backgroundColor: 'white',
   
  }
});