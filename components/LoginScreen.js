import React, {Component} from 'react';

import {AppRegistry,StyleSheet,View,Image} from 'react-native';

export default class LoginScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image
          source={require('./img/ja.jpg')}
          style={styles.img}
        />
        <Image
          source={require('./img/babo.jpg')}
          style={styles.img}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  img: {
    borderRadius:100,
    width:150,
    height:150
  }
})
AppRegistry.registerComponent('LoginScreen', () => LoginScreen);