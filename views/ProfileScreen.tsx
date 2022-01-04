import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileScreen() {
  return (
    <View>
      <Text style={ styles.headerText } >
        Profile Screen
      </Text>
      <Text>My name is James</Text>
      <Text>Here are some details about me...</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;