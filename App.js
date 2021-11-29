import React from 'react';
import { StatusBar, StyleSheet, View, LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import { Navigation } from './src/navigations/Navigation';
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
