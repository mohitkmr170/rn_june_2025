import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchStory} from '../../Store/Slices/stories';

function RenderStorries({id}: {id: any}) {
  const dispatch = useDispatch<any>();

  const {
    story: {story},
  } = useSelector((state: any) => state);

  console.log('here2', story);

  useEffect(() => {
    if (!story.data && !story?.loading) {
      dispatch(fetchStory(id));
    }
  }, [dispatch, id, story, story?.loading]);

  return (
    <View style={style.parentContainer}>
      <Text>{story?.data?.title}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  parentContainer: {height: 100, borderWidth: 0.2, borderColor: '#000000'},
});

export default React.memo(RenderStorries);
