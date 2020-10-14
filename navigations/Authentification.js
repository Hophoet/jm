import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
// import {createDrawerNavigator} from 'react-navigation-drawer'
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import SignIn from '../screens/authentification/SignIn'
import SignUp from '../screens/authentification/SignUp'
import Main from '../screens/Main'

const AuthNavigator = createSwitchNavigator({
    SignIn:{
      screen: SignIn,
      
    },
    SignUp:{
        screen:SignUp
    },
    Main:{
        screen:Main
    }
  }, {initialRouteName:'SignUp'})






  

  export default createAppContainer(AuthNavigator)