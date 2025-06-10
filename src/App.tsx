import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /**
  TODO : 👇
  1. Add safeAreaView
  2. StatusBar color based on selected theme
  **/
  return (
    <View style={backgroundStyle}>
      <Text style={styles.headerText}>React Native June 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {fontSize: 24},
});

export default App;
