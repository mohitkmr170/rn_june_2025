import {Text, View} from 'react-native';
import {Header} from '../../Components';
import {styles} from './styles';

const SettingsScreen = () => {
  return (
    <View style={styles.parentContainer}>
      <Header />
      <View style={styles.mainContainer}>
        <Text>SettingsScreen</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
