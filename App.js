import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, SafeAreaView, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => console.log('You clicked me!!!');
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Welcome to Done With -- It A place to get rid of the things you love to
        leave.
      </Text>
      <Image
        source={{
          width: 200,
          height: 200,
          uri: 'https://picsum.photos/200',
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
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
