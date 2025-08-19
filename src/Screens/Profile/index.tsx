import {Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../Providers/AuthProvider';
import {useContext} from 'react';
import {styles} from './styles';
import {getAuth, signOut} from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const {user} = useContext(AuthContext);
  const handleLogOut = async () => {
    await signOut(getAuth());
  };
  return (
    <View style={styles.parentContainer}>
      <View style={styles.mainContainer}>
        <Text>Hi, {user?.displayName}</Text>
        <TouchableOpacity onPress={() => handleLogOut()}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
