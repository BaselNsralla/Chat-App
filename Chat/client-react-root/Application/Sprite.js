import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Image,Button
} from 'react-native';
import Dimensions from "Dimensions";


class Sprite extends Component {
  constructor() {
      super();
  }



  pressed(){
    this.props.intent.navigate("CodeChat",
    {data:{key:"a or maybe the token here lel",name:"WickedSick boy",message:"Hello! this is useless"}})
  }

  render(){
    return(
      <View style={styles.spriteWrapper} >
        <Button onPress={()=>this.pressed()} title={"ABC RUN"}/>
        <Text>{this.props.name}</Text>
        <Text>{"aass"}</Text>
      </View>

    )


  };


}

// const MyComponentWithNavigation = withNavigation(Sprite);
      var source = {
        uri:"https://get.google.com/apptips/images/google-play.png"
      };
      var styles = StyleSheet.create({
           spriteWrapper:{
             backgroundColor: 'cyan',
             flex:1,
             alignItems:"center",
            justifyContent:"center",
             flexDirection:"column",
             marginTop:10,
             marginBottom:10,


           },
           spritePorperty:{
             flex:1

           },
           spritePorperty2:{
             flex:2

           },
           spriteImage:{

             width:100,
             height:168,

           }

       });



export default Sprite
