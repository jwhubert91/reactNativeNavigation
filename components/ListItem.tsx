import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ListItemProps{
  name: string;
  detail?: string;
}

function ListItem({ name, detail }: ListItemProps) {
  return <View>
    <Text>{ name }{ detail && ` - ${detail}` }</Text>
  </View>
}

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
    fontSize: 16,
  },
})

export default ListItem;