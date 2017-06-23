# Chat-App
React-Native chat app with Deepstream.io

## Start project:
1. npm install -g react-native-cli 
2. react-native init _Chat_ 
3. if you want to use another name than _Chat_ make sure to change the name in the index file at the last line:
   ```javascript
   AppRegistry.registerComponent('Chat', () => AppStack)
   ```
## Dependencies client:
* npm install react-navigation 
* npm install deepstream.io-client-js url

## Dependencies Node server server:
* npm install deepstream.io

## Run:
* Client: react-native run-android
* Server: node dpStream.js
