import React, { Component } from 'react';
import { View,StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header';
import Create_Content from '../components/create_content';
export default class Create extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title = 'CREATE BILL (step 1)' page = 'create'/>
        <Create_Content/>
        
        
      </View>
     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    marginTop: 20,
    backgroundColor: 'white',
    width:360,   
  }
});