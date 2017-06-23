import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import CodeChat from "./Application/CodeChat.js";
import styles from "./Application/css/MainScreenStyle.js"
import Sprite from "./Application/Sprite.js";

class MainScreen extends Component {
  constructor(){
      super();
  }

  render() {
    return (
        <View style={styles.container}>
          <Sprite name="Coding-Chat" intent={this.props.navigation}/>
          <Sprite name="Cyber-Chat" intent={this.props.navigation}/>
        </View>
    );
  }
}



const AppStack = StackNavigator({
  Home:{screen:MainScreen},
  CodeChat:{screen:CodeChat}

});


AppRegistry.registerComponent('Chat', () => AppStack);
