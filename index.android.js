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
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { registerScreens } from './screens';
import FirstTabScreen from './screens/firstScreen';
import SecondTabScreen from './screens/secondScreen';
import ThirdTabScreen from './screens/thirdScreen';
registerScreens(); // this is where you register all of your app's screens

Navigation.startTabBasedApp({
  tabs: [
   {
     label: 'Image', // tab label as appears under the icon in iOS (optional)
     screen: 'FirstTabScreen', // unique ID registered with Navigation.registerScreen
     icon: require('./img/one.jpg'), // local image asset for the tab icon unselected state (optional on iOS)
    //  selectedIcon: require('../img/one_selected.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
     iconInsets: { // add this to change icon position (optional, iOS only).
       top: 6, // optional, default is 0.
       left: 0, // optional, default is 0.
       bottom: -6, // optional, default is 0.
       right: 0 // optional, default is 0.
     },
     title: 'Screen Image', // title of the screen as appears in the nav bar (optional)
     navigatorStyle: {
       }, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
     navigatorButtons: {

     } // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
   },
   {
     label: 'List',
     screen: 'SecondTabScreen',
     icon: require('./img/one.jpg'),
    //  selectedIcon: require('../img/two_selected.png'),
     title: 'Screen List'
   },
   {
     label: 'Others',
     screen: 'ThirdTabScreen',
     icon: require('./img/one.jpg'),
    //  selectedIcon: require('../img/two_selected.png'),
     title: 'Screen Others'
   }
 ],
 appStyle: { // optional, add this if you want to style the tab bar beyond the defaults
   tabBarButtonColor: '#ff69b4', // optional, change the color of the tab icons and text (also unselected)
   tabBarSelectedButtonColor: '#ff00ff', // optional, change the color of the selected tab icon and text (only selected)
   tabBarBackgroundColor: '#87cefa', // optional, change the background color of the tab bar
   orientation: 'portrait',
   tabBarTranslucent: true,
 },
 drawer: { // optional, add this if you want a side menu drawer in your app
   left: { // optional, define if you want a drawer from the left
     screen: 'FirstTabScreen', // unique ID registered with Navigation.registerScreen
     passProps: {} // simple serializable object that will pass as props to all top screens (optional)
   },
   right: { // optional, define if you want a drawer from the right
     screen: 'FirstTabScreen', // unique ID registered with Navigation.registerScreen
     passProps: {} // simple serializable object that will pass as props to all top screens (optional)
   },
   disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
 },
 passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
 animationType: 'fade' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
