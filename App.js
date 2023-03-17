import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AddDetails from './screens/Adddetails'
import ViewDetails from './screens/ViewDetails';


export default class App extends React.Component {
  render(){
    return (

        <AppContainer/>

    );
  }
}



const TabNavigator = createBottomTabNavigator({
  Add: {screen: AddDetails},
  View: {screen: ViewDetails},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "AddDetails"){
        return(
          <Image
          source={require("./assets/plus-solid.svg")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "ViewDetails"){
        return(
          <Image
          source={require("./assets/plus-solid.svg")}
          style={{width:40, height:40}}
        />)

      }
    }
  })
}
);



const AppContainer =  createAppContainer(TabNavigator);

