import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {styles} from './styles';
import {Header} from '../../Components';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../../Store/Slices/posts';

const ITEM_HEIGHT = 100;

export default function List() {
  const [limit, setLimit] = useState('10');
  const [skip, setSkip] = useState('0');
  const dispatch = useDispatch<any>();
  const {posts, loading} = useSelector((state: any) => state);

  useEffect(() => {
    // dispatch(getPosts({})); //fetch all
    // dispatch(getPosts({id: 1})); //fetch posts for id = 1
    dispatch(getPosts({limit: limit, skip: skip})); //fetch posts with limit 2 and skip 0 page
  }, [dispatch, limit, skip]);

  const renderPostItem = ({item}: any) => {
    return (
      <View style={styles.postListItemContainer}>
        <View>
          <Text style={styles.postListItemTitleText}>{item?.title}</Text>
          <Text style={styles.postListItemBodyText} numberOfLines={4}>
            {item?.body}
          </Text>
        </View>
        <View style={styles.tagContainer}>
          <Text>
            🌐{' '}
            {item?.tags.map((tagTtem: string) => (
              <Text>{tagTtem} </Text>
            ))}
          </Text>
        </View>
        <View style={styles.reactionsContainer}>
          <Text>👀 {item?.views}</Text>
          <View style={styles.reactionsInnerContainer}>
            <Text>👍 {item?.reactions?.likes}</Text>
            <Text style={styles.dislikeText}>
              👎 {item?.reactions?.dislikes}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.parentContainer}>
      <Header />
      <View style={styles.mainContainer}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.postContainer}>
            <Text style={styles.postHeaderText}>Posts</Text>
            <FlatList
              data={posts}
              renderItem={item => renderPostItem(item)}
              showsVerticalScrollIndicator={false}
              //provide a unique keyExtractor a function that returns a unique key for each item in the list. This helps React Native efficiently update and render items.
              keyExtractor={item => item?.id.toString()}
              //If dimensions are fixed and won't change dynamically, you can use the getItemLayout prop to optimize rendering by skipping the measurement of items.
              getItemLayout={(data, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
              })}
              //how many items are initially rendered
              initialNumToRender={10}
              // how many are rendered in each batch
              windowSize={11}
              //Setting removeClippedSubviews to true can help with performance by removing items that are outside the viewport.
              removeClippedSubviews
              // The extraData prop is used to force re-render the FlatList. Avoid using it excessively, as it can trigger unnecessary re-renders. Instead, rely on React's state and props to trigger updates.
              //Avoid Heavy Operations in Render Functions => perform expensive calculations outside the rendering function and pass the result as props.
              onEndReached={() => {
                setLimit((prevState: any) => {
                  setSkip(limit);
                  return (prevState + 10).toString();
                });
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
}
