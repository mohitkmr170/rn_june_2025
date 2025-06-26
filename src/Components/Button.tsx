import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface IButton {
  title: string;
  onPress: () => void;
}

export const Button = (props: IButton) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonTitle}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#5b4bac',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  buttonTitle: {fontSize: 18, lineHeight: 22, color: '#ffffff'},
});
