import {
  DrawerActions,
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IHeader {}

export const Header: React.FC<IHeader> = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const handleLeftCTAClick = () => {
    if (route?.name !== 'Tab') {
      navigation?.goBack();
    } else {
      navigation?.dispatch(DrawerActions?.openDrawer());
    }
  };

  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity onPress={() => handleLeftCTAClick()}>
        <Text>{route?.name !== 'Tab' ? 'Back' : 'Drawer'}</Text>
      </TouchableOpacity>
      <Text>{getFocusedRouteNameFromRoute(route) ?? route?.name}</Text>
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
    alignItems: 'center',
  },
});
