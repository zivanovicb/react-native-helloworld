import React, {Component} from 'react';

import {AppRegistry,StyleSheet,View,Image,Text,TouchableHighlight} from 'react-native';

export default class LoginScreen extends Component{
  signMyself = () => {
    
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Babo i izostanci
        </Text>
        
        <View style={styles.images}>
          
          <TouchableHighlight onPress={this.signMyself}>
            <Image
              source={require('./components/img/ja.jpg')}
              style={styles.img}
            />
          </TouchableHighlight>
          
          <TouchableHighlight onPress={this.signBabo}>
            <Image
              source={require('./components/img/babo.jpg')}
              style={styles.img}
            />
          </TouchableHighlight>
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  images: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 70,
    paddingBottom: 200
  },
  img: {
    borderRadius:100,
    width:150,
    height:150
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);