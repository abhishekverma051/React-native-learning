// using use state and useEffect
// alert function will display when the value of counter1 and counter2 will be equal.
import React, { useState, useEffect } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const CounterAlert = () => {
 const [counter1,setCounter1] = useState(0);
 const [counter2,setCounter2] = useState(0);

 useEffect(()=>{
   if(counter1 === counter2){
     Alert.alert('counter are equal,please change the value');
   }

 },[counter1,counter2])


  const incrementCounter1 = () => {
    setCounter1(counter1 + 1);
  }
  const incrementCounter2 = () => {
    setCounter2(counter2 + 1);
  }
  return (
  <View style={styles.container}>
    <Button title={`Counter 1: ${counter1}`} onPress={incrementCounter1} />
    <Button title={`Counter 2: ${counter2}`} onPress={incrementCounter2} />
  </View>
);
};

const styles = StyleSheet.create({
   container:{
     flex:1,
     justifyContent:'centre',
     alignItems:'centre',
   }
});
export default CounterAlert;