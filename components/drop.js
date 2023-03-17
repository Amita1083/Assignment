import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list';

export default function Drop() {
    const [selected, setSelected]=React.useState("")
    const data=[
        {key:1,value:'React Native'},
        {key:2,value:'React JS'},
        {key:3,value:'JavaScript'},
        {key:4,value:'HTML'},
        {key:5,value:'CSS'},
        {key:6,value:'Node js'},
        {key:7,value:'BootStrap'},
        {key:8,value:'Android Studio'},
        {key:9,value:'java'},
        {key:10,value:'Django'},
    ]
  return (
    <View>
      <Text>Drop</Text>
      <SelectList 
      data={data} 
      setSelected={setSelected}
      dropdownStyles={{backgroundColor:"white"}}
      />
    </View>
  )
}

const styles = StyleSheet.create({})