import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,Image,FlatList,ListItem,TextInput,Button
} from 'react-native';
import styles from "./css/CodeChatStyle.js"
var dp = require("deepstream.io-client-js")
var client = dp("10.0.2.2:3000").login()




class CodeChat extends Component{
  constructor(props){
    super(props)
    const params = this.props.navigation.state;
    this.user = params.data;
    this.getMessageListLength =
    this.getMessageListLength.bind(this)


    this.state ={
      messages:[
        {name:"alfa",
        message:"why?",
        key:"a"},
        {name:"beta",
        message:"ah, idk",
        key:"b"}
      ],
      text:"",
      user:params.data
    }


    this.chatRecord={}
    client.record.has("chat-groupId",(err,hasRecord)=>{
      if (err) {
        console.log(err);
      }
      this.setRecord(hasRecord)
    })


  }

setRecord=(hasRecord)=>{
  //TODO: groupId has to be the one sent with (prop navigation state)
  this.chatRecord = client.record.getRecord("chat-"+"groupId")
  this.chatRecord.whenReady(()=>{
    //if it does not exist already
    //!hasRecord for not creating it again every time
    //someone enter the chatroom

    if (hasRecord) {
      this.chatRecord.set("messages",[{name:"elias",key:"sersly",
      message:"omg"},{name:"elias",key:"sesrsly",message:"OKK!"}])
    }
    this.chatRecord.subscribe("messages",(updatedMessages)=>{

        console.log(updatedMessages);

        this.setState({messages:updatedMessages})

    })

  })

}



getMessageListLength(){
  return this.state.messages.length
}

 toRender(item) {
   let mes = item.message;
   let nam = item.name;
   return (
     <View style={styles.item} >
     <Text style={styles.name}>{nam+":"}</Text>
     <Text>{mes}</Text>
     </View>
   )


  }
  send=()=>{

    let inputMessage = this.state.text
    let name =  "this.state.user.name"
    let key = Math.random()
    var a = { name:name,
              message:""+inputMessage,
              key:key
            }

      this.chatRecord = client.record.getRecord("chat-"+"groupId")
    var updatedMessages =
     this.chatRecord.get("messages")
     console.log(updatedMessages);
     updatedMessages.push(a)
     this.chatRecord.set("messages",updatedMessages)

  }

render(){
  const {params} = this.props.navigation.state
  return(

      <View style={styles.container}>
      <View style={styles.childContainer}>
        <FlatList
         style = {styles.chatContainer}
          data = {this.state.messages}
          renderItem={({item})=>{

          return this.toRender(item)

         }}/>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput}
                    onChangeText={(text) =>{
                      this.setState({text:text})
                  }}/>
          <Button style={styles.textInput} title={"send"}
           onPress={()=>this.send()} />
        </View>
       </View>


  )



}


}




export default CodeChat
