import {  View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,TextInput,Button } from 'react-native'

import React, { Component } from 'react'
import Drop from '../components/dropDown'
import Location from '../components/location'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="User" component={AddDetails} />
        <Stack.Screen name="Location" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>

export default class AddDetails extends Component {
  
  render() {
    return (
      <View style={styles.container}>
      
      <View style={{flex: 2}}>
      <Text>Name</Text> 
      <TextInput style={styles.textinput}></TextInput>
        </View>

    <View style={{flex: 2}}>
      <Text>Age</Text> 
      <TextInput style={styles.textinput}></TextInput>
        </View>

     <View style={{flex: 5}}>
      <Text>Technologies Known</Text> 
         <Drop/>
        </View>
    


    <View style={{flex: 2}}>
 <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Location") }/>
  <Text style={styles.routeText}>ISS Location</Text>
    </View>

       <View style={{flex: 2}}> 
      <Text> Camera Selfie </Text> 
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
  flex: 1,
  marginTop: 10,
  flexDirection:'column',
   backgroundColor: 'lightblue'
  
  },
  textinput:{
    flexDirection:'row',
     borderWidth:2,
      height:30,
      width:170,
      paddingRight:10,
      marginRight:50,
      alignItems:'stretch',
      justifyContent:'center'
  },
   routeCard: {
        flex: 0.25,
        marginLeft: 10,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
})