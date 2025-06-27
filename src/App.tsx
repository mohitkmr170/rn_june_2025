import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Navigator from './Navigation';
import {AuthProvider} from './Providers/AuthProvider';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.parentContainer}>
          <AuthProvider>
            <Navigator />
          </AuthProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {flex: 1},
});

export default App;
