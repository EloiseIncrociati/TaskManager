import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import TaskScreen from './src/screens/TaskScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'; 
import store from './src/redux/store';

//creating stack navigator with react navigation
const Stack = createNativeStackNavigator();

export default function App() {
  //Here we defined our default screen as Home
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Task" component={TaskScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

    </>
  );
}