import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class ThirdTabScreen extends React.Component {
  constructor() {
      super()
  }
  render(){
    return(
      <View style={style.container}>
        <Image source={require('../img/supreme.png')}
          style={style.image}>
        </Image>
      </View>
    )
  }
}
var style = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
  }

})
