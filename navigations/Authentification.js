import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from '@react-native-firebase/app'
import PhoneNumberSetting from '../screens/authentification/PhoneNumberSetting'
import PhoneNumberConfirmation from '../screens/authentification/PhoneNumberConfirmation'
import Main from '../screens/Main'
import Message from '../screens/Message'

var firebaseConfig = {
  apiKey: "AIzaSyA_yWAIwxCxLBlAhNAF_g1C2Jteg0uJZc8",
  authDomain: "jmapp-d858c.firebaseapp.com",
  databaseURL: "https://jmapp-d858c.firebaseio.com",
  projectId: "jmapp-d858c",
  storageBucket: "jmapp-d858c.appspot.com",
  messagingSenderId: "273386880996",
  appId: "1:273386880996:web:a16072117d7194183551f1",
  measurementId: "G-95DZ96TCYL"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}



const AuthNavigator = createSwitchNavigator({
  PhoneNumberSetting:{
      screen: PhoneNumberSetting,
      
    },
    PhoneNumberConfirmation:{
        screen:PhoneNumberConfirmation
    },
    Main:{
        screen:Main
    },
    Message:{
      screen:Message
    }
  }, {initialRouteName:'PhoneNumberSetting'})






  

  export default createAppContainer(AuthNavigator)