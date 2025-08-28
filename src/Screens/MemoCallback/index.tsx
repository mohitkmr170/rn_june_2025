import {View, Text} from 'react-native';
import {styles} from './styles';
import {Button, Header} from '../../Components';
import {useCallback, useMemo, useState} from 'react';
import Child from './Child';

const MemoCallbackScreen = () => {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);
  const [arr, setArr] = useState([
    1, 2, 3, 4, 2, 32, 42, 42, 32, 3, 5, 21, 6, 1, 21,
  ]);

  const incrementLocal = () => {
    setLocalNumber(state => state + 1);
  };

  const memoizedChangeChildNumber = useCallback(
    (number: number) => changeChildNumber(number),
    [],
  );

  const changeChildNumber = (number: number) => {
    setChildNumber(number);
  };

  const getLargestNumber = () => {
    console.log('MemoCallback : I am working...');
    return Math.max(...arr);
  };

  const memoizedLargestNumberValue = useMemo(() => getLargestNumber(), [arr]);

  const changeArray = () => {
    setArr([10, 20, 30, 40]);
  };

  console.log('MemoCallback : parent is rendering...');
  return (
    <View style={styles.parentContainer}>
      <Header />
      <Text style={styles.counterText}>Memo Callback</Text>
      <View style={styles.mainContainer}>
        <Text style={styles.counterText}>local : {localNumber}</Text>
        <Child changeNumber={memoizedChangeChildNumber} number={childNumber} />
        <Text style={styles.counterText}>
          largest number : {memoizedLargestNumberValue}
        </Text>
        <Button title="Change Array" onPress={() => changeArray()} />
      </View>
      <Button title="+1" onPress={() => incrementLocal()} />
    </View>
  );
};

export default MemoCallbackScreen;
