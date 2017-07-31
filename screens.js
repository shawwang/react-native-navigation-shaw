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
  NativeModules
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import FirstTabScreen from './screens/firstScreen';
import SecondTabScreen from './screens/secondScreen';
import ThirdTabScreen from './screens/thirdScreen';
export  function registerScreens() {
  Navigation.registerComponent('FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('ThirdTabScreen', () => ThirdTabScreen);
}
