import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PersonScreen from "../screens/PersonScreen";
import { Avatar, Icon } from "react-native-paper";

const Stack = createStackNavigator();

const Logo = () =>{
     return(
          <Avatar.Image source={{uri:'https://depor.com/resizer/MzR6DTvzsDN190qjzRdrksHkLM0=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/K7XVCC5G2RB3XGMJSSIWVNHTZI.jpg'}}
          size={40}/>
     )
}
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: 'pink' },
      
       
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" ,  headerLeft: () => <Logo /> }} />
      <Stack.Screen
        name="Person"
        component={PersonScreen}
        options={({ route }) => ({
          title: route.params.name 
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
