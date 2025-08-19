import {StyleSheet, Text, View} from 'react-native';

interface IHeader {
  route?: any;
}

export const Header: React.FC<IHeader> = ({route}) => {
  return (
    <View style={styles.parentContainer}>
      <Text>Left</Text>
      <Text>{route?.name}</Text>
      <Text>Right</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5b4bac',
  },
});
