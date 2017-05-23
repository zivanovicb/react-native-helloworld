/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';


import Home from './Home';

export default class Izostanci extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('Izostanci', () => Izostanci);
