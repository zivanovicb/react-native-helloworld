import React, {Component} from 'react';
import {View,Text,StyleSheet,AppRegistry} from 'react-native';

import Izostanak from './Izostanak';

export default class Opravdani extends Component{
  render(){
    return(
      <View>
        <Text>Opravdani</Text>

        <View id="neopravdani">
          <Izostanak datum="26/06" razlog="rodjendan" tip="op"/>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  izostanak:{
    backgroundColor: 'red',
    padding:10,
    borderRadius:5
  }
});

AppRegistry.registerComponent('Opravdani',() => Opravdani);