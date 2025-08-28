import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {fontSize: 18, lineHeight: 22},
  childComponentParentContainer: {
    height: 200,
    width: 200,
    borderColor: '#000000',
    borderWidth: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    fontSize: 18,
    lineHeight: 22,
    borderColor: '#000000',
    borderWidth: 0.3,
    width: '80%',
  },
});
