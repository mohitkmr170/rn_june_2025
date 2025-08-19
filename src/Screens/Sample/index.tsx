import {Text, View} from 'react-native';
import {Header} from '../../Components';
import {styles} from './styles';

const SampleScreen = () => {
  return (
    <View style={styles.parentContainer}>
      <Header />
      <View style={styles.mainContainer}>
        <Text>SampleScreen</Text>
      </View>
    </View>
  );
};

export default SampleScreen;
