import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

export const Loader = () => {
  return (
    <View style={styles.parentContainer}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
