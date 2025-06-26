import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    margin: 16,
    justifyContent: 'center',
  },
  formContainer: {flex: 1, justifyContent: 'center'},
  inputContainer: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
    lineHeight: 22,
  },
  error: {color: 'red', marginBottom: 10},
});
