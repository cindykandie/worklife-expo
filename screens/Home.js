import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  // Simulated data for featured content
  const featuredContent = [
    {
      title: 'Wellness Tips',
      description: 'Explore tips for a healthier work-life balance.',
    },
    {
      title: 'Upcoming Training',
      description: 'Check out our upcoming professional development courses.',
    },
  ];

  // Simulated employee spotlight
  const employeeSpotlight = {
    name: 'John Doe',
    achievement: 'Employee of the Month',
  };

  return (
    <ScrollView className={`p-4 bg-purple-400`}>
      
      <Text className={`text-2xl font-bold mb-4`}>Welcome to WorkLife Harmony!!</Text>
     
      <View className={`text-lg mb-2`}><Text>Featured Content:</Text></View>
      {featuredContent.map((item, index) => (
        <TouchableOpacity
          key={index}
          className={`bg-white p-4 rounded shadow-md mb-2`}
        >
          <Text className={`text-lg font-bold mb-2`}>{item.title}</Text>
          <Text className={`text-gray-600`}>{item.description}</Text>
        </TouchableOpacity>
      ))}

      {/* Employee Spotlight */}
      <Text className={`text-lg mb-2`}>Employee Spotlight:</Text>
      <View className={`bg-white p-4 rounded shadow-md mb-4`}>
        <Text className={`text-lg font-bold`}>{employeeSpotlight.name}</Text>
        <Text className={`text-gray-600`}>{employeeSpotlight.achievement}</Text>
      </View>

      {/* Quick Links */}
      <Text className={`text-lg mb-2`}>Quick Links:</Text>
      <View className={`flex-row`}>
        <TouchableOpacity
          className={`bg-blue-500 py-2 px-4 rounded mr-2`}
          onPress={() => navigation.navigate('WellnessScreen')}
        >
          <Text className={`text-white font-bold`}>Wellness</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`bg-blue-500 py-2 px-4 rounded`}
          onPress={() => navigation.navigate('TrainingScreen')}
        >
          <Text className={`text-white font-bold`}>Training</Text>
        </TouchableOpacity>
      </View>

      {/* Motivational Quotes (you can fetch these dynamically) */}
      <Text className={`text-lg mt-4`}>Motivational Quote of the Day:</Text>
      <Text className={`text-gray-600 italic mb-4`}>
        "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill
      </Text>

      {/* Notifications (you can display recent notifications here) */}
      <Text className={`text-lg mb-2`}>Notifications:</Text>
      <View className={`bg-white p-4 rounded shadow-md`}>
        {/* Display notifications here */}
        <Text className={`text-gray-600`}>No new notifications.</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;