import { View, StyleSheet  } from "react-native"
import {Text} from "react-native-paper"
import React  from "react"
const PersonScreen = () =>{
     return(
          <View style={personStyle.container}>
               <Text style={{fontWeight:'bold', fontSize:24}}>NguyenTrungTinh-2024802010018</Text>
          </View>
     )
}
export default PersonScreen
const personStyle = StyleSheet.create({
     container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
     }
})