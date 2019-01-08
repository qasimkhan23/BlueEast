import React, { Component } from 'react';
import { View,StyleSheet, Text,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header';
import {List_Content} from '../components/list_content';
export const List = () => {
  
    return (
      <View style={styles.container}>
        <Header title = 'BILL MANAGER' page = 'list'/>
        
        
        <List_Content/>
        
        
        
        
      </View>
     
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    marginTop: 20,
    backgroundColor: 'white',
    width:360,   
  }
});