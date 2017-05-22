import React, {Component} from 'react';
import {View,Text,StyleSheet,AppRegistry,TouchableHighlight} from 'react-native';

export default class NeopIzostanakravdani extends Component{
  state = {
    boja: 'green'
  }
  componentWillMount(){
    const { tip } = this.props;

    if(tip == 'op'){
      this.setState({boja:'green'});
    }else if (tip == 'neop') {
      this.setState({boja:'red'});
    }
  }
  onPress = () => {
    console.warn('wdad')
  }
  render(){
    const {datum,razlog,tip} = this.props;
    const {boja} = this.state;
    const stilovi = StyleSheet.flatten([styles.izostanak,{backgroundColor:boja}])
    return(
      <TouchableHighlight
        onPress={this.onPress}
        style={stilovi}>
          <Text style={{color:'white'}}>{razlog}</Text>
          <Text style={{color:'white'}}>{datum}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  izostanak:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10,
    borderRadius:5
  }
});

AppRegistry.registerComponent('Izostanak',() => Izostanak);