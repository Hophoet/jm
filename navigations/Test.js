import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Screen1 from '../components/Screen1'
import Screen2 from '../components/Screen2'


const Nav = createSwitchNavigator({
    Screen1:{
      screen: Screen1,
      
     
    },
    Screen2:{
        screen:Screen2
    }
  }, {initialRouteName:'Screen1'})

const Drawer = createDrawerNavigator({
    Screen1,
    Screen2
})

const Bottom = createMaterialBottomTabNavigator({
    Screen1:{
        screen: Screen1,
        
      },
      Screen2:{
          screen:Screen2
      }
})




// const MainNav = createSwitchNavigator({
//   Main:{
//     screen:Main
//   }
// },{
//   initialRouteName:'Main'
// })

// const AppNav = createSwitchNavigator({
//   Main:{
//     screen:Main
//   },
//   Auth:{
//     screen:AuthNav
//   },
//   Splash:{
//     screen:Splash
//   }
// }, {initialRouteName:'Splash'})
  

  export default createAppContainer(Bottom)