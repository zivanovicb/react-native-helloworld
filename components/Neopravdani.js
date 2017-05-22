import React, {Component} from 'react';
import {View,Text,StyleSheet,AppRegistry,Button,Alert} from 'react-native';

import Izostanak from './Izostanak';

export default class Neopravdani extends Component{

  constructor(props){
    super(props);
    this.state = {
      neopravdani: []
    }
  }
  componentWillReceiveProps(nextProps){

    const {neopravdani} = nextProps;
    this.setState({neopravdani: this.state.neopravdani.concat(neopravdani)});
  }

  renderNeopravdani = neopravdani => {


    return neopravdani.map((item,i,array) => {
      return <Izostanak key={i} datum={item.datum} razlog={item.razlog} tip="neop"/>
    });
  }
  render(){
    return(
      <View>
        <Text>Neopravdani</Text>


        <View id="neopravdani">
          {this.renderNeopravdani(this.state.neopravdani)}
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

AppRegistry.registerComponent('Neopravdani',() => Neopravdani);