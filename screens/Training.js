import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const TrainingScreen = () => {
  // Sample training content (you can fetch this data dynamically)
  const trainingContent = [
    {
      title: 'Introduction to Leadership',
      description: 'Learn the fundamentals of effective leadership.',
    },
    {
      title: 'Web Development Workshop',
      description: 'A comprehensive workshop on web development techniques.',
    },
    // Add more training items as needed
  ];

  return (
    <ScrollView className={`p-4 bg-purple-400`}>
      <Text className={`text-2xl font-bold mb-4`}>Training</Text>

      {trainingContent.map((item, index) => (
        <View key={index} className={`bg-white p-4 rounded shadow-md mb-2`}>
          <Text className={`text-lg font-bold mb-2`}>{item.title}</Text>
          <Text className={`text-gray-600`}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TrainingScreen;