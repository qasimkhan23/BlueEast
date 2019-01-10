import React, { Component } from 'react';
import { View,StyleSheet, Text,ScrollView,ActivityIndicator, } from 'react-native';
import {GET_BILLS} from './query';
import { Query } from 'react-apollo';



export interface CardProps {
    title: string,
    amount:number,
    
  }
const Loader = () =>{
    return(
        <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}
  
export const List_Content = () => {
  
    
        
    return (
      
        
        <Query query={GET_BILLS}>
        {({ data, loading, error }) => {
            
            if(loading) return <Loader/>
            if(error) return <Text style={{marginTop:100}}>error</Text>
            
        
        return(<ScrollView  >
       <View style={{display:'flex', flexDirection:'row', flexWrap: 'wrap',}} >
          {data.bills.map((item)=>{
              return(
              <Card title = {item.name} amount={item.unitRate}/>
              );
          })}
          </View>
        </ScrollView>);
        }}
    
        </Query>
        
        
        
        
        
        
      
     
    );
  
}
const Card = (props:CardProps)=>{
    return(
      <View>
      
        <View style ={styles.card_amount}>
            <View style ={{backgroundColor:'#4286f4',width:150,height:160,padding:20}}>
            <Text>{props.title}</Text>
            <Text style={{fontSize:20}}> {props.amount}
            </Text>
            </View>
            
            
        </View>
         <View style ={styles.card_title}>
             <View style={{backgroundColor:'#d6fffc',width:150,height:60,padding:20}}>
             <Text>{props.title}</Text>
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
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft:20
  },
  loader:{
      flex:1,
      justifyContent:'center'
  }
});