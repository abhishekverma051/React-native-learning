// by using differnet class components as per the counter

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Counter extends Component {
  increment = () => {
    this.props.updateCounter(this.props.value + 1);
  };

  decrement = () => {
    this.props.updateCounter(this.props.value - 1);
  };

  reset = () => {
    this.props.updateCounter(this.props.initialValue);
  };

  render() {
    return (
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Counter 0: {this.props.value}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Up" onPress={this.increment} />
          <Button title="Down" onPress={this.decrement} />
        </View>
        <View style={styles.singleButtonContainer}>
          <Button title="Reset" onPress={this.reset} />
        </View>
      </View>
    );
  }
}

class Counter1 extends Component {
  increment = () => {
    this.props.updateCounter(this.props.value + 1);
  };

  decrement = () => {
    this.props.updateCounter(this.props.value - 1);
  };

  setEqual = () => {
    this.props.updateCounter(this.props.counterValue);
  };

  render() {
    return (
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Counter 1: {this.props.value}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Up" onPress={this.increment} />
          <Button title="Down" onPress={this.decrement} />
        </View>
        <View style={styles.singleButtonContainer}>
          <Button title="Set Equal" onPress={this.setEqual} />
        </View>
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter0Value: 0,
      counter1Value: 10,
    };
  }

  updateCounter0 = (value) => {
    this.setState({ counter0Value: value });
  };

  updateCounter1 = (value) => {
    this.setState({ counter1Value: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <Counter
          initialValue={0}
          value={this.state.counter0Value}
          updateCounter={this.updateCounter0}
        />
        <Counter1
          initialValue={10}
          value={this.state.counter1Value}
          counterValue={this.state.counter0Value}
          updateCounter={this.updateCounter1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
  },
  counterContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  counterText: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 200,
  },
  singleButtonContainer: {
    marginTop: 10,
  },
});

export default App;
