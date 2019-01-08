import React, { Component } from 'react';
import { View,StyleSheet, Text,ScrollView } from 'react-native';

export const List_Content = () => {
  
    return (
      
        
        
        <ScrollView  >
       <View style={{display:'flex', flexDirection:'row', flexWrap: 'wrap',}} >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> 
            </View>
            
        </ScrollView>
        
        
        
        
        
      
     
    );
  
}
const Card = ()=>{
    return(
      <View>
      
        <View style ={styles.card_amount}>
            <View style ={{backgroundColor:'#4286f4',width:150,height:160,marginTop:10,padding:20}}>
            <Text>title</Text>
            <Text style={{fontSize:20}}> Amount
            </Text>
            </View>
            
            
        </View>
         <View style ={styles.card_title}>
             <View style={{backgroundColor:'#d6fffc',width:150,height:60,padding:20}}>
             <Text>title</Text>
             </View>
            
           
            
         </View>
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    marginTop: 20,
    backgroundColor: 'white',
    width:360,   
  },
  card_amount:{

    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop:20,
    marginLeft:20
  },
  card_title:{

    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft:20
  }
});