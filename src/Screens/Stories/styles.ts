import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  mainTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFE7C7',
    padding: 8,
  },
  refreshText: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    borderRadius: 12,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 32,
    lineHeight: 36,
  },
});
