import { View, StyleSheet } from "react-native"
import {Button, Text} from "react-native-paper"
import React  from "react"
const HomeScreen =({navigation}) =>{
     return(
         <View style={homeStyle.container}>
          <Text style={{fontWeight:'bold', fontSize: 24}}> HOME</Text>
          <Button style={homeStyle.button} mode="contained" onPress={() => navigation.navigate('Details')}>
               Go to details
          </Button>
         </View>
     )
}
export default HomeScreen
const homeStyle = StyleSheet.create({
     container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
     },
     button:{
          marginTop: 5,
          backgroundColor: 'royalblue',
          borderRadius: 0
     }
})