import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {getAuth, signOut} from '@react-native-firebase/auth';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogOut = async () => {
    await signOut(getAuth());
  };

  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLogOut()}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
