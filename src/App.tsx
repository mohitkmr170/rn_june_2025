import React, {Suspense} from 'react';
import {Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './Navigation';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  /**
  TODO : 👇
  1. Add safeAreaView
  2. StatusBar color based on selected theme
  **/
  return (
    <View style={backgroundStyle}>
      <Suspense
        fallback={
          <View>
            <Text>Loading...</Text>
          </View>
        }>
        <Navigation />
      </Suspense>
    </View>
  );
}

export default App;
