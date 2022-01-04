import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Components
import ListItem from '../components/ListItem';

// Data Sources
import groceryData from '../groceryData';

const keyedGroceryData = groceryData.map((item, idx) => {
  return {
    ...item,
    key: idx + 1,
  }
});

function ListScreen() {
  return (
    <View>
      <Text style={ styles.headerText } >
        List Screen
      </Text>
      <FlatList
        data={ keyedGroceryData }
        renderItem={({item}) => {
          const { name, quantity } = item;
          return <ListItem name={ name } detail={ quantity } />
        }}
      />
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

export default ListScreen;