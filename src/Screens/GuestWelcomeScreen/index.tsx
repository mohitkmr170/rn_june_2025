import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestWelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Guest Welcome Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuestWelcomeScreen;
