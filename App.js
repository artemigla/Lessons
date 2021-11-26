import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
