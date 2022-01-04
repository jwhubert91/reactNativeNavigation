import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Views
import HomeScreen from './views/HomeScreen';
import ListScreen from './views/ListScreen';
import ProfileScreen from './views/ProfileScreen';

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Profile" component={ ProfileScreen } />
        <Stack.Screen name="List" component={ ListScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
