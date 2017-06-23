import {StyleSheet} from "react-native"
const styles = StyleSheet.create({
        container: {

          flexDirection:"column",
          flex: 1,
          backgroundColor: 'blue',

        },
        childContainer:{
          flexDirection:"column",
          flex: 6,
          backgroundColor: 'pink',

        },
        textInputContainer:{
          flexDirection:"row",
          flex: 1,
          backgroundColor: 'pink',

        },
        textInput:{
          flex: 1
        },
        item:{
          padding:5,
          margin:5,
          borderRadius:3,
          backgroundColor:"cyan",
          maxWidth:250
        },

        chatContainer:{
          flexDirection:"column",
          backgroundColor: 'red',
        },

        name:{
          fontWeight: "bold"
        }


      });

export default styles
