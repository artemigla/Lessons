import React from 'react';
import { StatusBar, StyleSheet, View, LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import { Navigation } from './src/navigations/Navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1E90FF'} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;