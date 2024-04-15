import { View, StyleSheet  } from "react-native"
import {Button, Text} from "react-native-paper"
import React  from "react"
const DetailScreen = ({navigation}) =>{
     return(
          <View style={detailStyle.container}>
               <Text>Details Screen
               </Text>
               <Button style={detailStyle.button} mode="contained" onPress={() => navigation.navigate('Person')}>
               Go to person
          </Button>
          </View>
     )
}
export default DetailScreen
const detailStyle = StyleSheet.create({
     container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
     },
     button:{
          marginTop: 5,
          backgroundColor: 'navy',
          borderRadius: 0
     }
})