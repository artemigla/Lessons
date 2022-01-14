import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Navigation } from './src/navigations/Navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import { ThemeProvider } from './src/contexts/ThemeContext';
import './src/constants/translations/IMLocalize';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1E90FF'} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <Navigation />
          </ThemeProvider>
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