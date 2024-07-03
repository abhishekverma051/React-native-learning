// using single class component.
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
class CounterApp extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter0Value : 0,
      counter1Value : 10,
    };
  }

   incrementCounter0 = () => {
    this.setState({ counter0Value: this.state.counter0Value + 1 });
  };
  decrementCounter0 = () => {
    this.setState({counter0Value: this.state.counter0Value - 1});
  };
  resetCounter0 = () => {
    this.setState({counter0Value : 0});
  };
  incrementCounter1 = () => {
    this.setState({counter1Value: this.state.counter1Value + 1});
  };
  decrementCounter1 = () => {
    this.setState({counter1Value: this.state.counter1Value - 1});
  };
  setEqual = () => {
    this.setState({counter1Value:this.state.counter0Value});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>Counter 0: {this.state.counter0Value}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Up" onPress={this.incrementCounter0} />
            <Button title="Down" onPress={this.decrementCounter0} />
          </View>
          <View style={styles.singleButtonContainer}>
            <Button title="Reset" onPress={this.resetCounter0} />
          </View>
        </View>
        
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>Counter 1: {this.state.counter1Value}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Up" onPress={this.incrementCounter1} />
            <Button title="Down" onPress={this.decrementCounter1} />
          </View>
          <View style={styles.singleButtonContainer}>
            <Button title="Set Equal" onPress={this.setEqualCounter1} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'centre',
    alignItems:'centre',
  },
  counterContainer:{
    margin:20,
    alignItems:'centre',
    
  },
  counterText:{
    fontSize:24,
    marginBottom:10,
    
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    width:300,
  },
  singleButtonContainer:{
    marginTop:10,
  },


});
 export default CounterApp;