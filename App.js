import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';

import CustomNavigationBar from './src/CustomNavigationBar';
import React from 'react';
import PersonScreen from './src/PersonScreen';

const Stack =   createStackNavigator()
export default function App() {
  return (
    <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
           initialRouteName="Home"
           screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Details' component={DetailScreen}/>
            <Stack.Screen name='Person' component={PersonScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
