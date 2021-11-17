import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { RootFile } from './src/RootFile';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <RootFile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
