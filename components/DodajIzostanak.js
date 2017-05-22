import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class DodajIzostanak extends Component{
  state = {
    text: ''
  }
  handleChange = text => {
    this.setState({text})
  }
  dodaj = () => {
    const { dodajIzostanak } = this.props;
    const {text} = this.state;
    const _ = text.indexOf(' ');
    let datum = text.substring(0,_);
    let razlog = text.substring(_+1);
    if(text != ''){
      dodajIzostanak(datum,razlog,'neop');
    }
  }
  render(){
    return(
      <View style={{flexDirection:'row',margin:20}}>
        <TextInput
          style={{width:200,height:40}}
          placeholder="Datum i razlog"
          onChangeText={this.handleChange}/>
        <Button
          onPress={this.dodaj}
          title="Dodaj"/>
      </View>
    )
  }
}


AppRegistry.registerComponent('DodajIzostanak', () => DodajIzostanak);