import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text,  TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/Home';
import WellnessScreen from '../screens/Wellness';
import TrainingScreen from '../screens/Training';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation, insets }) => {
  const icons = {
    Home: 'home',
    Wellness: 'leaf',
    Training: 'book',
  };

  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingVertical: 10 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon = icons[route.name];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 8,
              borderBottomWidth: isFocused ? 2 : 0,
              borderBottomColor: isFocused ? 'blue' : 'transparent',
              backgroundColor: 'transparent',
            }}
          >
            <Ionicons name={icon} size={24} color={isFocused ? 'blue' : 'gray'} />
            <Text style={{ color: isFocused ? 'blue' : 'gray' }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60 }, // Set the height of the tab bar
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wellness" component={WellnessScreen} />
      <Tab.Screen name="Training" component={TrainingScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
