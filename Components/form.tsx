import React from "react";
import { Button, TextInput, View,StyleSheet,Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required()
      
    
  });
  
export default Form = props => (
    <Formik onSubmit={values => alert(JSON.stringify(values, null, 2))}
    validationSchema={validationSchema}>
    {props => {
      return (
        <View style={{ padding: 10 }}>
          <TextInput placeholder="formik" 
          onChangeText={text => props.setFieldValue("name", text)}/>
         <Text>{props.errors.name}</Text>
          
          
          <Button onPress={props.handleSubmit} title="SUBMIT" />

          <Text style={{ fontSize: 20 }}>{JSON.stringify(props, null, 2)}</Text>
        </View>
      );
    }}
  </Formik>
);
const styles = StyleSheet.create({
    button:{
        marginTop:200
    }
})