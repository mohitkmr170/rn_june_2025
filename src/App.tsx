import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Navigator from './Navigation';
import {AuthProvider} from './Providers/AuthProvider';
import config from 'react-native-config';
import {Provider} from 'react-redux';
import store from './Store/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const isFrom = config.APP_ENV ?? '';

  console.log('isFrom => ', isFrom);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <Provider store={store}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.parentContainer}>
            <AuthProvider>
              <Navigator />
            </AuthProvider>
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {flex: 1},
});

export default App;
