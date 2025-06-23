import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity onPress={() => (navigation as any).navigate('Home')}>
        <Text>Login Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
