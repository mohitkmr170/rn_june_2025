import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Button} from '../../Components';

const Child = (props: any) => {
  const {number, changeNumber} = props;

  console.log('MemoCallback : child is rendering...');

  return (
    <View style={styles.childComponentParentContainer}>
      <Text style={styles.counterText}>child : {number}</Text>
      <Button
        title="Change child number"
        onPress={() => {
          changeNumber(Math.random());
        }}
      />
    </View>
  );
};

export default React.memo(Child);
