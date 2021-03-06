import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class FirstTabScreen extends React.Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarBackgroundColor: '#7fffd4',
    navBarTextColor: '#008b8b',
    navBarTitleTextCentered: true
  };
  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarBackgroundColor: '#7fffd4',
    navBarTextColor: '#008b8b',
    navBarTitleTextCentered: true
  };
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Edit', // for a textual button, provide the button title (label)
        id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontColor: '#008b8b'
      }
    ],
    leftButtons: [
      {
        title: 'back',
        title: 'Edit', // for a textual button, provide the button title (label)
        id: 'back', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        //testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'always', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also
      }
    ],
    fab: {
      collapsedId: 'share',
      backgroundColor: '#607D8B',
      collapsedIcon: require('../img/icon_share.png'),
      expendedId: 'clear',
      expendedIcon: require('../img/icon_share.png'),
      actions: [
        {
          id: 'mail',
          icon: require('../img/icon_share.png'),
          backgroundColor: '#03A9F4'
        },
        {
          id: 'twitter',
          icon: require('../img/icon_share.png'),
          backgroundColor: '#4CAF50'
        }
      ]
    }
  };

  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={style.container}>
        <Image source={require('../img/hand.png')}
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
    backgroundColor: '#00ffff',
  }
})
