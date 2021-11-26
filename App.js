import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import { Navigation } from './src/components/Navigation';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
