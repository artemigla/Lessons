import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { RootFile } from './src/RootFile';

{/*Файл .Eslintrc пытался настроить, но он у меня, что-то не работает. 
  Наверное что-то упускаю, так как с правилами eslint'a, почти не работал.
*/}
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
  }
});

export default App;
