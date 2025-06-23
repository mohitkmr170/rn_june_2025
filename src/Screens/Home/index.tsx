import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
