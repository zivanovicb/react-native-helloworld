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
  Button,
  Alert
} from 'react-native';

import DodajIzostanak from './components/DodajIzostanak';
import Neopravdani from './components/Neopravdani';
import Opravdani from './components/Opravdani';

export default class Izostanci extends Component {
  state = {
    opravdani: [],
    neopravdani: []
  }
  dodajIzostanak = (datum,razlog,tip) => {
    const {opravdani,neopravdani} = this.state;
    if(tip == "op"){
      this.setState({
        opravdani: this.state.opravdani.concat([{razlog,datum,tip}])
      })
    }else if(tip == "neop"){
      this.setState({
        neopravdani: this.state.neopravdani.concat([{razlog,datum,tip}])
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Babo i izostanci
        </Text>

        <DodajIzostanak dodajIzostanak={this.dodajIzostanak}/>
        <Neopravdani neopravdani={this.state.neopravdani}/>
        <Opravdani opravdani={this.state.opravdani}/>




      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('Izostanci', () => Izostanci);
