import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('You clicked me!!!');
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Welcome to Done With -- It A place to get rid of the things you love to
        leave.
      </Text>
      <TouchableHighlight onPress={handlePress}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: 'https://picsum.photos/200',
          }}
        />
      </TouchableHighlight>
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
