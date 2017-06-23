
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Sprite from "./Sprite.js";

class MainScreen extends Component {
  constructor(){
      super();

  }
  render() {
    return (
        <View style={styles.container}>

          <Sprite name="Coding-Chat" intent="CodeChat"/>
          <Sprite name="Cyber-Chat" intent="CyberChat"/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flexDirection:"column",
    flex: 1,


  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default MainScreen
