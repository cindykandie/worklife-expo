import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import WellnessScreen from './screens/Wellness';
import TrainingScreen from './screens/Training';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="WellnessScreen" component={WellnessScreen} options={{ title: 'Wellness' }} />
        <Stack.Screen name="TrainingScreen" component={TrainingScreen} options={{ title: 'Training' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;