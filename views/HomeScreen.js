import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function HomeScreen({ navigation }) {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={ styles.headerText } >
        Home Screen
      </Text>
      <View style={ styles.buttonsContainer }>
        <Button
          title="Go to Profile Screen"
          onPress={()=> navigate( 'Profile' )}
        />
        <Button
          title="Go to List Screen"
          onPress={()=> navigate( 'List' )}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: '25%',
  },
});

export default HomeScreen;