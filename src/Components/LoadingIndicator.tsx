import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const LoadingIndicator = () => {
  return (
    <View style={styles.parentContainer}>
      <ActivityIndicator color={'red'} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
