import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface IButton extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<IButton> = ({title, onPress, ...rest}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonContainer}
      {...rest}>
      <Text style={styles.buttonTitle}>{title}</Text>
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
    marginVertical: 4,
  },
  buttonTitle: {fontSize: 18, lineHeight: 22, color: '#ffffff'},
});
