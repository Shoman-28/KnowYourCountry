import { StatusBar } from 'expo-status-bar';
import React from 'react';
import image from "./1622668996048.jpg"
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Know Your Country</Text>
      <Image
          source={image}
          style={{ width: 200, height: 200 }}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
